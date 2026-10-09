# Lymphedasia physical-therapy care paths — 9 October 2026

## Scope and evidence

- Page: https://lymphedasia.com/lymphedema-physical-therapy/ (WordPress post 3630).
- Queue source: campaign issue #7, completed overseas-guide checkpoint (`6079572415`).
- Pre-edit source modification: `2026-08-07T01:21:09`; source guard passed immediately before the write.
- Exact backups: `reports/backups/20261009-lymphedasia-physical-therapy-post3630-before.json` and `reports/backups/20261009-lymphedasia-physical-therapy-post3630-after.json`.
- Mobile Lighthouse baseline: accessibility 93/100 and SEO 100/100. Flags were heading order, links distinguished only by colour, and absence of a main landmark. The page contains no article image, so there was no missing image-alt defect to repair.
- Relevant existing destinations were resolved through the authenticated WordPress index before editing. All five destination URLs and the source page returned HTTP 200 after publication.

Google's current link guidance says contextual internal links with concise, descriptive anchor text help readers and Google understand and discover related pages. It also says there is no magic ideal link count. Source checked 9 October 2026: https://developers.google.com/search/docs/crawling-indexing/links-crawlable.

## Published change

This was a link-only patient-journey improvement. Medical wording, title, excerpt, clinician-review date, metadata, URL, tracking and forms were not changed.

| Existing phrase | Destination | Reader purpose |
|---|---|---|
| `specific exercises` | `/lymphedema-management-with-physical-activity/` | Continue from general therapy to the existing activity guide |
| `Compression garments` | `/lymphedema-compression-garments-for-swelling/` | Continue from compression overview to garment selection context |
| `proper skin care` | `/lymphedema-skin-wound-care/` | Continue from self-management to skin and wound-care guidance |
| `when to seek additional medical help` | `/private-lymphedema-consultation-singapore/` | Give persistent or uncertain symptoms a clear assessment route |
| FAQ anchor `lymphedema` | `/what-is-lymphedema/` | Replace the generic Wikipedia detour with the site's reviewed patient explainer |

The authenticated content-edit endpoint replaced each exact snippet once. Fresh WordPress source shows all five destinations once and no Wikipedia URL. Fresh ordinary public HTML confirms all five links, one H1, the self-canonical URL and the unchanged article text.

## Image and accessibility disposition

No decorative image was added. The article has no content image, Lighthouse did not report missing alt text, and a stock photograph would not materially explain the care pathway. A future illustration should be added only if it explains assessment, conservative care and reassessment with clinician-approved wording.

The three Lighthouse accessibility flags are template-level rather than isolated post-content defects: the Elementor single-post template places its table-of-contents H4 before the article H2 sequence; the missing main landmark and colour-only link distinction also come from the shared template/theme. Do not alter the shared template from this content batch without exact selector mapping and regression checks across other posts.

## Rollback

Restore the exact `content` value from the before-backup to post 3630 through the supported WordPress REST path, or restore the immediately prior WordPress revision. Do not reset unrelated WordPress or repository changes.

## Ranked queue

1. **COMPLETED** `/lymphedema-physical-therapy/`: care-path links published and verified; image candidate closed as non-useful for now. Do not repeat this audit.
2. **READY investigation** `/how-to-prevent-lymphedema-complications/`: inspect current source, evidence and assessment/self-care navigation before proposing any change; no new medical claims without support.
3. **HELD investigation** shared Elementor single-post accessibility: identify exact TOC/link/landmark selectors and affected templates before any global change.
4. **WAITING** GBP on/after 10 October 07:06 SGT; settled GSC/GA4 on/after 10 October 09:08 SGT; eyebag/profile crawl 10 October; overseas-guide crawl no earlier than 12 October 19:00 SGT absent a technical fault.

No ranking, enquiry or AI-citation outcome is inferred from publication.
