# Lymphedasia complication-prevention paths — 9 October 2026

## Scope and observed gap

- Page: https://lymphedasia.com/how-to-prevent-lymphedema-complications/ (WordPress post 1003).
- The concise reviewed article already answered skin protection, cellulitis, compression, reassessment and surgery timing, but it exposed only the LVA guide as an in-body patient pathway.
- Pre-edit modification: `2026-08-25T11:18:14`; an authenticated source guard passed immediately before writing.
- Exact backups: `reports/backups/20261009-lymphedasia-complications-post1003-before.json` and `reports/backups/20261009-lymphedasia-complications-post1003-after.json`.

Google's current link guidance says to cross-reference useful related content with concise, relevant anchor text and not chase a fixed link count. Checked 9 October 2026: https://developers.google.com/search/docs/crawling-indexing/links-crawlable.

## Published change

The article's medical wording, title, clinician-review date, metadata, URL, tracking and forms were unchanged. Five descriptive links now connect existing phrases to already-published reviewed resources:

| Existing phrase | Destination | Patient journey |
|---|---|---|
| `skin care` | `/lymphedema-skin-wound-care/` | Prevention to detailed skin/wound guidance |
| `Consistent compression` | `/lymphedema-compression-garments-for-swelling/` | Prevention to compression-garment guidance |
| `reassessment` | `/private-lymphedema-consultation-singapore/` | Changed symptoms to specialist review |
| `imaging` | `/icg-lymphography-singapore/` | Reassessment to the existing ICG explainer |
| `Cellulitis` | `/lymphedema-and-cellulitis/` | Urgent complication question to warning-sign guidance |

The existing LVA link was preserved. Each exact snippet was replaced once through the supported content-edit endpoint.

## Verification

- Fresh authenticated source shows each of the five new destinations once and the retained LVA destination once.
- Fresh ordinary public HTML shows all six routes once, one H1 and the self-canonical URL.
- The source page and all six destinations returned HTTP 200 after publication.
- The page has no featured image. No decorative image was added; a future visual should explain a clinically reviewed prevention or escalation pathway rather than merely fill space.

## Rollback

Restore the exact `content` value from the before-backup to post 1003 using the supported WordPress REST path, or use the immediately prior WordPress revision. Do not overwrite unrelated WordPress or repository changes.

## Ranked queue

1. **COMPLETED** `/how-to-prevent-lymphedema-complications/`: prevention-to-care links published and verified; do not repeat.
2. **READY investigation** `/body-contouring-liposuction-singapore`: rotate back to Dr Sun's priority cluster; inspect current patient-choice questions, contextual pathways and existing visuals before proposing any change. Close already-answered candidates and do not add unsupported clinical wording.
3. **HELD** shared Lymphedasia single-post accessibility flags until exact Elementor template scope and regression checks are mapped.
4. **WAITING** GBP 10 October >=07:06 SGT; settled GSC/GA4 10 October >=09:08 SGT; eyebag/profile crawl 10 October; overseas-guide crawl >=12 October 19:00 SGT absent a fault.

No ranking, enquiry or AI-citation uplift is claimed from these links.
