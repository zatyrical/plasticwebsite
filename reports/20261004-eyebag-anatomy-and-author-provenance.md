# Eye-bag anatomy and clinical-author provenance — 4 October 2026

## Continuity and evidence

Started from current main `d940cb982cc6d3f730d09a3e80ced1450d6d16b3` after reading campaign issue #7 and the latest measurement, contact and authority reports. PRs #12–#16, the contact-page correction and both prospective GA4 key-event registrations are complete. No repeat edits or measurement queries were made.

Dr Sun supplied a new explanation on 4 October: the lower boundary of the eye bag is defined by ligaments tethering skin and soft tissue to the orbital rim. The existing lower-blepharoplasty guide covered the incision, individual planning and selected bone-related tear trough implants, but did not explain this contour relationship.

The original 48-hemiface anatomical study independently documents the tear trough ligament and lateral continuity with the orbicularis retaining ligament:
https://pubmed.ncbi.nlm.nih.gov/22634656/

## Implemented educational improvement

- Added an answer-first section on the bulge and groove beneath it to the existing lower-blepharoplasty URL.
- Distinguished protruding bag, tethered groove and sunken under-eye area in an accessible comparison table.
- Preserved the clinician-approved selected-use implant explanation; a groove alone does not establish bone resorption or implant suitability.
- Added a focused FAQ and a primary anatomical-study link, expressly separating anatomy from treatment-outcome evidence.
- Updated the article review and sitemap modification date to 4 October for this substantively changed page only.

No new treatment technique, fixed recovery time, price, credential or outcome claim was added. No new URL or duplicated Lymphedasia article was created. The current title and search description remain unchanged.

## Supplied postoperative photograph

Dr Sun described the supplied eye photograph as two weeks after sub-brow blepharoplasty, with lower-eyelid bags also visible. It was not uploaded to public website assets or GBP.

MOH's accessible HCSA advertising FAQ, checked 4 October 2026, states that advertisements must not feature before-and-after or only-after treatment photographs, even with disclaimers. Showing such images with appropriate context during a patient consultation is treated separately. Patient consent alone does not resolve this advertising restriction. We did not relabel or crop the postoperative photograph to evade it.

Primary source: https://ask.gov.sg/moh/questions/clu6lx3rq00b0314rf8s8bhch

## Previously completed Lymphedasia authorship correction

The preceding audit found six pages with visible Dr Sun clinical review but Article schema naming the administrator `jet`. Supported WordPress REST author-only saves changed user 6 to verified clinician user 5 (`jeremy-sun`, display name `Dr Jeremy Sun Mingfa`) on:

| ID | Existing URL |
|---|---|
| 5074 | https://lymphedasia.com/am-i-candidate-for-lva-surgery/ |
| 5073 | https://lymphedasia.com/lva-vs-vlnt-vs-liposuction-lymphedema-surgery/ |
| 4913 | https://lymphedasia.com/which-specialist-lymphedema-surgery-singapore/ |
| 4891 | https://lymphedasia.com/dedicated-lymphedema-surgery-training-hmdp/ |
| 4699 | https://lymphedasia.com/lipedema-vs-lymphedema-singapore/ |
| 4698 | https://lymphedasia.com/private-lymphedema-consultation-singapore/ |

All six live heads were verified in the preceding run: Article.author resolves to the clinician profile/name, no `jet` remains and canonicals are correct. Elementor content, HMDP Q&A and approved operating-room photo were preserved. This report records the completed operation; it does not repeat it. Exact rollback: restore author ID 6 on these six IDs. Publication evidence and individual checks are recorded in issue #7.

## Validation and rollback

- `git diff --check`, TypeScript and Next.js 16.3.4 production build passed; all 45 routes generated.
- Local generated HTML passed checks for anatomy section and contents link, accessible table, primary reference, unchanged canonical, existing enquiry form, matching FAQ/schema and 4 October modification date; original publication date remains 3 October.
- React review: static server-rendered text and existing semantic comparison-table renderer; no new hooks, dependencies, client JavaScript or network requests. Stable existing keys and table headers are preserved.
- Successful Vercel preview, expected-head guarded merge and live-domain verification remain required before marking completion in issue #7.

Rollback: revert this isolated PR merge commit. No enquiry form was submitted.

## Waiting checkpoints and limits

- Settled Singapore GSC/GA4 comparison, organic landing pages, accepted-enquiry key events and AI referrals: next eligible 5 October. Data through 29 September predate the sprint edits and cannot establish uplift.
- Google Inspection of new eyebag guide and primary surgeon profile: next eligible 7 October, absent a concrete technical fault.
- GBP moderation/public propagation: next daily eligible checkpoint only through available authenticated access; no status inferred here.
- Native ChatGPT/Claude/Gemini answer sampling remains unavailable; web search is not substituted for native responses and referrals are not citations.
- External CGH profile correction remains an unsent draft pending communication authority.

Google's current AI-features guidance, checked 4 October, continues to support helpful readable text, useful internal links and accurate visible/schema information; it requires no special AI files or markup and does not guarantee indexing or serving:
https://developers.google.com/search/docs/appearance/ai-features
