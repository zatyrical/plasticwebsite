# Lower-blepharoplasty surgeon-checklist path — 21 October 2026

## Outcome

Added one contextual patient-decision sentence after the existing `Questions to ask before lower eyelid surgery` list on:

- `https://www.drjeremysun.com/eyebag-removal-lower-blepharoplasty-singapore`

The sentence links to the maintained credential-evaluation and broader consultation-question sections:

- `/plastic-surgeon-singapore#evaluate`
- `/plastic-surgeon-singapore#consultation`

This does not add or revise clinical advice, outcomes, prices, credentials, metadata, review dates, images, forms, tracking, schema or URLs. No new page was created.

## Observed evidence

The lower-blepharoplasty guide already contained five procedure-specific consultation questions. It also linked to adjacent upper-eyelid and facial-rejuvenation guides from a separate consultation section. The final question list did not route readers to the site's maintained credential and general consultation checklists, which answer the distinct tasks of evaluating a surgeon and preparing broader questions.

## Verification

- Fresh base: `af017b26869653766aa115def3a5e39887e3d6a5`.
- Scope: three inserted JSX lines in `app/ProcedureArticle.tsx` plus this report.
- `git diff --check`: passed.
- TypeScript: passed.
- All 69 mocked form, security, analytics, navigation and motion tests: passed.
- Production build: 47 routes generated successfully.
- Credential terminology, contrast, enquiry-focus, article-link, `llms.txt`, navigation, comparison, full-size-diagram and sitemap-date audits: passed.
- Internal-fragment audit: 799 fragment links across 41 static pages; passed.
- FAQ parity: passed, including seven questions on the lower-blepharoplasty route.

## Rollback

Revert the isolated merge after reconciling any later changes to `app/ProcedureArticle.tsx`. No WordPress, database or analytics state is involved.

## Queue

### READY

- Rotate to a distinct unaudited tummy-tuck or lymphoedema patient-journey gap after fresh issue/main overlap checks.

### WAITING

- Matched Singapore non-brand GSC/GA4 comparison: do not repeat before 22 October 2026 at 12:02 SGT.
- GBP propagation/moderation: daily cadence only; next eligible 21 October 2026 at 17:30 SGT.
- Turnstile: await genuine post-activation enquiry evidence; do not submit a synthetic enquiry.
- Screening/prevention/compression clinical-expansion candidates: clinician/source review required.
- UpdraftPlus security update: separate controlled security work, not part of this SEO batch.
