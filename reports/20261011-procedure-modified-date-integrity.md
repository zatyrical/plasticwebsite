# Procedure modified-date integrity — 11 October 2026

## Scope and reason

This batch corrects a verified technical inconsistency between six procedure pages' rendered `MedicalWebPage.dateModified` values and the same URLs' already-published sitemap `lastmod` values. It does not change clinical copy, clinical review dates, publication dates, titles, descriptions or URLs.

Google says sitemap `lastmod` should be consistently and verifiably accurate, and that significant changes include updates to the main content, structured data and links: <https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap>.

## Production evidence before the change

| URL | Rendered `dateModified` | Existing sitemap `lastmod` | Supported update evidence |
| --- | --- | --- | --- |
| `/body-contouring-liposuction-singapore` | 2026-10-06 | 2026-10-11 | Contextual patient-journey link published 11 October |
| `/lower-limb-reconstruction-singapore` | 2026-09-06 | 2026-10-10 | Reconstructive-page social/metadata batch published 10 October |
| `/head-neck-reconstruction-singapore` | 2026-09-06 | 2026-10-10 | Reconstructive-page social/metadata batch published 10 October |
| `/trauma-lacerations-singapore` | 2026-09-06 | 2026-10-10 | Scar/trauma navigation and social/metadata work published 10 October |
| `/scar-reconstruction-singapore` | 2026-09-06 | 2026-10-10 | Scar/trauma navigation and social/metadata work published 10 October |
| `/gender-affirming-chest-reconstruction-singapore` | 2026-09-06 | 2026-10-10 | Reconstructive-page social/metadata batch published 10 October |

These are update dates already represented in the live sitemap, not newly inflated dates.

## Implementation

- Set the six procedure records' `modifiedIso` values to their supported 10 or 11 October dates.
- Made `article.modifiedIso` the preferred source for procedure-route sitemap `lastModified`, with the existing path map and global update date retained as fallbacks.
- Kept each article's independent `reviewedIso` unchanged so editorial modification and clinical review remain distinct.

## Validation

- `git diff --check`: passed.
- `npm run build`: passed with TypeScript, 45/45 static pages and sitemap generation.
- Generated HTML: each affected route has one H1, a self-canonical, `index, follow`, and the intended `dateModified`.
- Generated sitemap: all six URLs' `lastmod` values match their rendered `dateModified` values.
- Static audit confirmed no clinical content, `reviewedIso`, `publishedIso`, metadata title/description or route change in this batch.

## Rollback

Revert the batch commit. That restores the prior procedure records and sitemap fallback order without touching later content changes.

## Remaining sprint gates

- Analytics comparison is blocked by the expired GSC Wizard subscription/trial; do not infer outcome from crawl or ranking anecdotes.
- GBP moderation/public-propagation check: next eligible 12 October 2026 at or after 07:57 SGT, if authenticated access is available.
- Overseas-safety crawl/index checkpoint: next eligible 12 October 2026 at or after 19:00 SGT.
- Eyelid-guide and primary surgeon-profile crawl/index checkpoint: next eligible 13 October 2026 at or after 09:00 SGT.
- Outcome assessment: 16 October; final baseline comparison: 17 October.
