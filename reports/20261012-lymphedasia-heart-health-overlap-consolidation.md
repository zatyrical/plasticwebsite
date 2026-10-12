# Lymphedasia heart-health overlap consolidation — 12 October 2026

## Outcome

Retired an unsafe, overlapping Lymphedasia article without replacing it with new medical copy:

- retired WordPress post `4110`: <https://lymphedasia.com/lymphedema-and-heart-health/>
- maintained destination, WordPress post `4247`: <https://lymphedasia.com/lymphedema-vs-edema-difference/>
- Redirection rule `45`: enabled permanent `301` from the retired path to the maintained guide

Post `4110` is now a reversible draft. The old public path returns `301` with `X-Redirect-By: redirection`; following it resolves to the maintained page's title and self-canonical.

## Why consolidation was chosen

The zero-link audit had held post `4110` for cardiovascular-claim review. Inspection found repeated claims that lymphoedema increases blood volume, strains the cardiovascular system and can cause or increase the risk of hypertension, cardiovascular disease and heart failure. The article also contained unsourced future-treatment and self-management language.

Those statements were not supported by the already-reviewed clinical source set. The maintained oedema-differential page had already been corrected against the [2023 International Society of Lymphology consensus](https://isl.arizona.edu/sites/default/files/2024-11/THE-DIAGNOSIS-AND-TREATMENT-OF-PERIPHERAL-LYMPHEDEMA-2023-CONSENSUS-DOCUMENT-OF-THE-INTERNATIONAL-SOCIETY-OF-LYMPHOLOGY.pdf) and primary studies, including evidence that systemic, venous and lymphatic causes can coexist and require clinical assessment. The source review and exact published corrections are recorded in `reports/20261009-lymphedasia-edema-differential-authority.md`.

Because the risky article had no contextual links and substantially overlapped the safer guide, consolidation was more useful and lower risk than rewriting it or creating another keyword variant. No ranking, cannibalisation, enquiry or AI-citation claim is inferred from this decision.

## Publication sequence

1. Created Redirection rule `45` for `/lymphedema-and-heart-health/` to the maintained absolute URL, with exact URL matching, trailing-slash matching and status `301`.
2. Reconciled the initially truncated write response before any retry; the rule existed and was not duplicated.
3. Confirmed post `4110` was still published, then changed only its status to `draft` through the supported WordPress REST route. WordPress revisions and content remain available.
4. Attempted a targeted cache purge. WPVibe reported that no supported page-cache plugin was detected, so no cache was purged; no destructive fallback was used.

## Validation

- WordPress REST and WP-CLI both report post `4110` as `draft`; its modified time is `2026-10-12T15:05:30Z` (`23:05:30` SGT).
- Redirection REST reports one matching rule only: ID `45`, enabled, non-regex, group `1`, action `301`, correct destination.
- Fresh command-line headers from the public URL report HTTP `301`, `Location: https://lymphedasia.com/lymphedema-vs-edema-difference/` and `X-Redirect-By: redirection`.
- Following the redirect returns the maintained title `Lymphedema vs Edema: How Doctors Tell the Difference` and one canonical to the destination URL.
- The maintained destination remains in `post-sitemap.xml`.
- The retired URL was still present in the dynamic Rank Math sitemap immediately after publication, despite the draft status. This is a cache/regeneration lag, not a live indexable page: the public route is already a permanent redirect. Recheck after Rank Math's sitemap cache has regenerated; do not repeat the retirement or redirect write.

## Rollback

1. Reconcile the current post and redirect state first.
2. Republish WordPress post `4110`; its body and revisions were retained.
3. Disable or delete only Redirection rule `45`.
4. Purge the affected URL caches and verify the restored page, canonical and sitemap entry.

## Queue disposition

- Post `4110`: **CONSOLIDATED — live 301; source post retained as draft**
- Destination post `4247`: **MAINTAINED**
- Rank Math sitemap removal: **WAITING — verify on or after 13 October 2026 09:00 SGT**
- Do not rewrite or republish the retired heart-health article without a new clinician-approved source review.
