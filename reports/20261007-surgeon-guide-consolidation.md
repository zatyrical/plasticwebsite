# Surgeon profile and safety-guide consolidation — 7 October 2026

## Observed evidence

- Singapore web Search Console query/page data for 7 September–4 October 2026 was settled through 4 October.
- `/plastic-surgeon-singapore` recorded 4 clicks and 37 visible query rows. `/top-plastic-surgeon-singapore` recorded no clicks and 18 visible query rows.
- For the shared query `guide to plastic surgery in singapore`, the primary profile recorded 41 impressions at average position 10.90; the secondary guide recorded 17 impressions at average position 23.59.
- The secondary guide repeated the primary page’s existing content about specialist credentials, suitability, risks, realistic planning and consultation questions. Its distinct useful answer concerned how patients should interpret unsupported “top” or “best” claims.
- These are small Search Console samples. They support a consolidation decision but do not establish a ranking outcome.

## Implemented

1. Preserved the secondary guide’s neutral answer about “top plastic surgeon” searches in the primary profile’s evaluation section and FAQ.
2. Removed the duplicate page from the application, sitemap, homepage article grid and `llms.txt` discovery list.
3. Added a permanent redirect from `/top-plastic-surgeon-singapore` to `/plastic-surgeon-singapore` so existing visitors and links reach the stronger canonical page.
4. Updated the primary page’s truthful modification date to 7 October 2026.

No new medical, credential, outcome, pricing or recovery claims were added.

## Validation and rollback

- TypeScript, whitespace and production build checks pass; the build emits 44 routes rather than the previous 45.
- Local production verification returns `308 Permanent Redirect` from the retired URL to `/plastic-surgeon-singapore`.
- The destination returns a self-referencing canonical, includes the preserved neutral “top” answer, and the retired URL is absent from sitemap and `llms.txt`.
- After deployment, repeat the redirect, destination, canonical, sitemap and `llms.txt` checks against the public site.
- Rollback: revert the pull request to restore the page, discovery entries and remove the redirect.

## Next measurement

Compare the consolidated URL’s Singapore query/page performance only after enough settled data accumulates. Do not claim improvement from the redirect alone.
