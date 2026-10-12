# Lymphedasia statistics provenance and patient paths — 13 October 2026

## Outcome

Published four surgical Gutenberg edits on WordPress post `4271`:
<https://lymphedasia.com/lymphedema-prevalence-statistics/>

1. Removed the entire unverified “Dr Sun's clinical perspective” table, including its attributed quotation and interpretive claims.
2. Linked the existing World Health Organization attribution to its exact lymphatic-filariasis fact sheet.
3. Linked the existing breast cancer-related lymphoedema phrase to the maintained Singapore BCRL guide.
4. Replaced the closing outcome-framed promotional paragraph with a neutral link to the existing private consultation guide.

No numerical estimate, diagnostic definition, treatment claim, title, description, clinical-review date, author assignment, URL or tracking changed. This is a bounded provenance/navigation correction, **not completion of the medical/statistical review**.

## Discovery and source checks

The zero-link inventory had held this page for source verification. The live page contains a distinctive global-prevalence intent; it was not redirected to a generic page.

| Observed claim | Source check | Disposition |
|---|---|---|
| 51 million filariasis infections as of 2018; at least 36 million chronic manifestations | WHO fact sheet, dated 21 November 2024, retains those dated estimates. Its chronic-manifestation count includes lymphoedema and hydrocele, not lymphoedema alone. | Existing wording retained; added exact WHO source link. |
| 140–250 million worldwide lymphoedema cases | Presented as an estimate, but the page does not identify an original study/population/year. | HOLD for original-source provenance; do not treat as a measured current census. |
| Approximately 99% secondary / 1% primary globally | These proportions occur in review literature but lack original population/year provenance on the page. | HOLD for source and denominator context; no new percentage inserted. |
| Primary lymphoedema “present from birth” | The phrasing conflates underlying developmental abnormalities with onset of visible swelling. | CLINICIAN REVIEW for exact corrected wording; not rewritten in this batch. |
| Breast-cancer range 8.4–21.4% attributed to a systematic review | DiSipio et al. distinguish estimates by study design; 21.4% is the prospective-cohort estimate, while the overall pooled estimate is 16.6%. A single unexplained range obscures those denominators and follow-up. | HOLD for source-specific explanation and exact medical wording. |
| First-person clinician-perspective quotation | No user-supplied original statement or verifiable provenance was found in the sprint materials. | REMOVED with exact source backup. |

Verified sources:
- WHO: <https://www.who.int/news-room/fact-sheets/detail/lymphatic-filariasis>
- DiSipio et al., 2013: <https://pubmed.ncbi.nlm.nih.gov/23540561/>
- Journal record: <https://www.sciencedirect.com/science/article/pii/S1470204513700767>

The source review is a discovery/clinical-review record. It does not authorise additional new medical claims. The WHO link supports only the existing dated filariasis paragraph, not all article statistics.

## Technical path and backup

- Authenticated `context=edit` read confirmed Gutenberg content in `post_content`; Elementor edit mode/data are empty.
- Gutenberg documentation was read before editing.
- Exact pre-edit raw source and metadata: `reports/backups/20261013-lymphedasia-statistics-post4271-before.json`.
- Each supported `/wpvibe/v1/content/edit` response reported `replaced: 1`.
- All writes were narrow match-once edits; no whole-post overwrite or raw SQL.
- Existing WordPress revision history remains available.

## Validation

- Authenticated stored-content verification confirms the attributed quote and outcome-framed CTA are absent, all three links are present, and the August 2026 review date is retained.
- Post remains published; final modified time: `2026-10-12T19:00:56Z` (`13 October 2026 03:00:56` SGT).
- Cache-busted live HTML confirms one H1, one self-canonical, index/follow, quote removal and all three links.
- Private consultation destination returns HTTP 200.
- The maintained BCRL destination had been independently verified in the recent patient-journey work; WHO was freshly opened for this source check.
- `git diff --check` passed for report and backup. No application source changed, so no new application build was required for this documentation-only PR.

## Rollback

Reconcile the current post first. Reverse only the four exact changes using `content/edit`, with the pre-edit JSON as the source of truth. Do not overwrite the whole post if later changes have landed. Retained revisions provide a secondary restoration route.

## Ranked next queue

1. **CLINICIAN/SOURCE REVIEW:** post 4271 global estimate provenance, denominator/date context, primary-onset wording and design-specific BCRL percentages. No blind rewrite or new prevalence chart.
2. **READY independent discovery:** hereditary/Milroy page `4274`, verifying existing genetic-source attribution and maintained patient paths before any medical edit.
3. **WAITING:** retired posts 4110/4150 sitemap removal and lower-eyelid/profile crawl at or after 13 October 09:00 SGT; GBP at or after 08:10 SGT.
4. GSC/GA4 reporting remains blocked by the recorded expired entitlement; no hourly retry. No ranking, enquiry or AI-citation uplift is inferred.
