# Lymphedasia surgical-options accuracy cleanup — 10 October 2026

## Scope

Page: https://lymphedasia.com/surgical-treatment-options-for-lymphedema/ (WordPress post 1743).

This was a bounded safety and accuracy cleanup of three passages in the older surgery-options article. It did not change the URL, title, metadata, author, featured image, review date, forms, tracking, redirects or the maintained surgery hub.

The article overlaps the newer `/lymphedema-surgery-singapore/` hub. Consolidation is held until eligible Search Console query-to-page evidence is reviewed; overlap alone does not justify a redirect or canonical change.

## Observed evidence

Fresh authenticated source contained:

1. an inaccurate description of vascularised lymph node transfer as moving lymph nodes “from another body”;
2. a broad advanced-stage paragraph that labelled Charles surgery as a two-stage approach without context; and
3. promotional “promising/novel/aesthetics” wording that blurred physiologic and reductive operations.

The maintained, clinically reviewed surgery hub and LVA/VLNT/liposuction comparison already provide neutral descriptions of LVA, VLNT and reductive procedures. Those published descriptions were used as the boundary for this cleanup; no new outcome, candidacy, recovery or fee claim was introduced.

## Published corrections

- Corrected VLNT to describe movement of lymph-node-containing tissue with its blood supply from one part of the patient’s body to another.
- Reframed liposuction-type and other reductive procedures as tissue-bulk reduction that does not repair the underlying lymphatic drainage problem.
- Replaced promotional plastic-surgery language with a neutral distinction between physiologic and reductive procedures and stated that they are not interchangeable.

All three changes used supported server-side match-once edits. Each write reported exactly one replacement.

## Verification

- Exact pre-edit backup was committed before the WordPress writes.
- Fresh authenticated source exactly equals the pre-edit source plus the three intended substitutions.
- The inaccurate “another body” phrase is absent.
- New descriptions each occur once.
- Title, published status, author 5 and featured image 0 are unchanged.
- Modified timestamp moved from `2026-10-08T08:07:29` to `2026-10-09T19:00:54` UTC.
- Fresh public HTML exposes the unchanged self-canonical URL and `index, follow` robots state, with updated article metadata timestamp.
- No contact form or test enquiry was submitted.

## Held clinical items

A proposed fourth edit would have introduced a detailed list of surgical decision criteria. The connector safety review rejected it as not explicitly clinician-approved, so that edit and the five subsequent clinical rewrites were not attempted.

The following existing passages remain queued for clinician evidence or a later consolidation decision:

- stage-based surgery shortcuts;
- unqualified “significant” or “lasting” outcome wording;
- the statement that LVA is often used in advanced disease;
- broad breast-cancer and lower-limb candidacy wording;
- the primary-lymphedema surgery FAQ.

Do not retry those edits indirectly. Use reviewed clinician evidence or explicit approval.

## Rollback

Use `reports/20261010-surgical-options-rollback.json` only after reconciling the live modified state. Reverse the three successful match-once patches in the documented order. The full before and after snapshots are:

- `reports/backups/20261010-surgical-options-post1743-before.json`
- `reports/backups/20261010-surgical-options-post1743-after.json`

Reverting this repository report alone does not roll back WordPress.

## Queue disposition

- COMPLETE: the three narrow factual/classification corrections above.
- HELD: remaining material clinical claims pending clinician evidence/approval.
- WAITING: decide whether post 1743 and the maintained surgery hub compete only after the next eligible Search Console query/page review at or after 10 October 09:08 SGT.
- CLOSED without edit: the stale publications-source candidate; all eight current entries already have DOI or PubMed links.
