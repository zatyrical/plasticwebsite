# Rib-rhinoplasty surgeon-checklist path — 21 October 2026

## Outcome

Added one contextual patient-decision sentence after the existing `Questions to ask before rib rhinoplasty` list on:

- `https://www.drjeremysun.com/rib-rhinoplasty-singapore`

The sentence links to the maintained credential-evaluation and broader consultation-question sections:

- `/plastic-surgeon-singapore#evaluate`
- `/plastic-surgeon-singapore#consultation`

This does not add or revise clinical advice, outcomes, prices, credentials, metadata, review dates, images, forms, tracking, schema or URLs. No new page was created.

## Observed evidence

The rib-rhinoplasty guide already contains six graft-, donor-site- and revision-specific consultation questions. It also routes readers to the Asian-rhinoplasty materials, previous-surgery/filler and recovery sections. The final question list did not route readers to the site's maintained credential and general consultation checklists, which answer the separate tasks of evaluating a surgeon and preparing broader questions. The Asian-rhinoplasty guide already uses those maintained routes.

## Scope and verification

- Fresh base: `8b48735a562d46010570d72e6a6620cbf84b0e07`.
- Exact-match guard: the revision-planning insertion point occurred once.
- Scope: one three-line JSX conditional in `app/ProcedureArticle.tsx` plus this report.
- The branch source contains one new rib-rhinoplasty-specific sentence and the two exact maintained fragment targets.
- PR build/deployment, fresh-main/mergeability and public production proof are recorded in issue #7.

## Rollback

Revert the isolated merge after reconciling any later changes to `app/ProcedureArticle.tsx`. No WordPress, database or analytics state is involved.

## Queue

### READY

- `https://lymphedasia.com/can-lymphedema-be-cured/`: repair the exact `defined,d` typo after WPVibe capacity returns and a fresh raw backup can be archived.
- On the same URL, reconcile the unsupported attributed outcome block against recorded clinician provenance; remove it if no approval exists, without inventing replacement claims.

### WAITING

- Matched Singapore non-brand GSC/GA4 comparison: do not repeat before 22 October 2026 at 12:02 SGT.
- Breast-cancer guide overlap: wait for matched query-to-page/canonical/inbound evidence.
- Direct Search Console UI: next ordinary probe after 22 October 2026 at 17:11 SGT unless an authenticated session or export returns sooner.
- GSC Wizard: next ordinary probe after 22 October 2026 at 17:55 SGT; no subscription purchase.
- GBP propagation/moderation: next eligible after 22 October 2026 at 17:57 SGT.
- Turnstile: genuine post-activation enquiry evidence only; no synthetic enquiry.
- Screening/prevention/compression clinical-expansion candidates and draft #257: clinician/source review required.
- UpdraftPlus security update: separate controlled security work.
