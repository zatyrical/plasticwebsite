# 2026-10-09 Lymphedasia lifestyle-safety correction

## Scope

Live WordPress post:

- `https://lymphedasia.com/lymphedema-lifestyle-changes/`
- Post ID: `4165`
- Theme/content path: Astra + Gutenberg `post_content`
- Pre-edit WordPress modified time: `2026-08-07T01:19:42`

The adjacent `/quality-of-life-while-living-with-lymphedema/` candidate was inspected first and closed without editing because its current 7 October rewrite already removed the previously flagged cold-pack, diet/hydration and complementary-therapy claims.

## Observed problem

The lifestyle article still:

- presented a low-sodium diet and extra hydration as lymphedema/swelling treatments;
- overstated weight loss, exercise and compression outcomes;
- described diuretics too loosely;
- contained two public `[Insert Internal Link]` placeholders;
- lacked useful pathways to the existing LVA and post-breast-cancer guides.

## Evidence used

The 2023 International Society of Lymphology consensus says no special diet has proved therapeutic value for most uncomplicated peripheral lymphedema, evidence for weight-loss benefit in established lymphedema is limited, and restricted fluid intake has no demonstrated benefit. It also limits diuretics to selected comorbidities/complications and supports individualised exercise and professionally selected compression.

- ISL consensus PDF: https://isl.arizona.edu/sites/default/files/2024-11/THE-DIAGNOSIS-AND-TREATMENT-OF-PERIPHERAL-LYMPHEDEMA-2023-CONSENSUS-DOCUMENT-OF-THE-INTERNATIONAL-SOCIETY-OF-LYMPHOLOGY.pdf
- PubMed record: https://pubmed.ncbi.nlm.nih.gov/39207406/

## Implemented live

Nine exact match-once WordPress revisions were saved:

1. Reframed lifestyle adjustments around practical routines and a personalised care plan.
2. Qualified BMI/weight-management language and the limited evidence for weight loss improving established lymphedema.
3. Replaced sodium/hydration treatment claims with a general-health explanation and explicit no-special-diet limitation.
4. Reframed exercise around function, gradual progression and individualised compression use.
5. Qualified compression as a core component for many patients, with professional fitting and contraindication awareness.
6. Corrected diuretic use; added a contextual link to `/lva-surgery-singapore/`.
7. Replaced the breast-cancer placeholder with a contextual link to `/lymphedema-after-breast-cancer-treatment-singapore/`.
8. Reconciled the conclusion with the corrected diet, care and red-flag guidance.
9. Removed the remaining low-sodium FAQ recommendation.

No new procedure outcome, cure, price or credential claim was added.

## Verification

Authenticated browser verification on 9 October 2026 confirmed:

- one visible H1;
- all nine revised passages rendered live;
- both new internal links resolve in the live page accessibility tree;
- both `[Insert Internal Link]` placeholders are absent;
- the low-sodium recommendation is absent;
- canonical remains `https://lymphedasia.com/lymphedema-lifestyle-changes/`;
- the live page exposes the updated WordPress modified timestamp `2026-10-09T01:00:20+00:00`.

## Rollback

WordPress created a normal revision for every match-once post-content edit. The exact pre-edit raw Gutenberg content is preserved at:

- `reports/backups/20261009-lymphedasia-lifestyle-post4165.md`

## Remaining independent candidate

The article still contains some generic/absolute legacy phrasing outside this focused batch. Re-audit it only after higher-priority unreviewed patient-journey pages have been rotated through; do not churn the corrected diet section.
