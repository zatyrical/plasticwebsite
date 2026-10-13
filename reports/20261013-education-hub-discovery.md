# Education hub discovery and share metadata — 13 October 2026

## Observed gap

The full `/blog` education hub is the maintained collection route for procedure and patient-decision guides, but it was the only metadata-bearing page in the current static route set without page-specific Open Graph or Twitter metadata. Its topic summary was also plain text rather than navigation, and the collection had no visible breadcrumb or machine-readable collection/list relationship.

The individual guide pages and the aesthetic/reconstructive hubs already provide the clinical detail. This batch improves discovery of those existing resources; it does not create another article, repeat medical wording or claim a rich result.

## Implemented

- Added page-specific Open Graph and Twitter metadata using the existing authentic operating-theatre photograph.
- Added a visible Home → Educational articles breadcrumb.
- Converted the four topic summaries into descriptive links to the maintained aesthetic, reconstructive, lymphatic and planning resources.
- Added a restrained `CollectionPage` / `ItemList` JSON-LD graph that mirrors the visible article cards and their order.
- Added a stable `#articles` target to the existing card grid.

## Validation

- TypeScript and the full production build must pass before publication.
- Built HTML must retain one H1, one self-canonical, one breadcrumb and one item-list entry per visible unique article card.
- Internal fragment and source audits must remain clean.

## Rollback

Revert the `/blog` page changes in this batch. No URL, redirect, medical claim, enquiry form, analytics event or image asset changes are involved.

## Interpretation

This improves navigation, share previews and explicit collection structure. It does not prove a ranking, traffic, enquiry or AI-citation improvement.
