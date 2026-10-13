# Facelift scar-planning zones — 13 October 2026

## Observed patient question and page fit

The existing `/face-neck-lift-singapore` guide already contains a useful 12 October assessment map distinguishing eyelid or volume concerns, jawline descent, under-chin fullness and neck laxity. That visual answers **which concern is being assessed** and should not be duplicated.

The separate scar question remained prose-only. The page states that incisions may be around the ear and hairline, that the exact technique depends on anatomy and goals, and that scars mature over months without disappearing completely. Current Singapore sources reviewed on 13 October repeatedly explain hairline and around-ear incision planning, confirming this is a real patient concern rather than a prompt-generated keyword hypothesis:

- Singapore General Hospital / SingHealth facelift information: https://www.singhealth.com.sg/symptoms-treatments/facelift
- Singapore Association of Plastic Surgeons face-lift information: https://www.saps.org.sg/face-lift
- MH Plastic Surgery neck-lift information: https://www.mhplasticsurgery.com.sg/services/neck-lift-surgery/
- Polaris Plastic Surgery facelift information: https://www.polarisplasticsurgery.com/articles/facelift-in-singapore

These pages were used to validate the question, not as a source for copied text, images, recovery promises or technique claims.

## Implemented change

Added one original 1400 × 900 SVG to the existing `Surgical approach and scar planning` section:

- broad hairline and around-ear planning zones rather than a drawn incision;
- the same anatomy, technique, goal and tissue-movement qualifiers already on the page;
- a reminder that scars mature over months and cannot be expected to disappear;
- explicit `simplified`, `not to scale` and `not an incision plan` language;
- accessible SVG title/description, page alt text and caption.

No clinical paragraph, FAQ, title, description, route, form, tracking, price, outcome or credential claim changed. The page and sitemap dates were advanced together to `2026-10-13` because this is a visible educational-content update.

## Expected mechanism and measurement boundary

This is a comprehension and consultation-preparation improvement. It may help patients locate the scar discussion and formulate a more specific consultation question. It does not establish or guarantee ranking uplift, enquiries, a particular scar outcome or an AI citation.

## Validation and rollback

- Render the SVG at its original dimensions and inspect typography, contrast and clipping.
- Run lint, production build, credential terminology, `llms.txt`, internal-fragment, navigation-accessibility, FAQ-parity and sitemap/schema-date checks.
- Verify the generated page contains the asset, alt text, caption and `dateModified: 2026-10-13`.
- Publish through an isolated PR only if all checks pass, then verify the exact production commit and public asset.
- Rollback is the merge-commit revert, which removes the asset/reference and restores the 12 October page/sitemap date.

## Next READY investigation

Rotate to the Asian-rhinoplasty cluster and audit whether bridge-versus-tip planning is already sufficiently clear after the existing materials and assessment maps. Close the candidate rather than adding a third diagram if the current visuals already answer it.
