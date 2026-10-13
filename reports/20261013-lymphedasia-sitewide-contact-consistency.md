# LymphedAsia sitewide contact consistency

Date: 13 October 2026 (Singapore)

## Scope and evidence

- Crawled every unique indexable URL in the live page and post sitemaps: **214/214 pages fetched**.
- Checked for the user-confirmed current clinic facts:
  - Paragon Medical, 290 Orchard Road #09-01/02, Singapore 238859
  - +65 6530 3573
- Checked for superseded-location strings including Dunearn, Bukit Timah, Parkway East, Mount Elizabeth, Gleneagles, Novena, Tanglin Shopping, Royal Square and Irrawaddy.
- Before the change, 213/214 pages contained the current address and phone in their rendered output. The only exception was the indexable, self-canonical `/blog/` page, whose global footer showed only the appointment email.
- No superseded-location string was found on any of the 214 public pages.

## Implemented change

Completed the two existing empty rows in the sitewide Astra footer's `Contact Info` block (`widget_block` instance 15):

1. `Paragon Medical, 290 Orchard Road #09-01/02, Singapore 238859`
2. `+65 6530 3573`

The appointment email was preserved unchanged. The change used WordPress's supported nested option update and retained the existing UAGB block structure and identifiers. Rank Math, Elementor and object caches were purged after the write.

## Validation

- Fresh rendered-DOM reads confirmed the updated footer on both the homepage and `/blog/`.
- A fresh full crawl fetched **214/214** sitemap URLs successfully.
- Current address present: **214/214** pages.
- Current phone present: **214/214** pages.
- Superseded-location matches: **0/214** pages.
- `/blog/` remains HTTP 200, indexable, self-canonical, with one H1 and its existing breadcrumb JSON-LD.
- No extra Organization/MedicalBusiness graph was forced onto the blog page: the existing breadcrumb remains valid, while the confirmed business entity is already represented elsewhere. This avoids duplicate schema merely to satisfy a page-count audit.

## Rollback

The exact pre-change widget content is preserved at `reports/backups/20261013-lymphedasia-footer-widget15-before.txt`. To roll back, restore that text to `widget_block[15][content]` with WordPress's option patch command and purge caches.

## Disposition

The public LymphedAsia NAP/contact consistency audit is closed at 214/214 sitemap URLs. Re-open only if the clinic facts change or a future sitemap crawl finds a concrete mismatch.
