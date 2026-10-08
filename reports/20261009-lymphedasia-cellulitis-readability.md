# Lymphedasia cellulitis guide readability cleanup — 9 October 2026

## Decision

Published a bounded readability cleanup to the existing Lymphedasia guide at <https://lymphedasia.com/lymphedema-and-cellulitis/> (WordPress post 3702). The page was already the maintained cellulitis-intent URL and appeared as a one-session Singapore Organic Search landing page in the latest settled comparison. That sample is only a prioritisation signal, not evidence of an uplift or ranking change.

The clinically useful core guide was intact, but an older appended block repeated the page's recurrent-infection explanation, prevention summary and resource links after the FAQ/schema. The duplicated tail made the reading path longer without adding a distinct patient decision answer.

## Published change

Using WPVibe's supported match-once content editor, four exact replacements were saved:

1. Removed the repeated `Why recurrent cellulitis matters in lymphedema` section.
2. Removed the repeated `Prevention and longer-term planning` summary.
3. Removed the repeated `Related Lymphedema Asia resources` list, whose destinations were already represented contextually elsewhere.
4. Removed the page's self-link from its final related-reading sentence.

Each replacement reported `replaced: 1`. Post revisions 5249–5252 record the four saves. Pre-edit WordPress revision 5090 and the complete raw source are preserved in `reports/backups/20261009-lymphedasia-cellulitis-post3702.txt`.

## Safety and scope

No medical claim, title, meta description, canonical, schema, form, tracking or image was added or changed. The cleanup deliberately preserved:

- the distinct urgent-attention section, including the higher-risk note for diabetes or immunosuppression;
- the first-party `Skin entry points and cellulitis prevention` image and explanation;
- the recurrent-cellulitis assessment pathway and specialist-assessment guidance;
- the persistent-swelling differential section;
- the FAQ and MedicalWebPage/FAQ schema.

## Verification

- Live URL returned HTTP 200.
- Title remained `Lymphedema and Cellulitis in Singapore: Recurrent Infection Risk`.
- Canonical remained self-referential.
- One H1 remained.
- All three removed headings were absent from live output.
- The urgent warning, higher-risk note, prevention image, persistent-swelling assessment, FAQ and JSON-LD remained present.
- The exact self-referential anchor was absent; the URL still appears legitimately in canonical/schema markup.

## Rollback

Restore WordPress revision 5090, or restore the raw source from `reports/backups/20261009-lymphedasia-cellulitis-post3702.txt`. The repository base for this audit batch was `f23f8c6a770dc653960f9a86579da27e4fa0b476`.

