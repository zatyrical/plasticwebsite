# Procedure SEO and patient navigation — 3 October 2026

## Findings and actions

| Observed evidence | Specific change | Purpose | Verification |
| --- | --- | --- | --- |
| Seven priority pages returned HTTP 200, self-canonical, indexable; no critical/high audit issues | Retain established URLs and clinical text | Preserve existing search signals | Rendered canonical and route checks |
| Titles reached 65–80 characters after the global brand suffix; descriptions reached 165–225 characters | Concise distinct titles and descriptions for seven existing guides | Help patients identify the relevant result; no CTR guarantee or fixed Google length limit assumed | Metadata and schema consistency checks |
| Shared guides placed related cards, decision panels and generic journey content before clinical sections | Replace with compact shortcuts; retain related guides at the end | Bring procedure information forward and reduce repeated navigation | Shortcut anchors and full build |
| Breast shortcut could match rapid recovery before the general recovery section | Prefer exact section ID matches before partial matches | Make recovery navigation predictable | Breast recovery link targets #recovery |
| Existing clinical discussions on cartilage, recovery, skin quality and procedure alternatives lacked links at the point of explanation | Add contextual links between Asian/rib rhinoplasty, breast/recovery, liposuction/tummy tuck, and neck lift/alternative guides | Connect distinct patient decisions to focused resources | Target and source-section checks |
| Primary aesthetic/reconstructive navigation returned to homepage anchors | Link to dedicated treatment hubs | Make full procedure directories easier to discover | Header and breadcrumb checks |
| Procedure enquiry forms defaulted to generic consultation category | Default aesthetic/reconstructive guides to their category, retaining all selectable options | Reduce one selection step; no change to message, recipients or delivery API | Form default and browser checks |
| Existing square logo had no favicon metadata | Reference existing 373×373 clinic logo | Add recognisable browser/site identity | Icon URL and file type checked |
| Sitemap preceded today's lower eyelid publication | Add fixed truthful modification dates for edited pages and resubmit the published sitemap | Signal actual updates and new content for discovery | XML parsing, URL uniqueness and GSC submission |

## Google indexing inspection

Inspected 3 October 2026. These are Google-reported indexed statuses, distinct from the on-page audit's technical indexability.

| Guide | Status | Last crawl UTC |
| --- | --- | --- |
| Rib rhinoplasty | Submitted and indexed | 2026-10-01 22:37:22 |
| Asian rhinoplasty | Submitted and indexed | 2026-09-06 07:33:48 |
| Breast augmentation | Submitted and indexed | 2026-08-27 19:05:15 |
| Rapid recovery breast augmentation | Submitted and indexed | 2026-08-17 08:09:12 |
| Facelift / neck lift | Submitted and indexed | 2026-08-16 02:33:35 |
| Body contouring / liposuction | Submitted and indexed | 2026-08-09 18:12:03 |
| Tummy tuck / abdominoplasty | Submitted and indexed | 2026-08-26 11:39:06 |
| New eyebag / lower blepharoplasty guide | URL unknown to Google | No crawl reported |

The new page was published today. It is linked and included in the sitemap; unknown status is not evidence of an indexing defect. Submission does not guarantee crawling, indexing or a ranking change. Clinical review dates are preserved; sitemap modification dates describe actual site edits rather than a new medical review.

## Search priorities and measurement

Singapore web searches, all devices, 3–29 September 2026. Necklift surgery Singapore: 47 impressions, average position 18.87. Neck lift Singapore: 17, position 18.94. Asian rhinoplasty Singapore: 10, position 13.5. Rhinoplasty without implant Singapore: 40, position 28.65. Revision rhinoplasty Singapore: 25, position 25.36. These are impression-weighted period averages, not current fixed rankings. Samples are small; no forecasted enquiries or income are calculated.

Rib rhinoplasty had no query data in the audit's previous period despite its more recent indexed status. Prioritise it because of Dr Sun's stated practice goals rather than invented search volume. Keep broad rhinoplasty and rib rhinoplasty as complementary intents. Keep tummy tuck/abdominoplasty and facelift/neck lift in their established combined guides; no pages per synonym are introduced.

Compare matched query groups and dates after recrawling: impressions, clicks, clicks/impressions, ranking URL and qualified enquiries. The site has GA4 tag G-448HBLCGJ8; GSC Wizard's connected account lacks Google Analytics scope. Therefore traffic and enquiry conversion data cannot be verified from this connector yet. Do not claim the existing tag is absent or add a duplicate tag.

## Audit limitations

The automated audit flags a logo as required on an Organization entry. Inspection shows this entry is the existing Changi General Hospital affiliation in physician data. Do not attach Dr Sun's clinic logo to that organisation or treat this heuristic as a ranking blocker. No new hospital affiliation, clinic address, outcome claim, technique or clinical review date is fabricated.

No test enquiries are sent to the clinic. Form validation is verified without submitting messages; actual email delivery is outside these read-only checks.

LymphedAsia retains its earlier homepage and LVA improvements and lymphatic focus. Its submitted sitemaps report zero errors/warnings; do not move aesthetic articles onto that domain or make speculative canonical changes.

## Guidance checked

- Google descriptive title guidance: https://developers.google.com/search/docs/appearance/title-link
- Google meta description guidance: https://developers.google.com/search/docs/appearance/snippet
- Google link guidance: https://developers.google.com/search/docs/crawling-indexing/links-crawlable

Further clinical depth should come from Dr Sun's original explanations: rib graft selection and revision planning; rapid recovery patient selection and instructions; facelift/neck lift technique selection; liposuction versus skin excision. These are candidate inputs, not published personal technique claims.

## Browser verification follow-up

Live browser checks confirmed the aesthetic category default and required empty fields without submitting an enquiry. A shortcut initially placed the section heading behind the sticky header. Added a 96px scroll margin to article heading/section targets and verified the recovery heading remains visible after navigation. A final metadata check also corrected the liposuction wrapper to use its concise presentation title.
