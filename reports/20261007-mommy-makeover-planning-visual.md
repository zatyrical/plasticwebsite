# Mommy makeover consultation-planning visual — 7 October 2026

## Observed gap

The mommy / mummy makeover guide used an idealised cropped torso image. Although its caption said it was not a treatment result, the image did not explain the page's main decision: assess abdominal skin, abdominal-wall support, breast changes and localised fat separately, then decide whether a plan should be limited, combined or staged.

This page recorded 53 Singapore Search Console impressions during 2–4 October 2026, but no claim is made that changing the image will improve rank or enquiries.

## Implemented change

- Added `public/images/aesthetic-ai/mommy-makeover-consultation-planning.webp` (1536 × 1024, 68 KB).
- Replaced the old image on the dedicated procedure page and its treatment tile.
- The new editorial visual shows a fully clothed patient and clinician reviewing four abstract planning domains plus a branching planning path.
- Updated the page's `modifiedIso` date to 7 October 2026.
- Added descriptive accessibility text and an explicit caption that it is AI-generated editorial illustration, not a patient or result.

No clinical copy, title, canonical, structured-data type, form, tracking, price, outcome, recovery promise or procedure recommendation changed.

## ElectiveSEO application

This is purposeful multimedia rather than decorative churn. It supports the patient question already answered in the text—why a mommy makeover should not be treated as a fixed package—without adding a thin page or an unapproved clinical claim.

The homepage-to-lipedema discovery candidate was also inspected after the 7 October query/page review. It is closed without editing: the homepage already contains a clear `Looking for lipedema assessment?` link to `/lipedema-singapore/`, and the dedicated guide already links to the lipedema-versus-lymphedema comparison and specialist-assessment pathway.

## Validation and rollback

- Run `git diff --check` and the production Next.js build.
- Verify the generated route, image dimensions, file size, source references, alt text and structured-data image URL.
- Verify the public page and treatment tile after deployment.
- Rollback: revert the two source references to `/images/aesthetic-ai/body-contouring.jpg`, restore the prior alt/caption and remove the new WebP asset.

## Measurement

- Do not infer ranking or conversion uplift from publication.
- Continue measuring non-brand procedure impressions, relevant organic visits and successful `generate_lead` events over settled multi-day windows.

