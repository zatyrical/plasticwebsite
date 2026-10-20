const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { test } = require('node:test');
const source = fs.readFileSync(__dirname + '/lymphedasia-contact-tracking.js', 'utf8');
function setup(fetchResponse, overrides = {}) {
  const events = [], requests = [], handlers = {};
  const button = { disabled: false, textContent: 'Submit enquiry' };
  const status = { hidden: true };
  const payload = { name: 'Mock person', email: 'mock@example.test', message: 'Mock enquiry', website: '', ...overrides.payload };
  const form = { dataset: {}, action: 'https://www.drjeremysun.com/api/contact', resets: 0,
    botResets: 0, dispatchEvent(event) { if (event.type === 'enquiry-bot-reset') this.botResets++; },
    querySelector: () => button, reportValidity: () => true, contains: () => true,
    reset() { this.resets++; }, addEventListener(name, callback) { handlers[name] = callback; } };
  const window = { location: { origin: 'https://lymphedasia.com', pathname: '/contact/', href: 'https://lymphedasia.com/contact/?private=ignored' },
    fetch: async (url, options) => { requests.push({ url, options }); return typeof fetchResponse === 'function' ? fetchResponse() : fetchResponse; },
    FormData: class { entries() { return Object.entries(payload); } },
    gtag: (...args) => events.push(args), ...overrides.window };
  const document = { readyState: 'complete', getElementById: id => id === 'la-contact-form' ? form : status };
  const context = vm.createContext({ window, document, FormData: window.FormData, URL, Event });
  vm.runInContext(source, context);
  return { form, button, status, events, requests, handlers, context, submit: () => handlers.submit({ preventDefault() {} }) };
}
test('counts exactly one accepted enquiry, with fixed parameters and no submitted personal data', async () => {
  const s = setup({ ok: true, json: async () => ({ ok: true, accepted: true }) });
  await s.submit(); await s.submit();
  assert.equal(s.requests.length, 1); assert.equal(s.events.length, 1); assert.equal(s.form.resets, 1);
  assert.equal(s.events[0][1], 'generate_lead'); assert.equal(s.events[0][2].send_to, 'G-B2Z67J9YDP');
  assert.equal(s.events[0][2].page_location, 'https://lymphedasia.com/contact/');
  for (const key of ['name', 'email', 'phone', 'message', 'enquiryType', 'enquiry_type']) assert.equal(key in s.events[0][2], false);
  assert.equal(s.status.className, 'la-form-status sent'); assert.equal(s.button.disabled, true);
  assert.equal(s.form.botResets, 1);
});
for (const [label, response] of [
  ['HTTP rejection', { ok: false, json: async () => ({ error: 'failed' }) }],
  ['unacknowledged 200', { ok: true, json: async () => ({}) }],
  ['invalid response JSON', { ok: true, json: async () => { throw Error('invalid'); } }],
  ['network failure', async () => { throw Error('offline'); }]
]) test(label + ' is not a lead and retains form fields', async () => {
  const s = setup(response); await s.submit();
  assert.equal(s.events.length, 0); assert.equal(s.form.resets, 0); assert.equal(s.button.disabled, false);
  assert.equal(s.status.className, 'la-form-status error');
  assert.equal(s.form.botResets, 1);
});
test('concurrent submission is ignored', async () => {
  let resolve; const waiting = new Promise(r => { resolve = r; });
  const s = setup(() => waiting); const first = s.submit(); await s.submit();
  assert.equal(s.requests.length, 1); resolve({ ok: true, json: async () => ({ ok: true, accepted: true }) }); await first;
  assert.equal(s.events.length, 1);
});
test('analytics failure does not turn an accepted enquiry into an error', async () => {
  const s = setup({ ok: true, json: async () => ({ ok: true, accepted: true }) }, { window: { gtag() { throw Error('blocked'); } } });
  await s.submit(); assert.equal(s.status.className, 'la-form-status sent'); assert.equal(s.form.resets, 1);
});
test('honeypot does not submit or count', async () => {
  const s = setup(null, { payload: { website: 'spam' } }); await s.submit();
  assert.equal(s.requests.length, 0); assert.equal(s.events.length, 0);
});
test('unsupported fetch preserves native HTML form submission', () => {
  const s = setup(null, { window: { fetch: undefined } }); assert.equal(s.handlers.submit, undefined);
});
test('duplicate script does not attach another listener', async () => {
  const s = setup({ ok: true, json: async () => ({ ok: true, accepted: true }) }); const handler = s.handlers.submit;
  vm.runInContext(source, s.context); assert.equal(s.handlers.submit, handler);
});
test('contact link clicks stay separate from enquiries', () => {
  const s = setup(null);
  for (const href of ['https://wa.me/6587649219', 'https://www.astridplasticsurgery.com/contact-us/']) {
    s.handlers.click({ target: { closest: () => ({ href }) } });
  }
  assert.deepEqual(s.events.map(e => e[1]), ['whatsapp_click', 'external_contact_click']);
});

test('explicit non-acceptance retains a generic anti-spam receipt without counting a lead', async () => {
  const s = setup({ ok: true, json: async () => ({ ok: true, accepted: false }) });
  await s.submit(); await s.submit();
  assert.equal(s.events.length, 0);
  assert.equal(s.requests.length, 1);
  assert.equal(s.form.resets, 1);
  assert.equal(s.status.className, 'la-form-status sent');
  assert.match(s.status.textContent, /Your enquiry has been received/);
  assert.equal(s.button.disabled, true);
});

test('unknown or malformed acceptance keeps fields and never counts or asserts receipt', async () => {
  for (const result of [
    { ok: true },
    ...[null, 'true', 'false', 1, 0, {}, []].map(accepted => ({ ok: true, accepted })),
    { accepted: true },
    { ok: false, accepted: true }
  ]) {
    const s = setup({ ok: true, json: async () => result });
    await s.submit();
    assert.equal(s.events.length, 0, JSON.stringify(result));
    assert.equal(s.form.resets, 0, JSON.stringify(result));
    assert.equal(s.requests.length, 1);
    assert.equal(s.status.className, 'la-form-status error');
    assert.match(s.status.textContent, /before submitting again/);
    assert.doesNotMatch(s.status.textContent, /has been received/);
    assert.equal(s.button.disabled, false);
  }
});

test('HTTP and transport uncertainty ask for confirmation before another submission', async () => {
  for (const response of [
    { ok: false, json: async () => ({ error: 'We could not confirm that your enquiry was sent.' }) },
    { ok: true, json: async () => { throw Error('truncated JSON'); } },
    async () => { throw Error('lost connection'); }
  ]) {
    const s = setup(response); await s.submit();
    assert.equal(s.events.length, 0); assert.equal(s.form.resets, 0);
    assert.equal(s.requests.length, 1);
    assert.match(s.status.textContent, /before submitting again/);
    assert.doesNotMatch(s.status.textContent, /try again later/);
  }
});

test('definite validation, blocked-link, duplicate and throttling responses explain the next step without losing fields or counting a lead', async () => {
  for (const [code, error] of [
    [400, 'Please provide a valid email address.'],
    [403, 'Please submit your enquiry from the clinic website.'],
    [409, 'A matching enquiry was submitted recently. Please contact the clinic before sending it again.'],
    [413, 'Invalid enquiry format or size.'],
    [422, 'This message contains a promotional link that cannot be submitted. Please remove it or contact the clinic using the contact details below.'],
    [429, 'Too many enquiries were submitted recently. Please wait 15 minutes or contact the clinic directly.']
  ]) {
    const s = setup({ ok: false, status: code, json: async () => ({ error }) });
    await s.submit();
    assert.ok(s.status.textContent.startsWith(error));
    assert.match(s.status.textContent, /Your details are still here/);
    assert.equal(s.status.className, 'la-form-status error');
    assert.equal(s.form.resets, 0);
    assert.equal(s.button.disabled, false);
    assert.equal(s.requests.length, 1);
    assert.equal(s.events.length, 0);
  }
});

test('server error suggestions remain plain text, never executable markup', async () => {
  const text = '<img src=x onerror=alert(1)>Remove the link.';
  const s = setup({ ok: false, status: 422, json: async () => ({ error: text }) });
  await s.submit();
  assert.ok(s.status.textContent.startsWith(text));
  assert.equal(s.status.innerHTML, undefined);
  assert.equal(s.form.resets, 0);
  assert.equal(s.events.length, 0);
});

test('unknown, oversized or provider errors retain the existing cautious contact message', async () => {
  for (const [code, error] of [[502, 'Private provider detail'], [503, 'Unavailable'], [401, 'Unexpected'], [429, 'x'.repeat(401)], [422, {}], [400, '   ']]) {
    const s = setup({ ok: false, status: code, json: async () => ({ error }) });
    await s.submit();
    assert.match(s.status.textContent, /could not confirm/);
    assert.match(s.status.textContent, /before submitting again/);
    assert.equal(s.form.resets, 0);
    assert.equal(s.button.disabled, false);
    assert.equal(s.events.length, 0);
  }
});
