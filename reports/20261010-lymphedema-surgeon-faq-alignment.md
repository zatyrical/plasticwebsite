# Lymphedema surgeon guide: visible FAQ and schema alignment

Date: 10 October 2026

## Observed gap

The maintained guide at `/how-to-choose-lymphedema-surgeon-singapore` emitted four FAQPage question-and-answer entities in JSON-LD, but it did not display those same four Q&A pairs as a visible FAQ section. Related topics appeared in the surrounding article and decision checklist, yet the page had two separately maintained representations rather than a single visible/schema source.

## Change

- Moved the four existing, approved question-and-answer pairs into one `faqs` array.
- Generated FAQPage `mainEntity` entries from that array.
- Rendered the same array as a visible “Frequently asked questions” section.
- Added the FAQ section to the existing on-page contents navigation.

This is a consistency and readability change. It adds no new medical claim, price, credential, review date, tracking event, URL or FAQ count. Google removed FAQ rich-result support in June 2026, so this work does not claim eligibility for a FAQ rich result or a ranking benefit.

## Validation

- TypeScript must pass.
- Full production build must pass.
- Rendered output must contain the four visible questions and four schema questions with exact question-and-answer parity.
- The page must retain one H1, its existing canonical and indexability.
- Current `main` must still match the expected base before merge.

## Rollback

Revert the shared `faqs` refactor, contents link and rendered FAQ section in `app/how-to-choose-lymphedema-surgeon-singapore/page.tsx`. No WordPress, analytics, GBP or enquiry data is touched.

This change does not establish ranking, enquiry or AI-citation improvement.
