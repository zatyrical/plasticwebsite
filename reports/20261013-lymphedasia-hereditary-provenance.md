# Lymphedasia hereditary-lymphoedema provenance cleanup

Date: 13 October 2026 (Singapore)
Live URL: https://lymphedasia.com/hereditary-lymphedema-milroy-disease/
WordPress post: 4274
Starting main: `f5bd6a70110de0bcb5eccdcb532dfb055c74cc86`

## Observed issue

The published Gutenberg article contained:

- a first-person “Dr Sun’s clinical perspective” quotation that was not backed by an approved source record;
- an outcome-framed closing sentence (“can change your outcome”) plus an unverified “genetic workup coordination” service claim;
- an unlinked but accurate attribution to the NCBI GeneReviews Milroy disease chapter; and
- a separate table stating `GJC2 (most cases)` for Meige disease, for which the inspected family studies do not establish a majority-population denominator.

The final genetics item requires exact clinician/genetics review and was not rewritten.

## Implemented changes

1. Removed the complete unsupported quotation/table.
2. Linked the existing GeneReviews attribution to the official NCBI chapter:
   https://www.ncbi.nlm.nih.gov/sites/books/NBK1239/
3. Replaced the promotional closing paragraph with a neutral route to the existing consultation guide:
   https://lymphedasia.com/private-lymphedema-consultation-singapore/

Each WordPress edit used the supported match-once content-edit route and returned `replaced: 1`. The page remained published. No whole-post overwrite, raw SQL, title, URL, metadata, author, review date, tracking, genetics table or treatment claim changed.

## Verification

Authenticated stored content and cache-busted public HTML verified:

- post status `publish`, modified `2026-10-12T20:08:11Z`;
- unsupported quote, outcome phrase and service claim absent;
- one GeneReviews source link and one consultation-guide link present;
- held `GJC2 (most cases)` phrase unchanged pending review;
- one H1, self-canonical URL and `index, follow` robots directive;
- both destination URLs returned HTTP 200.

## Evidence boundary

The official GeneReviews chapter supports the existing Milroy/FLT4 discussion and describes congenital or early lower-limb lymphoedema with variable severity. It does not validate every other statement in this article.

Primary/family studies inspected for GJC2 establish associations in selected families, not “most cases” across a defined Meige population:

- https://pubmed.ncbi.nlm.nih.gov/20537300/
- https://pubmed.ncbi.nlm.nih.gov/21266381/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7525776/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3776465/

Terminology and phenotype groupings differ across older and newer sources. The table wording, broad inheritance generalisations, testing pathway, treatment/outcome language and any service-specific genetics coordination remain queued for clinician/genetics review. This cleanup is not a full medical clearance.

## Rollback

Exact pre-edit raw source and metadata:
`reports/backups/20261013-lymphedasia-hereditary-post4274-before.json`

Reconcile the current live post first, then reverse only the three exact patches from that backup. WordPress revisions remain available.
