# Lymphedasia author/profile canonical-link repair

Date: 7 October 2026

## Why this batch was selected

The live site had one authoritative Dr Jeremy Sun profile at:

`https://lymphedasia.com/dr-jeremy-sun-lymphedema-specialist/`

However, two source values still linked to the legacy profile path
`/dr-jeremy-sun-mingfa/`:

1. Elementor Theme Builder single-post template 3901, in the global author-box
   `author_website` setting.
2. WordPress user 5's biography, in its final “Learn more” link.

The legacy URL already redirected correctly, so this was not a broken-link
repair. It removed an avoidable internal redirect hop and aligned the global
reviewer/profile path with the canonical profile used elsewhere.

## Implemented

- Replaced the author-box URL in template 3901 using WPVibe's match-once
  Elementor meta edit path.
- Replaced only the biography hyperlink target for user 5.
- Preserved all biography wording, profile facts, article content, page titles,
  URLs, canonicals, structured author identity, forms and tracking.
- Kept Redirection item 11 enabled so old external links and bookmarks continue
  to reach the canonical profile.

## Backups and rollback

- `reports/backups/20261007-lymphedasia-elementor-single-post-3901.json`
- `reports/backups/20261007-lymphedasia-user5-description.html`

Rollback is to restore template 3901's saved Elementor data and user 5's saved
description from those exact pre-edit backups. No database-wide search/replace
was run.

## Validation

- Elementor content edit reported exactly one replacement and a valid 4,249-byte
  JSON value.
- A second source query found no legacy URL in live post meta or user meta.
  The one post-meta match that remains is historical revision 4194.
- A dry run deliberately left generated/history data untouched:
  - one Rank Math internal-link index row;
  - one trashed Rank Math redirect with zero hits;
  - one redirection log referrer.
- The live global reviewer card on
  `/ultrasound-for-lymphedema-diagnosis-monitoring/` links directly to the
  canonical profile from both its image and reviewer name.
- A second live reviewer card on
  `/lymphedema-diagnosis-report-explained/` also contains only direct canonical
  profile links and no old href.
- Visiting the legacy profile URL still lands on
  `/dr-jeremy-sun-lymphedema-specialist/`; that destination exposes the same
  self-referencing canonical and one H1.

## Scope and measurement

This is a crawl-path and entity-consistency repair. It does not establish a
ranking, AI-citation or enquiry uplift. No medical claim, credential, outcome,
price or recovery advice was added.

## Queue

- Next comparable GSC/GA4 checkpoint: after 8 October 2026 09:08 SGT.
- Next GBP moderation/propagation check: after 7 October 2026 23:54 SGT, only
  with authenticated access.
- Ready discovery remains separate from those waiting checks.
