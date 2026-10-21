# Lipedema conservative-care decision paths — 21 October 2026

## Observed gap

The maintained [lipedema diagnosis guide](https://lymphedasia.com/lipedema-singapore/) already names compression and lymphatic therapy in its treatment overview, but those exact decisions did not lead readers to the maintained practical guides. Its related-reading list points to the broader treatment hub, which serves a different orientation task.

Fresh authenticated source on 21 October 2026 confirmed page 4972 is published Gutenberg content. The target pages were also freshly read:

- [Compression garments for swelling](https://lymphedasia.com/lymphedema-compression-garments-for-swelling/) — fit, use, replacement and practical difficulties.
- [Lymphedema therapy](https://lymphedasia.com/lymphedema-therapy/) — therapy components, intensive and maintenance phases, and review triggers.

## Implemented action

Wrapped only the existing words “compression where appropriate” and “physiotherapy or lymphatic therapy” with links to those maintained guides. No clinical wording, recommendation, title, metadata, review date, image, form, tracking or URL changed.

The full fresh source and selected metadata, both target snapshots, exact forward/reverse patch and computed expected source are archived in `reports/backups/20261021-lipedema-care-paths-page4972-before-and-patch.json` before any WordPress mutation.

## Controls and verification

- Reconciled issue #7 through measurement checkpoint `6307999744` and fresh main `446a5acba49ecf2fd588e59726490786b3033e70`; no overlapping active batch.
- Remote pre-change archive commit: `9c07849e2d9367f73a7394352ad8669fad6286e2`.
- Fresh pre-write source and selected metadata exactly matched the archive. The old paragraph occurred once and neither final linked form was already present.
- The supported match-once edit returned `edited` / `replaced: 1`; no whole-body rewrite was used.
- Authenticated raw readback exactly matched the computed expected 14,139-character source. Gutenberg markers remained balanced at 50 opening / 50 closing blocks. Selected metadata was unchanged except `modified_gmt`, which advanced from `2026-10-05T23:07:12Z` to `2026-10-21T05:13:03Z`.
- Ordinary public rendered output shows each new contextual anchor once. Source and both maintained targets returned their expected H1s.
- After-state source and proof are archived in `reports/backups/20261021-lipedema-care-paths-page4972-after.json`.
- Repository validation passed after reusing an existing clean dependency tree: all 69 mocked form/security/analytics/navigation/motion tests, TypeScript, production build, credential/contrast/enquiry/link audits, 795 internal fragments across 41 static pages, navigation/comparison/full-size-diagram checks, and sitemap/schema date parity. The first local attempt failed only because the fresh worktree had no `typescript` dependency installed; no source workaround was made.

Rollback: after a fresh guard, apply the exact reverse patch stored in the pre-change archive, then repeat authenticated and ordinary public verification. Reverting the repository evidence alone does not revert WordPress.

## Queue

| State | URL / scope | Observed evidence / approved source | Action / blocker / next eligible check |
|---|---|---|---|
| COMPLETE | https://lymphedasia.com/lipedema-singapore/ | Existing treatment paragraph plus maintained compression and therapy guides | Two contextual links live and verified; reopen only for an observed fault or distinct approved material |
| WAITING | Legacy lipedema comparison clinical claims | Prior source/provenance report retains substantive diagnostic, staging and treatment holds | Original clinician/source review required; no automatic rewrite |
| WAITING | Eyebag guide, surgeon profile and tummy canonical set | Existing 72-hour inspection cadence; no new fault in this batch | Eligible 21 Oct 2026 at or after 15:01 SGT |
| WAITING | Both properties matched GSC/GA4 | 12–18 Oct vs 5–11 Oct completed earlier today | Do not repeat before 22 Oct 2026 12:02 SGT |

This is patient-navigation work under the elective SEO playbook, not a new clinical claim or a ranking guarantee.

