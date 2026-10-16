# Lymphedasia accepted-enquiry contract — 17 October 2026

Base main `dea9bf7fcedeeb6211c77f0df8de2d967be5364f`; isolated branch `seo/lymphedasia-accepted-receipt-20261017`; issue7 checkpoint6223722814. Reconciled issue7 through6222674888, current main, latest17Oct report and no open/overlapping work. Prior PR230 local resources and earlier Dr-site receipt/provider-deadline work remain closed.

## Demonstrated cross-site fault

The13October shared API distinguishes `{ok:true,accepted:true}` after provider acceptance from the deliberate silent honeypot `{ok:true,accepted:false}` response. The Dr-site client already checks that contract. Lymphedasia's separately installed contact-page script still accepted `ok:true` alone and unconditionally emitted its existing `generate_lead` event. Its old tests likewise used only `{ok:true}` as the accepted fixture.

Fresh authenticated page5034 `content.raw`, modified6October, matched the versioned installation script exactly. The actual public contact page returned200; its optimiser serves inline scripts as `data:text/javascript;base64,...` sources. An initial inline-body-only extractor found no candidate because of that encoding, NOT because tracking was missing. The decoded actual tracking source confirmed the old gate. No script-loading fix was invented.

This is a source-demonstrated contract/measurement fault, not proof of a historical spam count, failed patient enquiry, email-provider outage or measured conversion loss. The existing client-side filled-honeypot check still prevents those ordinary client submissions; the server's explicit false response must nevertheless remain safe and non-counting. No production POST, email or synthetic analytics event was sent.

## Bounded implemented change

| API/transport outcome | Receipt and fields | Measurement |
| --- | --- | --- |
| HTTP success, `ok:true`, boolean `accepted:true` | Existing received message/reset and repeat-submit protection retained | One existing fixed `generate_lead` event |
| HTTP success, `ok:true`, boolean `accepted:false` | Generic anti-spam receipt/reset and repeat-submit protection; no revealing rejection detail | No lead |
| Missing/non-boolean acceptance, invalid JSON, non-success or missing/false `ok` | Unconfirmed receipt; fields retained; contact Astrid before submitting again | No lead; no automatic retry |
| Network exception | Same cautious unconfirmed message and retained fields | No lead; no automatic retry |

Only three bounded logical areas in the existing installation script changed: require a boolean acknowledgement, gate tracking strictly on `accepted===true`, and replace the two uncertain/error messages with contact-before-resubmitting wording. The shared API/provider, native action/method/redirect fields, client honeypot, validity and concurrency checks, accepted receipt, click events, analytics exception containment, existing measurement ID and private-data exclusions are unchanged. No timeout, retry, idempotency, default monetary value, duplicate tag, new key event, clinical content, date/schema/metadata or service claim added.

## Regression and release validation

The existing actual-script VM harness uses mocked DOM/FormData/fetch/analytics only. Accepted fixtures now reflect the real API contract. Three new tests failed BEFORE the fix (11pass/3fail): explicit false incorrectly counted, missing acceptance incorrectly counted/reset, and uncertain wording encouraged another attempt. All14pass AFTER. Ten malformed/missing/incorrect-contract fixtures assert no receipt/reset/event, one request and retained fields. Explicitfalse separately preserves the generic receipt/no lead. Existing success, concurrent/double submission, analytics exception, client honeypot, native fallback, duplicate-listener and contact-click separation tests still pass.

Added the Lymphedasia suite to the normal `npm run build` test list, plus a direct `test:lymphedasia-contact` command. This guards the separately installed client in the ordinary Git build, not only an ad hoc test. No dependency or lockfile change. Both current API and both client suites are tested; no deployment executes a real contact request.

Full local validation passed:46mocked API/form/analytics/navigation/motion tests in the normal build (32existing+14WP), credential terminology68files/no findings,13contrast cases, Next47routes, TypeScript, LLM39bullets/26URLs, internal-fragment/navigation/comparison audits, FAQ30routes, sitemap/date parity and diff check. A preceding combined34test API/Dr/WP run also passed. No physical-browser, screen-reader, provider-delivery or actual collected-event claim from these mocks.

Repository scope: package build/test commands, the versioned WP installation script/test, this report and three JSON backups. `app/`, `public/`, dependencies, lockfile and shared API are unchanged. Exact local/remote tree equality, fresh main/mergeability, exact-head READY preview and expected-head merge required; exact-main production and immutable proof in issue7. Vercel build status does not itself publish or verify WordPress. No protected-preview bypass/share link.

## WordPress safeguards and actual publication

- Ordinary WP rolling capacity69/100used31remaining before selected batch. Fresh authenticated administrator, WordPress6.9.10/WPVibe1.20.1/content_edit. Supported edit-content and complete Gutenberg/dependency documentation read. Page5034 is one existing Gutenberg HTML block, empty Elementor mode/data. Its actual format governs despite sitewide Elementor hint; no builder conversion.
- Complete selected BEFORE envelope (id/modified/status/link/title/content/author/featured_media/template/meta), modified `2026-10-06T20:13:45`, and exact script/reverse patch remotely archived BEFORE live save: `58d7bf24bb83cf890cda76ad112a3f3ca2f66e91` and `f8028853242ae725bc8fa0e4b438734cb69bf78f`. Paths `reports/backups/20261017-0400-lymphedasia-contact5034-{before,patches}.json`.
- Immediate repeated full raw/non-rendered-field guard exact. One supported match-once content/edit against the existing script returned edited/replaced1, no validation error, timeout or unknown write. No full-body PUT, raw SQL, quota reset, alternate credential or paid upgrade.
- Complete AFTER exactly expected; reverse script replacement restores BEFORE byte-for-byte. Everything outside that script, including HTML/block comments, form fields/action/nativePOST/redirects, status region, contact instructions, Paragon details and links, remains byte-identical. Title/status/author/media/template/meta parity passes. Modified `2026-10-16T20:06:52`UTC, i.e.17October Singapore, is an operational change timestamp, not a clinical-review date. AFTER archived `31481431c8fb383ff17005c74239e12a544232f2`, path `*-after.json`.
- Fresh ordinary live https://lymphedasia.com/contact/ returned200/oneH1/selfcanonical. Exactly one decoded actual enquiry script matches the tested local installation source byte-for-byte after trimming; it parses and contains both boolean guard and strict accepted-event gate. Native methodPOST/action https://www.drjeremysun.com/api/contact retained; exactly one existing G-B2Z67J9YDP loader, current Paragon/65303573 visible. No real enquiry or analytics execution. Earlier loader-only observation was reconciled before saving.
- Normal post revisions provide another recovery path, no revision ID invented. WP rollback: read/guard current source, apply recorded reverse script patch through supported edit, read back and verify served decoded script. Git rollback of source/test/build/report does NOT restore WordPress. Preserve future concurrent changes. No rollback required by current checks.

## Guidance and prioritisation

Fresh17October primary guidance: https://developer.mozilla.org/en-US/docs/Web/API/Response/ok (HTTP status is not application acceptance) and https://support.google.com/analytics/answer/13128484?hl=en (measure an identified important action, then mark it as a key event). Existing prospective registrations remain unchanged; no backfill. The elective SEO playbook prioritised a demonstrated enquiry/measurement fault over duplicate content. SEO foundations' no-invented-metrics/spending boundary retained; no Ubersuggest report/credit/project action or new ranking number.

This independent investigation followed two discovery-only checkpoints. It found a separate WordPress client-contract drift, not a repeat of the16Oct Dr-site fix or a new hypothetical client timeout. Ready work advanced without waiting for analytics, moderation or new clinical answers. No evidence that this repair improves ranking, enquiries or AI citations by itself; accepted provider response is not inbox delivery, qualification or booking.

## Ranked next queue and waiting gates

| Priority / URL | Observed gap / source | Action, owner and next eligible gate |
| --- | --- | --- |
| Lymphedasia `/contact/` | Actual old script/shared API mismatch | This batch complete/live; source and regression build recorded. Revisit only a new fault. |
| `/lymphedema-and-pregnancy/` | Safety/triage hold6204059809 | HELD original clinician/source wording; no fabricated protocol. |
| Cancer1635 and men3085 | Risk/population/treatment/follow-up/source limits | HELD identified evidence/clinical review; completed reader repairs closed. |
| Six mental/emotional-support URLs in17Oct resource report | Overlap and unidentified clinical evidence | Need query/page/canonical/inbound+clinical review before consolidation; no seventh page or blind redirects. |
| Dr-site tummy-tuck protocol questions | Actual comparator drain-free/aftercare details not DrSun facts | HELD original clinician scope/protocol; broad current questions already answered. |
| PR228 external profile/editorial drafts | Three ready drafts, not external authority placements | UNSENT; explicit sending/current-recipient/account-policy/new-clinical-input gates. |

GSC/GA4 payment_required17Oct00:05, next>=18Oct00:06/known restoration/authorised export; no early repeat/purchase, same crawl block. Semrush next only known units restoration/export. GBP next>=17Oct10:07:20, existing rapid-recovery post alreadyLIVE, no recreation. Specific LCP trace eligible17Oct/usable access. Native fixed AI responses unavailable; user-observed recommendations ONLYlymphoedema. Final17October baseline assessment still due; average<=10 is not verified live rank, referral is not citation, clicks/accepted events are not qualified enquiries/consultations. Task not complete or fully blocked; no automation change.
