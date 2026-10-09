# Head and neck reconstruction related-navigation review — 9 October 2026

## Scope

- Reviewed `/head-neck-reconstruction-singapore` after the breast-reconstruction batch.
- Compared the live patient journey with current Singapore hospital and professional-society pages covering head and neck reconstruction, free flaps, facial trauma and scar care.
- Checked the article's clinical sections, shortcut navigation, reviewer evidence, existing image and related-page routes.

## Findings

- The article already answers the main supported patient questions: indications, functional and aesthetic planning, local/regional/free-flap options, recovery and rehabilitation, risks, multidisciplinary care and later refinement.
- Current Singapore references likewise emphasise function, cancer-team coordination, flap reconstruction and rehabilitation. No additional medical copy was added because the existing page already covers those needs without requiring new clinician claims.
- The existing square treatment-tile image is a generic face illustration. It remains suitable as a hub thumbnail, but it is not sufficiently explanatory to promote as the article's main educational image. Hero-image work is closed unless a genuinely useful original diagram becomes available.
- The live related section was generated from global reconstructive-page order. Its first card was lower-limb reconstruction, followed by three facial-trauma resources. Lower-limb reconstruction was not a useful next step for this page.
- Source inspection found one established inbound route from the reconstructive treatment hub. The page is also in the sitemap and exposes crawlable shortcut and related links.

## Implemented change

- Added an explicit related-page sequence for the head-and-neck guide:
  1. facial laceration repair;
  2. trauma and laceration repair;
  3. scar reconstruction and revision;
  4. child facial laceration repair.
- Removed the accidental lower-limb reconstruction card from this page's related set.
- No clinical statements, metadata, structured data or visual assets were changed.

## Validation

- `npm run build`: passed; all 45 routes generated.
- Static output contains each intended related URL once and contains no lower-limb reconstruction link on the head-and-neck article.
- `git diff --check`: passed.

## Evidence used

- Singapore General Hospital / SingHealth patient information on head and neck reconstruction and microsurgical free flaps.
- Ng Teng Fong General Hospital plastic, reconstructive and head-and-neck service descriptions.
- Singapore Association of Plastic Surgeons patient information on head-and-neck cancer reconstruction and facial trauma.
- Google Search Central guidance that internal link text should be concise, relevant and useful for navigation and discovery.

## Rollback

Revert the single `head-neck-reconstruction-singapore` entry in `relatedByProcedure` in `app/ProcedureArticle.tsx`.

