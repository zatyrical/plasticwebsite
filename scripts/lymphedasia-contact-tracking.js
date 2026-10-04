/* Installed in the existing Gutenberg HTML block on Lymphedasia contact page 5034. */
(function () {
  'use strict';
  function initialise() {
    var form = document.getElementById('la-contact-form');
    if (!form || form.dataset.enquiryTracking === 'ready' || !window.fetch || !window.FormData) return;
    var button = form.querySelector('button[type="submit"]');
    var status = document.getElementById('la-form-status');
    if (!button || !status) return;
    form.dataset.enquiryTracking = 'ready';
    var sending = false;
    var sent = false;
    function track(name, method) {
      try {
        if (typeof window.gtag === 'function') window.gtag('event', name, {
          send_to: 'G-B2Z67J9YDP',
          method: method,
          form_id: 'la-contact-form',
          page_location: window.location.origin + window.location.pathname
        });
      } catch (_) {
        // Analytics failure must not change the enquiry's acceptance status.
      }
    }
    function show(message, state) {
      status.textContent = message;
      status.className = 'la-form-status ' + state;
      status.hidden = false;
    }
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (sending || sent || !form.reportValidity()) return;
      var payload = Object.fromEntries(new FormData(form).entries());
      if (String(payload.website || '').trim()) return;
      sending = true;
      button.disabled = true;
      button.textContent = 'Sending…';
      show('Sending your enquiry…', 'sending');
      try {
        var response = await window.fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        var result = await response.json().catch(function () { return null; });
        if (!response.ok || !result || result.ok !== true) {
          show('Your enquiry could not be confirmed. Your details are still here. Please try again later or contact Astrid using the links below.', 'error');
          return;
        }
        sent = true;
        form.reset();
        show('Thank you. Your enquiry has been received. The clinic team will respond through the contact details provided.', 'sent');
        track('generate_lead', 'lymphedasia_contact_form');
      } catch (_) {
        show('We could not confirm that your enquiry was sent. Your details are still here. Please check your connection or contact Astrid using the links below.', 'error');
      } finally {
        sending = false;
        button.disabled = sent;
        button.textContent = sent ? 'Enquiry received' : 'Submit enquiry';
      }
    });
    form.addEventListener('click', function (event) {
      var link = event.target.closest && event.target.closest('a[href]');
      if (!link || !form.contains(link)) return;
      var url = new URL(link.href, window.location.href);
      if (url.hostname === 'wa.me') track('whatsapp_click', 'astrid_whatsapp');
      else if (url.hostname === 'www.astridplasticsurgery.com' && url.pathname === '/contact-us/') track('external_contact_click', 'astrid_contact_form');
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise, { once: true });
  else initialise();
}());
