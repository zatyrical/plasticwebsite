# Lasers and injectables patient navigation — 9 October 2026

## Observed evidence

Resumed after PR113 on main `2dc2a75d36da2a6d249202fdaa55ab76ec2fabbb`.

Ordinary live HTTP 200 and generated HTML both showed four related cards on `/lasers-injectables-singapore`: lower blepharoplasty, body contouring, tummy tuck and mommy makeover. Three of these arose from global aesthetic ordering rather than the page's skin/contour/ageing discussion.

Existing approved sources:

- Lasers/injectables introduction, treatment categories and assessment: selected skin, volume/contour and ageing concerns; individualised planning.
- `/face-neck-lift-singapore#anatomy`: separates skin-surface, tissue descent, volume and eyelid concerns and alternatives.
- `/thread-lifting-singapore`: assessment and alternatives; already links to lasers/injectables in its related set.
- `/fat-grafting-singapore`: existing facial volume assessment and limitations.
- Google link guidance checked 9 October: https://developers.google.com/search/docs/crawling-indexing/links-crawlable — descriptive links and meaningful context, with no ideal link count.

## Implemented

- Replaced the fallback related set with face/neck assessment, thread lifting and fat grafting, in that order. No filler fourth card.
- Added one contextual link at skin assessment to the face/neck anatomy section, with explicit wording that comparing options does not mean surgery is needed.
- Updated only the lasers/injectables route's sitemap modification date.

No new treatment recommendation, credential, outcome, price, tracking, schema, form or image was added. Existing clinical copy remains intact.

## Validation and safeguards

- Production build/TypeScript and diff check.
- Generated related cards: intended three URLs exactly once, with body/tummy/mommy/lower-eyelid cards absent from this block.
- Cross-page anatomy target exists; one H1 and self-canonical retained; body-contouring control retains its previous three-card set.
- Exact-head preview READY, current-main guard and expected-head squash merge before publication; production and ordinary live output checked afterward. Completion proof recorded in issue #7.

## Next queue

| URL / gap | Source and action | Status | Blocker / next eligible |
|---|---|---|---|
| `/lasers-injectables-singapore` generic related ordering | Replaced with current facial assessment guides | IMPLEMENTED | Publication verification |
| `/scar-reconstruction-singapore` related pathway | Built output currently lists limb/head/child/facial cards and omits trauma despite trauma/scar journey | READY: inspect scar location and existing treatments before any link reorder | Next independent audit |
| Upper-eyelid reversibility/age/pain | SAPS candidate questions; draft original clinician explanations first | HELD | Clinician evidence |
| FTM/general chest overlap | Query-to-page evidence before consolidation | WAITING | 10 Oct settled GSC >=09:08 SGT |
| GBP/analytics/crawl/outcomes | Existing campaign intervals | WAITING | GBP10Oct>=07:06; GSC/GA4>=09:08; eyebag/profile10Oct; overseas guide12Oct>=19:00; outcomes16/final17Oct |

## Rollback and measurement

Revert this PR's `lasers-injectables-singapore` mapping, assessment paragraph and sitemap entry. Shared related-card mechanics and other mappings are preserved. Navigation publication does not prove ranking, enquiry or AI-citation uplift.
