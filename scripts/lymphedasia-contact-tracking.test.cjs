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
    querySelector: () => button, reportValidity: () => true, contains: () => true,
    reset() { this.resets++; }, addEventListener(name, callback) { handlers[name] = callback; } };
  const window = { location: { origin: 'https://lymphedasia.com', pathname: '/contact/', href: 'https://lymphedasia.com/contact/?private=ignored' },
    fetch: async (url, options) => { requests.push({ url, options }); return typeof fetchResponse === 'function' ? fetchResponse() : fetchResponse; },
    FormData: class { entries() { return Object.entries(payload); } },
    gtag: (...args) => events.push(args), ...overrides.window };
  const document = { readyState: 'complete', getElementById: id => id === 'la-contact-form' ? form : status };
  const context = vm.createContext({ window, document, FormData: window.FormData, URL });
  vm.runInContext(source, context);
  return { form, button, status, events, requests, handlers, context, submit: () => handlers.submit({ preventDefault() {} }) };
}
test('counts exactly one accepted enquiry, with fixed parameters and no submitted personal data', async () => {
  const s = setup({ ok: true, json: async () => ({ ok: true }) });
  await s.submit(); await s.submit();
  assert.equal(s.requests.length, 1); assert.equal(s.events.length, 1); assert.equal(s.form.resets, 1);
  assert.equal(s.events[0][1], 'generate_lead'); assert.equal(s.events[0][2].send_to, 'G-B2Z67J9YDP');
  assert.equal(s.events[0][2].page_location, 'https://lymphedasia.com/contact/');
  for (const key of ['name', 'email', 'phone', 'message', 'enquiryType', 'enquiry_type']) assert.equal(key in s.events[0][2], false);
  assert.equal(s.status.className, 'la-form-status sent'); assert.equal(s.button.disabled, true);
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
});
test('concurrent submission is ignored', async () => {
  let resolve; const waiting = new Promise(r => { resolve = r; });
  const s = setup(() => waiting); const first = s.submit(); await s.submit();
  assert.equal(s.requests.length, 1); resolve({ ok: true, json: async () => ({ ok: true }) }); await first;
  assert.equal(s.events.length, 1);
});
test('analytics failure does not turn an accepted enquiry into an error', async () => {
  const s = setup({ ok: true, json: async () => ({ ok: true }) }, { window: { gtag() { throw Error('blocked'); } } });
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
  const s = setup({ ok: true, json: async () => ({ ok: true }) }); const handler = s.handlers.submit;
  vm.runInContext(source, s.context); assert.equal(s.handlers.submit, handler);
});
test('contact link clicks stay separate from enquiries', () => {
  const s = setup(null);
  for (const href of ['https://wa.me/6587649219', 'https://www.astridplasticsurgery.com/contact-us/']) {
    s.handlers.click({ target: { closest: () => ({ href }) } });
  }
  assert.deepEqual(s.events.map(e => e[1]), ['whatsapp_click', 'external_contact_click']);
});
