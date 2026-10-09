# Breast augmentation pregnancy and breastfeeding decision-gap audit
Date: 9 October 2026. Base main: db5e3762e9282ae4a5c19079717cea060db36955.

## Observed gap
The current breast augmentation page already answers implant selection, plane, incision planning, cost factors, screening, rapid-recovery limits, complications and long-term implant monitoring. It does not directly answer whether future breastfeeding may be affected, although the site's broader breast-aesthetic article already tells patients to discuss pregnancy and breastfeeding goals and lists inability to breastfeed in some situations as a possible risk.

A current Singapore competitor page includes “Can I breastfeed after breast augmentation surgery?” in its FAQ:
https://www.andrewtay.com.sg/services/cosmetic-plastic-surgery/body-contouring/breast-augmentation/

This is competitor question coverage, not proof of Singapore search volume.

## Evidence
- FDA: some women who undergo breast augmentation can breastfeed and some cannot.
  https://www.fda.gov/medical-devices/breast-implants/risks-and-complications-breast-implants
- CDC: breast augmentation, lift and reduction may affect nerves and ducts and therefore lactation; milk supply varies.
  https://www.cdc.gov/breastfeeding-special-circumstances/hcp/illnesses-conditions/breast-surgery.html
- Existing approved site wording: the breast-aesthetic page already covers pregnancy plans, breastfeeding goals, tissue change over time and possible inability to breastfeed.

## Implemented
1. Added a concise “Future pregnancy and breastfeeding after breast augmentation” section to the primary breast augmentation page.
2. Added the decision question to the pre-operative checklist.
3. Added a direct FAQ answer without promising breastfeeding ability or a preserved cosmetic result.
4. Updated the page modification date to 9 October 2026.

No new page, keyword variant, price, outcome claim, implant endorsement or before-and-after content was added. The wording is intentionally limited to decision support and reuses existing approved site content, cross-checked against current FDA and CDC guidance.

## Validation
- The new section ID is unique.
- The new FAQ question appears once.
- The page retains one primary URL and its existing related-resource routes.
- Build and exact-head Vercel preview are required before merge.
- No form submission or enquiry test.

## Rollback
Revert the added section, checklist question, FAQ and modification date in `app/procedureArticles.ts`.

## Ranked queue
- READY: inspect a different priority cluster or Lymphedasia journey next; do not re-audit this breast question.
- WAITING: PR100 overseas-clinic guide remains draft pending clinical/legal review.
- WAITING: GBP after 10 Oct 07:06 SGT; settled GSC/GA4 after 10 Oct 09:08 SGT; eyebag/profile crawl on 10 Oct.
