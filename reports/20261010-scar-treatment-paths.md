# Scar-treatment assessment paths — 10 October 2026

## Evidence

Main `3fc0c0f111c0ee1c539be34ae2e76f1cc2e39720` and issue #7 publication proofs reconciled before edits. PR113/114 were complete; no overlapping checkpoint.

Fresh live/source review of `/scar-reconstruction-singapore` confirms existing answers already cover scar types, no complete removal, treatment options, keloid recurrence, maturation and risks. Its treatment section names laser treatment and selected fat grafting but does not link to those existing guides. The laser categories and fat-grafting uses already mention selected scar concerns but do not link back to scar assessment.

Google primary guidance checked 10 October: https://developers.google.com/search/docs/crawling-indexing/links-crawlable . Descriptive contextual links support patient navigation and crawl discovery; no magic link count or ranking claim. Current professional-society patient source: https://www.saps.org.sg/scar-management .

## Implemented

| Existing passage | New destination | Purpose |
|---|---|---|
| Scar treatment options | `/lasers-injectables-singapore#safety` | Existing laser planning/risks |
| Scar treatment options | `/fat-grafting-singapore#assessment` | Existing donor/recipient assessment |
| Scar treatment options | SAPS scar-management source | Verifiable further reading |
| Fat grafting uses | `/scar-reconstruction-singapore#assessment` | Scar treatment planning |
| Laser treatment categories | `/scar-reconstruction-singapore#scar-types` | Identify scar type before options |

Preserved existing clinical wording and related-card ordering. Added no treatment indication, recommendation, outcome, price or new FAQ. The scar-to-options paragraph explicitly says the guides do not establish suitability. Only the three changed routes' sitemap modification dates were updated; clinical review dates retained.

## Validation/publication

- `npm run build`: passed including TypeScript; 45 routes.
- `git diff --check`: passed.
- Generated HTML: all five new links exactly once; all four internal fragments resolve; all three pages retain one H1/self-canonical.
- Exact-head preview READY, current-main/expected-head guards, production READY and ordinary live output required for completion; issue #7 records the publication proofs.

## Independent discovery

- Lymphedasia symposium post5007: source and treatment/profile resources already present. CLOSED without edit.
- Lymphedasia post4829 `/can-i-stop-compression-after-lva/`: answers immediate cessation, timing, individual stability, stage and cure distinction; no duplicate article/FAQ needed. Existing reviewed medical statements retained. Inspect clinical-review and hot-weather/cellulitis links as a separate backed-up Gutenberg navigation batch.
- Upper-eyelid reversal/age/pain and Lymphedasia material medical rewrites remain HELD for clinician evidence. No wording substituted from competitor pages.

## Rollback and waiting checkpoints

Revert this PR's three conditional paragraphs/source link and sitemap dates. No content migration or data rollback. GBP10Oct>=07:06SGT; settled GSC/GA4>=09:08SGT; eyebag/profile crawl10Oct; overseasguide>=12Oct19:00SGT; outcome16/final17Oct. No ranking, qualified-enquiry or native-AI mention uplift inferred.
