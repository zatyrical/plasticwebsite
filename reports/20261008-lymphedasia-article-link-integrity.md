# LymphedAsia article-link integrity repair — 8 October 2026

## Scope

This was a bounded, anchor-only audit of 17 published LymphedAsia articles:

- seven LVA decision articles covering candidacy, timing, compression, surgeon selection, vein disease and bypass quality;
- ten diagnosis, conservative-care, breast-cancer and surgery articles.

The audit parsed real `<a href>` links only. It did not treat WordPress shortlink or metadata URLs as reader-facing links. Two batches checked 64 internal-destination references; repeated global/navigation destinations can occur across batches.

## Observed faults

| Source | Reader-facing fault | Resolution |
|---|---|---|
| `/lymphedema-compression-garments/` (post 1172) | The “lymphedema therapist” link passed through `/role-of-certified-therapists-in-treatment/` before reaching its current article. | Link directly to self-canonical `/lymphedema-therapy/`. |
| `/lymphedema-in-arms-after-breast-cancer-surgery/` (post 1767) | The “understand lymphedema” link passed through `/understanding-lymphedema-and-treatment-options/`. | Link directly to self-canonical `/lymphedema-treatment/`. |
| `/surgical-treatment-options-for-lymphedema/` (post 1743) | “Lymphedema can be managed” linked to missing `/summer-skincare-protection-for-lymphedema/` (404), a destination that also did not match the surgical context. | Link to live self-canonical `/lymphedema-surgery-singapore/`. |

## Implementation

All three sources are Gutenberg posts. WPVibe match-once content edits changed only the three href values:

1. `https://lymphedasia.com/role-of-certified-therapists-in-treatment/` → `https://lymphedasia.com/lymphedema-therapy/`
2. `https://lymphedasia.com/understanding-lymphedema-and-treatment-options/` → `https://lymphedasia.com/lymphedema-treatment/`
3. `https://lymphedasia.com/summer-skincare-protection-for-lymphedema/` → `https://lymphedasia.com/lymphedema-surgery-singapore/`

Each old URL had exactly one source-content match and each edit reported exactly one replacement. WordPress created normal post revisions. No visible copy, clinical statement, title, schema, image, form, tracking or publication state changed.

## Verification

Fresh public HTML verification after the edits confirmed:

- all three source URLs return HTTP 200;
- each remains indexable and self-canonical with exactly one H1;
- the three new direct links are present;
- the three old href values are absent;
- all 21 internal destinations linked from the three repaired pages return 200 without a redirect hop.

The other 14 audited articles were left unchanged because their checked internal links, indexability, canonical and H1 state were sound.

## Rollback

Use the relevant WordPress revision or reverse the three exact URL mappings above with match-once content edits. Ordinary post writes invalidate the affected page cache; no sitewide cache flush is required.

## Measurement limits and next checks

This is a crawl-efficiency and reader-path repair, not evidence of a ranking or conversion gain. Search Console and GA4 are next eligible on 9 October 2026 at or after 09:08 SGT; Google Business Profile is next eligible on 9 October at or after 06:54 SGT; the eyebag/profile crawl check is next eligible on 10 October.
