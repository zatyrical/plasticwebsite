# Asian-eyelid crease and ptosis authority audit — 14 October 2026

## Question and disposition

Audited `/asian-eyelid-surgery-singapore` for whether it clearly separates cosmetic crease planning from ptosis or functional assessment, and whether a useful Singapore patient-information pathway was missing.

The existing page already answers the material distinction:

- double-eyelid surgery creates or defines an upper-eyelid crease;
- ptosis concerns eyelid opening and levator function;
- crease design, excess skin, brow compensation, ptosis and previous surgery are assessed separately;
- the consultation and FAQ sections explain that crease creation alone may not address ptosis; and
- the existing page already covers incisional and non-incisional approaches, revision, recovery, risks and the separate lower-eyelid route.

Current Singapore comparison pages use the same central distinction. No new clinical section, FAQ, diagram or supporting article was justified. The content-expansion candidate is therefore closed.

## Distinct source-navigation improvement

The page did not give readers a direct route to independent Singapore professional-society patient information. Added two contextual links without changing clinical guidance:

- Singapore Association of Plastic Surgeons: Asian blepharoplasty — https://www.saps.org.sg/asian-blepharoplasty
- Singapore Association of Plastic Surgeons: upper eyelid surgery — https://www.saps.org.sg/upper-eyelid-surgery

The first sits with crease-planning and technique selection. The second sits with ptosis and functional upper-eyelid assessment. This reinforces the already-published distinction without copying competitor text or extending medical claims.

## Evidence inspected

- Current Dr Jeremy Sun guide: https://www.drjeremysun.com/asian-eyelid-surgery-singapore
- SAPS Asian blepharoplasty guide: https://www.saps.org.sg/asian-blepharoplasty
- SAPS upper-eyelid surgery guide: https://www.saps.org.sg/upper-eyelid-surgery
- Eye & Aesthetic Surgeons ptosis guide: https://www.eas.clinic/blog/ptosis-correction-surgery-singapore/
- Polaris double-eyelid guide: https://www.polarisplasticsurgery.com/articles/blepharoplasty-in-singapore-for-double-eyelids-what-you-need-to-know

Comparison pages were used to identify patient decisions, not to infer ranking causation or import their claims.

## Dates and scope

- Clinical review remains `2026-09-06`.
- Editorial/schema `dateModified` and sitemap `lastmod` are `2026-10-14`.
- No metadata title/description, clinical paragraphs, recovery claims, risks, pricing, contact details or analytics changed.

## Validation

- `git diff --check`: passed.
- `npm run lint`: passed.
- `npm run build`: passed, including TypeScript and all 45 routes.
- Credential terminology: 66 files checked, no findings.
- `llms.txt` source audit: 39 bullets, 26 site URLs, no duplicates or missing routes.
- Internal fragment audit: 763 links across 39 static pages, passed.
- Navigation accessibility audit: 40 HTML files, no failures.
- FAQ parity: six visible questions and six structured questions; none missing.
- Sitemap/schema-date parity: `2026-10-14`, passed.
- Generated HTML contains both SAPS destinations and preserves `lastReviewed: 2026-09-06`.

## Rollback and measurement boundary

Rollback is a revert of this batch/PR. Publication can improve source navigation and machine-readable freshness; it does not by itself establish rankings, AI citations, traffic or enquiries.
