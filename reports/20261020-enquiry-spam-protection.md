# Shared enquiry spam protection — 20 October 2026

## Problem and resulting behaviour

Dr Sun supplied four unwanted enquiry-email screenshots. They show repeated promotional links submitted through Lymphedasia's contact form, with different phone numbers and enquiry categories. The common email handler is `app/api/contact/route.ts` on DrJeremySun.com; both sites use it. The existing hidden-field trap alone did not stop these submissions.

The server now rejects links to the three reported spam destinations and identifiable gambling/promotion URL patterns before calling the email provider. Matching is local text inspection: no submitted URL is visited and no medical message is sent to a third-party classifier. Rules operate on destinations, rather than message language, nationality or all `.ru` domains. Normalised URL parsing includes subdomains, uppercase, Unicode full-width scheme characters and encoded gambling paths.

Additional safeguards:
- Reject duplicate email/message combinations for 15 minutes, reserving them before the asynchronous email call to cover simultaneous submissions. A timeout still reserves the request because upstream acceptance is uncertain.
- Allow up to three different submissions per email address per 15-minute window and twenty per Vercel-provided client IP. Return a clear 429 with Retry-After when throttled. The trusted Vercel header is used only on Vercel.
- Store at most 4,096 short-lived hash/counter entries. No enquiry text, email, phone or full request is added to the cache or application logs.
- Enforce the existing site-origin allowlist when an Origin header is supplied; missing Origin remains compatible with native clients. This is an additional check, not authentication against bots that forge headers.
- Bound streamed bodies to 64 KiB even without Content-Length, reject non-object/non-string payloads, and keep existing field limits, hidden-field trap and escaped email output.
- Mark JSON responses no-store. Blocked requests never acknowledge an accepted enquiry, so they cannot count as accepted-form leads.

The repeat counters are **supplemental per-instance protection**. They reset on cold starts and are not shared across Vercel instances or regions. They are not a durable distributed quota or complete bot protection. The content rules are stateless and apply across instances. A new spam domain or substantially different spam can require an additional rule; no claim of eliminating all future spam is made. No paid anti-spam service, CAPTCHA account, tracking tag or new infrastructure was introduced.

## Compatibility and validation

No client or WordPress mutation is necessary: both existing forms continue to reach the protected server. Native URL-encoded and multipart submissions, fixed allowlisted success/error redirects, Lymphedasia CORS and existing JSON accepted-event semantics are retained. Explicit spam/error responses preserve the client-side entered fields. The Lymphedasia script uses its existing generic error/contact-alternative message for non-success responses.

All 15 API tests pass with a mocked email provider. Cases cover the four supplied URL patterns using synthetic identities and shortened illustrative paths, URL-normalisation evasions, legitimate multilingual/overseas/medical-referral messages, concurrent duplicate suppression, email/IP limits and expiry, wrong origins, malformed and oversized bodies, multipart/native forms and provider failure/deadline handling. Test data contains no supplied sender address, phone numbers or copied full email. All blocked-case provider-call counts are zero.

TypeScript, normal production build and its configured mocked form/analytics/navigation tests and source/rendered-output audits pass. No real enquiry, provider email, synthetic analytics event or spam-link visit was performed. Local dependencies were copied from the existing tested checkout; no install, dependency or lock-file change.

## Scope, prior version and rollback

Base main: `e76c9773624e1bff984dbd48c712bfd523e473f1`.
Original route blob: `1ad4829059ae051a1b769d20b25b8b0c82b61e60`.
Original API test blob: `8dea6a3a37a4aebd6b254e56cb33bacfc4035279`.
The base commit retains exact originals as the Git backup. Isolated branch `fix/enquiry-spam-protection-20261020`; checkpoint6283209631. Scope is route, regression tests and this report only. Existing clinical content, review dates, forms, routing configuration and WordPress remain untouched.

Rollback: reconcile later changes to the handler, revert this isolated merge or restore only its changes from the recorded base, rerun the mocked API tests/build, then release normally and verify the deployment. A deployment rollback also removes these filters; it does not remove emails already received. No inbox deletion or forwarding/filter rule was requested or performed.

Actual PR, final commit, preview/production states and ordinary live checks are recorded in issue7 after release, rather than treating a planned publication as completed.

Primary implementation references checked 20 October:
- https://cheatsheetseries.owasp.org/cheatsheets/Denial_of_Service_Cheat_Sheet.html — cheap validation, bounded request resources and layered controls.
- https://vercel.com/docs/headers/request-headers — platform-provided forwarded-client headers and spoofing considerations.
