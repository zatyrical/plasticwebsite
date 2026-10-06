# Lymphedasia Article image-schema repair — 7 October 2026

## Scope

- Repository base: `e37d44a79be3bc04d5052758b62673f55dc7f8e8`.
- Applied the ElectiveSEO playbook's repair-first rule to a fresh Lymphedasia cohort: the homepage, lipedema guide, lipedema comparison, ICG assessment and compression-reassessment pages.
- No analytics comparison was run before its eligible checkpoint of 7 October 09:08 SGT.
- No title, meta description, URL, clinical copy, form, tracking or schema template was rewritten.

## Verified fault

All five audited URLs returned HTTP 200, were indexable, used self-referencing canonicals, had one H1 and had no missing image alt text. The audit found two specific structured-data errors:

- `https://lymphedasia.com/lipedema-vs-lymphedema-singapore/`: the Rank Math `Article` node had no `image`, the page had no `og:image`, and WordPress page 4699 had `featured_media=0`.
- `https://lymphedasia.com/compression-not-working/`: the same fault was present on WordPress page 5136.

The homepage, focused lipedema guide and ICG assessment page did not have this error. Low-severity title or description length warnings were recorded but were not treated as a reason to churn otherwise relevant metadata.

## Published WordPress repair

Existing, context-matched media were assigned through the supported WordPress REST page-update path:

1. page 4699 → media 4971, `lipedema-diagnosis-icg-lymphography-singapore.png` (1600 × 900, 122,543 bytes);
2. page 5136 → media 1213, `Lymphedema-Compression-Garments-Types-Benefits-and-How-to-Choose.webp` (1024 × 1024, 23,602 bytes).

The postoperative compression-after-LVA graphics were considered for page 5136 but rejected because their narrower postoperative context could misrepresent a general compression-reassessment article.

The two page updates completed at 7 October 05:08:57 and 05:09:20 SGT respectively. Their previous state was `featured_media=0`.

## Live validation

Both live pages now expose:

- a relevant featured educational image with non-empty alt text;
- `og:image`, image dimensions, MIME type and image alt metadata;
- a Twitter image;
- a Rank Math `ImageObject`;
- `primaryImageOfPage` on the `WebPage` node;
- `image` on the `Article` node.

The images also render above the unchanged page H1s through Astra's existing featured-image template. The pages remain published, indexable and self-canonical. No repeated SEO-audit request was made inside the tool's three-hour recheck window; verification used the live rendered DOM and head markup instead.

## Rollback

The narrow rollback is to set `featured_media` back to `0` on WordPress pages 4699 and 5136. This removes the featured image and Rank Math's derived Article/Open Graph image associations without touching page copy or other metadata.

## Next decision

After 7 October 09:08 SGT, use settled GSC query/page and GA4 landing-page evidence to evaluate visibility and qualified-action movement. Continue rotating to an unaudited priority patient-journey gap rather than rechecking this completed schema batch.
