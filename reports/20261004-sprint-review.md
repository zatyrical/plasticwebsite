# SEO sprint review — 4 October 2026, Singapore

## Continuity and measurement

Reviewed issue #7 and existing 1–4 October reports. Started from main 7d33f9b96829f50eb648c9d884f3ee98d1326d66 (PR #10), preserving the overnight fellowship Q&A and supplied operating-room photograph. Lymphedasia full Q&A is on the existing HMDP page; DrJeremySun.com has a shorter profile summary and a link. No duplicate full article created.

Search Console reports complete data through **29 September**; 30 September is the first incomplete date. Initial 24–30 September exploratory results were excluded from comparison. Compare Singapore/web/all devices, **23–29 September vs 16–22 September**, with query-only dimensions and an exact fixed query set. These periods precede the October publications and cannot measure their effect.

| DrJeremySun.com query | Current impressions | Current average position | Previous impressions | Previous average position |
|---|---:|---:|---:|---:|
| asian rhinoplasty singapore | 4 | 10.75 | 3 | 14.67 |
| necklift surgery singapore | 7 | 22.57 | 10 | 18.70 |
| neck lift singapore | 1 | 25.00 | 3 | 18.67 |
| body contouring singapore | 49 | 25.55 | 20 | 25.70 |
| revision rhinoplasty singapore | 3 | 18.67 | 6 | 26.00 |
| rhinoplasty without implant singapore | 1 | 28.00 | 15 | 27.07 |
| tummy tuck singapore | 56 | 44.52 | 61 | 41.38 |
| abdominoplasty singapore | 68 | 40.51 | 51 | 39.98 |

All listed queries had zero recorded clicks in both windows. `plastic surgeon singapore` returned no row; privacy thresholds mean that is not proof of zero impressions. Small samples, notably rhinoplasty, do not establish a stable first-page position.

Lymphedasia query-only report: `lymphedema treatment singapore` 1 click / 34 impressions / 29.18 average vs 0 / 23 / 32.04; `lipedema treatment singapore` 0 / 4 / 5.25 vs 0 / 5 / 4.20. Do not compare query/property averages with the original **historical www-homepage-only** page average of 3.56. The report designs differ; this is not evidence that the homepage suddenly dropped from 3.56 to 29.18. Canonicals were not changed.

GA4, same seven-day windows, Singapore + Organic Search landing-page breakdown:
- DrJeremySun.com: 16 sessions vs 14; homepage 10 vs 9. Worldwide Organic Search 23 vs 18; total sessions 37 vs 26.
- Lymphedasia: 16 sessions vs 17; homepage 7 vs 5. Worldwide Organic Search 378 vs 426; total sessions 773 vs 720. Worldwide traffic is not a substitute for local qualified enquiries.
- Both properties recorded zero key events. DrJeremySun.com's registered key events are `close_convert_lead`, `purchase`, `qualify_lead`; **`generate_lead` is not registered**. Source inspection confirms it is emitted after response.ok from the contact API. No duplicate tag or event was added. GA4 Admin write functionality is not available in the current connector: registering generate_lead remains an access-dependent task. Contact clicks are not accepted enquiries. Lymphedasia lists only purchase as a key event; its successful-enquiry event implementation must be inspected separately before registering an event.
- AI-referral report: zero current-period sessions on both sites; prior Lymphedasia period has one ChatGPT session. This does not negate the longer baseline or establish citations. No platform-native ChatGPT/Claude/Gemini response test was available. Fixed prompts retained from the GEO report; web search was not substituted as an AI response.

## Indexing and decisions

Eyebag page: **Discovered — currently not indexed**, no crawl reported. This advances from the previous 'URL unknown' status. Keep existing links/sitemap, monitor after more crawl time; do not blindly resubmit the sitemap or use the jobs/video-only Google Indexing API.

Surgeon profile: PASS / submitted and indexed / indexing allowed, last crawl 6 September 2026. Its new content has not been confirmed recrawled. Inspection lists the Lymphedasia physician page and sitemap as referring URLs. API inspection reads status, not a crawl request.

## Implemented batch: credentials and patient-information connections

| Evidence | Change | Purpose / metric |
|---|---|---|
| AMS current 2025–2027 board lists Jeremy Sun as Chairman; profile lacked the role | Factual leadership paragraph and official board link | Cross-checkable clinician identity, profile recrawl and branded accuracy |
| Training cards lacked links to associated procedure guides | Add 11 descriptive links covering LVA/Q&A, liposuction/tummy tuck, breast/recovery, Asian/rib rhinoplasty, upper/lower eyelids and facelift/neck lift | Relevant patient navigation and discovery; track landing pages and enquiries, not a promised rank boost |
| Lymphatic training summary emphasised surgery | Use clinician-confirmed dedicated HMDP multidisciplinary management and lymphatic surgery wording | Accurate training scope without first/superiority or current-clinic MOH-endorsement implications |
| Latest profile/training edits and 4 October rib illustration not reflected in core sitemap dates | Explicit 4 October dates for only those three genuinely changed routes | Truthful modification signals; unchanged routes retain dates |

No new medical techniques, outcomes, fees, testimonials or photographs introduced by this batch. The approved photograph/Q&A remain intact. No GBP service/hour edits or posts repeated: no authenticated GBP management connector is currently available; public approval/propagation remains unverified. No outreach messages sent.

## Validation and rollback

Production build and TypeScript passed: 45 pages. An initial local build failed because a dependency symlink pointed outside Turbopack's root; replaced the local dependency link with a local copy and the build passed. No project dependency/configuration change was made. React review: static server-rendered data, stable link keys, descriptive anchors, no new client JavaScript or network waterfalls.

Preview deployment check and post-merge production verification are required before marking the batch complete in issue #7. Rollback: revert this PR. WordPress content was not edited in this batch.

## Next decisions

1. Register genuine successful-enquiry generate_lead as a GA4 key event when an authorised Admin write path is available, without synthesising an enquiry. This is prospective, not historical backfill.
2. Monitor primary surgeon recrawl and new eyebag crawl/index status at an appropriate cadence. Compare post-publication settled weeks once available.
3. Inspect actual Asian rhinoplasty/neck-lift competitors and distinct decision gaps; avoid thin additional URLs or metadata churn.
4. Verify GBP moderation/public propagation and fixed native AI prompts only through actual available platform access.

Primary sources checked 4 October:
- https://www.ams.edu.sg/colleges/CSS/chapter-of-plastic-reconstructive-aesthetic-surgeons — Chairman and Chapter responsibilities.
- https://developers.google.com/search/docs/appearance/ai-features — indexed eligibility, readable text/internal links; no special AI schema required, no guarantee of serving.
- https://support.google.com/analytics/answer/13128484?hl=en — key-event setup, required permissions and prospective reporting.
