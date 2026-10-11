# Postoperative swelling article safety repair — ready to publish

Date: 12 October 2026 (Singapore)

## Scope

- Live URL: https://lymphedasia.com/lymphedema-vs-post-surgery-swelling/
- WordPress post: 4268
- Status at checkpoint: **not published**. The WPVibe write was blocked by the rolling fair-use cap.
- Next eligible connector retry: **12 October 2026 at or after 12:50 Singapore time**.
- Exact rollback source: `reports/backups/20261012-postop-swelling-post4268-before.html`
- Fully authored replacement: `reports/backups/20261012-postop-swelling-post4268-ready.html`

## Observed patient-safety gap

The published article uses fixed recovery windows (3–5 day peak, 2–6 week resolution), asks readers to interpret a home Stemmer test, treats several symptoms as if they separate lymphoedema from ordinary swelling, presents an unsupported first-person quotation, and implies ordinary postoperative swelling can turn into lymphoedema. Those statements can create false reassurance or unnecessary alarm because postoperative swelling is procedure-specific and several alternative causes require assessment.

## Evidence used

1. NCI PDQ, *Lymphedema (PDQ®)–Health Professional Version*: lymphoedema assessment must consider and exclude other causes of limb swelling; sequential measurements can be more meaningful than isolated measurements because methods vary.  
   https://www.cancer.gov/about-cancer/treatment/side-effects/lymphedema/lymphedema-hp-pdq
2. American Cancer Society, medically reviewed with the American Society of Clinical Oncology, *Exercises After Breast Cancer Surgery*: unusual or worsening swelling, heaviness, aching or tightness should be discussed with the healthcare team; postoperative activity should be tailored to the individual treatment plan.  
   https://www.cancer.org/cancer/types/breast-cancer/treatment/surgery-for-breast-cancer/exercises-after-breast-cancer-surgery.html
3. Goss et al., *Sensitivity and Specificity of the Stemmer Sign for Lymphedema* (PubMed PMID 31624689): the sign produced false positives and false negatives; a negative result does not rule out early disease.  
   https://pubmed.ncbi.nlm.nih.gov/31624689/

## Ready change

- Replaces universal timelines with procedure-specific recovery guidance.
- Makes the differential explicit: lymphoedema is one possible cause, not the only cause.
- Directs unexpected or changing swelling to the operating team and identifies urgent warning symptoms.
- Removes the unsupported quotation and self-diagnostic Stemmer instructions.
- Rewrites the comparison table to avoid false distinctions.
- Explains that later lymphoedema does not mean ordinary postoperative swelling “turned into” it.
- Replaces arbitrary home thresholds with structured symptom recording.
- Adds five decision-useful internal links only: the maintained diagnosis guide (twice), Stemmer-sign guide, symptom tracker and contact pathway.
- Normalises the reviewer role to the current CGH wording already verified and deployed in the shared author box.
- Adds no outcome promise, price, testimonial or new treatment claim.

## Validation required after publication

1. Submit the exact ready file as post 4268 content through the supported REST endpoint; WordPress revision is the immediate rollback.
2. Re-read the stored raw Gutenberg source and confirm the five intended links, removal of legacy thresholds/quote, valid block nesting and published status.
3. Verify the public URL returns HTTP 200 and contains the new answer-first opening and urgent-warning wording.
4. Record the resulting WordPress modified time, public proof and next crawl date in campaign issue #7.
