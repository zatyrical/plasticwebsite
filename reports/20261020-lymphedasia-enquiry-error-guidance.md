# Lymphedasia enquiry error guidance — 20 October 2026

## Patient-facing problem and change

https://lymphedasia.com/contact/ (native Gutenberg PAGE5034) used its delivery-uncertainty message for every unsuccessful response, including the shared handler's explicit invalid-input, blocked-link, duplicate and waiting-limit errors. That hid the server's correction/wait guidance from a visitor. The DrSun React form already shows these messages; its API protection from PR265 is complete and unchanged.

Added one guarded branch in the existing form script: for HTTP400/403/409/413/422/429, show a nonempty server error string up to400characters using the existing textContent status function. Retain entered details and provide the existing Astrid contact-link alternative. Other response/transport failures retain the existing confirmation-before-resubmission guidance. Successful accepted enquiries, honeypot receipt, one-submit guard, native no-JavaScript submission, contact-click separation and accepted-lead measurement remain unchanged.

No request was sent to the production form during this batch. All submission/analytics cases use mocks. No new clinical explanation, date, treatment claim, price, device, credential or outcome was added. No form fields, links, CSS, layout, app API, tracking tag or dependency changed.

## Source, backup and supported publication

Fresh main01694eb05708625c0970c1b34b1f385fc607363e, latest issue7/PR265 report,17Oct resumed/final assessment and source history reconciled; checkpoint6283849474. Branch fix/lymphedasia-form-error-guidance-20261020. Full edit-content and Gutenberg guidance read. Fresh Administrator/content_edit WPVibe1.20.1/WP6.9.10/Astra4.12.3 verified;42calls remained before source read, preserving recovery headroom.

Actual page5034 has empty Elementor data and one native wp:html block. Fresh complete selected raw/meta/metadata envelope is archived with the unique first insertion and reverse in d0218b448d924389a86fe004789126781c3c1ff6, before any write. Local/remote backup blobf5254af4e3021eae0a262bc311eb2ba526063a52 matched. Supported content/search returned the one full anchor line. Entire immediately-current selected envelope equalled backup before content/edit returned edited/replaced1. Intermediate readback was archived in b468df2b13d09ee0eb6d8f91a8e99b22953d8c6b.

Ordinary live verification then revealed an inline-script rendering issue. The first literal less-than comparison caused WordPress's rendered version to HTML-encode later ampersands. A first parser also found no inline body because the existing optimiser delivers the script as a deferred data:text/javascript;base64 src. Neither observation was called a successful live script check. The data URL was decoded locally; no alternate URL, cache bypass, plugin edit or cache-setting change.

The exact intermediate selected envelope and corrective forward/reverse were archived in065c366ed7e890434cbdfa639bc0ef61b3b15fd4 BEFORE the correction. Fresh-current equality guard, supported content/search and content/edit replaced only the comparison with equivalent400 >= result.error.length. Save returned edited/replaced1. Fresh raw equals the complete expected final source; raw and WordPress-rendered scripts now match exactly. Final operational modified timestamp20Oct05:14:11UTC/13:14:11SGT. All selected metadata/meta remain unchanged except modified timestamps and content fields; both native block comments preserved. Final raw length8847→9211characters, only the script insertion changed. No clinical-review statement advanced.

## Verification

- All57 mocked API/form/tracking/navigation/motion tests PASS on final source, including17 Lymphedasia cases. The new tests exercise correction/wait messages, field retention, zero lead/reset on rejected requests, plain-text handling of markup, bounded errors, unknown statuses and retained provider/network uncertainty.
- Ordinary public contact page HTTP200/self-canonical/oneH1. Its delivered data-URL script, decoded locally, equals the final tested repository script after boundary-whitespace trimming. It contains the new guidance and no encoded-ampersand alteration.
- All29 form-related start-tag/attribute sets equal the pre-batch native raw form; fields/action/limits/button/status/contact links preserved. Exact raw inverse restores the entire pre-batch source.
- diff-check and final local/remote/merged tree checks required at release. App/API/public/dependency/lock files unchanged. Full DrSun application build not rerun locally for this independently tested WP-script change; actual Vercel archive status belongs in issue7.
- No browser pixel/keyboard/full-WCAG certification, successful real enquiry, email, synthetic analytics, ranking gain or qualified-enquiry uplift claimed.

## Evidence and preferred rollback

- reports/backups/20261020-contact5034-error-guidance-before-and-patch.json — original pre-batch envelope and historical first insertion.
- reports/backups/20261020-contact5034-rendering-correction-before-and-patch.json — intermediate envelope/corrective step.
- reports/backups/20261020-contact5034-error-guidance-after.json — FINAL envelope, ordinary decoded-live proof, final forward and preferred direct reverse.

Use the FINAL file's preferred_reverse to remove the entire final insertion after a fresh unique/current-context guard, preserving later edits. Verify raw/meta, rendered script and ordinary decoded public code. Do not replay the initial forward patch or restore the intermediate rendering issue. Git revert alone does not restore WordPress. Normal WordPress revisions remain available; no revision ID invented.

## Queue and sources

COMPLETE: the contact form's explicit error guidance, subject to actual release proof in issue7. READY: return to a substantive cosmetic decision/navigation gap rather than further prose-only opening edits. WAITING: original clinical input for held breast implant-record/imaging/piercing questions; native439 supported wrapper/rendering control; PR252 style-owner andPR257 final-prose approval. Measurement/authentication/crawl/GBP gates in6283341368 remain unchanged, with no early repeat. No new independent link or native AI-response evidence.

Elective playbook prioritises usable enquiry paths and observable conversion obstacles. W3C primary guidance refreshed20Oct: https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html (displayed update9March2026) supports useful correction suggestions. This is a specific form-feedback improvement, not a certification or forecast of enquiry/ranking gains. SCS sent-once, HealthXchange exclusion, ISAPS baseline/extra-request closure and user-reported owned LinkedIn status preserved; no outreach/automation/purchase action.
