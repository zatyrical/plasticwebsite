# Primary surgeon-profile social metadata — 8 October 2026

## Outcome

The primary surgeon-profile route now defines a page-specific Open Graph image and matching Twitter card metadata using the existing first-party portrait at `/images/dr-jeremy-sun-hero.jpg`.

No visible copy, clinical statement, credential, URL, form, tracking event or image asset changed.

## Observed evidence

Before this change, the live `/plastic-surgeon-singapore` output contained:

- the correct self-canonical URL;
- page-specific Open Graph title and description;
- no `og:image` tag;
- a Twitter image inherited from the root layout;
- generic site-level Twitter title and description rather than the profile page's title and description.

The route defines its own `openGraph` object. Next.js documents that nested metadata fields are shallowly merged and a later route-level `openGraph` object replaces the earlier root object, so omitted root Open Graph image fields are not inherited.

Primary documentation checked 8 October 2026: [Next.js `generateMetadata` — merging and overwriting fields](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#merging).

## Implementation

Updated `app/plastic-surgeon-singapore/page.tsx` to add:

- `openGraph.images` with the existing portrait, its verified 896×1280 dimensions and descriptive alt text;
- a page-specific `twitter` object using `summary_large_image`;
- matching page title, description and portrait for the Twitter card.

The image already existed in the repository, is used in root identity metadata, and measures 118,995 bytes at 896×1280.

## Validation

- `git diff --check`: passed.
- `npm run lint` (`tsc --noEmit`): passed.
- Next.js 16.3.4 production build: passed.
- Static generation: 44/44 routes.
- Built profile HTML contains the intended canonical, Open Graph title/description/image/width/height/alt, and matching Twitter title/description/image.

## Expected mechanism and measurement

This closes a social-preview completeness gap and gives crawlers a consistent page-specific image and text set when the profile URL is shared or cited. It is not a ranking guarantee and does not establish an AI mention.

Verify the same tags on the production URL after deployment. Measure downstream changes only through actual referral traffic, social previews and qualified enquiries; do not infer impact from publication alone.

## Rollback

Revert the metadata additions in `app/plastic-surgeon-singapore/page.tsx`. The page will return to its prior behavior: no route-level `og:image` and root-level Twitter metadata inheritance.
