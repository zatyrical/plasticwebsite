# Contact-path measurement and route-discovery audit
Date: 9 October 2026. Base main: 07903e9b280cbecca6f2e10eb696092f8bae03ee.

## Observed evidence
Current source records `generate_lead` only after a successful contact API response. The ContactForm component also recorded clicks on its own WhatsApp and Astrid fallback links, but equivalent prominent links elsewhere were outside that component:

- homepage `tel:+6565303573` button;
- homepage `wa.me/6587649219` button;
- footer `tel:+6565303573` link shown on every page.

Consequently, GA4 could distinguish a successful form submission but could not consistently count phone or WhatsApp contact intent by landing page. No event was emitted for phone clicks. This is a measurement gap, not proof that an enquiry or consultation occurred.

Static enquiry-path review also confirmed required fields, browser email validation, status announcements, a disabled sending state, API-side field validation, honeypot handling, HTML escaping, allowed redirect hosts and fallback contact instructions. No test enquiry or email was sent.

## Implemented
1. Added one delegated contact-link listener in the existing production-only `GaTracker`.
2. Records `phone_click` for `tel:` links, `whatsapp_click` for `wa.me`, and `external_contact_click` for Astrid's contact page.
3. Adds page location, clicked URL and method so results can be analysed by landing page and contact channel.
4. Removed the two component-level fallback click handlers to prevent double counting. `generate_lead` remains unchanged and fires only after a successful form response.
5. Corrected the mommy-makeover sitemap `lastModified` from 6 October to its source `modifiedIso` of 7 October. Google says it may use consistently accurate `lastmod`; Google ignores sitemap `priority` and `changefreq`, so the harmless duplicate advisory values were documented without code churn. Primary source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (retrieved 9 October 2026).

## Independent route/indexability audit
| Check | Evidence | Disposition |
|---|---|---|
| App route to sitemap coverage | 37 top-level route pages plus homepage compared with core routes and all procedureArticleList values | Complete; no missing page after resolving the imported lower-blepharoplasty article |
| Page canonical declarations | All 37 top-level route files export metadata/generateMetadata with a route canonical | Complete in source |
| Internal page links | 241 literal internal href/backHref values checked against current route files | No missing page target; template and image paths excluded from page-route comparison |
| Priority live samples | Homepage, body-contouring, eyebag and surgeon-profile URLs accessible in ordinary web retrieval | Accessible; no rank/index claim |
| Explicit cross-page fragments | Seven checked in the preceding batch | Closed; all targets exist |
| Sitemap priority/frequency | Core duplicates are later replaced by generic procedure entries | Google explicitly ignores these fields; no SEO-value edit |
| Sitemap lastmod | Mommy makeover source modified 7 Oct but map stated 6 Oct | Corrected to 7 Oct |

## Validation and measurement
Validate TypeScript/lint and production build on the isolated branch, then verify the exact deployment and merged production. Do not submit the form.

After release, use GA4 to report:
- successful `generate_lead` separately from contact clicks;
- `phone_click`, `whatsapp_click` and `external_contact_click` by page and method;
- no claim that a click is a qualified enquiry, attended consultation or procedure.

## Rollback and queue
Rollback the GaTracker listener, restore the two ContactForm handlers and revert the one sitemap date. No data migration or external-platform write.

Next independent READY work: rotate to a priority-page patient question or Lymphedasia journey outside the completed image, fragment and contact audits. WAITING checkpoints remain GBP 10 Oct after 07:06 SGT, settled GSC/GA4 after 09:08 SGT, and eyebag/profile crawl 10 Oct.
