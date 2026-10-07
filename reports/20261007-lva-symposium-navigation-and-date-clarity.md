# LVA and symposium navigation, date and structured-answer clarity

Date: 7 October 2026

## Observed evidence

- The LVA guide already had Home → Lymphedema surgery → LVA structured breadcrumbs, but no visible breadcrumb landmark.
- The St Luke’s symposium article already had Home → Media & Education → event structured breadcrumbs, but no visible breadcrumb landmark.
- The symposium description and lead still used “speaks at” and “is speaking” after the event’s 4 September 2026 programme date. The media card also retained “scheduled for”.
- Three LVA structured FAQ answers differed from their corresponding visible answers. In particular, the LVB answer omitted the visible caveat that insurance coverage and suitability depend on diagnosis, insurer and assessment.

The organiser’s primary programme was checked on 7 October 2026:
https://commcaresymposium.slec.org.sg/wound-care/
It lists Dr Jeremy Sun, the lymphoedema/chronic-wound session, 4 September 2026 and 10:30–11:15. The correction describes the dated programme listing; it does not assert attendance, lecture outcomes or organiser endorsement beyond the evidence available.

## Implemented

- Added visible breadcrumb landmarks on the LVA and symposium pages, with parent destinations matching their existing structured hierarchy.
- Used existing breadcrumb styling, including mobile wrapping, and hid decorative separators from assistive technology.
- Replaced upcoming-event language with neutral, dated programme-listing wording in the symposium lead/description and media card.
- Aligned the existing six structured LVA FAQ answers to their corresponding visible paragraphs, preserving the visible clinical wording. The unmarked seventh visible question remains available to patients.
- Updated sitemap modification dates only for the LVA guide, symposium article and media page.

## Evidence boundary

Primary guidance checked 7 October 2026:
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/updates

Google documents breadcrumbs as a hierarchy aid and requires structured data to reflect visible content. Its current changelog records that FAQ rich results stopped appearing on 7 May 2026 and the feature documentation was removed in June. This repair is about accurate machine-readable answers and navigation, not obtaining a FAQ rich result or a guaranteed ranking/AI citation.

## Validation

- `git diff --check` and TypeScript lint passed.
- Next.js 16.3.4 production build passed with 44 generated routes.
- Rendered HTML: both visible breadcrumb landmarks link to their exact structured parent URL; decorative separators are hidden from assistive technology; each page retains one H1.
- All six retained structured LVA answers exactly match their corresponding visible FAQ paragraphs.
- Rendered symposium/media wording no longer describes the September session as upcoming; the existing programme time and event date are preserved.
- All three affected sitemap dates are `2026-10-07`.
- React review: static server components, existing Link/CSS patterns, no hooks, client fetching, added dependencies or runtime date logic.
- Published in PR59: https://github.com/zatyrical/plasticwebsite/pull/59, merged as 553fb1d2b5d3623330fd6bbdc4f9a93e860893ff after successful preview and expected-head guard.
- Production dpl_AZWkqjSPLMtgXFoW8b4epeSTinFj reached READY at that exact commit. Ordinary public HTTP 200 verification passed for both guides, media and the three sitemap modification dates.
- Completion proof: https://github.com/zatyrical/plasticwebsite/issues/7#issuecomment-6039807001.

## Rollback

Revert the publication PR/merge commit. No database migration or separate WordPress change is involved.

## Queue and incident boundary

- Lymphedasia robots alert remains waiting for the Page Indexing report’s affected-URL examples. A separate 7 October investigation found 218 sitemap URLs allowed by current robots, public WordPress visibility enabled, and homepage/LVA/contact inspected as indexed; no robots rule has been changed.
- Next comparable analytics: after 8 October 2026 09:08 SGT.
- Next GBP recheck: after 7 October 2026 23:54 SGT, with authenticated access.
