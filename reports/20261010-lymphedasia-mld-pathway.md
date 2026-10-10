# LymphedAsia MLD patient-pathway improvement — 10 October 2026

## Outcome

Published a focused patient-journey improvement on the maintained Manual Lymphatic Drainage article:

- Live URL: https://lymphedasia.com/manual-lymphatic-drainage-therapy/
- WordPress post: 4167
- Saved at: 2026-10-10 11:10:53 UTC (19:10:53 SGT)
- Pre-edit backup: `reports/backups/20261010-lymphedasia-mld-post4167.txt`

The former two-paragraph “When MLD is not enough” section is now a four-step pathway:

1. assessment first;
2. conservative care;
3. review if control worsens;
4. imaging and surgical assessment when indicated.

A contextual link now connects the article to the maintained consultation guide:
https://lymphedasia.com/private-lymphedema-consultation-singapore/

The existing LVA guide link remains in the surgical next-step notice:
https://lymphedasia.com/lva-surgery-singapore/

## Why this was ready

Issue #7 had queued an assessment-to-recovery navigation gap after the earlier face/neck and URL-recovery batches. The MLD article had good safety and conservative-care facts, but its decision pathway jumped from a short “not enough” paragraph directly to the LVA article. The new sequence makes the progression explicit without creating a thin new URL or adding unsupported clinical claims.

## Content and safety controls

- Reused only statements already present on post 4167 or the maintained consultation page.
- Kept the August 2026 clinical-review date; no false new review date was added.
- Did not add outcome promises, prices, credentials, testimonials or before/after material.
- Did not change the title, slug, canonical, metadata, schema, analytics or contact actions.
- Did not send a test enquiry.

## Supported save-path check

A read-only `wp_postmeta` check returned no rows for:

- `_elementor_edit_mode`
- `_elementor_data`
- `_elementor_template_type`

Post 4167 is therefore maintained in `post_content`. Elementor is used by the separate single-post template (including the TOC and post-content widget), not by the article body itself. The change used WPVibe’s match-once content editor on `post_content`, which keeps a WordPress revision; it did not rewrite Elementor layout data or use raw SQL.

## Verification

- Match-once edit result: `status=edited`, `replaced=1`.
- Saved record: published; `post_modified=2026-10-10 11:10:53`.
- Live rendered HTML shows the new H2, all four ordered-list steps, the consultation link and the existing LVA guide link.
- The consultation destination rendered successfully before publication.
- No banked WPVibe reset was used.

## Rollback

Restore the exact pre-edit `post_content` from the backup file to post 4167 using WPVibe `post update`, or restore the immediately preceding WordPress revision. Purge the page cache only if the restored revision is not immediately visible.

## Sprint queue after this batch

READY:
- Rotate to an unaudited priority page or patient question before assuming the ready queue is empty.
- Prefer existing-page improvements and clinically approved material over new near-duplicate articles.

WAITING:
- GBP/public propagation: next eligible 11 October 2026 at or after 07:06 SGT.
- GSC/GA4 comparable checkpoint: next eligible 11 October 2026 at or after 09:08 SGT.
- Overseas crawl recovery: next eligible 12 October 2026 at or after 19:00 SGT.
- Lower-eyelid guide and primary surgeon-profile crawl/index: next eligible 13 October 2026 at or after 09:00 SGT.

Measurement limits remain: ranking movement requires settled GSC data; AI referral sessions do not prove a named AI answer or citation.
