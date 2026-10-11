# Sitewide sitemap/schema date parity — 11 October 2026

## Observed production fault

A full rendered-site comparison found six remaining URLs whose sitemap `lastmod` did not match the same page's structured `dateModified`. All six live URLs returned 200 directly, had one H1 and were self-canonical.

| URL | Previous `dateModified` | Existing sitemap `lastmod` | Evidence for the sitemap date |
| --- | --- | --- | --- |
| `/aesthetic-surgery` | 2026-10-06 | 2026-10-10 | Page-specific Open Graph and X/Twitter metadata published 10 October |
| `/breast-reconstruction-singapore` | 2026-10-07 | 2026-10-10 | Visible FAQ and retained FAQ schema were consolidated to one source on 10 October |
| `/thread-lifting-singapore` | 2026-09-06 fallback | 2026-10-03 | Procedure page was included in the 3 October publication/navigation batch |
| `/child-facial-laceration-plastic-surgeon-singapore` | 2026-09-06 fallback | 2026-10-03 | Procedure page was included in the 3 October publication/navigation batch |
| `/facial-laceration-repair-singapore` | 2026-09-06 fallback | 2026-10-03 | Procedure page was included in the 3 October publication/navigation batch |
| `/ftm-top-surgery-singapore` | 2026-09-06 fallback | 2026-10-03 | Procedure page was included in the 3 October publication/navigation batch |

These dates were already published in the sitemap and are supported by repository evidence. This batch does not advance a date beyond its existing sitemap value.

## Implementation

- Aligned the two bespoke pages' structured `dateModified` values to their evidenced 10 October update dates.
- Added explicit 3 October `modifiedIso` values to the four shared procedure records so they no longer fall back to the 6 September clinical review date.
- Added `npm run audit:sitemap-date-parity`. After a production build, it compares each sitemap URL/date with matching page JSON-LD nodes and fails on divergence.
- Preserved every clinical review date and all clinical wording, metadata text, URLs, forms and tracking.

## Validation plan

- `git diff --check`
- `npm run lint`
- `npm run build`
- `npm run audit:faq-parity`
- `npm run audit:sitemap-date-parity`
- Generated and live checks for all six routes: 200, one H1, self-canonical, intended `dateModified` and matching sitemap `lastmod`
- Expected-head PR merge, exact-commit Vercel deployment and ordinary production verification

## Rollback

Revert the batch commit. That restores the six prior structured values and removes the reusable audit without changing clinical content.

## Limits

This is technical consistency and maintenance protection. It does not establish recrawling, ranking, AI citation, traffic or enquiry improvement.
