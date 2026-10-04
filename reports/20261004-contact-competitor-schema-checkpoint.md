# SEO checkpoint — contact consistency, competitor gaps and entity schema

Date: 4 October 2026, Singapore

## Published WordPress correction

The Lymphedasia contact page now shows the user-confirmed current consultation details:

- Paragon Medical, 290 Orchard Road, #09-01/02, Singapore 238859
- +65 6530 3573
- Monday–Friday 9am–5pm; Saturday 9am–12:30pm; Sunday closed

The live contact card and telephone link were verified after publication. WordPress revision 5168 is the immediate rollback point. Read-only database checks found the superseded Dunearn address only in a trashed page and a revision, not in published post content.

## Singapore procedure-page comparison

Inspected current pages for Asian rhinoplasty from Dr Terence Goh, Covette and Polaris, and neck-lift pages from Allure, MH Plastic Surgery and Astrid. Compared them with the existing Dr Jeremy Sun Asian-rhinoplasty and face/neck-lift guides.

Observed competitor strengths included concise procedure facts, option-specific explanations, visible local contact information and more prescriptive recovery timelines. The Dr Sun pages already cover the broader patient decision journey: candidacy, assessment, alternatives, graft or implant decisions, cost drivers, risks, clinician authorship, related resources and enquiry routes.

No competitor wording, outcome claim or recovery timeline was copied. Prescriptive timing would be a new clinical claim requiring clinician review. No thin URL or metadata rewrite was justified by this comparison.

Pages inspected:

- https://www.drterencegoh.com/asian-rhinoplasty-singapore/
- https://covetteclinic.com/asian-rhinoplasty/
- https://www.polarisplasticsurgery.com/rhinoplasty
- https://www.allureplasticsurgery.sg/neck-lift-surgery-singapore/
- https://www.mhplasticsurgery.com.sg/services/neck-lift-surgery/
- https://www.astridplasticsurgery.com/our-services/neck-lift-singapore/

## Technical audit and fix

Fresh live crawl results:

- `/asian-rhinoplasty-singapore`: HTTP 200, self-canonical, indexable, one H1, 1,785 words, no missing image alt text.
- `/face-neck-lift-singapore`: HTTP 200, self-canonical, indexable, one H1, 1,906 words, no missing image alt text.
- Both pages exposed the same medium-severity Organization/MedicalBusiness schema issue: missing `logo`.

The shared site entity and homepage entity now use the existing first-party square brand asset as an `ImageObject` logo with its real 373×373 dimensions. No visible content or medical claim changed. Production build and TypeScript validation completed successfully for 45 routes before PR publication.

## Measurement blocker

The connected reporting tool cannot write GA4 Admin settings. Browser fallback reached Google's account chooser, but the available session was signed out. `generate_lead` was therefore not registered as a key event, no credentials were entered and no test enquiry was submitted.

