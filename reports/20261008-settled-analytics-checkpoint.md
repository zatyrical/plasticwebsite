# Settled SEO/GEO analytics checkpoint — 8 October 2026

## Executive outcome

This is the first equal-window checkpoint collected after the 2–3 October launch batch. Google Search Console is settled through **4 October 2026**; 5 October remains incomplete. The comparison therefore uses:

- Current: **28 September–4 October 2026**
- Previous: **21–27 September 2026**
- GSC scope: Singapore, Web, all devices
- GA4 organic landing scope: Singapore, Organic Search

The windows overlap the launch dates and do not isolate every sprint change. Small samples are volatile. The results below are observations, not causal claims.

Measured developments:

- Dr Jeremy Sun's Singapore organic landing sessions increased from **18 to 35**. The homepage accounts for most of the increase; the new eyebag guide recorded its first Singapore organic landing session.
- GA4 recorded **one `generate_lead` event** after a successful form response. It arrived via a Lymphedasia referral and landed on `/plastic-surgeon-singapore`.
- Lymphedasia recorded **three AI-assistant referral sessions**: two from ChatGPT and one from Google Gemini. All three were engaged; none generated a key event.
- No exact priority query recorded a click or a verified first-page result. Asian rhinoplasty is closest at average position **11.25** on four impressions.
- Lymphedasia Singapore organic sessions were **10 vs 13**. Its query samples remain small and volatile.

## Search Console: Dr Jeremy Sun exact priority queries

| Query | Current clicks | Current impressions | Current avg position | Previous clicks | Previous impressions | Previous avg position | Disposition |
|---|---:|---:|---:|---:|---:|---:|---|
| asian rhinoplasty singapore | 0 | 4 | 11.25 | 0 | 4 | 10.75 | Just outside page one; sample too small for a trend |
| body contouring singapore | 0 | 65 | 24.65 | 0 | 37 | 24.57 | Impressions increased; position effectively flat |
| revision rhinoplasty singapore | 0 | 6 | 21.67 | 0 | 3 | 26.33 | Directionally better position on a very small sample |
| rhinoplasty without implant singapore | 0 | 9 | 27.44 | 0 | 5 | 25.80 | More impressions; position slightly weaker |
| necklift surgery singapore | 0 | 5 | 23.00 | 0 | 9 | 20.89 | Weaker small-sample result |
| tummy tuck singapore | 0 | 88 | 44.02 | 0 | 45 | 44.16 | Impressions increased; position flat |
| abdominoplasty singapore | 0 | 31 | 37.65 | 0 | 79 | 40.47 | Position directionally better, impressions lower |

No query rows were returned for `rapid recovery breast augmentation`, `24 hour breast augmentation`, `rib cartilage rhinoplasty`, `eyebag removal`, `lower blepharoplasty`, or `plastic surgeon singapore`. Query-row absence is not proof of zero because Search Console may suppress low-volume data.

No exact priority query has a verified live rank or a stable first-page average. The sprint target is not yet achieved.

## Search Console: Lymphedasia exact Singapore queries

| Query | Current clicks | Current impressions | Current avg position | Previous clicks | Previous impressions | Previous avg position | Disposition |
|---|---:|---:|---:|---:|---:|---:|---|
| lipedema treatment singapore | 0 | 3 | 8.00 | 0 | 4 | 5.00 | Page-one average, but only three impressions |
| lymphedema treatment singapore | 0 | 21 | 16.71 | 1 | 33 | 23.58 | Position directionally better; the prior single click did not repeat |
| lymphoedema treatment singapore | 0 | 8 | 22.63 | 0 | 1 | 13.00 | Larger but still small sample; weaker average |

No LVA or specialist variants appeared in the exact-query result. Absence is not proof of zero. These figures must not be compared directly with the historic www-homepage page-specific baseline because the scopes differ.

## GA4: Singapore organic landing paths

### Dr Jeremy Sun

Singapore Organic Search sessions increased from **18 to 35**.

| Landing page | Current sessions | Previous sessions | Observation |
|---|---:|---:|---|
| `/` | 25 | 12 | Main source of the increase |
| `/lymphedema-surgery-singapore` | 2 | 0 | First sessions in this comparison |
| `/plastic-surgeon-singapore` | 2 | 1 | Small increase |
| `/eyebag-removal-lower-blepharoplasty-singapore` | 1 | 0 | First organic landing session for the new guide |
| `/fat-grafting-singapore` | 1 | 0 | First session in this comparison |
| `/ftm-top-surgery-singapore` | 1 | 0 | First session in this comparison |
| `/reconstructive-surgery` | 1 | 0 | First session in this comparison |
| `(not set)` | 2 | 1 | Not attributable to a page |

This is traffic, not rank or enquiry evidence.

### Lymphedasia

Singapore Organic Search sessions were **10 vs 13**. Current one-session landings included:

- `/dr-jeremy-sun-lymphedema-specialist`
- `/lymphedema-and-cellulitis`
- `/lymphedema-treatment-made-clear`
- `/the-power-of-lymphedema-pumps`
- `/understanding-the-4-stages-of-lymphedema`

The sample is too small to diagnose an uplift or decline by content cluster.

## Enquiry measurement

Both properties have `generate_lead` registered as a GA4 key event.

### Dr Jeremy Sun

GA4 recorded **one `generate_lead` event** in the current window and none in the previous window.

Attribution available in the property:

- Source / medium: `lymphedasia.com / referral`
- Landing page: `/plastic-surgeon-singapore`
- Channel: Referral

The website emits `generate_lead` only after the contact API returns a successful response. This is therefore evidence of a recorded successful form acceptance, not merely a click. No test enquiry was submitted during the sprint.

Limits:

- It is not proof of a qualified enquiry, booked consultation or surgery.
- It supports the value of the cross-site pathway, but the available report does not establish which exact link edit produced the session.
- Organic Search recorded no `generate_lead` event in the equal window.

### Lymphedasia

No `generate_lead` event was recorded in either equal window. Current events were limited to standard engagement events such as page views, sessions, scrolls and clicks.

## AI-assistant referrals

### Dr Jeremy Sun

No AI-assistant referral session was recorded in either equal window.

### Lymphedasia

Three current-window AI-assistant referral sessions were recorded, versus none in the previous window:

| Referrer | Sessions | Date(s) | Landing page(s) |
|---|---:|---|---|
| ChatGPT | 2 | 2 and 4 October | `/`; `/private-lymphedema-consultation-singapore` |
| Google Gemini | 1 | 4 October | `/stemmer-sign-lymphedema-test` |

All three sessions were engaged. Key events: **0**. They represented approximately **0.41%** of Lymphedasia sessions in the window.

Referral traffic does not prove that the site was named in a fixed prompt, quoted, or cited by an AI response. Native-platform prompt evidence remains unavailable, so no AI-mention claim is made.

## Content disposition: rapid-recovery breast augmentation

The candidate question/decision gap is **closed**. Current main already provides:

- an answer-first rapid-recovery procedure page;
- suitability and limits;
- a misconception/comparison section;
- provenance for the Dr William Adams technique;
- an original editorial image;
- contextual links to the breast hub and related decision paths;
- reciprocal links from the hub.

A new variant page would duplicate existing intent and is not justified by the available query data. No content edit was made.

## Next eligible checks

- Settled GSC/GA4 comparison: **9 October 2026 at or after 09:08 Singapore time**
- Eyebag/profile inspection: **10 October 2026**, unless a concrete technical fault appears
- GBP daily status check: **9 October 2026 at or after 06:54 Singapore time**
- Native AI prompt sampling: only when an actual supported platform response is available

The next checkpoint should continue to distinguish average position from verified live rank, referral sessions from AI citations, and form acceptance from a qualified or booked patient.
