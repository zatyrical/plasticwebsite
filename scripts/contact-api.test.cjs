const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

const valid = { name: 'Synthetic test', email: 'example@invalid.test', message: 'Mock only', enquiryType: 'Website enquiry' };

function handler({ fetch, env = { RESEND_API_KEY: 'mock-only', CONTACT_TO_EMAIL: 'clinic@invalid.test' }, signalFactory = (delay) => AbortSignal.timeout(delay), now = () => Date.now() } = {}) {
  const calls = [];
  const logs = [];
  const deadlines = [];
  const output = ts.transpileModule(fs.readFileSync('app/api/contact/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 }
  }).outputText;
  const exports = {};
  vm.runInNewContext(output, {
    exports, URL, Date: class extends Date { static now() { return now(); } }, Response, TextDecoder,
    process: { env },
    console: { error: (...args) => logs.push(args) },
    AbortSignal: { timeout: (delay) => { deadlines.push(delay); return signalFactory(delay); } },
    fetch: async (...args) => { calls.push(args); return fetch(...args); },
    require: (name) => {
      if (name === 'node:crypto') return require(name);
      assert.equal(name, 'next/server');
      return { NextResponse: {
        json: (body, init) => ({ body, status: init.status || 200, headers: init.headers }),
        redirect: (location, init) => ({ location, status: init.status })
      } };
    }
  });
  async function post(payload = valid, { native = false, malformed = false, headers = {}, multipart = false, rawBody } = {}) {
    let body = rawBody ?? (malformed ? '{' : native ? new URLSearchParams(payload) : JSON.stringify(payload));
    const requestHeaders = new Headers({ origin: 'https://www.drjeremysun.com', ...headers });
    if (multipart) {
      body = new FormData();
      for (const [key, value] of Object.entries(payload)) body.set(key, value);
    } else {
      requestHeaders.set('content-type', native ? 'application/x-www-form-urlencoded' : 'application/json');
    }
    return exports.POST(new Request('https://www.drjeremysun.com/api/contact', { method: 'POST', headers: requestHeaders, body }));
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
  const unsafe = await failure.post({ ...payload, message: 'Separate mock network failure', redirectError: 'https://invalid.test/' }, { native: true });
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
    const json = await api.post({ ...payload, message: 'Another mock enquiry' });
    assert.equal(json.status, accepted ? 200 : 502);
    assert.equal(json.location, undefined);
    assert.equal(json.body.accepted, accepted ? true : undefined);
  }
});

test('all four reported link patterns stop before the email provider for JSON and native forms', async () => {
  const api = handler({ fetch: async () => { throw new Error('must not send'); } });
  const messages = [
    'Here is information https://volgograd.ru/column/example-news/',
    'Here is information https://volgograd.ru/column/example-fashion/',
    'Here is information https://nanmed.ru/read/example-casino/',
    'Here is information https://nashipesni.ru/pub/example-promokody/'
  ];
  for (const message of messages) {
    for (const native of [false, true]) {
      const response = await api.post({ ...valid, message }, { native });
      assert.equal(response.status, 422);
      assert.equal(response.body.accepted, undefined);
    }
  }
  assert.equal(api.calls.length, 0);
  assert.equal(api.logs.length, 0);
});

test('spam hosts include subdomains, uppercase and Unicode-normalised URLs without visiting any link', async () => {
  const api = handler({ fetch: async () => { throw new Error('must not send'); } });
  for (const message of ['HTTPS://SUB.NANMED.RU./read/article', 'www.volgograd.ru/article', 'ｈｔｔｐｓ：／／nanmed.ru/read/article', 'https://other.invalid.test/promokody-aviator/', 'https://other.invalid.test/%63asino/welcome']) {
    assert.equal((await api.post({ ...valid, message })).status, 422);
  }
  assert.equal(api.calls.length, 0);
});

test('patient languages, overseas contacts and ordinary medical/referral links remain accepted', async () => {
  const messages = [
    '我想预约淋巴水肿评估。',
    'Я хотел бы записаться на консультацию по лимфедеме.',
    'Please review this referral https://www.sgh.com.sg/patient-care/',
    'Can I discuss imaging? https://medical.ru/clinical-study/',
    'I am recovering from lymph node surgery and my skin is dry.',
    'Reference https://nanmed.ru.example.org/medical-report/',
    'Can I choose one of these? https://clinic.invalid.test/appointments/available-slots/',
    'Professional history https://medical.invalid.test/aviator-medical/',
    'Research reference https://journal.invalid.test/cashman-review/'
  ];
  for (const message of messages) {
    const api = handler({ fetch: async () => ({ ok: true }) });
    const result = await api.post({ ...valid, message, phone: '+81 90 1234 5678' }, { headers: { origin: 'https://lymphedasia.com' } });
    assert.equal(result.body.accepted, true);
    assert.equal(api.calls.length, 1);
    assert.equal(result.headers['Access-Control-Allow-Origin'], 'https://lymphedasia.com');
  }
});

test('concurrent duplicate enquiries are reserved before provider wait, including across JSON/native submissions', async () => {
  let release;
  const api = handler({ fetch: () => new Promise(resolve => { release = resolve; }) });
  const first = api.post();
  while (!release) await new Promise(resolve => setImmediate(resolve));
  const second = await api.post({ ...valid, message: '  Mock   only  ' }, { native: true });
  assert.equal(second.status, 409);
  assert.equal(second.body.accepted, undefined);
  assert.equal(api.calls.length, 1);
  release({ ok: true });
  assert.equal((await first).body.accepted, true);
});

test('email repetition limit returns 429 and expires after 15 minutes; other patients remain independent', async () => {
  let now = 1000;
  const api = handler({ now: () => now, fetch: async () => ({ ok: true }) });
  for (let i = 0; i < 3; i++) assert.equal((await api.post({ ...valid, message: 'Question ' + i })).body.accepted, true);
  const limited = await api.post({ ...valid, message: 'Another question' });
  assert.equal(limited.status, 429);
  assert.equal(limited.headers['Retry-After'], '900');
  assert.equal(limited.body.accepted, undefined);
  assert.equal((await api.post({ ...valid, email: 'other@invalid.test' })).body.accepted, true);
  now += 15 * 60 * 1000;
  assert.equal((await api.post()).body.accepted, true);
  assert.equal(api.calls.length, 5);
});

test('trusted Vercel IP limits distinct senders and ignores spoofable general forwarded headers', async () => {
  const api = handler({ env: { RESEND_API_KEY: 'mock-only', CONTACT_TO_EMAIL: 'clinic@invalid.test', VERCEL: '1' }, fetch: async () => ({ ok: true }) });
  for (let i = 0; i < 20; i++) {
    assert.equal((await api.post({ ...valid, email: 'patient' + i + '@invalid.test' }, { headers: { 'x-vercel-forwarded-for': '192.0.2.1', 'x-forwarded-for': '198.51.100.' + i } })).body.accepted, true);
  }
  assert.equal((await api.post({ ...valid, email: 'next@invalid.test' }, { headers: { 'x-vercel-forwarded-for': '192.0.2.1' } })).status, 429);
  assert.equal((await api.post({ ...valid, email: 'next@invalid.test' }, { headers: { 'x-vercel-forwarded-for': '192.0.2.2' } })).body.accepted, true);
  assert.equal(api.calls.length, 21);
});

test('wrong origins, non-string fields, JSON scalars and oversized bodies cannot send mail', async () => {
  const api = handler({ fetch: async () => { throw new Error('must not send'); } });
  assert.equal((await api.post(valid, { headers: { origin: 'https://unrelated.invalid.test' } })).status, 403);
  for (const payload of [null, [], 'string', 42, { ...valid, name: {} }, { ...valid, email: ['a@invalid.test'] }]) {
    assert.equal((await api.post(payload)).status, 400);
  }
  assert.equal((await api.post(valid, { rawBody: 'x'.repeat(65537) })).status, 413);
  assert.equal((await api.post(valid, { headers: { 'content-length': '65537' } })).status, 413);
  assert.equal(api.calls.length, 0);
});

test('multipart and no-JavaScript native forms retain normal success/error routes', async () => {
  const api = handler({ fetch: async () => ({ ok: true }) });
  const response = await api.post(valid, { multipart: true });
  assert.equal(response.body.accepted, true);
  const native = { ...valid, message: 'https://nanmed.ru/read/advert/', redirectError: 'https://lymphedasia.com/contact-us/?sent=0' };
  const blocked = await api.post(native, { native: true });
  assert.equal(blocked.status, 303);
  assert.equal(blocked.location, native.redirectError);
  assert.equal(api.calls.length, 1);
});
