const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function loadModule(path, globals, requireModule = require) {
  const output = ts.transpileModule(fs.readFileSync(path, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX }
  }).outputText;
  const exports = {};
  vm.runInNewContext(output, { exports, require: requireModule, ...globals }, { filename: path });
  return exports;
}

const location = {
  hostname: 'www.drjeremysun.com',
  origin: 'https://www.drjeremysun.com',
  pathname: '/plastic-surgeon-singapore',
  href: 'https://www.drjeremysun.com/plastic-surgeon-singapore?email=example%40invalid.test#private-note'
};

function tracker(browser) {
  return loadModule('app/contactAnalytics.ts', browser ? { window: browser } : {}).trackAcceptedEnquiry;
}

test('accepted lead emits one fixed event with no query, fragment or input category', () => {
  const calls = [];
  tracker({ location, gtag: (...args) => calls.push(args) })(true, { accepted: true });
  assert.equal(calls.length, 1);
  const [command, event, params] = calls[0];
  assert.equal(command, 'event');
  assert.equal(event, 'generate_lead');
  assert.deepEqual(JSON.parse(JSON.stringify(params)), {
    event_category: 'enquiry',
    method: 'drjeremysun_contact_form',
    page_location: 'https://www.drjeremysun.com/plastic-surgeon-singapore'
  });
});

test('HTTP rejection, honeypot, missing and non-boolean acknowledgements emit nothing', () => {
  const calls = [];
  const track = tracker({ location, gtag: (...args) => calls.push(args) });
  for (const [ok, data] of [[false, { accepted: true }], [true, { accepted: false }], [true, null], [true, {}], [true, { accepted: 'true' }]]) {
    track(ok, data);
  }
  assert.equal(calls.length, 0);
});

test('SSR, absent analytics and previews do not emit or throw', () => {
  assert.doesNotThrow(() => tracker()(true, { accepted: true }));
  assert.doesNotThrow(() => tracker({ location })(true, { accepted: true }));
  const calls = [];
  tracker({ location: { ...location, hostname: 'preview.vercel.app' }, gtag: (...args) => calls.push(args) })(true, { accepted: true });
  assert.equal(calls.length, 0);
});

test('analytics exception is contained', () => {
  assert.doesNotThrow(() => tracker({ location, gtag: () => { throw new Error('mock analytics unavailable'); } })(true, { accepted: true }));
});

async function submit({ responseOk = true, accepted = true, invalidJson = false, missingAcknowledgement = false, networkError = false, analyticsThrows = false, errorMessage = 'Mock rejection' } = {}) {
  const states = [[], [], []];
  const events = [];
  const requests = [];
  let resets = 0;
  let botResets = 0;
  let hook = 0;
  const browser = { location, gtag: (...args) => { if (analyticsThrows) throw new Error('mock analytics unavailable'); events.push(args); } };
  const analytics = loadModule('app/contactAnalytics.ts', { window: browser });
  const fakeReact = {
    useEffect: () => {},
    useState: (initial) => { const index = hook++; return [initial, (value) => states[index].push(value)]; }
  };
  const element = (type, props) => ({ type, props });
  class MockFormData {
    constructor(form) { this.fields = form.fields; }
    entries() { return Object.entries(this.fields)[Symbol.iterator](); }
  }
  const form = {
    dispatchEvent: (event) => { if (event.type === 'enquiry-bot-reset') botResets++; },
    fields: { name: 'Synthetic test', email: 'example@invalid.test', message: 'Mock only', enquiryType: 'Lymphedema / LVA surgery', website: '' },
    reset: () => { resets++; }
  };
  const component = loadModule('app/ContactForm.tsx', {
    window: browser,
    FormData: MockFormData,
    Event,
    fetch: async (url, options) => {
      requests.push({ url, options });
      if (networkError) throw new Error('mock network unavailable');
      return { ok: responseOk, json: async () => { if (invalidJson) throw new Error('mock invalid JSON'); return missingAcknowledgement ? {} : { accepted, error: errorMessage }; } };
    }
  }, (name) => {
    if (name === 'react') return fakeReact;
    if (name === 'react/jsx-runtime') return { jsx: element, jsxs: element };
    if (name === './contactAnalytics') return analytics;
    if (name === './EnquiryBotCheck') return { __esModule: true, default: 'mock-bot-check' };
    throw new Error(`Unexpected module: ${name}`);
  }).default;
  const rendered = component({});
  await rendered.props.onSubmit({ preventDefault: () => {}, currentTarget: form });
  return { states, events, requests, resets, botResets, formProps: rendered.props };
}

test('actual form has a native POST fallback with fixed private-data-free receipt URLs', async () => {
  const { formProps } = await submit();
  assert.equal(formProps.method, 'post');
  assert.equal(formProps.action, '/api/contact');
  const hidden = formProps.children.filter(node => node?.type === 'input' && node.props.type === 'hidden');
  const field = name => hidden.find(node => node.props.name === name)?.props.value;
  assert.equal(field('redirectSuccess'), 'https://www.drjeremysun.com/enquiry-response/received');
  assert.equal(field('redirectError'), 'https://www.drjeremysun.com/enquiry-response/unconfirmed');
  for (const name of ['redirectSuccess', 'redirectError']) {
    const url = new URL(field(name));
    assert.equal(url.search, '');
    assert.equal(url.hash, '');
  }
});

test('actual component retains the accepted receipt when analytics throws', async () => {
  const result = await submit({ analyticsThrows: true });
  assert.deepEqual(result.states[0], ['sending', 'sent']);
  assert.match(result.states[1].at(-1), /Your enquiry has been received/);
  assert.equal(result.resets, 1);
  assert.equal(result.requests.length, 1);
  assert.equal(result.botResets, 1);
});

test('clinic payload retains enquiry category while analytics excludes it', async () => {
  const result = await submit();
  assert.equal(JSON.parse(result.requests[0].options.body).enquiryType, 'Lymphedema / LVA surgery');
  assert.equal(result.events.length, 1);
  assert.equal('enquiry_type' in result.events[0][2], false);
  assert.equal('name' in result.events[0][2], false);
  assert.equal('email' in result.events[0][2], false);
  assert.equal('message' in result.events[0][2], false);
});

test('explicit honeypot acknowledgement keeps generic receipt but no lead', async () => {
  const result = await submit({ accepted: false });
  assert.equal(result.events.length, 0);
  assert.equal(result.states[0].at(-1), 'sent');
  assert.match(result.states[1].at(-1), /Your enquiry has been received/);
  assert.equal(result.resets, 1);
  assert.equal(result.requests.length, 1);
});

test('unknown successful-response acknowledgement retains fields without receipt, lead or retry', async () => {
  for (const options of [{ invalidJson: true }, { missingAcknowledgement: true }, ...[null, 'true', 'false', 1, 0].map(accepted => ({ accepted }))]) {
    const result = await submit(options);
    assert.equal(result.events.length, 0);
    assert.equal(result.states[0].at(-1), 'error');
    assert.match(result.states[1].at(-1), /could not confirm that your enquiry was sent/);
    assert.match(result.states[1].at(-1), /Your details are still here/);
    assert.match(result.states[1].at(-1), /contact the clinic before submitting again/);
    assert.doesNotMatch(result.states[1].at(-1), /Your enquiry has been received/);
    assert.equal(result.resets, 0);
    assert.equal(result.botResets, 1);
    assert.equal(result.requests.length, 1);
  }
});

test('delivery and network failures retain fields and emit no lead', async () => {
  for (const options of [{ responseOk: false }, { networkError: true }]) {
    const result = await submit(options);
    assert.equal(result.events.length, 0);
    assert.equal(result.states[0].at(-1), 'error');
    assert.equal(result.resets, 0);
  }
});

test('provider uncertainty receipt reaches the actual form without reset, lead or retry', async () => {
  const errorMessage = 'We could not confirm that your enquiry was sent. Please contact the clinic before submitting again.';
  const result = await submit({ responseOk: false, accepted: false, errorMessage });
  assert.equal(result.states[1].at(-1), errorMessage);
  assert.equal(result.states[0].at(-1), 'error');
  assert.equal(result.resets, 0);
  assert.equal(result.events.length, 0);
  assert.equal(result.requests.length, 1);
});

function receiptModule() {
  const element = (type, props) => ({ type, props });
  return loadModule('app/enquiry-response/[status]/page.tsx', {}, name => {
    if (name === 'next/link') return { __esModule: true, default: 'a' };
    if (name === 'next/navigation') return { notFound: () => { throw new Error('mock 404'); } };
    if (name === 'react/jsx-runtime') return { jsx: element, jsxs: element };
    throw new Error(`Unexpected receipt dependency: ${name}`);
  });
}

function visibleText(node) {
  if (Array.isArray(node)) return node.map(visibleText).join(' ');
  if (node && typeof node === 'object') return visibleText(node.props?.children);
  return typeof node === 'string' ? node : '';
}

test('operational receipt routes are static, noindex, and have no lead emitter', async () => {
  const receipt = receiptModule();
  assert.equal(receipt.metadata.robots.index, false);
  assert.equal(receipt.dynamicParams, false);
  assert.deepEqual(JSON.parse(JSON.stringify(receipt.generateStaticParams())), [{ status: 'received' }, { status: 'unconfirmed' }]);
  const text = visibleText(await receipt.default({ params: Promise.resolve({ status: 'received' }) }));
  assert.match(text, /accepted by the enquiry service/);
  assert.match(text, /not an appointment confirmation/);
  assert.match(text, /opened this page directly/);
  assert.doesNotMatch(fs.readFileSync('app/enquiry-response/[status]/page.tsx', 'utf8'), /generate_lead|gtag|trackAcceptedEnquiry/);
});

test('unconfirmed receipt cautions before resubmission; unknown route cannot claim success', async () => {
  const receipt = receiptModule();
  const text = visibleText(await receipt.default({ params: Promise.resolve({ status: 'unconfirmed' }) }));
  assert.match(text, /contact the clinic before submitting again/);
  assert.doesNotMatch(text, /accepted by the enquiry service|Thank you for your enquiry/);
  await assert.rejects(receipt.default({ params: Promise.resolve({ status: 'unknown' }) }), /mock 404/);
});
