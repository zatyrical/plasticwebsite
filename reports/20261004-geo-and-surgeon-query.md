# GEO and plastic-surgeon query work — 4 October 2026 (Singapore)

## Observed evidence

- User reports no drjeremysun.com result through ten Google result pages for `plastic surgeon singapore`; location/device/personalisation of this observation not independently reproduced.
- Fresh Google URL Inspection: homepage, /plastic-surgeon-singapore and /top-plastic-surgeon-singapore all PASS, submitted and indexed, indexing allowed. Last crawl respectively 1 October, 6 September and 17 August 2026. Inspection does not prove an absence of manual actions or establish a live ranking.
- GSC Singapore web exact query `plastic surgeon singapore`, 3–29 September (settled), returned no rows. This is no recorded visibility in this report, not proof of zero impressions: query privacy thresholds and sampling apply.
- Broader `plastic surgeon` query/page report 3–30 September (30th incomplete) returned related queries with appearances, including consultant plastic surgeon on primary surgeon page, and multiple guide URLs for some variants. Do not present the tiny two-impression 7.5 average as an established page-one result.
- Both live robots files allow public pages for search crawlers. Dr site explicitly permits OAI-SearchBot; Claude-SearchBot already allowed by wildcard. Lymphedasia blocks wp-admin only and retains its sitemap. Origin retrieval observed HTTP 200; actual verified crawler IP/WAF logs not available, so no claim that all bots bypass the firewall.
- Both legacy physician-profile links redirect to their current canonical profiles. Shared sameAs now uses canonical destinations without duplicate aliases.
- Institutional CGH profile is publicly retrievable. Competing practice pages inspected via search show specific surgeon biographies, procedure navigation and clear consultation/location context. These are observed page patterns, not experimentally established ranking causes; no competitors' claims or text reused.

## Implemented batch

1. Existing /plastic-surgeon-singapore page now introduces Dr Jeremy Sun by name, links identity aliases, CGH background, training/publications, focused procedure guides and the user-confirmed Paragon consultation route/Google Maps listing. Existing safety guide retained.
2. Metadata reflects the actual named professional profile and patient guide. ProfilePage/MedicalWebPage mainEntity refers to existing Person identity; no special AI schema claimed. Name/headline/dateModified align with visible changed content. Clinical review date retained honestly.
3. Shared Person aliases now include Dr Jeremy Sun Mingfa. Specific rib cartilage rhinoplasty and lower/transconjunctival blepharoplasty topics match existing public guides and user-approved services.
4. Claude-SearchBot made explicit in existing robots allow group for clarity; no training preference or public-access policy changed. This is not a fix for a previously blocked bot.
5. Lymphedasia published one identity paragraph on existing profile post 1532: Dr Jeremy Sun, Sun Mingfa Jeremy and Dr Jeremy Sun Mingfa refer to the same doctor, linked to CGH and the personal profile. Existing specialist content and current URLs preserved. Match-once prefix insertion preserves the original content tail; live selector verified.

## Validation

Production build (45 pages), TypeScript and whitespace checks pass. Inspect live deployment and JSON-LD after merge. Capture visible proof. No rank improvement, new AI mention or enquiry uplift established by this batch.

## Next priorities

- Track primary surgeon page recrawl and exact Singapore query to page visibility after deployment. URL Inspection API reads indexing status; it does not request indexing. Do not repeatedly submit sitemap or claim recrawl requested without an actual supported submission.
- Review overlap between primary surgeon profile and top-plastic-surgeon safety guide using query/page data and purpose. Retain existing URLs until consolidation has a concrete evidenced benefit and redirect/internal-link/sitemap plan.
- Build original clinician-reviewed decision content for rib vs implant rhinoplasty, lower-eyelid bags vs hollowing, realistic breast recovery, neck vs facelift, and liposuction vs abdominoplasty using existing pages first. Require review only for new medical claims, avoid duplicate thin articles.
- Verify existing independent professional profiles and references point to the correct doctor, current site and accurate contact details. Prepare specific corrections and relevant editorial contributions; no outreach messages or paid links authorised by this request.
- Check successful-enquiry GA4 key event and referral channels. AI referrals are not citation proof.
- Capture platform-native responses for fixed prompts when ChatGPT/Claude/Gemini search access is available. No neutral platform-native test performed here; this conversation's answer is not an independent visibility test. Record platform/model, search enabled, time, location if supported, exact prompt, response, mention and cited URL. Repeat without falsely treating consistency as guaranteed placement.

## Fixed unbranded AI-search prompts

1. Which plastic surgeons in Singapore offer rib cartilage rhinoplasty, and where can I read about graft options and risks?
2. Which Singapore surgeons offer transconjunctival lower blepharoplasty for eyebags?
3. Where can I consult about rapid recovery breast augmentation in Singapore, including limitations and activity restrictions?
4. Which Singapore plastic surgeons assess facelift and neck lift options?
5. Who offers lymphoedema assessment and LVA surgery in Singapore?

Branded accuracy check: Who is Dr Jeremy Sun, where does he practise, and which official sources verify his background?

## Official guidance checked

- https://developers.openai.com/api/docs/bots — OAI-SearchBot supports search discovery; separate from training GPTBot.
- https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler — Claude-SearchBot search role and robots controls.
- https://developers.google.com/search/docs/appearance/ai-features — ordinary SEO eligibility, accessible text/internal links; no special AI text file/schema required. This guidance covers Google Search AI features, not a promise for every Gemini interface.

Rollback: revert this PR. WP paragraph can be removed with content/edit match-once using the paragraph id physician-identity; do not rewrite whole builder data. No existing page removed or migrated.
