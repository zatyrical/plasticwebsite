const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const valid = { name: 'Synthetic test', email: 'example@invalid.test', message: 'Mock only', enquiryType: 'Website enquiry' };

function handler({ fetch, env = { RESEND_API_KEY: 'mock-only', CONTACT_TO_EMAIL: 'clinic@invalid.test' }, signalFactory = (delay) => AbortSignal.timeout(delay) } = {}) {
  const calls = [];
  const logs = [];
  const deadlines = [];
  const output = ts.transpileModule(fs.readFileSync('app/api/contact/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  const exports = {};
  vm.runInNewContext(output, {
    exports, URL, Date,
    process: { env },
    console: { error: (...args) => logs.push(args) },
    AbortSignal: { timeout: (delay) => { deadlines.push(delay); return signalFactory(delay); } },
    fetch: async (...args) => { calls.push(args); return fetch(...args); },
    require: (name) => {
      assert.equal(name, 'next/server');
      return { NextResponse: {
        json: (body, init) => ({ body, status: init.status || 200, headers: init.headers }),
        redirect: (location, init) => ({ location, status: init.status })
      } };
    }
  });
  async function post(payload = valid, { native = false, malformed = false } = {}) {
    return exports.POST({
      headers: new Headers({ 'content-type': native ? 'application/x-www-form-urlencoded' : 'application/json', origin: 'https://www.drjeremysun.com' }),
      json: async () => { if (malformed) throw new Error('mock malformed JSON'); return payload; },
      formData: async () => new Map(Object.entries(payload))
    });
  }
  return { post, calls, logs, deadlines };
}

test('actual API accepts a successful provider response once with a 15-second abort signal', async () => {
  const api = handler({ fetch: async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails');
    assert.ok(options.signal instanceof AbortSignal);
    assert.equal(options.signal.aborted, false);
    assert.equal(JSON.parse(options.body).reply_to, valid.email);
    return { ok: true };
  } });
  const response = await api.post();
  assert.equal(response.status, 200);
  assert.equal(response.body.accepted, true);
  assert.deepEqual(api.deadlines, [15000]);
  assert.equal(api.calls.length, 1);
});

test('provider deadline abort returns an uncertain receipt, never accepted, with no retry', async () => {
  const controller = new AbortController();
  const api = handler({ signalFactory: () => controller.signal, fetch: async (url, { signal }) => {
    assert.equal(signal, controller.signal);
    return new Promise((resolve, reject) => {
      signal.addEventListener('abort', () => reject(signal.reason), { once: true });
      queueMicrotask(() => controller.abort(new Error('mock timeout')));
    });
  } });
  const response = await api.post();
  assert.equal(response.status, 502);
  assert.match(response.body.error, /could not confirm.*contact the clinic before submitting again/i);
  assert.equal(response.body.accepted, undefined);
  assert.deepEqual(api.deadlines, [15000]);
  assert.equal(api.calls.length, 1);
});

test('network exception cannot assert non-delivery or encourage blind resubmission', async () => {
  const api = handler({ fetch: async () => { throw new Error('mock private provider detail'); } });
  const response = await api.post();
  assert.equal(response.status, 502);
  assert.match(response.body.error, /could not confirm/);
  assert.doesNotMatch(response.body.error, /Please try again/);
  assert.equal(response.body.accepted, undefined);
  assert.equal(api.calls.length, 1);
  assert.doesNotMatch(JSON.stringify(api.logs), /private provider detail/);
});

test('HTTP rejection returns promptly without consuming or logging provider error content', async () => {
  let bodyReads = 0;
  const api = handler({ fetch: async () => ({ ok: false, status: 503, text: async () => { bodyReads++; throw new Error('mock private provider body'); } }) });
  const response = await api.post();
  assert.equal(response.status, 502);
  assert.match(response.body.error, /could not confirm/);
  assert.equal(response.body.accepted, undefined);
  assert.equal(bodyReads, 0);
  assert.deepEqual(api.logs, [['Resend email failed', 503]]);
  assert.equal(api.calls.length, 1);
});

test('invalid, malformed, unconfigured and honeypot requests never contact provider', async () => {
  const api = handler({ fetch: async () => { throw new Error('must not call'); } });
  assert.equal((await api.post({ ...valid, email: 'invalid' })).status, 400);
  assert.equal((await api.post({ ...valid, message: '' })).status, 400);
  assert.equal((await api.post(valid, { malformed: true })).status, 400);
  assert.equal((await api.post({ ...valid, website: 'bot' })).body.accepted, false);
  const missing = handler({ env: {}, fetch: async () => { throw new Error('must not call'); } });
  assert.equal((await missing.post()).status, 503);
  assert.equal(api.calls.length + missing.calls.length, 0);
  assert.deepEqual(api.deadlines, []);
});

test('native-form success and error retain allowlisted 303 redirects', async () => {
  const payload = { ...valid, redirectSuccess: 'https://lymphedasia.com/contact-us/?sent=1', redirectError: 'https://lymphedasia.com/contact-us/?sent=0' };
  const success = handler({ fetch: async () => ({ ok: true }) });
  const failure = handler({ fetch: async () => { throw new Error('mock network error'); } });
  assert.equal((await success.post(payload, { native: true })).location, payload.redirectSuccess);
  const response = await failure.post(payload, { native: true });
  assert.equal(response.location, payload.redirectError);
  assert.equal(response.status, 303);
  const unsafe = await failure.post({ ...payload, redirectError: 'https://invalid.test/' }, { native: true });
  assert.equal(unsafe.status, 502);
  assert.match(unsafe.body.error, /could not confirm/);
});

test('Dr Sun native POST redirects contain only a fixed outcome, never enquiry fields', async () => {
  const payload = { ...valid, redirectSuccess: 'https://www.drjeremysun.com/enquiry-response/received', redirectError: 'https://www.drjeremysun.com/enquiry-response/unconfirmed' };
  for (const accepted of [true, false]) {
    const api = handler({ fetch: async () => ({ ok: accepted, status: accepted ? 200 : 503 }) });
    const response = await api.post(payload, { native: true });
    assert.equal(response.status, 303);
    assert.equal(response.location, accepted ? payload.redirectSuccess : payload.redirectError);
    assert.equal(new URL(response.location).search, '');
    assert.equal(api.calls.length, 1);
    assert.doesNotMatch(response.location, /Synthetic|invalid\.test|Mock/);
    const json = await api.post(payload);
    assert.equal(json.status, accepted ? 200 : 502);
    assert.equal(json.location, undefined);
    assert.equal(json.body.accepted, accepted ? true : undefined);
  }
});
