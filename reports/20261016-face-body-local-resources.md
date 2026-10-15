# Face/neck and body-contouring local patient resources — 16 October 2026

Base main `24a61a520cb5cb08edd732a528f8e47de2f4214b`; branch `seo/face-body-local-resources-20261016`; checkpoint6202134718. Latest issue7 through6201276883/main/PR216 report and12–14October face/body reports read; no open PR or active overlap.

## Discovery and supported scope

Distinct patient-question candidate: what do SMAS, deep-plane, mini facelift and deeper neck terminology mean for the actual proposed operation? Actual Singapore practice pages inspected:
- https://aquilamedicalcenter.com/facelift/
- https://www.pearlplasticsurgery.com.sg/facelift-surgery-in-singapore/

Current DrSun guide already answers broad skin/deeper-tissue versus volume/surface concerns, face versus neck, isolated neck planning, alternatives, scars, recovery, risks and costs. Those broad questions remain CLOSED, not new articles/FAQs/diagrams. Specific named technique comparison and DrSun's actual offered approach require original clinician input; competitor descriptions/timelines/outcome or superiority claims were not imported. Candidate presence on competing pages is discovery evidence, not verified search demand or ranking cause.

Interview prompts retained, not sent: (1) Which approaches do you actually offer, and how do you explain their names? (2) What anatomy or previous treatment changes the choice and the scope of neck work? (3) What risks, limits and recovery differences should patients discuss rather than assume from a technique label? No answer inferred from training/memory.

Separate observed navigation gap: the current face/neck risks resource block links ASPS only, and the body-contouring risks block links ASPS/NHS only. Neither directly links the corresponding SAPS patient pages. Earlier scar diagram research cited SAPS in an internal report but did not expose it to the patient.

## Implemented

- Added a neutral Singapore patient-information paragraph with direct SAPS face-lift and neck-lift links beside the face/neck risks resources.
- Added the corresponding SAPS liposuction path beside the body-contouring risks resources.
- Retained all existing ASPS/NHS links, clinical wording, FAQ answers, images/captions, technique-neutral advice, form/tracking/robots/title/description/canonical and clinical-review dates.
- Advanced only these two pages' actual modification and sitemap dates to16October; this does not claim a new clinical review.

Primary resources verified16October by ordinary public GET: HTTP200/self-canonical, named SAPS identity and relevant patient content:
- https://www.saps.org.sg/face-lift
- https://www.saps.org.sg/neck-lift
- https://www.saps.org.sg/liposuction

The search/open extraction for face-lift returned an old three-month WORK IN PROGRESS excerpt. Current direct public HTML instead contains a substantive face-lift article attributed to Dr Chia Hui Ling, including rhytidectomy, options and incision planning, and no WORK IN PROGRESS text. Current ordinary source, not stale cached excerpt, determined the link decision. No claim that every recommendation/timing on a linked resource is DrSun's protocol, endorsement or a Singapore legal requirement. No source text or new clinical definition copied.

## Guidance and validation

Elective SEO playbook: independently check evidence, connect relevant existing resources and close unsupported clinical expansions. Current Google link guidance checked16October: https://developers.google.com/search/docs/crawling-indexing/links-crawlable . Descriptive native hrefs aid navigation; outbound links do not themselves establish authority, rankings or AI citations.

Full build47routes/24mocked API/analytics/nav regressions, TypeScript, credential/source/fragment/navigation audits, FAQ/date parity and dedicated `node scripts/audit-face-body-local-resources.mjs` required/passed before release. Exact reverse-source comparison protects every existing clinical paragraph/FAQ and other procedure objects: only declared paragraphs/wrapper and two modification/date pairs may change. Generated checks verify three exact resource hrefs, oneH1/self-canonical, modification16October and unchanged clinical review6September. Static server rendering; no new hook/client JS/dependency/fetch. No physical-browser/screen-reader/field-CWV claim.

Release: exact-head previewREADY/GitHub success, unchanged-main and expected-head merge guards, exact-main productionREADY, then ordinary live page/sitemap verification. No protected preview bypass. Proof recorded in issue7. Rollback: revert this isolated PR, rebuild and verify removal of only these resource paragraphs and restoration of prior dates.

## Ranked queue and waiting

| Priority | URL / observed gap | Source / action / status | Next eligible |
| --- | --- | --- | --- |
|1| /face-neck-lift-singapore; /body-contouring-liposuction-singapore | Verified SAPS resources absent from patient block; implemented neutral links, validate/release | This batch |
|2| Lymphedasia advocacy3986 | Five unlinked practical topics/no peer resource; approved phrases + verified association, PR215 backups; READY/WAITING ordinary WP capacity/fresh guard |16Oct>=11:00SGT |
|3| Lymphedasia occupational therapy3099 | Off-target Phelps Health clause; bounded removal only, no new provider/medical claim; READY conditional authenticated backup/guard/save; broader claims HELD |16Oct>=11:00SGT after3986 |
|4| Named facelift/neck techniques; workplace3336/family3502/checkups3618/olderadult4288/protocols/privacy | Exact original clinician/operator explanations needed; HELD, not copied | On input |
|5| Blog pagination/empty17; debulking857 | HELD safe supported PHP/builder parity release/fixtures | On safe workflow |
|6| Distinct procedure or patient-journey concern | Continue actual-page discovery; don't repeat closed options/scars/overseas handoff or PR216 imagery | Next independent candidate |
|7| GSC/GA4 | payment_required16Oct00:05; no repeat/data/upgrade here |17Oct or known restoration/export |
|8| Eyebag/profile crawl |72-hour cadence, subject to authorised access |16Oct>=09:00SGT |
|9| GBP3334046696687541456 | Existing PROCESSING post; ordinary moderation check only/no recreation |16Oct>=10:05SGT |
|10| Native AI/final baseline | Responses unavailable; user's top suggestions apply only to lymphoedema, not cosmetic/recon | Final17Oct / actual access |

No WordPress/GBP mutation, live enquiry/email/event or outbound message. No new ranking, qualified enquiry or native AI citation result claimed. Independent website work advanced despite the transient WordPress cap and reporting entitlement; do not stop the sprint for either narrow wait.

