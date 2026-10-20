/* Shared by the React form and the existing Lymphedasia HTML form. No enquiry
 * details are sent to Cloudflare: only its widget token goes to Siteverify. */
(function () {
  'use strict';
  if (window.enquiryBotCheckInstalled) return;
  window.enquiryBotCheckInstalled = true;
  var records = new Map();
  var loading;
  function load() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      var timer = setTimeout(function () { reject(new Error('Security check unavailable')); }, 15000);
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.onload = function () {
        clearTimeout(timer);
        if (window.turnstile) resolve(window.turnstile);
        else reject(new Error('Security check unavailable'));
      };
      script.onerror = function () { clearTimeout(timer); reject(new Error('Security check unavailable')); };
      document.head.appendChild(script);
    });
    return loading;
  }
  function remove(node) {
    var record = records.get(node);
    if (!record) return;
    records.delete(node);
    record.form.removeEventListener('submit', record.submit, true);
    record.form.removeEventListener('enquiry-bot-reset', record.reset);
    if (record.id !== undefined && window.turnstile) window.turnstile.remove(record.id);
  }
  function mount() {
    document.querySelectorAll('[data-enquiry-bot-check]').forEach(function (node) {
      if (records.has(node) || !node.dataset.sitekey) return;
      var form = node.closest('form');
      var status = node.querySelector('[data-bot-status]');
      var widget = node.querySelector('[data-bot-widget]');
      if (!form || !status || !widget) return;
      var record = { form: form, id: undefined };
      function show(text) { status.textContent = text; }
      record.submit = function (event) {
        if (record.id !== undefined && window.turnstile && window.turnstile.getResponse(record.id)) return;
        event.preventDefault();
        event.stopImmediatePropagation();
        show('Please complete the security check before submitting. If it does not load, contact the clinic using the links below.');
      };
      record.reset = function () {
        if (record.id !== undefined && window.turnstile) {
          show('Please complete a fresh security check before another submission.');
          window.turnstile.reset(record.id);
        }
      };
      records.set(node, record);
      form.addEventListener('submit', record.submit, true);
      form.addEventListener('enquiry-bot-reset', record.reset);
      load().then(function (turnstile) {
        if (records.get(node) !== record) return;
        record.id = turnstile.render(widget, {
          sitekey: node.dataset.sitekey,
          action: 'clinic_enquiry',
          size: 'flexible',
          callback: function () { show('Security check complete.'); },
          'expired-callback': function () { show('The security check expired. Please complete a fresh check.'); },
          'error-callback': function () { show('The security check could not load. Please reload or contact the clinic using the links below.'); }
        });
      }).catch(function () { show('The security check could not load. Please reload or contact the clinic using the links below.'); });
    });
  }
  document.addEventListener('enquiry-bot-check:mount', mount);
  document.addEventListener('enquiry-bot-check:remove', function (event) { remove(event.detail); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
  else mount();
}());
