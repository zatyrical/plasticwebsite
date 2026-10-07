# Lymphedasia diagnosis and imaging integrity repair — 7 October 2026

## Scope and evidence

Applied the ElectiveSEO repair-first and patient-question workflow to a fresh Lymphedasia cohort:

- https://lymphedasia.com/lymphedema-diagnosis-report-explained/ (WordPress post 4291)
- https://lymphedasia.com/ultrasound-for-lymphedema-diagnosis-monitoring/ (WordPress post 3240)
- comparison destinations:
  - https://lymphedasia.com/private-lymphedema-consultation-singapore/
  - https://lymphedasia.com/icg-lymphography-singapore/
  - https://lymphedasia.com/ultrasound-mapping-lva-surgery-singapore/

The diagnosis-report post contained the literal public placeholder `[Clinic Name]` in its final action paragraph, joined to the promotional outcome wording “can change your outcome.” Its ICG subsection described an existing dedicated topic but did not link to the site's current ICG guide.

The legacy general-ultrasound post contained two unnamed “Case 1 / Case 2” examples, a fixed recommendation for monitoring every 3–6 months for most patients, and a fixed 15–30 minute session estimate. No source or patient provenance was supplied in the post. These were removed rather than strengthened or presented as clinic evidence.

Search Console context, 1 September–3 October 2026 (settled through 4 October):

| URL | Clicks | Impressions | Decision |
|---|---:|---:|---|
| diagnosis-report explainer | 1 | 16 | preserve URL; repair factual path |
| general diagnostic-ultrasound article | 0 | 52 | preserve for now; do not redirect on a small sample |
| LVA ultrasound-mapping article | 0 | 8 | preserve distinct surgical-mapping intent |

The few disclosed queries for the general ultrasound article were `ultrasound lymphatic drainage`, `ultrasound lymphedema` and a site query. This is too little evidence for consolidation.

## Published WordPress changes

### Post 4291

- linked the existing “ICG lymphography” phrase to `/icg-lymphography-singapore/`;
- replaced the placeholder/outcome paragraph with a cautious next step linking to `/private-lymphedema-consultation-singapore/`;
- retained the instruction to bring the report and prior imaging and added the existing medical-information limitation;
- preserved the title, URL, canonical, schema, featured image, author/reviewer block, staging copy and LVA related guide.

### Post 3240

- removed the complete unnamed case-example section;
- removed the fixed 3–6 month monitoring question/answer;
- removed the fixed 15–30 minute session-duration question/answer;
- renumbered the remaining FAQ questions from 1–3;
- preserved the title, URL, canonical, author/reviewer block and remaining medical copy.

No new procedure recommendation, outcome, price, recovery interval, credential or patient story was added.

## Backups and rollback

- pre-edit raw post 4291: `reports/backups/20261007-lymphedasia-diagnosis-report-post4291.txt`
- pre-edit raw post 3240: `reports/backups/20261007-lymphedasia-ultrasound-diagnosis-post3240.txt`
- WordPress pre-edit revisions: post 4291 revision 4905; post 3240 revision 4367.

Rollback by restoring the corresponding raw backup or WordPress revision.

## Verification

- Supported WPVibe match-once content edits each reported exactly one replacement.
- Database readback found zero `[Clinic Name]` matches and one each of the new ICG and private-assessment links.
- Database readback found zero removed case-heading, 3–6 month and 15–30 minute phrases.
- Live browser inspection confirmed:
  - post 4291 displays the ICG and private-assessment links, with no placeholder;
  - post 3240 moves directly from treatment-effectiveness content to Conclusion and shows a contiguous three-question FAQ;
  - both pages retain one visible H1 and their existing reviewer provenance.
- Both destination pages returned usable public content. No enquiry was submitted.

## Waiting clinical review

The general ultrasound article still contains substantive medical assertions about B-mode and Doppler ultrasound, diagnostic performance, monitoring and treatment response. A clinician should verify which ultrasound modalities are actually used for diagnosis, tissue assessment, venous exclusion and LVA target mapping, and which claims should be narrowed or consolidated into the newer mapping guide. No answer was invented in this batch.

## Queue

1. **READY:** continue to another unaudited Lymphedasia patient-journey or Dr Sun priority-page cohort.
2. **WAITING — clinician input:** review the technical medical accuracy and long-term role of the general diagnostic-ultrasound article.
3. **WAITING — analytics:** next comparable GSC/GA4 checkpoint after 8 October 2026 09:08 SGT.
4. **WAITING — GBP:** next moderation/propagation check after 7 October 2026 23:54 SGT, only with authenticated access.

No ranking, enquiry or AI-citation uplift is claimed from these same-day repairs.
