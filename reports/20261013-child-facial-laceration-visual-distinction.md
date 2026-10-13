# Child facial-laceration visual distinction — 13 October 2026

## Observed gap

The adult facial-laceration guide and the parent-focused child facial-laceration guide used the same generic trauma hero image. That made two distinct decision contexts look interchangeable in the page hero, social preview and `MedicalWebPage` image data.

## Implemented

- Created a distinct, non-graphic editorial illustration for the child guide showing a parent, child and clinician during assessment of a small eyebrow-area facial cut.
- Replaced the child guide's hero/social/structured-data image reference only; the adult facial-laceration and broader trauma pages retain the established trauma image.
- Added descriptive alt text and an explicit caption identifying the asset as an AI-generated editorial illustration rather than a patient or treatment result.
- Updated the child guide's maintained modification date to 13 October 2026.

No clinical copy, outcome claim, procedure advice, contact path or tracking logic changed.

During validation, the sitemap-date audit found an adjacent metadata-integrity fault from the preceding education-hub release: `/blog` declared `dateModified` as 13 October 2026 while its sitemap entry still reported 12 October. The sitemap entry was aligned to the existing page data; no blog content changed.

## Expected mechanism

The distinct image makes the paediatric intent clearer in the page hero and share preview, gives parents a more relevant visual cue, and removes an avoidable duplicate-image signal. It does not guarantee ranking, click-through or enquiry improvement.

## Validation plan

- Confirm the asset is a valid 1536 × 1024 WebP and remains lightweight.
- Run lint and a production build.
- Verify the generated child page contains the new image, descriptive alt/caption, correct canonical and one H1.
- Verify the adult facial-laceration page still uses the original trauma image.
- Run the repository's link/fragment, credential and source-integrity checks.
- Confirm every audited sitemap `lastModified` value matches the rendered page `dateModified`, including `/blog`.

## Rollback

Revert the pull request. This restores the prior child-page image reference and date; the new standalone asset can then be removed with the same revert.
