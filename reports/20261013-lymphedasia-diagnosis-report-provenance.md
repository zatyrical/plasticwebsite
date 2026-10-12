# Lymphedasia diagnosis-report provenance cleanup — 13 October 2026

## Scope

- Live page: https://lymphedasia.com/lymphedema-diagnosis-report-explained/
- WordPress post: `4291`
- Pre-edit modified time: `2026-10-07T04:02:32Z`
- Post-edit modified time: `2026-10-12T21:08:05Z`
- Editing path: authenticated WPVibe Gutenberg `post_content` match-once edits

## Implemented

1. Removed the full `DR. SUN'S CLINICAL PERSPECTIVE` table containing an unverified first-person quotation and detailed LVA/VLNT candidacy statements. No replacement clinical claim was introduced.
2. Linked the existing phrase `International Society of Lymphology (ISL)` to the primary 2023 ISL consensus record on PubMed: https://pubmed.ncbi.nlm.nih.gov/39207406/
3. Preserved the existing neutral consultation, ICG lymphography and LVA assessment links.

## Verification

- Authenticated WordPress read: status remains `publish`; quote and attribution box absent; PubMed link occurs once; existing consultation/ICG/LVA links each remain present.
- Public cache-busted fetch: HTTP `200`; one H1; self-canonical present; no `noindex`; quote absent; PubMed link occurs once.
- PubMed destination returned HTTP `203` to an automated request and served a response; the canonical record URL is valid.

## Deliberately held for clinician review

This provenance cleanup is not a full medical clearance. The following existing statements were left unchanged pending exact clinician-approved wording:

- the L-Dex threshold statement (`above 10`);
- the explanation that higher bioimpedance resistance indicates more fluid;
- stage-specific treatment-response and surgical-candidacy statements;
- statements about progression triggers and the stage comparison table.

## Rollback

Restore the exact pre-edit `content.raw` and metadata captured in:

`reports/backups/20261013-lymphedasia-diagnosis-report-post4291-before.json`

The backup was taken via authenticated WordPress REST immediately before the edits.
