# HMDP credential consistency — 11 October 2026

## Outcome

Reconciled an overstated credential label across seven public site surfaces. Sixteen instances of “MOH-accredited” or “MOH accredited” were replaced with the already approved factual description:

> Dedicated HMDP fellowship training in comprehensive multidisciplinary lymphoedema management and lymphatic surgery in Japan/Tokyo.

The correction removes an avoidable implication that the programme or clinical service was formally accredited or endorsed by MOH. It does not add a new credential, a “first” claim, a superiority claim or a treatment-outcome claim.

## Evidence used

- The existing `/training-and-fellowships` page already uses the approved HMDP wording.
- `reports/20261004-sprint-review.md` records the clinician-confirmed training description and explicitly recommends avoiding MOH-endorsement implications.
- No external inference was used to expand the credential.

## Surfaces corrected

1. Homepage authority summary
2. `/llms.txt`
3. `/how-to-choose-lymphedema-surgeon-singapore`
4. `/lymphovenous-bypass-lva-surgery-singapore`
5. `/lymphedema-surgery-singapore`
6. `/journey-to-lymphedema-surgery-japan`
7. `/blog`

## Technical handling

- Preserved each page’s clinical `lastReviewed` date.
- Set technical `dateModified` to `2026-10-11` on the four affected article/procedure pages with structured data.
- Updated affected sitemap `lastModified` values, including adding an explicit date for the Japan-training article.
- Updated the homepage technical modification date.

## Validation checklist

- [x] No `MOH-accredited` or `MOH accredited` text remains under `app/`.
- [x] Production build succeeds (45 routes; TypeScript passed).
- [x] Structured data retains the existing clinician reviewer and `2026-09-06` clinical review date.
- [x] FAQ structured-data parity passes for all audited routes.
- [x] Affected sitemap entries show `2026-10-11`.
- [ ] Live pages and `/llms.txt` expose the corrected HMDP wording after deployment.

## Rollback

Revert the publication commit or the merged pull request. The batch is limited to copy, structured-data modification dates and sitemap dates; it does not alter routing, tracking, forms or clinical recommendations.
