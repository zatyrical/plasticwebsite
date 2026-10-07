# Publications authority paths — 7 October 2026

## Scope

This batch repairs the selected-publications page without changing clinical claims, credentials or publication details. It connects verified research records to existing patient education and professional-context pages.

## Observed gap

- `/publications` was a flat list of eight journal or PubMed links and ended without a next step.
- `/training-and-fellowships` already contained contextual links into priority procedure pages, so it was not reworked.
- A narrow Google Search Console check for Singapore web traffic from 7 September to 4 October returned no rows for `/publications`. The training page returned two impressions, no clicks and an average position of 13.5 for the branded query `dr jeremy sun`. These samples are too small to establish performance or uplift.

## Evidence checks

- All eight existing DOI or PubMed URLs resolved when checked on 7 October 2026. Three journal DOI destinations returned the publisher's paywall or automated-access response rather than an open article; the links themselves were not broken.
- Sampled primary records confirmed Dr Jeremy Sun's authorship for the following publications:
  - *Venous anatomy of the superficial circumflex iliac artery perforator flap: a cadaveric and clinical study* — PubMed PMID 37948880.
  - *Lymphovenous shunts in the treatment of lymphedema* — PubMed PMID 37962114.
  - *Primary surgical prevention of lymphedema* — DOI 10.1097/JCMA.0000000000001101.
  - *Current Insights into Post-Traumatic Lymphedema* — DOI 10.3390/traumacare5040024.
- The linked destination pages were checked live before implementation:
  - `https://www.drjeremysun.com/lower-limb-reconstruction-singapore`
  - `https://lymphedasia.com/lymphedema-treatment/`
  - `https://lymphedasia.com/lva-surgery-singapore/`
  - `https://www.drjeremysun.com/training-and-fellowships`

## Implemented repair

- Added a compact “Related clinical education and professional context” section.
- Linked lower-limb research to the existing lower-limb reconstruction patient guide.
- Linked lymphoedema and LVA research to the relevant Lymphedema Asia patient guides, preserving that site's ownership of lymphoedema/LVA intent.
- Linked the evidence page to the existing training and fellowships page.
- Replaced repeated generic source-link text with `View journal or PubMed record` and added publication-specific accessible labels.
- Updated `/publications` to a 7 October 2026 sitemap modification date.

## Safeguards

- No new medical claims, outcomes, prices, credentials or publication records were introduced.
- No new page or thin keyword variant was created.
- Cross-site links are contextual and point to the site that owns the patient intent.
- This navigation repair is not evidence of a ranking, enquiry or AI-mention improvement. Those outcomes remain subject to later settled measurement.

## Rollback

Revert the pull-request merge commit. That removes the related-resource section, restores the previous source-link labels and restores the prior sitemap entry without affecting any publication source URL.
