# LymphedAsia zero-link inventory and paediatric overlap — 12 October 2026

## Outcome

A fresh public WordPress REST inventory covered all 187 published posts. Ten posts currently contain no contextual internal link in their rendered body. The count is one lower than the previous authenticated scan because post 4226 has since been linked and verified.

This run did not add links blindly. It found a higher-priority information-architecture issue: three live, indexable and self-canonical articles compete for substantially the same paediatric lymphoedema diagnosis-and-treatment intent.

## Current zero-link posts

| Post | URL | Disposition |
|---:|---|---|
| 3550 | `/lymphedema-in-men/` | READY for focused safety/link review |
| 4110 | `/lymphedema-and-heart-health/` | HOLD for cardiovascular-claim review |
| 4150 | `/lymphatic-health-for-lymphedema-prevention/` | HOLD for prevention-claim review |
| 4157 | `/supportive-care-for-lymphedema/` | READY for breast-cancer patient-journey review |
| 4163 | `/lymphedema-skin-wound-care/` | HELD by prior clinical-safety review |
| 4268 | `/lymphedema-vs-post-surgery-swelling/` | READY replacement already prepared; respect the recorded retry gate |
| 4271 | `/lymphedema-prevalence-statistics/` | HOLD for statistics/source verification |
| 4274 | `/hereditary-lymphedema-milroy-disease/` | HOLD pending genetics accuracy review |
| 4277 | `/pediatric-lymphedema-symptoms-children/` | HOLD pending overlap and clinical-source decision below |
| 4283 | `/lymphedema-quality-of-life/` | HELD by prior provenance/clinical review |

## Paediatric topic overlap

| Post | Published URL | Approx. body size | Contextual links | Other-post links found | Live technical state |
|---:|---|---:|---:|---:|---|
| 1250 | `/lymphedema-in-children-causes-diagnosis-treatmen/` | 293 words | 1 | 1 inbound post | HTTP 200, index/follow, self-canonical |
| 3552 | `/lymphedema-in-children-early-diagnosis/` | 1,980 words | 4 | 0 inbound posts | HTTP 200, index/follow, self-canonical |
| 4277 | `/pediatric-lymphedema-symptoms-children/` | 2,267 words | 0 | 0 inbound posts | HTTP 200, index/follow, self-canonical |

All three explain causes, signs, diagnosis and treatment for children. The latter two also overlap on age-specific symptoms, manual lymphatic drainage, compression, skin care, school support and family management. This is not merely a missing-link problem.

Google's current canonical guidance says redirects and `rel=canonical` are strong consolidation signals, but the preferred URL should represent the objectively most complete and useful page. It also recommends using URL Inspection to check Google's selected canonical. Sources checked 12 October 2026:

- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting

## Decision boundary

No redirect, canonical, noindex or deletion was applied because:

1. page/query Search Console evidence is unavailable while the GSC Wizard entitlement is expired;
2. the two longer articles contain clinical and source-specific statements that need evidence review before either is selected as the maintained survivor;
3. one URL already has an inbound contextual link, while the other two currently have none, so a blind link addition could deepen rather than resolve the overlap.

## Next actions

1. When Search Console access returns, compare the three URLs by Singapore query, clicks, impressions, average position and Google-selected canonical. Do not select a winner from word count alone.
2. Audit the longer candidates' clinical claims and cited sources; obtain clinician confirmation for any material new or rewritten medical statement.
3. Choose one maintained paediatric guide, preserve any unique useful sections, update internal links, then use a permanent redirect for genuinely retired duplicates. Do not use `rel=canonical` as a substitute for substantially different or still-useful content.
4. Until that decision, continue with a genuinely distinct zero-link page rather than adding links into post 4277.

## Measurement boundary

This investigation identifies a consolidation candidate and an exact ready queue. It does not establish cannibalisation, ranking loss, an enquiry change or an AI citation. Those outcomes require Search Console/analytics or live result evidence.
