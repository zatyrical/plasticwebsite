# Evidence-resource access and NHK programme path — 15 October 2026

Base main: `e16495023ffd26d5e3b4b8a311560e7d6627822c`. Branch: `seo/resource-evidence-access-20261015`.
Read campaign issue7 through6189517345, current main and latest PR208 report; no open PR/active overlap. In-progress checkpoint6190458339.

## Observed gap
The existing /media NHK card linked indirectly to Lymphedasia's broad educational-resource page. That page does contain the NHK section, so it was not a missing feature. It also exposes three existing scholarly PDFs solely through icon anchors with no text or programmatic names. The paragraph tells readers to click a video and watch a full documentary, although the actual control is a linked image, not an embedded player.

- https://www.drjeremysun.com/media
- https://lymphedasia.com/educational-resources/ — WordPress PAGE443, valid33-node Elementor tree, template elementor_header_footer. This is distinct from HELD malformed page857; no857 edit.
- Three existing PDF URLs returned HTTP200, application/pdf and %PDF headers before saving. No full-paper medical review or new medical claim was derived.
- Existing NHK URL https://www3.nhk.or.jp/nhkworld/en/shows/4003187/ returned ordinary HTTP200, a self-canonical and the matching programme title “Connecting the Heart to Hope: Yamamoto Takumi, Reconstructive Supermicrosurgeon - The Professionals | NHK WORLD-JAPAN”. The web-retrieval tool separately reported robots-denied. No sign-in, bypass, playback, full-video availability or independent appearance/timestamp verification is claimed.

## Implemented
WordPress443 supported native Elementor save, seven existing widgets:
- Link each existing topic heading directly to its corresponding existing PDF and append the format label “(PDF)”.
- Give each PDF icon an aria-labelledby reference to the unique visible heading wrapper ID: resource-lymphovenous-shunts, resource-genital-elephantiasis and resource-surgical-prevention.
- Replace only the unsupported full-video click instruction with a descriptive “Open the NHK programme page” anchor to the image's existing programme URL.
- Preserve every existing medical/biographical paragraph, reviewer statement, image, link destination, widget ID, layout and styling outside those declared fields.

Dr Sun media page:
- Point the NHK card directly to the same verified official programme URL; label “View NHK programme page”.
- Retain card title, description, image/alt/dimensions and all other media cards.
- Advance only the genuinely changed /media sitemap lastmod to15October. No clinical-review date, page title, description, canonical, form, tracking, clinical recommendation or credential changed.

The elective-seo-playbook's verifiable-authority and purposeful-media approach led to fixing existing resource access rather than adding another article, image, transcript or unverified clinical explanation.

## Safeguards, validation and rollback
BEFORE raw page/envelope and precise old/new settings were durably committed before writing:
- backup commit `2c1911de3e3ae94573d87e88f658483521acb526`;
- declared changes commit `5b780297339657a44970dd6a20886baa1dffa399`;
- reports/backups/20261015-lymphedasia-resources-page443-before.json;
- reports/20261015-resource-page443-changes.json.

Fresh authenticated source exactly matched BEFORE immediately before /wpvibe/v1/elementor/save-page. Save returned id443/view URL and empty warnings. Full narrowed readback confirms all seven settings changes; sole additional tree difference is platform normalization of root1 isInner to false. No node added/removed. Title, URL, published status, author5, featured_media0 and template retained. Modified2026-10-15T11:00:00 UTC (19:00SGT).
AFTER: reports/backups/20261015-lymphedasia-resources-page443-after.json.

Public HTTP200/self-canonical/oneH1. Three heading links have visible topic/PDF text. Three original icon links reference three unique live label targets. New programme text link present; old full-video instruction absent. Complete JS-rendered #content confirms all links/labels and one reviewer box. First capped DOM read was truncated; a larger narrowed read resolved it without another write. No screen-reader/mobile-layout certification or blanket WCAG compliance claim.

Repository build passed24 mocked tests/47 generated routes, TypeScript, FAQ and sitemap/date parity. Credential audit68 files clean; LLM39 bullets/26 URLs clean;785 fragments over41 pages clean; navigation42 HTML clean. Built /media contains the exact official link and label; /media sitemap entry is15October. An initial extra assertion assumed adjacent XML tags and falsely failed on ordinary newlines; corrected structural entry extraction passed without changing source.
Single TSX data-field edit, no new client boundary, effects, fetching or dependency. Exact-head preview/status, guarded merge and ordinary production proof are recorded in issue7 on completion; no protected-preview fetch.

WordPress rollback: reconcile fresh metadata; reverse only recorded settings using supported Elementor save with original template, preserve subsequent changes, and verify public output. The raw backup is also retained. GitHub revert alone does not roll back WordPress. Repository rollback: revert this isolated PR's media/sitemap changes after current-main reconciliation.

## Guidance checked15October
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable — descriptive crawlable anchors and useful context.
- https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8 — use visible label references where present, rather than ambiguous icon-only links.
- https://elementor.com/help/custom-link-attributes/ — supported native link attributes and key|value format.
- WPVibe Elementor envelope/save and free-widget documentation; installed schema returned Elementor3.35.5 with heading title/link/_element_id and icon link controls.
- Vercel deployments/live-status guidance: exact intended project/team/commit release guards. Project prj_UNSdPXhVL2VaH0nRm72Tz1TesKY4, team team_3GpSXJDEbGsUnL96w4vKefZ0.

No new GBP post, testimonial, patient image, clinical claim or medical advertising proposition was published.

## Queue
| URL / item | Evidence / action | Status / next eligible |
| --- | --- | --- |
| /media and /educational-resources/ | Direct programme path and accessible existing scholarly PDFs | Implemented; completion proof in issue7 |
| /debulking-surgery/ page857 | Invalid/stale builder tree; working fallback differs | HELD source/layout parity, durable dual backup and controlled supported preview before save |
| Priority procedure protocols, legacy/pediatric claims, privacy facts | Existing missing clinician/operator sources | HELD exact input; no invented answer |
| Consultation conditional asset trial | No safe reversible PHP release path / desktop-mobile fixture | HELD; no repeated Lighthouse |
| GSC/GA4 | Authorised access/export required |16October; final17October |
| Eyebag / surgeon profile crawl |72-hour cadence |16October>=09:00SGT |
| GBP rapid-recovery3334046696687541456 | PROCESSING, not recreated |16October>=10:05SGT |
| Native fixed AI prompts | Actual platform responses unavailable | Later comparison if accessible; web search is not a sample |

This coherent batch resumes implementation after two discovery-only runs. It is not evidence of ranking, qualified-enquiry or AI-mention improvement, nor a declaration that independent ready discovery is exhausted.
