# Lymphedasia prevention-overlap consolidation — 13 October 2026

## Outcome

Retired an unsupported, overlapping Lymphedasia article without adding or rewriting medical advice:

- retired WordPress post `4150`: <https://lymphedasia.com/lymphatic-health-for-lymphedema-prevention/>
- maintained destination, WordPress post `3517`: <https://lymphedasia.com/how-to-prevent-lymphedema/>
- Redirection rule `46`: enabled permanent `301` from the retired path to the maintained guide

Post `4150` is now a reversible draft. The old public path returns `301` with `X-Redirect-By: redirection`; following it resolves to the maintained page title and self-canonical.

## Observed gap

The older zero-link article framed general “lymphatic health,” diet, exercise and lymphatic massage as instrumental in preventing lymphoedema. It repeatedly implied that self-directed massage, diet and exercise could prevent the condition, and mixed risk reduction, treatment and future-therapy claims without cited evidence or individual qualification.

The maintained guide already owns the same risk-reduction intent and provides the safer decision boundary:

- not every case can be prevented;
- the goals are personal risk assessment, skin protection, gradual return to activity and recognition of early changes;
- compression is not automatic for every person at risk;
- no detox, supplement, diet or hydration routine guarantees prevention or treatment;
- manual lymphatic drainage is not a cure or universal standalone treatment; and
- persistent or urgent symptoms require appropriate clinical review.

A current inventory of all 187 published posts found no body link pointing to the retired URL. No Search Console ranking or query/page evidence was available, so the decision is based on direct content overlap, patient safety and the maintained page's stronger evidence boundaries—not a cannibalisation claim.

## Evidence boundary

The [2023 International Society of Lymphology consensus](https://isl.arizona.edu/sites/default/files/2024-11/THE-DIAGNOSIS-AND-TREATMENT-OF-PERIPHERAL-LYMPHEDEMA-2023-CONSENSUS-DOCUMENT-OF-THE-INTERNATIONAL-SOCIETY-OF-LYMPHOLOGY.pdf) cautions that many traditional prevention “do's and don'ts” are anecdotal or insufficiently investigated, while exercise, weight management, manual lymph drainage and early surveillance continue to have differing evidence and require population-specific interpretation. The [US National Cancer Institute patient guidance](https://www.cancer.gov/about-cancer/treatment/side-effects/lymphedema) similarly distinguishes lowering risk or limiting worsening from guaranteed prevention.

Consolidation therefore preserved the cautious maintained guide instead of rewriting the older page or creating another keyword variant. No new clinical claim, outcome, price, credential, contact route or tracking was added.

## Publication sequence

1. Confirmed post `4150` and destination post `3517` were both published and returned HTTP 200.
2. Confirmed no existing redirect matched the retired path.
3. Created Redirection rule `46` for the retired path to the maintained absolute URL, with exact URL and trailing-slash matching and status `301`.
4. Changed only post `4150`'s status to `draft` through the supported WordPress REST route. The content and revisions remain available.

## Validation

- WordPress reported post `4150` as `draft`, modified `2026-10-12T16:02:55Z` (`13 October 2026 00:02:55` SGT).
- Redirection REST returned rule `46`, enabled, non-regex, group `1`, action `301`, correct destination.
- Fresh public headers returned HTTP `301`, the correct `Location`, and `X-Redirect-By: redirection`.
- Following the redirect returned title `How to Prevent Lymphedema: Risk Reduction and Treatments` and one canonical to the destination.
- The maintained destination remains in `post-sitemap.xml`.
- The retired URL remained in the dynamic Rank Math sitemap immediately after publication despite its draft status. This is a cache/regeneration lag, not a live indexable page: the public route already redirects permanently. Recheck with the previous retired URL after Rank Math's sitemap cache has regenerated; do not repeat either write.

## Rollback

1. Reconcile current post and redirect state.
2. Republish WordPress post `4150`; its body and revisions were retained.
3. Disable or delete only Redirection rule `46`.
4. Purge affected URL caches and verify the restored page, canonical and sitemap entry.

## Queue disposition

- Post `4150`: **CONSOLIDATED — live 301; source retained as draft**
- Destination post `3517`: **MAINTAINED**
- Rank Math sitemap removal: **WAITING — verify on or after 13 October 2026 09:00 SGT**
- Do not republish the retired article without a new clinician-approved source review.
- This correction does not establish ranking, enquiry or AI-citation uplift.
