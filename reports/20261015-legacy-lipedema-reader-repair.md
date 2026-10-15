# Legacy lipedema comparison: reader and link repair — 15 October 2026

## Scope and evidence
- Started from current main `6a8a107cae3939797133cedfaed614ba1826d819`; issue #7 latest completed checkpoint 6186543413 reviewed; no competing open PR or active overlapping edit. In-progress checkpoint: https://github.com/zatyrical/plasticwebsite/issues/7#issuecomment-6187391024
- Inspected the complete current source of WordPress post 1223 and page 4972. The maintained [lipedema diagnosis guide](https://lymphedasia.com/lipedema-singapore/) already has useful assessment/comparison paths: CLOSED duplicate-link/content candidate; no edit there.
- The legacy [comparison article](https://lymphedasia.com/key-differences-between-lymphedema-and-lipedema/) still had 30 misspellings, joined words in a heading, a literal “H2:” label, an ungrammatical title, a cooling-page link on “patient. For lymphedema”, and a generic Wikipedia link on the first term of a comparison FAQ. The 8 October comparison/assessment report had already flagged editorial repairs but deferred consolidation to settled query/page evidence.
- Applied the elective-seo-playbook’s existing-page, patient-reading-path approach. No keyword-variant article, medical answer expansion or ranking promise. Current primary guidance inspected: [Google crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) and [people-first content, including spelling/readability checks](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Published changes
Supported WPVibe Gutenberg content/edit saves, nine successful operations with replacement counts `1,1,19,9,1,1,1,1,1`:
1. Corrected the complete joined “DiagnosingLipidema…” H3 and literal “H2: Diagnosis…” H2.
2. Corrected all remaining whole-word “lipidema”/“Lipidema” misspellings, 30 total including the two heading fixes.
3. Changed the existing treatment-guide destination from recent-advances to the maintained [treatment hub](https://lymphedasia.com/lymphedema-treatment/), preserving anchor wording.
4. Removed only the mismatched cooling anchor and generic Wikipedia anchor, preserving every enclosed word.
5. Added one neutral related-reading paragraph linking the maintained [Singapore comparison](https://lymphedasia.com/lipedema-vs-lymphedema-singapore/) and [diagnosis guide](https://lymphedasia.com/lipedema-singapore/).
6. Repaired the post title to “Understanding the Key Differences Between Lymphedema and Lipedema”.

No slug, canonical, indexability, consolidation, schema, tracking, clinician credentials, treatment claims, outcomes, prices or review-date change. No new clinician-review assertion. Older substantive clinical claims are retained, not newly validated or endorsed.

## Backup, safeguards and rollback
- BEFORE selected-source snapshot committed to isolated branch before any WP write: `0cb10848e67186195a12dcb7ddab012d81bba4bb`.
- Declared exact patch and expected full body/title committed before WP write: `72473290d80bad922c5a604090af9811ee148841`.
- Fresh pre-save source exactly matched BEFORE. Each save checked its exact replacement count before the next operation.
- Files: `reports/backups/20261015-lymphedasia-comparison-post1223-before.json`, `reports/20261015-comparison-post1223-patch.json`, and `reports/backups/20261015-lymphedasia-comparison-post1223-after.json`.
- Rollback: re-read actual current source and reconcile concurrent changes; use the stored exact BEFORE/AFTER mapping and supported content/edit or the platform revision restore. Never globally reverse “lipedema” to “lipidema”: originally correct words would be corrupted. Reverting this documentation PR alone does not revert WordPress. Verify source and ordinary public output after any restore.

## Verification
- Authenticated readback exactly equals the declared expected body and title; status, URL, author, featured image and selected Elementor metadata unchanged.
- All original article text, including seven FAQ answers, matches after only declared spelling/heading normalisation and removal of the new related-reading paragraph. August 2026 review date retained.
- Gutenberg blocks balanced: 71/71 before and 72/72 after (one new paragraph); H2 8, H3 14 and H4 7 unchanged.
- Public GET after save: source and all three linked guide destinations return HTTP 200 and self-canonical, with one H1 each. Source H1 matches the repaired title; new paragraph/treatment link visible; literal “H2:” absent. WP modified timestamp `2026-10-15T08:04:45` (UTC; 16:04 SGT). No real enquiry POST, email, analytics lead or browser-interaction claim.
- Repository documentation-only batch: build passed, 24 mocked tests passed, 47 generated routes; TypeScript lint passed; credential audit 68 files clean; LLM source 39 bullets/26 URLs clean; internal fragments 785 across 41 pages clean; navigation audit 42 HTML files clean; FAQ and sitemap/date parity passed; diff whitespace clean.
- Preview/production commit proof and guarded merge are recorded in issue #7 after completion. Vercel deployment verifies repository documentation only; WordPress publication is proved by the authenticated/public readback above.

## Ranked next queue / waiting
| Priority | URL / item | Observed gap and approved source | Action / status / blocker | Next eligible |
| --- | --- | --- | --- | --- |
| 1 | Legacy comparison URL above | Substantive legacy diagnostic/staging/treatment claims flagged in prior reports; current clinical source not enough to resolve nuances | HELD for clinician wording; editorial/link repair complete; no consolidation or medical rewrite | When clinician input arrives |
| 2 | /lipedema-singapore/ | Maintained assessment/comparison navigation already present; staging attribution remains clinical-input question | Existing path candidate CLOSED; substantive staging clarification HELD | When clinician input arrives |
| 3 | /lymphedema-in-older-adults/ (actual post 4288, as prior report) | Original clinician quote/outcome provenance not supplied | HELD; no invented attribution/outcome | When provenance arrives |
| 4 | /consultation/ asset delivery | Earlier same-day mobile lab inspection; global builder/Autoptimize assets; no safe supported reversible PHP release path | HELD conditional asset trial; preserve 11 builder pages; need supported deployment and mobile/desktop fixtures | When safe path available |
| 5 | Both GSC/GA4 properties | Existing entitlement/access blocker, not zero traffic or zero conversions | WAITING authorised access/export; no repeated paid or hourly retry | 16 October; final 17 October |
| 6 | Eyebag guide / surgeon profile crawl | 72-hour cadence | WAITING, no repeated inspection | 16 October >=09:00 SGT |
| 7 | GBP rapid-recovery post 3334046696687541456 | Submitted 15 October; PROCESSING, not proven LIVE | WAITING moderation; do not recreate | 16 October >=10:05 SGT |
| 8 | Fixed native AI prompts | Actual platform responses unavailable | WAITING; search/referrals cannot substitute for a mention/citation | Later comparison checkpoint if access exists |

No new settled ranking, qualified-enquiry or AI-mention evidence is claimed. Independent discovery continues; this is not a declaration that all ready work is exhausted.
