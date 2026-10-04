# Lymphedasia successful-enquiry measurement

Date: 4 October 2026, Singapore.

## Evidence and implementation

Current main at start: 52c4da241fca6e40031ed4afcc8368b7746b1268. Read issue #7 and the morning review, contact/schema and body-contouring reports before selecting work. Do not repeat their publications or today's settled analytics review.

Lymphedasia contact page 5034 uses a Gutenberg custom HTML block. Its visible form is not stored in Elementor data, and no MetForm form is involved. It already POSTs to the shared DrJeremySun contact API, with permitted success/error redirects, but emitted no successful-enquiry event. The thank-you page is publicly visitable and therefore was not used as a page-view conversion trigger.

Published a progressive enhancement in that existing HTML block. The original native form action and no-JavaScript fallback remain intact. JavaScript sends JSON to the existing API and emits generate_lead only after HTTP success and an explicit ok:true acknowledgement. That acknowledgement follows Resend API acceptance in the normal non-honeypot handler, not proven inbox delivery, patient qualification or booking.

The enhancement ignores concurrent/double submission, leaves fields intact on failures, blocks a filled honeypot, and cannot turn analytics failure into a failed enquiry. A successful submission shows an accessible receipt and disables repeat submission on that page. Separate whatsapp_click and external_contact_click events are not key events. No input name, email, phone, message or selected medical enquiry category is sent in the custom analytics parameters; page_location is origin plus path without query parameters. No additional GA4 tag was installed.

Confirmed GA4 property 410145787 / web stream 6252726344 uses the existing G-B2Z67J9YDP measurement ID, with active collection in the past 48 hours. Registered generate_lead through GA4 Admin as a code-based key event, once per event, without default monetary value. The saved Events list shows generate_lead starred alongside purchase and no stream data detected for the new event. DrJeremySun property 553866170 was configured separately earlier today. No historical conversion backfill or actual new lead is claimed.

## Validation and rollback

- 11 isolated Node tests pass: acknowledgement, HTTP rejection, missing acknowledgement, invalid JSON, network failure, concurrent submissions, analytics failure, honeypot, unsupported fetch/native fallback, duplicate script, and contact-click separation. All network/analytics calls in these tests are mocked; no enquiry emails or real analytics lead events were sent.
- Live contact page HTTP 200, canonical unchanged, native form retained, one existing GA4 loader, one generate_lead emitter.
- Safe OPTIONS preflight returned 204 and Access-Control-Allow-Origin https://lymphedasia.com, POST/OPTIONS allowed. No live POST sent.
- Browser DOM reports data-enquiry-tracking=ready and preserves 9 form fields. No site-code console error observed; an unrelated browser-extension metadata error was present.
- WordPress current revision 5169 contains the enhancement; revision 5168 and reports/backups/20261004-lymphedasia-contact-5034.html contain the previous contact content including the approved Paragon details. Restore that revision for site rollback and unstar only this property's generate_lead for configuration rollback.
- scripts/lymphedasia-contact-tracking.js is the versioned installation source; scripts/lymphedasia-contact-tracking.test.cjs is its isolated regression check. Neither is imported by the Next.js application. This PR records WordPress implementation and backup, not a DrJeremySun application change.

## Next decisions

Next settled GSC/GA4 review: 5 October, at least 24 hours after the prior review; allow processing lag and count only genuine collected events. New-eyebag/profile indexing check: 7 October absent a concrete fault. No enquiry was generated just to demonstrate realtime collection. No post-publication ranking result or native AI-platform mention has yet been verified.

READY next: prepare a sourced authority/profile consistency inventory and editorial briefs, without outbound messages; review distinct clinician-approved content gaps where there is evidence. Do not add speculative recovery timelines or thin new pages.

Official guidance checked 4 October:
- https://support.google.com/analytics/answer/13128484?hl=en — prospective key-event registration and reporting lag.
- https://developers.google.com/tag-platform/gtagjs/routing — event routing to the existing destination.
- https://support.google.com/analytics/answer/6366371?hl=en — avoid sending personally identifiable information.

