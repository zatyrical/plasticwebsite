# Lymphedasia pump and treatment reader paths — 8 October 2026

## Scope and reason

The settled 28 September–4 October analytics checkpoint recorded one Singapore organic landing session on:

- https://lymphedasia.com/the-power-of-lymphedema-pumps/

One session is not evidence of demand, ranking improvement or conversion performance. It was used only to select a different, previously unaudited patient-entry page for quality review.

The clinically reviewed pump guide already covered use, limitations, contraindications and the need for professional advice. The observed gap was navigational rather than a reason for new medical copy:

- its key-takeaway link for `managing lymphedema` pointed to a seasonal skincare article rather than the maintained treatment overview;
- existing specialist-assessment and infection text had no contextual paths to the maintained specialist and cellulitis resources;
- its conclusion linked the generic word `lymphedema` to Wikipedia;
- the broad treatment overview did not reciprocally expose the pump guide from its existing Singapore treatment pathway.

## Implemented WordPress changes

### Pump guide — post 1739

Four unique fragments were changed through one supported Gutenberg read-modify-write operation:

1. Repointed the existing `managing lymphedema` link to `/lymphedema-treatment-made-clear/`.
2. Linked the existing phrase `consulting with a lymphedema specialist` to `/dr-jeremy-sun-lymphedema-specialist/`.
3. Linked the existing contraindication word `infections` to `/lymphedema-and-cellulitis/`.
4. Removed the generic Wikipedia link while preserving the sentence text.

All medical statements, headings, title, metadata, author, review date and URL were preserved.

### Treatment overview — post 4042

The existing Singapore treatment-pathway paragraph now includes one descriptive reciprocal link: `guide to pneumatic compression pumps` → `/the-power-of-lymphedema-pumps/`.

The generic Wikipedia link in the FAQ was removed while preserving the sentence text. No treatment recommendation, claim, title, metadata, author, review date or URL changed.

## Live validation

Rendered production HTML confirmed:

- the pump guide contains the treatment-overview, specialist-assessment and cellulitis links;
- the treatment overview contains one reciprocal pump-guide link with descriptive anchor text;
- neither page retains the prior Wikipedia link;
- both pages retain exactly one H1;
- both pages remain `index, follow` and self-canonical;
- all three linked destinations return rendered indexable pages with self-canonicals;
- the pump guide retains its existing limitations, contraindications and therapist-advice text;
- no enquiry was submitted.

Post modification times:

- post 1739: 2026-10-08 02:35:03 UTC
- post 4042: 2026-10-08 02:36:44 UTC

## Rollback

- Pump guide new revision: 5230; exact pre-change revision: 4623.
- Treatment overview new revision: 5231; exact pre-change revision: 5027.

Prefer a narrow reversal of only the link changes so later WordPress edits are preserved. Restore the recorded pre-change revision only when a full rollback is required and no later edits exist.

This improves the assessment-to-conservative-care pathway. It does not establish a ranking, enquiry, AI-citation or conversion increase.
