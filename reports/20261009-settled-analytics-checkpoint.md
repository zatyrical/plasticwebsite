# 2026-10-09 settled SEO/GEO analytics checkpoint

## Measurement design

- Google Search Console: Singapore, web, equal seven-day windows **29 Sep–5 Oct 2026** vs **22–28 Sep 2026**.
- Search Console reports data settled through **6 Oct 2026**; this checkpoint deliberately ends on 5 Oct.
- GA4: the same equal windows, property timezone Asia/Singapore.
- Non-brand totals were calculated from the complete Singapore query rows returned by the API after excluding explicit practice/person brand strings. This operational filter is recorded in the evidence JSON.
- Current and comparison windows overlap neither each other nor the prior baseline, but the current window overlaps the 2–3 Oct launch and later sprint edits. It is too early for causal attribution.
- AI-assistant referrals are referral sessions, not verified native-platform mentions or citations.

## GSC Singapore non-brand

| Site | Clicks | Impressions | Avg position | Comparison |
|---|---:|---:|---:|---|
| DrJeremySun.com | 0 vs 1 | 1,449 vs 977 | 33.99 vs 31.13 | Broader visibility, lower weighted average rank; no click or first-page uplift |
| Lymphedasia.com | 2 vs 3 | 256 vs 248 | 20.63 vs 23.48 | Small position improvement, but fewer clicks and essentially flat impressions |

### Exact priority queries

All seven Dr Sun queries recorded **zero clicks** in both periods.

| Query | Current impressions / position | Previous impressions / position | Disposition |
|---|---:|---:|---|
| asian rhinoplasty singapore | 4 / 11.25 | 4 / 10.75 | Still just outside page one; tiny sample |
| necklift surgery singapore | 4 / 22.75 | 8 / 21.75 | No improvement claim |
| body contouring singapore | 65 / 24.63 | 36 / 24.69 | Impressions up; position flat |
| revision rhinoplasty singapore | 7 / 26.29 | 4 / 20.75 | Tiny sample; position weaker |
| rhinoplasty without implant singapore | 11 / 28.00 | 2 / 26.00 | Visibility up from a very small base |
| tummy tuck singapore | 82 / 44.06 | 51 / 44.25 | Impressions up; position flat |
| abdominoplasty singapore | 24 / 36.50 | 84 / 40.60 | Position improved while impressions fell sharply |

Lymphedasia exact queries:

| Query | Current impressions / position / clicks | Previous | Disposition |
|---|---:|---:|---|
| lymphedema treatment singapore | 24 / 14.96 / 0 | 33 / 23.58 / 1 | Average position improved, but no click and not page one |
| lymphoedema treatment singapore | 8 / 22.63 / 0 | 1 / 13.00 / 0 | Too small and mixed to interpret |
| lipedema treatment singapore | 2 / 9.00 / 0 | 5 / 5.20 / 0 | Page-one average on two impressions only; not a broad win |

## GA4

### Singapore organic sessions

| Site | Current | Previous | Change | Key events in this filtered slice |
|---|---:|---:|---:|---:|
| DrJeremySun.com | 45 | 19 | +26 | 0 |
| Lymphedasia.com | 10 | 16 | -6 | 0 |

The Dr Sun increase is material in count but remains a small, short window overlapping launch and publication activity.

### Successful-enquiry measurement

- DrJeremySun.com: `generate_lead` is registered as a key event and recorded **1 vs 0** across all traffic. It is the already-known successful contact-API response attributed to `lymphedasia.com / referral` landing on `/plastic-surgeon-singapore`; the overlapping-window count remains one, so this is **not a new additional lead**.
- Lymphedasia.com: `generate_lead` is registered as a key event and recorded **0 vs 0**.
- No test enquiry was sent.
- A recorded event is not proof of a qualified enquiry, appointment or surgery.

### AI-assistant referrals

- DrJeremySun.com: **0** current AI-assistant sessions.
- Lymphedasia.com: **3 vs 0** — 2 ChatGPT and 1 Google Gemini; all three engaged, with 0 key events.
- These are the same counts already visible in the overlapping prior checkpoint. They do not verify a named answer, brand mention, citation or fixed-prompt result.

## Organic landing observations

The blended GSC/GA4 report confirms current Google-organic sessions on several maintained Dr Sun landing pages, including the homepage (33), surgeon profile (5), lymphedema surgery page (2), new eyebag guide (1), and fat-grafting page (1). These are all-country counts, not Singapore-only conversions, and none recorded a key event in this report.

Lymphedasia's Google-organic traffic remains distributed across older educational pages. The report surfaces some legacy diet/hydration/heat-cold URLs; their visibility is a prioritisation signal for evidence/safety review, not permission to preserve unsupported claims or create keyword variants.

## Decision

- No exact Dr Sun priority query has a verified stable first-page win or click.
- Do not use the two-impression lipedema row as broad page-one proof.
- Do not claim that sprint edits caused the short-window session or impression changes.
- Keep the current content/technical programme running; prioritise legacy Lymphedasia safety review where organic visibility intersects unsupported treatment advice.
- Next settled GSC/GA4 checkpoint: **10 Oct 2026 at/after 09:08 SGT**.
- Next crawl/index checkpoint: **10 Oct 2026**.
- Next GBP checkpoint: **10 Oct 2026 at/after 07:06 SGT**.
