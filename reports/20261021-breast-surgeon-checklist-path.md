# Breast-augmentation surgeon-selection checklist path — 21 October 2026

## Observed gap

The maintained [breast augmentation guide](https://www.drjeremysun.com/breast-augmentation-singapore) already has a `choosing-surgeon` section with procedure-specific comparison points: recognised specialist training, measurement-led sizing, implant-plane and incision planning, breast-screening considerations, complication management and long-term implant follow-up.

That exact decision point did not lead readers to the site's maintained [credential-evaluation checklist](https://www.drjeremysun.com/plastic-surgeon-singapore#evaluate) or [consultation questions](https://www.drjeremysun.com/plastic-surgeon-singapore#consultation). Generic profile and enquiry routes serve a different task.

The existing page and first-party checklists are the approved source. Google's current people-first and link guidance supports useful descriptive contextual links; it does not establish a ranking formula or outcome.

## Implemented action

Added one concise sentence after the existing breast-augmentation `choosing-surgeon` section, linking to both maintained checklist anchors. No clinical wording, outcome, price, credential, title, description, keyword, review date, sitemap date, URL, image, form, tracking or schema changed. No new page was created.

## Controls and verification

- Reconciled issue #7 through completion comment `6308671492`, fresh `origin/main` `ede3704559579c16a564ceaa5fe567f087b94e4b`, current reports and held drafts #252/#257. No active or overlapping batch owned this page.
- Isolated branch: `seo/breast-surgeon-checklist-20261021`.
- TypeScript and a 47-route production build passed after the fresh worktree reused an existing clean dependency tree. The first build attempt used a cross-worktree dependency symlink, which Turbopack rejected because it pointed outside the worktree root; the dependency tree was hard-linked locally and no source workaround was made.
- All 69 mocked form/security/analytics/navigation/motion tests passed. Credential, light-label contrast, diagram contrast, enquiry-focus, article-link, llms, navigation, comparison, full-size-diagram, sitemap-date and FAQ-parity audits passed.
- The internal-fragment audit passed 797 fragment links across 41 static pages.
- Built output contains exactly one link to each intended checklist anchor on the breast guide. The destination output contains one `evaluate` ID and one `consultation` ID.
- Release gates remain fresh main unchanged or conflict-free, a mergeable PR, expected-head merge guard, exact production deployment verification and ordinary public verification.

Rollback: revert the isolated merge after reconciling any later edits. No WordPress, analytics, GBP or database state is involved.

## Queue

| State | URL / scope | Observed evidence / approved source | Action / blocker / next eligible check |
|---|---|---|---|
| COMPLETE after release | https://www.drjeremysun.com/breast-augmentation-singapore | Existing breast-specific comparison section plus maintained first-party credential and consultation checklists | One contextual checklist path; reopen only for an observed fault or distinct approved material |
| WAITING | Eyebag guide, surgeon profile and tummy canonical set | Existing 72-hour cadence; no new fault in this batch | Eligible 21 Oct 2026 at or after 15:01 SGT |
| WAITING | Lymphedasia GBP UTM/public propagation | Daily cadence | Eligible 21 Oct 2026 at or after 17:30 SGT |
| WAITING | Both properties' matched GSC/GA4 data | 12–18 Oct vs 5–11 Oct completed earlier today | Do not repeat before 22 Oct 2026 12:02 SGT |
| WAITING | Detailed analytics report publication | Local evidence only | Explicit approval before publishing private GSC/GA4 figures to GitHub |

This is a patient-navigation and internal-discovery improvement under the elective SEO playbook, not evidence of a ranking, qualified-enquiry or native-AI citation gain.
