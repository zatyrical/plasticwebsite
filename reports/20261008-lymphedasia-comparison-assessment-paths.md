# LymphedAsia comparison and assessment reader paths — 8 October 2026

## Outcome

Published three contextual internal links across two existing articles, using only their existing wording:

| Source | Existing anchor | Direct destination | Purpose |
|---|---|---|---|
| `/lymphedema-vs-lipedema-misdiagnosis/` | tell the two conditions apart | `/lipedema-vs-lymphedema-singapore/` | Establish the current comparison page as the decision hub |
| `/lymphedema-vs-lipedema-misdiagnosis/` | specialist assessment | `/private-lymphedema-consultation-singapore/` | Connect diagnosis uncertainty to the existing assessment pathway |
| `/lymphedema-in-the-face-and-neck/` | Assessment depends on the patient’s history | `/private-lymphedema-consultation-singapore/` | Provide an assessment-first route before the article’s existing surgery link |

No clinical wording, title, metadata, schema, image, form, tracking, URL or publication state was changed.

## Observed evidence

- Post 4251 was a 21,205-byte decision article with zero contextual links before this change.
- Post 3168 linked only to the LVA surgery guide and had no direct assessment path.
- The current comparison hub at `/lipedema-vs-lymphedema-singapore/` already links to the dedicated lipedema, assessment, treatment, LVA and clinician-profile pages.
- Both source posts use `post_content`; `_elementor_edit_mode` and `_elementor_data` are empty. Gutenberg match-once edits were therefore the supported path.
- All three exact source strings occurred once, and every edit reported exactly one replacement.

## Live verification

Fresh rendered HTML confirmed:

- `/lymphedema-vs-lipedema-misdiagnosis/`: HTTP-rendered page remains indexable, self-canonical, and single-H1; the comparison and assessment links each appear once with the intended anchor.
- `/lymphedema-in-the-face-and-neck/`: remains indexable, self-canonical, and single-H1; the assessment link appears once with the intended anchor.
- Both destinations remain indexable, self-canonical and single-H1.

This improves crawlable hierarchy and patient navigation. No ranking, enquiry or AI-citation gain is claimed.

## Rollback

WordPress revisions are the immediate rollback path:

- Post 4251: revision 5240 is the state before the second link; revision 5241 precedes the final current state. To remove the full batch, restore the last pre-batch revision 4726, or reverse the two exact anchor additions with match-once edits.
- Post 3168: revision 5242 records the pre-edit content; restore it or reverse the exact anchor addition.

## Consolidation candidate — waiting for settled query/page evidence

A separate older article, `/key-differences-between-lymphedema-and-lipedema/` (post 1223), overlaps the newer comparison hub and includes legacy spelling/heading/link-quality issues. No redirect, noindex or rewrite was applied. At the next eligible GSC checkpoint (9 October 2026 after 09:08 Singapore time), compare query-to-page impressions/clicks for the older article, post 4251 and the comparison hub before deciding whether to consolidate. Shared keywords alone are not sufficient evidence of cannibalisation.
