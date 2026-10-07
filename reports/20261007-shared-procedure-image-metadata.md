# Shared procedure image metadata repair — 7 October 2026

## Outcome

Completed a narrow metadata repair for DrJeremySun.com procedure pages that already displayed a relevant hero image but did not expose that image consistently in page-specific social metadata. The shared `MedicalWebPage` structured data now also describes the existing hero image whenever one is available.

This improves the consistency of link previews and the machine-readable association between a medical page and its representative image. It is not a ranking guarantee and does not establish a rich-result or AI-citation outcome.

## Observed gap

The face-and-neck-lift route already emitted page-specific Open Graph and Twitter images. Seven other routes using the same shared procedure-page system rendered relevant hero images on the page but omitted page-specific `og:image` and `twitter:image` metadata:

- `/breast-aesthetic-surgery-singapore`
- `/child-facial-laceration-plastic-surgeon-singapore`
- `/facial-laceration-repair-singapore`
- `/fat-grafting-singapore`
- `/ftm-top-surgery-singapore`
- `/lasers-injectables-singapore`
- `/thread-lifting-singapore`

The shared `MedicalWebPage` JSON-LD did not include an `image` property for any shared procedure route, even when `article.heroImage` existed.

## Implemented change

1. Added each affected page's existing hero image and existing descriptive alt text to its Open Graph metadata.
2. Added matching `summary_large_image` Twitter metadata.
3. Added a conditional absolute `ImageObject` to shared `MedicalWebPage` JSON-LD, using the existing hero source, alt text and caption.
4. Left routes without a genuine hero image unchanged rather than assigning a generic placeholder.

## Scope safeguards

- No page copy or clinical claim changed.
- No title, description, URL, canonical, form, enquiry event or analytics code changed.
- No new clinical image or simulated treatment result was introduced.
- Existing, page-relevant images were reused; this batch did not create decorative media.

## Validation

- `git diff --check`: passed.
- `npm run build`: passed TypeScript and all 45 generated routes.
- Generated HTML inspection confirmed absolute `og:image` and `twitter:image` values on all seven repaired routes.
- Generated HTML inspection confirmed an `ImageObject` in the `MedicalWebPage` graph for all 14 shared procedure routes that have a hero image.
- All image URLs resolve from the site's existing public image inventory; no external asset dependency was added.

## Rollback

Revert the merge commit for this batch. The rollback removes only the added image metadata and conditional structured-data image object.

## Measurement

Check live source after deployment. Any later change in discovery, link-preview behaviour or search visibility must be assessed separately; this implementation alone does not prove causation.
