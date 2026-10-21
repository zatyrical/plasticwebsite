# Lymphedasia cure-guide integrity repair — 21 October 2026

## Outcome

Corrected the confirmed punctuation typo on:

- https://lymphedasia.com/can-lymphedema-be-cured/
- WordPress post 4259
- before: `as currently defined,d is not curable`
- after: `as currently defined, is not curable`

The supported server-side match-once edit reported exactly one replacement and created a normal WordPress revision. No clinical wording, review date, title, slug, excerpt, author, featured image, template, form, tracking, image, URL or builder data changed.

## Evidence and scope

- Fresh authenticated BEFORE source and selected metadata are archived in `reports/backups/20261021-lymphedasia-cure-post4259-before.json`.
- The full AFTER source and selected metadata are archived in `reports/backups/20261021-lymphedasia-cure-post4259-after.json`.
- AFTER source equals BEFORE source with only the single stray `d` removed.
- Selected metadata is byte-equivalent apart from WordPress's expected modified timestamp and revision pointers.
- Revision count increased from 9 to 10; predecessor revision after the write is 5538.
- Fresh cache-busted ordinary browser rendering showed the corrected sentence and retained the August 2026 clinical-review text.

## Previously queued quotation candidate

The specifically described “unsupported attributed first-person clinical perspective” block was not present in the fresh authenticated `post_content` or the fresh public render: there was no quote/pullquote block, no “clinical perspective” phrase and no first-person attributed quotation. Therefore no quotation removal was attempted. The page's broader outcome, stage, timing and compression claims remain separate clinician/source-review candidates; this operational typo repair does not validate them.

## Rollback

WordPress rollback is independent of Git evidence. Reconcile the then-current post first, then either:

1. reverse only the unique exact sentence change through the supported match-once post-content route; or
2. restore predecessor revision 5538 if no later legitimate edits would be lost.

Do not overwrite later content with the complete old source unless a fresh equality guard proves that is safe.
