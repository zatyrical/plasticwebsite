# Primary vs secondary lymphoedema Gutenberg boundary repair

Date: 10 October 2026 (Singapore)
Status: implemented and live-verified
Page: https://lymphedasia.com/primary-vs-secondary-lymphedema/
WordPress post: 4233

## Observed fault

The existing treatment-pathway `<div>` was nested between the opening and closing comments of a `wp:heading` block, before the actual H2. That does not match Gutenberg's documented block structure and risks invalid-block warnings during later editing.

## Change

- Wrapped the unchanged pathway panel in one standard `wp:html` block.
- Kept the unchanged “Quick comparison: primary vs secondary lymphedema” H2 in its own `wp:heading` block.
- Changed no clinical sentence, quotation, link, title, publication status, author or featured image.

## Safeguards and proof

- Exact pre-edit raw source was backed up on the isolated branch before the live write.
- Current source was re-read immediately before writing and matched the backup byte-for-byte; no concurrent change was present.
- Supported server-side match-once edit reported exactly one replacement.
- Fresh raw source equals the original source plus only the intended 943-byte to 978-byte structural substitution.
- Prior malformed sequence occurs zero times; repaired sequence occurs once; pathway marker occurs once.
- Title, published status, author 5 and featured image 4658 are unchanged.
- Modified timestamp moved from `2026-09-09T21:39:41` to `2026-10-09T17:07:48` UTC.
- Public page resolves and exposes the pathway text, its four existing links, the H2, one H1 and a self-canonical URL.

## Deliberately excluded

The separate medical-accuracy and quotation-provenance concerns recorded in campaign issue #7 remain held for clinician evidence. This batch does not endorse or modify those claims.

## Rollback

Use `reports/20261010-primary-secondary-block-rollback.json` only after reconciling the live modified state. The exact before/after snapshots are in `reports/backups/20261010-primary-secondary-post4233-before.json` and `reports/backups/20261010-primary-secondary-post4233-after.json`.
