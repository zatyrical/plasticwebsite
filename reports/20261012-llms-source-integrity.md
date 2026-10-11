# AI-readable source integrity — 12 October 2026

## Observed gap

The live `https://www.drjeremysun.com/llms.txt` repeated the exact bullet `Senior Consultant Plastic Surgeon in Singapore` twice in its clinician-identity section. The duplication was introduced while replacing ambiguous `MOH specialist` terminology and did not add evidence or a distinct patient-useful fact.

This was a narrow AI-readable source-quality issue. It did not affect the visible clinician page, specialist-register verification link, routes, forms or tracking.

## Implemented

- Removed the duplicate clinician-title bullet while retaining the first occurrence.
- Added `scripts/audit-llms-source.mjs`.
- The audit fails if `/llms.txt` contains an exact duplicate Markdown bullet or links to a missing `drjeremysun.com` page route.
- Added the audit to the production build and exposed it as `npm run audit:llms-source`.

## Wider checks

- All 11 Lymphedasia destinations linked from the rendered Dr site returned HTTP 200 on 12 October 2026.
- The cross-site HMDP deep link retains its live `why-i-pursued-lymphoedema-fellowship` fragment target.
- A fresh 45-route production build, TypeScript check, FAQ parity audit and sitemap/schema modification-date parity audit passed before this narrow correction.

## Validation and rollback

- Run `npm run build`, `npm run audit:faq-parity` and `npm run audit:sitemap-date-parity`.
- Confirm the rendered `/llms.txt` contains exactly one `Senior Consultant Plastic Surgeon in Singapore` bullet.
- Roll back by reverting this pull request. No WordPress state is involved.

This correction does not establish an AI citation, referral, ranking or enquiry change.
