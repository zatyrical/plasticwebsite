# Early analytics checkpoint — 7 October 2026

## Scope and limitations

This checkpoint compares equal, short windows after the first sprint changes. It is an early directional read, not an uplift claim.

- GA4: 4–6 October vs 1–3 October 2026.
- Google Search Console: Singapore web search, 2–4 October vs 29 September–1 October 2026.
- GSC was settled through 4 October when checked. Most changes published from 3–7 October are therefore absent or only partly represented.
- Small query samples, shifting query mix and the legacy `www` Lymphedasia homepage mean average positions must not be treated as verified live rankings.
- A referral session from an AI platform does not prove that the site was named or cited in a particular AI answer.

## GA4 results

| Property | Metric | 1–3 Oct | 4–6 Oct | Interpretation |
|---|---:|---:|---:|---|
| DrJeremySun.com | Organic Search sessions | 28 | 29 | Essentially flat |
| DrJeremySun.com | Singapore organic sessions | 23 | 19 | Down 4; small sample |
| DrJeremySun.com | Organic key events | 0 | 0 | No organic lead recorded |
| DrJeremySun.com | All-channel `generate_lead` | 0 | 1 | Referral from `lymphedasia.com`, landing on `/plastic-surgeon-singapore`; not yet evidence of a qualified enquiry |
| Lymphedasia.com | Organic Search sessions | 174 | 181 | Up 7 (+4.0%); too early to attribute |
| Lymphedasia.com | Singapore organic sessions | 3 | 3 | Flat; too small for a trend |
| Lymphedasia.com | Organic key events | 0 | 0 | No organic lead recorded |
| Lymphedasia.com | All-channel `generate_lead` | 0 | 0 | Event remains registered but has not fired |

DrJeremySun.com also recorded one ChatGPT referral session in the later window (zero engaged sessions and zero key events). Lymphedasia.com recorded one ChatGPT and one Google Gemini referral session (both engaged, zero key events). These are AI-referral observations only; they are not verified mentions or citations.

The DrJeremySun.com all-channel session total was distorted by a burst of US/direct/unassigned traffic. It is excluded from SEO interpretation pending a longer, source-level sample.

## GSC Singapore results

The non-brand split uses a conservative heuristic excluding obvious Dr Jeremy Sun, Lymphedasia and Lymphoedema Asia name variants.

| Property | Metric | 29 Sep–1 Oct | 2–4 Oct | Interpretation |
|---|---:|---:|---:|---|
| DrJeremySun.com | Non-brand clicks | 0 | 0 | No click gain yet |
| DrJeremySun.com | Non-brand impressions | 516 | 708 | Broader visibility, but query mix also widened |
| DrJeremySun.com | Impression-weighted average position | 29.39 | 36.17 | Weaker aggregate position; not a live rank check |
| Lymphedasia.com | Non-brand clicks | 1 | 1 | Flat |
| Lymphedasia.com | Non-brand impressions | 142 | 122 | Down 20 |
| Lymphedasia.com | Impression-weighted average position | 37.00 | 22.61 | Better aggregate position, but the sample and query mix changed |

### DrJeremySun.com priority-query detail

| Query | Earlier impressions / position | Later impressions / position | Disposition |
|---|---:|---:|---|
| `asian rhinoplasty singapore` | 3 / 11.33 | 1 / 11.00 | Stable just outside page one, but only one later impression |
| `necklift surgery singapore` | 4 / 22.75 | 0 / — | No later impressions; no ranking conclusion |
| `body contouring singapore` | 57 / 24.56 | 7 / 25.00 | Position broadly stable; impression drop needs a longer window |
| `revision rhinoplasty singapore` | 1 / 26.00 | 4 / 25.00 | Essentially unchanged on a tiny sample |
| `rhinoplasty without implant singapore` | 2 / 18.50 | 7 / 30.00 | Worse later average, but too few impressions to diagnose |
| `tummy tuck singapore` | 36 / 44.31 | 44 / 43.77 | Stable |
| `abdominoplasty singapore` | 8 / 39.25 | 16 / 35.44 | Directionally better, with twice the impressions; still far from page one |

No listed DrJeremySun.com priority query produced a Singapore click in either three-day window.

### Lymphedasia.com priority-query detail

| Query | Earlier impressions / position | Later impressions / position | Disposition |
|---|---:|---:|---|
| `lymphedema treatment singapore` | 18 / 46.22 | 13 / 10.46 | Encouraging aggregate movement, but mixed across current and legacy homepage URLs and not a verified live rank |
| `lymphoedema treatment singapore` | 10 / 42.00 | 6 / 26.50 | Directionally better on a very small sample |
| `lipedema treatment singapore` | 1 / 9.00 | 1 / 9.00 | Page-one average in both windows, one impression each |
| `lipedema singapore` | 1 / 10.00, 1 click | 4 / 7.75, 0 clicks | Page-one average on a small sample; no later click |

## Lymphedasia lipedema query/page check

Singapore GSC data for 7 September–4 October shows that the historical `https://www.lymphedasia.com/` homepage still owns most observed lipedema visibility: 155 impressions, two clicks and average position 6.01. The current non-`www` homepage recorded 25 impressions at 8.84.

The two dedicated pages have not accumulated enough evidence for a consolidation decision:

- `/lipedema-singapore/`: two impressions, average position 24.
- `/lipedema-vs-lymphedema-singapore/`: one impression, average position 92.

The dedicated pages address different patient needs (condition/treatment information versus differential education), while the observed overlap is dominated by historical homepage rows. Preserve both pages and their current URLs. Reassess after a larger settled sample; do not migrate or merge solely because the legacy homepage ranks.

## Decisions and next checks

- Keep both `generate_lead` key-event registrations unchanged.
- Treat the single DrJeremySun.com referral lead as a recorded event, not a confirmed qualified enquiry, until the clinic validates its quality.
- Do not claim SEO uplift or first-page success from these short windows.
- Do not merge Lymphedasia lipedema pages on the present evidence.
- Continue independent patient-question and internal-path work while data matures.
- Next comparable analytics check: 8 October 2026 after 09:08 SGT, using newly settled data only.
- Crawl/index checkpoint remains eligible on 7 October; GBP propagation is next eligible after 23:54 SGT if authenticated access is available.

