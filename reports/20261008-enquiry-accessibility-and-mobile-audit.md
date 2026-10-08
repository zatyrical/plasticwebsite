# Enquiry accessibility and responsive-image audit — 8 October 2026

Base: main `962bfc51ad38e194ad0824471c2f2fc272e50aea`. Isolated branch: `seo/enquiry-accessibility-20261008`. Issue #7 checkpoint: https://github.com/zatyrical/plasticwebsite/issues/7#issuecomment-6051908004.

## Observed gaps and implemented changes

1. The shared ContactForm created its `role="status"` element only after a response. The element now exists in the initial render, with explicit `aria-atomic="true"`, so subsequent success/error text updates use an established live region. W3C ARIA22 specifically requires the status container to exist before the update. Source checked 8 October: https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22.
2. Name, email and message now visibly say required; phone says optional, matching their existing HTML validation. Form controls increase from 15px to 16px for readability. Existing field names, validation, endpoint, payload, messages, reset behavior and successful-response-only `generate_lead` tracking are unchanged.
3. Shared procedure hero image `sizes` still described the earlier 900px breakpoint and 330px desktop slot. Current CSS stacks at 1180px, constrains tablet images to 420px, and pads the desktop 330px sidebar by 26px on each side plus a 1px border. Updated hints: up to 600px, viewport minus 78px (44px container padding + 32px summary padding + 2px border); up to 1180px, 420px; desktop, 276px. Image source, alt text and layout remain the same. Next.js documentation confirms `sizes` guides browser source selection for responsive CSS: https://nextjs.org/docs/app/api-reference/components/image#sizes.

## Validation and limits

- `git diff --check`, TypeScript check (`npm run lint`) and production build passed; 44 routes generated.
- Rendered HTML checks on homepage, Asian rhinoplasty, lower blepharoplasty and tummy tuck confirmed the initial empty atomic status region, all four field labels and one H1 each. Asian rhinoplasty and tummy tuck contain the new hero sizing hints; the other sampled templates have no shared hero image.
- React review: no new dependency, client boundary, request, hook or mutable shared state introduced; native label/control association and submit behavior remain intact.
- No enquiry was submitted and no test email sent. Actual screen-reader announcement and physical-phone interaction are not verified by these checks.
- PageSpeed Insights API returned HTTP 429 during a bounded mobile-performance read. No speed score, Core Web Vitals assessment, byte saving, ranking uplift or conversion uplift is claimed. A successful lab/field measurement remains a separate task.
- Publication, production deployment and live checks are recorded in issue #7 after release. Rollback: revert the merged PR; previous three source-file versions are retained in Git history.

## Ranked next queue

| Priority | URL / scope | Observed gap / source | Action | Status | Blocker | Next eligible |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Dr Sun shared enquiry forms and procedure hero images | Initial status-region lifecycle, field labels, CSS/sizes mismatch; W3C and Next.js sources above | Release this validated batch and verify public output | IN PROGRESS | Deployment/live checks | 8 Oct |
| 2 | `/asian-rhinoplasty-singapore`, `/face-neck-lift-singapore`, Lymphedasia assessment page | Mobile performance not measured; API returned 429 | Obtain one bounded lab check or available field data before proposing further performance edits | WAITING | PageSpeed rate limit | 9 Oct; earlier only if an independent measurement is available |
| 3 | Both GSC/GA4 properties | Settled comparison already checked in latest report | Recheck comparable Singapore queries/pages, organic landings, events and AI referrals | WAITING | Data lag / minimum interval | 9 Oct >=09:08 SGT |
| 4 | Both GBP profiles | Latest factual/publication checks completed | Check approval/public propagation and available performance | WAITING | Minimum daily interval | 9 Oct >=06:54 SGT |
| 5 | Eyebag guide / surgeon profile | Recent crawl check completed | Reinspect indexing at agreed interval | WAITING | Minimum 72-hour interval | 10 Oct |
| 6 | Revision rhinoplasty, tummy tuck timing, Lymphedasia pump decisions | Practical answers require original clinician input | Prepare/use interview prompts; do not invent advice | WAITING | Clinical input | When supplied |
| 7 | Fixed native AI-platform prompts | Actual response testing unavailable | Record mention, citation and source separately when platform responses are accessible | WAITING | Native platform access | When available |

This batch addresses actual usability and source-selection gaps. It does not create additional articles or medical claims. The earlier robots alert remains closed as the expected WordPress admin-path restriction; no robots policy is changed here.
