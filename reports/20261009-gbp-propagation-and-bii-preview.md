# GBP propagation and breast-implant-illness preview checkpoint

Date: 9 October 2026, Singapore

## Google Business Profile read-only verification

The authenticated Google Business Profile connector returned both managed locations from a fresh read at `2026-10-08T23:06:28Z`–`23:06:41Z` (9 October 2026, 07:06 Singapore).

### Current factual state

| Profile | Address and telephone | Regular hours | Primary category | Status |
|---|---|---|---|---|
| Lymphedema Asia | 290 Orchard Road, #09-01/02, Paragon Medical, Singapore 238859; 6530 3573 | Mon–Fri 09:00–17:00; Sat 09:00–12:30; Sun closed | Health consultant | OPEN; no pending-edit flag returned |
| Dr Jeremy Sun | 290 Orchard Road, #09-01/02, Paragon Medical, Singapore 238859; 6530 3573 | Mon–Fri 09:00–17:00; Sat 09:00–12:30; Sun closed | Plastic surgeon | OPEN; no pending-edit flag returned |

The current read also returned:

- five Lymphedema Asia educational service items and twelve Dr Jeremy Sun service items, including the authorised rhinoplasty, breast augmentation, facelift/neck lift and lower-blepharoplasty descriptions;
- the tracked website URLs on both profiles;
- all four authorised educational posts with state `LIVE` and their saved UTM-tagged destinations;
- public Google Maps URIs and place IDs for both locations.

The address, phone and regular-hours values now match the user-confirmed facts in the profile data, and the connector returned no pending-edit state. No GBP write was warranted. An independent anonymous Google Maps render could not be fetched through the public search tool, so this proves current authenticated profile state and live post status, not a neutral-location ranking or knowledge-panel appearance.

The rejected Lymphedema Asia amenities/accessibility attributes were not touched.

## Independent READY audit: breast-implant-illness evidence page

Audited `https://www.drjeremysun.com/breast-implant-illness-singapore-evidence` after the GBP checkpoint.

The page already provides an answer-first explanation, regulator context, a 2025 systematic-review summary, uncertainty around causation and explantation outcomes, safety prompts, related breast pages and a consultation route. Fresh search evidence also surfaced a 2026 systematic review, but no new medical wording was added without clinician review.

### Observed technical gap

The route supplied a page-specific Open Graph title, description and the original 1600×900 systematic-review infographic, but no route-specific Twitter metadata. Next.js therefore inherited the homepage Twitter title, description and portrait, producing a mismatched preview for a sensitive evidence page.

Technical reference checked 9 October 2026: [Next.js metadata guidance](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) and its documented shallow-merge behaviour for nested metadata objects.

### Implemented correction

Added route-specific Twitter `summary_large_image` metadata using the existing page title, description and the same subject-matched infographic already used by Open Graph.

No visible copy, medical claim, study interpretation, credential, URL, canonical, schema, form, tracking event or image asset changed.

## Validation and rollback

- `git diff --check`
- TypeScript / Next.js production build
- generated-output check for canonical, Open Graph and Twitter tags
- public production verification after deployment

Rollback: revert the Twitter metadata block in `app/breast-implant-illness-singapore-evidence/page.tsx`.

## Queue disposition

- GBP: next routine checkpoint no earlier than 10 October 2026 at 07:06 Singapore, absent a concrete fault.
- GSC/GA4: next settled comparison remains eligible at/after 9 October 2026 at 09:08 Singapore.
- Crawl/index: next eyebag/surgeon-profile checkpoint remains 10 October 2026.
- Medical-content candidate: assess the 2026 explantation/capsulectomy systematic review for a future clinician-reviewed evidence update; do not publish a new conclusion from the abstract alone.
