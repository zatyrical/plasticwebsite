# Lymphedema surgery cost source correction

Date: 10 October 2026 (Singapore)
Status: implemented and live-verified
Page: https://lymphedasia.com/lymphedema-surgery-cost/
WordPress page: 4302

## Evidence

The page correctly cited the Ministry of Health Singapore SE821L fee benchmark for LVA in established lymphedema. The current MOH page, last updated 5 October 2026, lists:

- surgeon fee benchmark: S$26,923–S$38,695 with GST (S$24,700–S$35,500 without GST);
- anaesthetist fee: not available;
- hospital fee: not available.

Primary source: https://www.moh.gov.sg/managing-expenses/bills-and-fee-benchmarks/cost-financing/tosp-se821l-bill-information/

The Lymphedasia guide nevertheless stated that non-surgeon components could be approximately S$15,000–S$80,000 or more. No source for that range was identified in the page or the official benchmark, and the FAQ structured data repeated it.

## Change

- Removed the unsupported S$15,000–S$80,000+ range from the visible paragraph.
- Replaced it with the source-aligned explanation that MOH lists anaesthetist and hospital fee data as unavailable, so a total should not be inferred from the surgeon-fee benchmark; patients should request an itemised estimate from the clinic and facility.
- Made the corresponding correction in the FAQ structured data.
- Preserved the official surgeon benchmark, page title, status, author, featured image, clinical-review date, procedure explanations and all links.

## Verification

- Exact pre-edit raw source was committed to the isolated branch before the live write.
- Immediate pre-write reconciliation matched the backup byte-for-byte.
- Two supported server-side match-once edits each reported one replacement.
- Fresh source equals the original plus only the two intended substitutions.
- Unsupported range occurs zero times; corrected visible statement and corrected FAQ answer each occur once.
- Official MOH surgeon benchmark still occurs in visible text and structured data.
- Rendered output contains the correction and official benchmark, and does not contain the removed range.
- Modified timestamp moved from `2026-09-26T19:36:18` to `2026-10-09T18:01:05` UTC.

## Measurement and scope

This is a factual trust and patient-comprehension correction, not evidence of a ranking, enquiry or AI-mention gain. It does not change the actual clinic quotation or make an insurance-coverage promise.
