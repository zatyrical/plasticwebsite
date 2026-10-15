# Enquiry provider deadline and uncertain receipts — 15 October 2026

## Evidence and disposition

Read issue #7/current main `24522de1effb4fdd33a89b6504daad611211b472`, the latest navigation report and prior enquiry analytics work before choosing this independent batch. No open PR or active checkpoint. Prior contact analytics fixes are retained, not repeated.

`app/api/contact/route.ts` awaited the Resend request without an application-defined deadline. Network exceptions returned a definite non-delivery receipt encouraging resubmission, although provider acceptance can be uncertain. A non-2xx branch also awaited/logged the provider error body outside the fetch catch: a rejected or stalled body could prevent the intended controlled receipt. These are source-demonstrated failure paths, not evidence of an actual patient incident or measured provider outage.

## Implementation

- Apply a server-only `AbortSignal.timeout(15000)` to the existing provider fetch. Fifteen seconds is an explicit operational choice, not a provider SLA, observed latency or whole-request wall-clock guarantee. No client timeout or automatic retry.
- Exceptions and non-2xx responses return HTTP 502 with: “We could not confirm that your enquiry was sent. Please contact the clinic before submitting again.” Aborting a request does not prove the provider did not accept it.
- Log a fixed exception label or HTTP status only; do not await or log provider error bodies. This also closes the observed error-body failure path.
- Keep successful HTTP-OK provider acknowledgement, `accepted:true`, clinic email payload, existing validation/honeypot, CORS and safe native-form 303 redirects unchanged. Existing native-form error landing text is not changed; only JSON consumers receive the new detailed receipt. Provider acceptance is not inbox delivery or a qualified enquiry.
- No clinical content, review/publication dates, metadata, URL, image, GA4 tag, key-event registration, GBP or WordPress changes. No idempotency/retry scheme added: that would require a separately designed stable request identity and retention contract.

## Validation and limits

New six-test actual-route suite transpiles the real TypeScript with synthetic configuration, mocked `next/server` responses and fully replaced fetch. It checks accepted response/deadline signal, abort receipt, network exception, non-2xx unreadable body, validation/honeypot/config guard and allowed/unsafe native redirects. Abort is triggered deterministically through a real AbortController injected as the timeout factory; tests assert the production factory receives 15000 ms, not a real 15-second wait.

Before implementation: five new tests failed and the validation test passed. After implementation: six API tests, nine actual-form/analytics tests and five navigation/CSS tests all pass (20 total). Added form regression verifies the actual component displays the provider uncertainty text, retains fields and emits no lead or automatic second request. The real provider and native network timeout are not exercised.

`npm run build`, `npm run lint`, FAQ parity, sitemap/date parity and `git diff --check` pass: 45 routes generated, 67 credential-audit files with no findings, 39 LLM bullets with no duplicate/missing routes, 767 fragments across 39 pages, navigation audit 40 HTML files/no failures. No dependencies changed.

Publication uses an isolated branch, expected-head guarded PR and exact-head READY preview before merge. Exact production commit/deployment and ordinary public GET verification are recorded in the completion comment on [campaign issue #7](https://github.com/zatyrical/plasticwebsite/issues/7). No protected preview bypass, live form POST, real email, analytics test event or credential inspection. Public GET/deployment identity is release evidence, not a real delivery test or proof of improved enquiry/ranking performance. Rollback: revert this merge only after checking later concurrent work; do not undo prior contact analytics or navigation fixes.

## Guidance coverage

ElectiveSEO playbook applied: improve the actual patient enquiry journey, use observed faults, retain measurement boundaries and avoid content churn or unsupported growth claims. No new ElectiveSEO caption/video inspection or competitor search-demand assertion in this batch.

Primary sources checked 15 October:

- [Node.js AbortSignal.timeout](https://nodejs.org/api/globals.html#static-method-abortsignaltimeoutdelay): timeout signal semantics, supported since Node 16.14/17.3. No Node upgrade required.
- [Resend idempotency keys](https://resend.com/docs/dashboard/emails/idempotency-keys): provider duplicate-handling mechanism; not implemented or claimed here. No retries without a stable design.
- [Google people-first guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content): preserve useful site experience; no direct ranking benefit inferred for this reliability fix.
- Vercel deployment skill and live-status reference: authenticated exact-project/commit status, no protected access workaround.

## Ranked next queue / waiting gates

| Priority | URL / observed gap | Source and action | Status / next eligible |
| --- | --- | --- | --- |
| 1 | Lymphedasia `/lymph-node-transfer-and-lymph-vessel-flaps/`, page 664, no consultation/comparison path | Existing approved phrase in widget `1cc08cd` plus neutral related-reading link; preserve three existing paragraphs and all clinical claims | READY content, WAITING capacity >=15 Oct 11:00 SGT. Last authorised check 07:00:06: 99/100 rolling budget. Fresh installed-builder version/source/backup/expected-content guard and supported save required; archive is not a current guard |
| 2 | `/compression-bandaging-in-lymphedema-management/`, unlinked “maintenance garments” | Link existing wording to existing garment guide, no new medical answer | Same capacity gate and fresh backup/builder guard |
| 3 | `/pneumatic-compression-pump-therapy-for-lymphedema-relief/`, seven long sections without contents | Add meaningful in-article contents/unique heading targets, preserve clinical text and sources | Same capacity gate; distinct from already edited older pump article |
| 4 | `/supportive-care-for-lymphedema/`, local peer-support resource missing | Neutral link to first-party Lymphatics Association of Singapore; no endorsement/event/eligibility claim | Same capacity gate, reverify source and current page before edit |
| Held | Shared contact privacy notice | Accountable entity, public DPO contact and actual processing/retention facts needed before accurate policy; see comment 6179406242 | Clinician/operator factual input, no invented policy or legal verdict |
| Held | Rib donor assessment / wound and pump clinical questions | Exact clinician answers needed; navigation does not approve legacy clinical claims | Do not fill from competitor text or memory |

GBP next eligible >=15 Oct 09:08 SGT with actual authenticated access; no new pending edit now. Analytics entitlement expired: next official access/export checkpoint 16 Oct and final 17 Oct; no paid upgrade or hourly retry. Eyebag/profile index >=16 Oct 09:00 SGT. Native AI-response testing unavailable; referrals/web search are not citations. Keep final 17 October baseline assessment and distinguish GSC average position, live rank, clicks, successful events and qualified enquiries.
