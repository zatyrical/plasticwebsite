# Authority-route social metadata — 8 October 2026

## Observed gap

Live checks of `/publications`, `/training-and-fellowships` and `/media` found correct self-referencing canonicals and route-specific HTML titles/descriptions, but all three inherited the homepage's Open Graph and Twitter title, description, URL and portrait image.

This made shared links describe the general homepage rather than the specific publication, training or media evidence on each route.

Next.js documents that metadata is evaluated from the root segment to the page and shallowly merged. A page that does not define a nested `openGraph` or `twitter` object inherits the root object. Source checked 8 October 2026: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#merging

## Implemented

Added complete, page-specific Open Graph and Twitter objects to:

- `/publications`, using the existing first-party professional congress research-presentation image (960×1280);
- `/training-and-fellowships`, using the existing first-party Tokyo lymphatic-surgery training image (1200×900);
- `/media`, using the existing first-party professional congress education image (1280×720).

Each route now supplies its own title, concise description, canonical route URL, image and accessible image alt text. No visible copy, clinical statement, credential, URL, schema, form, tracking event or image asset changed.

## Validation

- `git diff --check`
- TypeScript / lint via `npm run lint`
- Next.js production build via `npm run build`
- generated HTML inspection for canonical, Open Graph and Twitter tags on all three routes
- production deployment and live-output verification after merge

## Rollback

Revert the `openGraph` and `twitter` additions in the three route files. That restores the prior root-inherited homepage social metadata.

## Measurement note

This is a share-preview and entity-evidence clarity fix. It does not by itself establish ranking, AI-citation, referral or enquiry uplift.
