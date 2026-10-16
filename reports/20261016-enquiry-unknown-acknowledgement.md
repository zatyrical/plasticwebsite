# Uncertain enquiry acknowledgements — 16 October 2026

Base main `1b49c21f9427f60e948752c970c5e5bc70765040`; isolated branch `seo/enquiry-unknown-ack-receipt-20261016`; issue7 in-progress checkpoint6215011952. Reconciled PR226 completion6214172156, current main, latest reports and no open/overlapping PR before editing. No repeated WordPress, source-link, contrast or metadata work.

## Observed fault and bounded change

Current `app/ContactForm.tsx` parsed JSON with a null fallback, then treated every successful HTTP status as a received enquiry: reset fields, show the received message and call the existing tracker. The tracker already required the explicit boolean `accepted:true`, so an unreadable, missing or non-boolean acknowledgement emitted no lead but still erased the entered details and asserted receipt.

This is a source-demonstrated edge case, not evidence of a real failed enquiry, patient incident, provider deliverability problem or measured conversion loss. No production POST, test email or synthetic GA4 event was sent.

Read the13October honeypot integrity and14October analytics-boundary reports before changing the contract. The intentional silent honeypot response is explicit `accepted:false`; it MUST keep the generic receipt and emit nothing. The previous test combined that deliberate behaviour with malformed JSON. This change separates the two cases, not the anti-spam design.

Inserted one client guard before reset: successful HTTP status with a non-boolean/missing `accepted` value receives an uncertain status. It retains fields and asks the visitor to contact the clinic before submitting again. It neither asserts delivery nor asserts non-delivery, and does not automatically retry or emit a lead.

| Response case | Receipt / field behaviour | Tracking / requests |
| --- | --- | --- |
| HTTP success, `accepted:true` | Existing received message and reset unchanged | Existing one accepted-lead event; one request |
| HTTP success, explicit `accepted:false` | Intentional generic honeypot receipt and reset unchanged | No lead; one request |
| HTTP success, unreadable JSON / missing / non-boolean acknowledgement | Uncertain message, details retained, contact before resubmitting | No lead; one request, no retry |
| HTTP rejection or network exception | Existing error/uncertain message and field retention unchanged | No lead; no automatic retry |

API route, provider payload,15second deadline, honeypot detection, allowlisted native POST/303 fallback, operational noindex receipt pages, contact destinations, analytics implementation/privacy boundary and all clinical content are unchanged. No new service, claim, date, schema, tag, dependency or paid feature.

## Fail-before / pass-after evidence

Extended the existing VM harness that transpiles and runs the actual ContactForm and tracker with mocked React state, FormData and fetch. The new unknown-acknowledgement test first failed against base code with `sent !== error` (12 of13 component/analytics tests passed). After the guard,13 of13 pass.

Seven unknown fixtures cover unreadable JSON, an empty object, and `accepted` equal to null, string true, string false,1or0. Each asserts uncertain wording, no received assertion, zero resets, zero lead events and exactly one request. Separate explicit-false test protects the intentional honeypot receipt. Existing accepted success, analytics exception containment, private-data exclusion, HTTP/network errors, provider uncertainty and native receipt tests still pass.

Full validation PASS:32 mocked API/form/analytics/navigation/motion tests;68 credential terminology files;13 existing contrast cases; Next build47routes; LLM39bullets/26URLs;789 fragment links across41pages;42 navigationHTML files;12 accessible comparison tables; TypeScript lint; FAQ parity30routes; sitemap/date parity; `git diff --check`. No actual browser/provider-delivery or real enquiry success is inferred from these mocks.

## Evidence and release safeguards

Fresh primary technical guidance checked16October:

- https://developer.mozilla.org/en-US/docs/Web/API/Response/ok — HTTP success means a status in the200–299range, not an application-specific acknowledgement.
- https://developer.mozilla.org/en-US/docs/Web/API/Response/json — JSON parsing can reject; HTTP success alone does not guarantee a parseable service contract.

Elective SEO playbook used to prioritise a demonstrated enquiry-path fault over completed content churn, preserve successful-enquiry measurement and separate implementation evidence from business outcomes. Deployment checklist used for exact project/team/commit/environment and release checks.

Publish only after local/remote tree equality, exact-head previewREADY/GitHubsuccess, fresh unchanged-main/mergeability and expected-head merge. Intended Vercel project `prj_UNSdPXhVL2VaH0nRm72Tz1TesKY4`, team `team_3GpSXJDEbGsUnL96w4vKefZ0`. Then confirm exact merged SHA productionREADY, ordinary public homepage/priority-page HTML and referenced client bundle containing the new contract guard/message; check native form/status markup and JSON-LD parity. No protected-preview bypass/sharelink and no live enquiry submission. Immutable release/live proofs belong in issue7.

Rollback: revert this isolated PR on a new branch, repeat tests/build and the guarded publication process. It changes only ContactForm, its regression test and this report; no WordPress rollback or tracking-tag removal is needed. Do not reset unrelated concurrent work.

## Discovery disposition and next queue

| Priority / URL | Observed evidence / approved source | Status and next action |
| --- | --- | --- |
| Shared enquiry form on https://www.drjeremysun.com/ and procedure pages | Actual client/API and13/14October approved implementation contract | Implemented above; close after exact-head deployment and public bundle checks. No further retry/timeout/tracking rewrite justified. |
| https://www.drjeremysun.com/24-hour-rapid-recovery-breast-augmentation-singapore and face/body/BII source paths | Current main and7–14October source/clinical reports already cover reference provenance and contextual navigation | CLOSED repeated source-link proposal; no re-audit edits or new article. |
| Shared navigation and field limits | Existing13October skiplink/landmarks,15October Escape behaviour; input max lengths120/160/60/2000 match current server limits | CLOSED repeated accessibility/length proposal; no implementation gap found. |
| https://lymphedasia.com/lymphedema-and-pregnancy/ | Existing clinical safety/triage hold6204059809 | HELD clinician-approved wording, not imported protocols or a fabricated review date. |
| https://lymphedasia.com/lymphedema-in-men-vs-women/ | Existing risk estimate lacks identified study/population/treatment/follow-up in the paragraph | HELD source/clinical context. Prior skin/sports/nutrition and other clinical holds remain. |
| https://lymphedasia.com/lymphedema-and-cancer-treatment-management/ | Prior19:00 public inspection: four current contextual links; manual-drainage/compression URL works at its own canonical. Malformed neck-cancer sentence is a copy candidate;30% estimate and prevention/compression/research content need source/clinician context | Next authenticated investigation only after ordinary capacity eligibility>=16October21:00SGT, fresh builder/raw backup and source guard. Combine a coherent supported batch; do not replace the working URL blindly or generalise treatment-specific risk. |

Waiting gates retained: GSC/GA4 `payment_required` confirmed16October00:05, next17October/known restoration/authorised export; crawl timeeligible but same access blocker. GBP next>=17October10:07:20SGT, rapid-recovery post alreadyLIVE, no recreation or assumed public propagation. Page-specific LCP trace next17October/known usable access, not repeated aggregate lab numbers. WordPress ordinary capacity>=16October21:00SGT, no early poll/reset/quota workaround. Native fixed-prompt AI responses unavailable; referrals and ordinary web search are not AI citations. Final17October baseline assessment must distinguish average position<=10 from verified live rank, events from qualified enquiries and referrals from verifiable citations. No new ranking, enquiry or AI-mention improvement claimed here.
