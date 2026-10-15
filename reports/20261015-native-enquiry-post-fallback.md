# Native enquiry POST fallback — 15 October 2026

Base main: `ceae8b61dfbbb5ab442500cbf56245f2739132ba`. Isolated branch: `seo/native-enquiry-post-fallback-20261015`. Read issue #7 through 6184924981/current main/latest pump report; no open PR or overlapping edit. In-progress checkpoint 6185563128. No repeat of the completed status-region, labels, analytics, timeout or WordPress navigation work.

## Observed independent fault

Ordinary live GETs of homepage and rib-rhinoplasty guide both returned `<form class="contact-form">` with no native action or method. The shared component source agreed. HTML's missing method defaults to GET: with JavaScript unavailable, native submission would put successful controls in the current page URL instead of using the enquiry API. This is source/markup evidence of a fallback failure and unnecessary URL exposure risk, **not evidence of actual patient exposure, a measured incident, analytics collection or a legal verdict**. Existing GA URL/referrer sanitisation remains untouched.

The API already handles URL-encoded native POST and allowlisted 303 success/error redirects. No provider, origin, validation, redirect allowlist, honeypot, timeout or email handling change was needed.

## Implemented

- Shared form now declares `action="/api/contact" method="post"`. Native browser validation remains enabled.
- Two fixed hidden redirect fields point to `/enquiry-response/received` and `/enquiry-response/unconfirmed` on the canonical production host. No user fields, query strings or fragments are appended.
- One server-only receipt page component prerenders only those two status paths. Unknown status returns not-found; no submitted content or arbitrary query is reflected. Uses existing typography/layout and global navigation, with the maintained WhatsApp/contact routes.
- Both operational receipt pages are **noindex, follow**, excluded from sitemap/LLM procedure lists. They are not keyword content pages. The received page distinguishes service acceptance from an appointment and warns that opening the page directly does not send an enquiry. The uncertain page asks patients to contact the clinic before submitting again.
- Receipt visits emit no `generate_lead`; no new analytics tag/key event or success-from-URL inference. The existing JavaScript handler still prevents native submission and uses JSON/fetch with the same successful-acknowledgement tracking. Hidden redirects are extra payload fields but ignored for JSON redirect decisions; the clinic email payload is unchanged.
- No clinical text, dates, prices, images, credentials, public practice details, global robots or procedure metadata changed. No client timeout, retry, request-id retention policy or idempotency scheme introduced.

The no-JavaScript `pageUrl` field remains empty because it is normally populated on hydration; source attribution may be unavailable in that fallback. Native fallback conversions are not recorded as GA leads. Provider acceptance is not inbox delivery or a qualified booking. Existing honeypot/malformed-request responses can still be JSON; no anti-spam semantics were changed.

## Validation

The new actual-component fallback regression failed before implementation (undefined method versus expected POST). After implementation, 24 mocked tests pass: seven actual-route tests, twelve form/analytics/receipt tests and five navigation tests. Covers fixed native 303 routes, no enquiry data in their URLs, JSON mode retaining JSON responses, unchanged analytics behaviour, no receipt lead emitter, noindex/static status list, uncertainty instructions and unknown-status rejection.

Tests transpile actual sources with mock browser/framework/email dependencies and synthetic invalid-domain contacts. **No live form POST, real email, analytics event or credential inspection.** No physical browser/no-JavaScript delivery certification, field-CWV or enquiry/ranking uplift claim.

Production build generated 47 routes. TypeScript, FAQ parity, sitemap/date parity and diff checks pass; credential audit 68 files/no findings, LLM source 39 bullets/no duplicate or missing routes, 785 internal fragments across 41 static pages, navigation markup 42 HTML/no failures. Built output contains **33 shared forms**, each with native POST/action and fixed redirect fields. Both receipt pages have one H1/noindex and are absent from sitemap.

React review: no new client boundary, effect, shared mutable state, dependency or fetch; receipt content stays server-rendered, static and allowlisted. Existing form controls, labels, native validation, status region and submission handler preserved. Vercel exact-head READY preview, expected-head guarded merge and ordinary live GET proof belong to the completion comment on [issue #7](https://github.com/zatyrical/plasticwebsite/issues/7). No protected-preview bypass.

Rollback: revert this isolated PR after reconciling current main; base retains old shared component/tests and receipt pages can be removed with the same revert. No external data write/migration or WordPress rollback required. Do not roll back earlier analytics/API safeguards.

## Sources and next queue

ElectiveSEO playbook applied to an observed consultation-path failure, not speculative ranking tactics or content churn. Current primary sources inspected 15 October:

- https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-method — GET default, POST body and form-submission semantics.
- https://support.google.com/analytics/answer/6366371 — keep PII out of URLs/titles; existing GA sanitisation is separate from fixing native navigation.
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params and https://nextjs.org/docs/app/api-reference/functions/generate-metadata — static allowlisted paths and noindex metadata. Installed Next 16.3.4 retained; no upgrade.
- Vercel React/deployment guidance — keep server-only receipt rendering, verify intended exact project/commit and preserve release guards.

| Priority | URL / observed gap | Action / approved source | Status / next eligible |
| --- | --- | --- | --- |
| Complete | Shared forms on homepage/procedure pages | Native POST plus fixed noindex receipts; observed live/source fault | Release proof in issue #7; no repeat edit |
| Held | Lymphedasia `/lymphedema-elderly-patients/` | Confirm attributed quotation, clinical scope and actual outcome-study sources | Exact clinician input, no citation guessing |
| Held | Prior filler / rib donor / implant records / recovery milestones | Original clinician/operator workflow | No imported protocols or invented policies |
| Held | Shared privacy notice | Accountable entity, public DPO and actual processing/retention facts | This technical repair does not replace a privacy notice |
| Discovery | Different priority procedure/patient question | Reconcile current reports and inspect actual page | Next independent investigation, not global ready exhaustion |
| Waiting | Eyebag/profile index | Ordinary authorised check | 16 Oct >=09:00 SGT |
| Waiting | GBP rapid-recovery post 3334046696687541456 | Accepted PROCESSING, not recreated | 16 Oct >=10:05 SGT |
| Waiting | Reporting entitlement/export, final baseline assessment | Authorised access only, no paid workaround | 16 Oct; final 17 Oct |

No WP/GBP/analytics/crawl poll in this batch. Native AI-platform responses remain unavailable. Publication proves implementation, not improved ranking, qualified enquiries or AI citations.
