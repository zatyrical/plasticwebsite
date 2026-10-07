# Breast-reconstruction authority markup

Date: 7 October 2026  
Page: https://www.drjeremysun.com/breast-reconstruction-singapore

## Observed gap

The breast-reconstruction page is a bespoke clinical page rather than an instance of the shared procedure template. It already displayed a clinical author/reviewer, consultation route, FAQ, risks, recovery and treatment-selection information, but its JSON-LD exposed only the FAQ. It omitted the `MedicalWebPage`, maintained physician entity and `BreadcrumbList` used by the site's other priority procedure pages. The hero also lacked the visible breadcrumb pattern used across those pages.

The aesthetic and reconstructive category hubs were inspected first. They already provide Contact/Enquire navigation, the verified Paragon consultation details in the global footer, visible Dr Sun attribution and breadcrumb text. No additional hub CTA or schema-only copy was justified.

## Implemented

- Added a visible Home → Reconstructive surgery breadcrumb.
- Added a `BreadcrumbList` that mirrors the visible hierarchy.
- Added a `MedicalWebPage` describing only the page's existing title, description, breast-reconstruction topics and unchanged clinical-review information.
- Reused the maintained Dr Jeremy Sun physician entity for `author`, `reviewedBy` and `publisher`.
- Linked the visible reviewer name to the existing surgeon profile.
- Dated only the changed breast-reconstruction URL in the sitemap.

No clinical wording, price, outcome claim, recovery timeline, form/tracking behavior, canonical or URL changed.

## Evidence boundary

Google's current breadcrumb documentation says breadcrumb trails indicate a page's position in the site hierarchy and may help users understand and explore a site. Its general structured-data guidelines require markup to reflect visible page content and state that structured data does not guarantee a search feature. The additional `MedicalWebPage` semantics improve machine-readable consistency; they are not a special AI-search requirement and do not establish ranking, citation or enquiry uplift.

Primary sources reviewed 7 October 2026:

- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies

## Validation

- `git diff --check`: passed.
- `npm run lint`: passed.
- Next.js 16.3.4 production build: passed; all 44 routes generated.
- Prerendered HTML: contains one `MedicalWebPage` with the maintained physician ID for `author`, `reviewedBy` and `publisher`.
- Prerendered HTML: contains the three-item `BreadcrumbList`, matching visible Home and Reconstructive surgery links.
- Prerendered HTML: retains the existing `FAQPage` and adds the reviewer-profile link.
- Prerendered sitemap: the breast-reconstruction URL alone receives the new `2026-10-07` date from this batch.
- Vercel preview, guarded merge and public verification: pending publication.

## Rollback

Revert the publication PR/merge commit.
