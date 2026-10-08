# LymphedAsia social-preview image verification — 8 October 2026

## Outcome

Two high-value LymphedAsia articles now use existing, subject-matched first-party media as their featured images. Live output was verified after publication.

| Article | WordPress post | Featured media | Live social/schema output |
|---|---:|---:|---|
| [Which Specialist Should Assess Lymphedema Surgery in Singapore?](https://lymphedasia.com/which-specialist-lymphedema-surgery-singapore/) | 4913 | 4664 — Dr Jeremy Sun consultation image, 1280×853 | Open Graph, Twitter large image and `primaryImageOfPage` all point to the consultation image |
| [Lymphedema: Early Detection & Screening in Breast Cancer](https://lymphedasia.com/lymphedema-early-detection-breast-cancer/) | 4161 | 4657 — Dr Jeremy Sun performing ICG lymphography, 1280×853 | Open Graph, Twitter large image and `primaryImageOfPage` all point to the ICG image |

Both attachments already existed in the site's media library and had relevant alternative text. No external stock image, patient photograph, new clinical wording, title, description or URL was introduced.

## Observed gap

The published-post inventory contained 187 posts, of which 136 had no WordPress featured image at the time of inspection. This is an audit signal, not a recommendation to assign an image to every post. Only exact, useful subject matches should be added; mass reuse would create weak or misleading previews.

## Validation

After the final write and rollback cleanup:

- post 4913 reports `featured_media: 4664`;
- post 4161 reports `featured_media: 4657`;
- each live page has one H1;
- both pages remain indexable and self-canonical;
- Open Graph image, Twitter image and schema primary-image references resolve to the intended 1280×853 attachment;
- temporary in-content copies were removed, together with their empty block/escape artifacts;
- the final article content contains no duplicate `fetchpriority="high"` image markup from this batch.

## Original face/neck educational graphic

[PR #79](https://github.com/zatyrical/plasticwebsite/pull/79) published the original 1600×900 pathway graphic at:

`public/images/face-neck-lymphoedema-assessment-pathway.png`

The graphic was prepared for the existing [face and neck lymphoedema guide](https://lymphedasia.com/lymphedema-in-the-face-and-neck/) and uses only concepts already present in that article: symptom recognition, cause assessment, individual care planning, and urgent assessment for breathing or swallowing difficulty.

WordPress media import did not complete. The initial upload inputs were rejected and later import attempts were stopped by source-integrity review. No workaround was attempted. The repository asset is published and recoverable, but it is not attached to the WordPress article.

## Rollback

The two final WordPress changes are limited to featured-image assignments.

- Restore post 4913 to its prior state by setting `featured_media` to `0`.
- Restore post 4161 to its prior state by setting `featured_media` to `0`.

Use the supported WordPress REST post update path and verify the live Open Graph, Twitter and schema output after any rollback. PR #79 can be reverted independently if the unused repository asset should be removed.

## Waiting checkpoints

- Google Business Profile: next eligible check 9 October 2026 at or after 06:54 SGT.
- GSC/GA4 settled-data checkpoint: next eligible check 9 October 2026 at or after 09:08 SGT.
- Eyebag guide and primary surgeon-profile crawl/index check: 10 October 2026.

No ranking, citation or enquiry uplift is claimed from this implementation alone.
