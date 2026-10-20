const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('public/enquiry-bot-check.js', 'utf8');

function setup({ available = true } = {}) {
  const listeners = {}, calls = [], scripts = [];
  const formListeners = {};
  const form = {
    addEventListener: (type, fn, capture) => { formListeners[type] = { fn, capture }; },
    removeEventListener: type => { delete formListeners[type]; }
  };
  const status = {}, widget = {};
  const node = { dataset: { sitekey: 'mock-public-key' }, closest: () => form,
    querySelector: selector => selector === '[data-bot-status]' ? status : widget };
  let token = '';
  let options;
  const turnstile = {
    render: (container, config) => { assert.equal(container, widget); options = config; calls.push('render'); return 'widget-1'; },
    getResponse: () => token,
    reset: id => { assert.equal(id, 'widget-1'); token = ''; calls.push('reset'); },
    remove: id => { assert.equal(id, 'widget-1'); calls.push('remove'); }
  };
  const window = available ? { turnstile } : {};
  const document = { readyState: 'complete', querySelectorAll: () => [node],
    addEventListener: (type, fn) => { listeners[type] = fn; },
    createElement: () => ({}), head: { appendChild: script => scripts.push(script) } };
  const context = vm.createContext({ window, document, Map, Promise, Error, setTimeout: () => 1, clearTimeout: () => {} });
  vm.runInContext(source, context);
  function submit() {
    let blocked = false, stopped = false;
    formListeners.submit.fn({ preventDefault: () => { blocked = true; }, stopImmediatePropagation: () => { stopped = true; } });
    return { blocked, stopped };
  }
  return { calls, scripts, status, listeners, node, formListeners, context, submit,
    complete() { token = 'mock-token'; options.callback(token); },
    expire() { token = ''; options['expired-callback'](); },
    error() { token = ''; options['error-callback'](); },
    get options() { return options; } };
}
const flush = () => new Promise(resolve => setImmediate(resolve));

test('both-site shared widget stops capture before fetch until completed and resets single-use tokens', async () => {
  const s = setup();
  assert.deepEqual(s.submit(), { blocked: true, stopped: true });
  assert.equal(s.formListeners.submit.capture, true);
  await flush();
  assert.equal(s.options.action, 'clinic_enquiry');
  assert.equal(s.options.sitekey, 'mock-public-key');
  s.complete();
  assert.deepEqual(s.submit(), { blocked: false, stopped: false });
  s.formListeners['enquiry-bot-reset'].fn();
  assert.deepEqual(s.submit(), { blocked: true, stopped: true });
  assert.deepEqual(s.calls, ['render', 'reset']);
  assert.doesNotMatch(JSON.stringify(s.scripts), /mock-token/);
});

test('expiry and widget errors block submission with accessible manual-contact guidance', async () => {
  const s = setup(); await flush();
  s.complete(); s.expire(); assert.equal(s.submit().blocked, true);
  s.complete(); s.error(); assert.equal(s.submit().blocked, true);
  assert.match(s.status.textContent, /contact the clinic/);
});

test('repeated script/mount signals never duplicate a widget; navigation cleanup removes listeners and iframe', async () => {
  const s = setup(); await flush();
  vm.runInContext(source, s.context);
  s.listeners['enquiry-bot-check:mount'](); await flush();
  assert.deepEqual(s.calls, ['render']);
  s.listeners['enquiry-bot-check:remove']({ detail: s.node });
  assert.deepEqual(s.calls, ['render', 'remove']);
  assert.equal(s.formListeners.submit, undefined);
  s.listeners['enquiry-bot-check:mount'](); await flush();
  assert.deepEqual(s.calls, ['render', 'remove', 'render']);
});

test('React strict-mode unmount/remount while script loads renders only the current record', async () => {
  const s = setup();
  s.listeners['enquiry-bot-check:remove']({ detail: s.node });
  s.listeners['enquiry-bot-check:mount']();
  await flush();
  assert.deepEqual(s.calls, ['render']);
});

test('script download failure never submits or claims receipt, and loads only the official script', async () => {
  const s = setup({ available: false });
  s.listeners['enquiry-bot-check:mount']();
  assert.equal(s.scripts.length, 1);
  assert.equal(s.scripts[0].src, 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit');
  s.scripts[0].onerror(); await flush();
  assert.match(s.status.textContent, /could not load.*contact the clinic/);
  assert.equal(s.submit().blocked, true);
  assert.equal(s.calls.length, 0);
});
