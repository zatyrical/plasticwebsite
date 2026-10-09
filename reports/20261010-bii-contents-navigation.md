# Breast implant illness contents-navigation repair — 10 October 2026

## Evidence

- Base: `fce13c2974e0896c560867762a8b5822fa1d430d`.
- Audited: https://www.drjeremysun.com/breast-implant-illness-singapore-evidence
- The article already contained a substantive `#when-to-seek-help` section, but its visible “On this page” list skipped that section.
- The page also lacked the shared `procedureAnchors.css` import used to keep fragment targets below the fixed header.

## Implemented

1. Added “When to seek review” to the contents list, targeting the existing `#when-to-seek-help` section.
2. Imported the established anchor-clearance stylesheet; no new CSS rule was invented.
3. Changed no clinical wording, evidence citation, metadata, schema, image, contact form, URL or tracking.

## Expected mechanism

A complete contents list makes the existing safety section easier to reach. Fixed-header clearance keeps all fragment destinations readable after a contents click. This is a usability and internal-page navigation repair, not a ranking claim.

## Validation

Require TypeScript/build and exact-head preview before merge. Verify the built and public page contains the new link, exactly one `id="when-to-seek-help"`, a self-canonical, one H1 and the 96px scroll margin.

## Rollback

Revert this PR. It is isolated to one stylesheet import and one contents-list item.
