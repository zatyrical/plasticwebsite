# Lower-limb reconstruction related-navigation review — 9 October 2026

## Scope

- Reviewed `/lower-limb-reconstruction-singapore` after the head-and-neck navigation batch.
- Compared the live guide with current Singapore patient/service information from SingHealth, the Singapore Association of Plastic Surgeons, NTFGH and NUH.
- Checked the article's decision coverage, shortcut navigation, reviewer evidence, hub image and live related-page set.

## Findings

- The existing guide already covers the main supported patient journey: trauma/infection/cancer and chronic-wound indications; blood supply and infection control; bone, tendon and mobility assessment; skin graft, local/regional flap and free-flap options; multidisciplinary planning; restricted weight-bearing, rehabilitation, risks and the possibility of amputation in severe cases.
- Current Singapore references similarly emphasise limb preservation, durable coverage, multidisciplinary orthoplastic care and restoration of function. No additional medical copy was added because the page already addresses those needs without requiring new clinician claims.
- The current treatment-hub thumbnail is a repurposed lower-leg image with decorative overlay lines. It remains a small navigation thumbnail but is not sufficiently explanatory to become an article hero. A new image is not justified unless it communicates a real reconstructive decision accurately.
- The live related section was generated from global reconstructive-page order: head-and-neck reconstruction, child facial laceration, facial laceration and trauma/laceration repair. Three of four routes were unrelated to a lower-limb patient's next decision.
- Existing trauma/laceration and scar-reconstruction guides are the two relevant on-site follow-ups. Both already link back into the reconstructive cluster through the shared related-page system.

## Implemented change

- Added an explicit lower-limb related set containing:
  1. trauma and laceration repair;
  2. scar reconstruction and revision.
- Removed the unrelated head-and-neck, child-facial and facial-laceration cards from this page.
- Kept the section intentionally to two useful cards instead of filling it with unrelated reconstructive pages.
- No clinical statements, metadata, structured data, tracking, forms or images were changed.

## Validation plan

- Run the production build and TypeScript checks.
- Confirm static output contains the two intended related URLs once and none of the three removed routes.
- Verify the exact-head preview, merge with an expected-head guard, then confirm production and ordinary live output.

## Evidence used

- SingHealth upper and lower limb reconstruction patient information.
- Singapore Association of Plastic Surgeons limb reconstruction patient information.
- NTFGH and NUH reconstructive/microsurgery service descriptions.
- Google Search Central guidance to keep internal paths logical, crawlable and relevant.

## Rollback

Revert the single `lower-limb-reconstruction-singapore` entry in `relatedByProcedure` in `app/ProcedureArticle.tsx`.

