# Canonical treatment-hub hierarchy

Date: 7 October 2026

## Observed gap

The dedicated aesthetic and reconstructive treatment hubs are live, crawlable and now provide the maintained procedure index. The shared procedure template already rendered those hubs in visible breadcrumbs and back buttons, but 19 stored `backHref` values still named the older homepage-section anchors. Three bespoke clinical pages also retained live hierarchy inconsistencies:

- `/asian-eyelid-surgery-singapore` used `/#aesthetic-surgery` for its visible breadcrumb, back button and JSON-LD breadcrumb.
- `/breast-reconstruction-singapore` retained `/#reconstructive-surgery` in its back button after its breadcrumb was aligned in PR #57.
- `/lymphedema-surgery-singapore` retained the old homepage anchor, omitted the visible breadcrumb and represented only Home → current page in JSON-LD despite belonging to the reconstructive hub.

The pages and dedicated hubs returned HTTP 200. This was not a broken-link emergency; it was an inconsistent and less-specific hierarchy.

## Implemented

- Aligned the Asian-eyelid page's visible breadcrumb, back button and `BreadcrumbList` to `/aesthetic-surgery`.
- Aligned the breast-reconstruction back button to `/reconstructive-surgery`.
- Added a visible Home → Reconstructive surgery breadcrumb to the lymphoedema surgical overview, aligned its back button and inserted the reconstructive hub into its `BreadcrumbList`.
- Normalised all shared procedure `backHref` values to the dedicated hub URLs and made the shared renderer consume the maintained value directly.
- Dated only the Asian-eyelid and lymphoedema pages newly changed in public output; the breast-reconstruction URL was already dated `2026-10-07` by PR #57.

No medical wording, procedure title, metadata description, canonical, form/tracking behavior or URL changed.

## Evidence boundary

Google's current breadcrumb documentation says breadcrumbs show a page's position in site hierarchy and may help users understand and explore a site. Its link guidance says contextual internal links can help people and Google make sense of a site. The repair makes the hierarchy explicit and consistent; it does not guarantee ranking, a rich result, an AI citation or an enquiry.

Primary sources reviewed 7 October 2026:

- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable

## Validation

- `git diff --check`: passed.
- `npm run lint`: passed.
- Next.js 16.3.4 production build: passed; all 44 routes generated.
- Rendered HTML contains no `/#aesthetic-surgery` or `/#reconstructive-surgery` hierarchy links.
- Asian eyelid rendered output contains the canonical aesthetic hub in the visible breadcrumb, back button and three-level `BreadcrumbList`.
- Breast reconstruction rendered output contains the canonical reconstructive hub in its visible breadcrumb, back button and three-level `BreadcrumbList`.
- Lymphoedema surgery rendered output contains the canonical reconstructive hub in the newly visible breadcrumb, back button and three-level `BreadcrumbList`.
- Sampled shared aesthetic and reconstructive template pages retain their correct hub links and structured breadcrumbs after the data normalisation.
- Prerendered sitemap dates all three bespoke pages `2026-10-07`.
- Vercel preview, guarded merge and public verification: pending publication.

## Rollback

Revert the publication PR/merge commit.
