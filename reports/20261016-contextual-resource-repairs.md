# Contextual resource repairs — 16 October 2026

Base main `86016613a97a62a8d45c75d24533aa380c5d13aa`; isolated branch `seo/remaining-wp-resource-repairs-20261016`; issue7 checkpoint6211947564, scope correction6211977314. Read current issue7, latest PR222/223 reports and current main; no open PR or overlapping active checkpoint. Completed batches were not repeated.

## Published on WordPress

Four existing pages, fourteen surgical edits: ten href changes, three removed misplaced anchor wrappers, one removed off-target provider clause. No new article, medical answer, claim, statistic, keyword variant, image, form or tracking change.

| Existing page | Evidence and implemented disposition | Edits |
| --- | --- | ---: |
| [Scar3093](https://lymphedasia.com/understanding-scar-lymphedema/) | Generic scar-formation phrase “factors can influence” linked to an LVA-success URL. Removed only its anchor wrapper; preserved words. Do not replace it with an unrelated LVA link. | 1 |
| [Abdomen3022](https://lymphedasia.com/understanding-lymphedema-in-the-abdomen/) | Primary/secondary and diagnosis references now link directly to the maintained comparison and treatment hub. Generic arms/legs reference now goes to the overview, not an exercise article. | 3 |
| [Men/women3085](https://lymphedasia.com/lymphedema-in-men-vs-women/) | Treatment href points to maintained hub. Removed surgeon-selection wrapper from a breast-cancer surgery sentence. Follow-up source audit corrected causes/symptoms→overview, lymph nodes→lymphatic-system explanation, causation→primary/secondary, symptoms→early-signs. Removed generic drainage→yoga wrapper; the subsequent explicit MLD link is preserved. | 7 |
| [Occupational therapy3099](https://lymphedasia.com/lymphedema-management-through-occupational-therapy/) | Removed only the comma-bounded Phelps Health outpatient-provider example. No replacement provider or affiliation invented. Type-of-lymphoedema reference now points to primary/secondary, and symptoms reference to early signs, rather than hand/scar articles. | 3 |

The six legacy href candidates from the earlier queue are CLOSED with context-appropriate dispositions, not six blind URL substitutions. Fresh raw paragraphs disproved the relevance of three originally proposed destinations. Prior redirects working is not the same as a broken URL; this batch improves navigation relevance and direct routing without claiming all old URLs were broken.

## Supported edit path, backups and validation

- Ordinary17:00SGT allowance check returned67/100used,33remaining. Fresh site-info: administrator, WordPress6.9.10/WPVibe1.20.1, content_edit/content_search available. Read supported edit-content and Gutenberg documentation, including dependency; all four bodies are Gutenberg with empty Elementor edit mode/data. No builder conversion or site-wide setting write.
- Complete selected BEFORE envelopes: id, modified, status, link, title, raw/rendered content, author, media, template, all returned metadata and builder fields. Stored remotely before any live write: commits2130cef7/d7ddca24/cef4f6ce/1e98e653; exact initial patch set99f85553. Paths `reports/backups/20261016-1700-post*-before.json` and `*-resource-patches.json`.
- Each post immediately re-read with the same fields before saves. Compare raw body and all selected non-rendered fields; all guards exact. Every save uses supported POST `/wpvibe/v1/content/edit`, post_content locator, exact unique snippets, match-once. Fourteen sequential writes returned edited/replaced1, without timeout, unknown outcome or block-validation error. No full-body PUT, SQL, CLI quota workaround, paid upgrade or usage-reset action.
- First seven AFTER snapshots archived before the follow-up batch; second exact patch set6140aad5 archived BEFORE its writes. Fresh guards against intermediate AFTER snapshots passed. Final full readbacks exactly match locally computed expected bodies.
- `20261016-1710-parity-proof.json`: all four exact forward/reverse and selected non-content parity checks pass. Removing only anchor markup gives identical clinical text, except the specified provider-clause removal. Headings, FAQs, images, authors, status, title, metadata, builder fields and existing clinical-review statements preserved. WordPress modified timestamps changed normally, not clinical review dates.
- Final timestamps returned by WordPress: scar09:02:51, abdomen09:03:55, men09:09:00, OT09:10:02 on16Oct2026. Source timestamps are recorded as returned, not inferred timezone labels.
- Initial naïve reverse-href uniqueness assertion failed because a destination already occurs elsewhere; no live fault or rollback was executed. Corrected proof tracks exact forward offsets and constructs unique100-character surrounding-context rollback snippets. The archived complete rollback list recreates each original body byte-for-byte. Do not blindly reverse a repeated destination URL.
- Rollback: fresh authenticated guard against final snapshot, then use `20261016-1710-full-rollback-patches.json` sequentially through the same supported match-once route; re-read and verify live. Normal post revisions also exist; no invented revision IDs. Reverting this documentation PR does NOT roll back WordPress. Preserve any subsequent concurrent changes.

## Live proof and primary guidance

Ordinary fresh public GETs of all four final pages:200, unchanged URLs, exactly one H1 each, self-canonical, follow/index, existing “Last reviewed: August2026” statements preserved. Every changed old snippet absent and intended replacement present; removed Phelps Health text absent. Inspection uses actual full HTML, not an assumed article wrapper. No physical mobile/browser or screen-reader test claimed.

Five unique selected destinations (overview, treatment, primary/secondary, lymphatic-system explanation, early signs) independently returned200 at their own URL with self-canonicals. Existing MLD destination also returned200/self-canonical. No live enquiry POST, email or synthetic event was sent.

Primary documentation checked16Oct2026:

- https://developers.google.com/search/docs/crawling-indexing/links-crawlable — relevant descriptive native anchors and surrounding context, not an ideal link count. Fresh context takes precedence over a stale candidate list.
- https://developers.google.com/search/docs/appearance/ai-features — ordinary technical eligibility, useful text and internal discovery remain relevant to Google AI features; no special AI schema/file requirement or guaranteed inclusion.
- https://support.google.com/business/answer/7091?hl=en — accurate local facts; no profile edit or hourly recheck undertaken here. Existing daily checkpoint retained.

The elective SEO playbook shaped existing-page patient navigation, relevance checks, explicit evidence and reversible publication. These sources do not establish a ranking gain from this batch.

## Independent discovery and next queue

The follow-up men/OT source audit was a separate READY investigation after completing the original batch, and produced seven additional implemented link repairs above. No duplicate symptom article or diagram is warranted by these already existing destinations.

Men3085 also attributes a blanket20–30% post-breast-cancer-surgery estimate to the University of Michigan without an identifiable study citation in that paragraph. This is an evidence gap, not proof the number is false. Clinical text was NOT rewritten or endorsed. HELD interview/evidence prompt: identify the actual study, treatment and lymph-node procedure, follow-up duration and population; explain individual risk rather than applying one rate to all operations or treating sex alone as the cause. Supply original clinician wording before material medical changes. This is a candidate question, not measured search demand.

| Priority | URL/gap | Status, source and next action | Next eligible |
| --- | --- | --- | --- |
| 1 | Pregnancy1243 safety/triage | HELD original clinician/local triage evidence; issue6204059809. No treatment-protocol rewrite or changed review date. | On evidence receipt |
| 2 | Men3085 study/risk qualification | HELD identifiable primary evidence and clinician interpretation above; existing August stamp does not approve new wording. | On evidence receipt |
| 3 | Fresh unaudited cosmetic/reconstructive question | READY investigate actual source/competitor context, avoiding completed figures, comparisons and links. New rib protocols/technique availability remain HELD. | Next independent session |
| 4 | Further WordPress content-context candidates | Six original href candidates and OT provider clause CLOSED. Retain scarce allowance for recovery; no further WP calls this batch. Next concrete audit should rotate to another patient question, not repeat these14 edits. | Ordinary capacity check>=16Oct19:00SGT; eligibility is not a promised reset |
| 5 | Skin3686/sports3016/nutrition/workplace/family/checkups/older-adult claims; privacy/operator facts; pagination/debulking technical holds | Prior evidence/approval/safe-save constraints retained; no silent expansion from link approval. | Appropriate evidence/access |

GSC/GA4 payment_required confirmed16Oct00:05, next17Oct or known restoration/authorised export; no fresh ranks, enquiries or AI-referral results claimed. Eyebag/profile inspection time-eligible but same access blocker. GBP next>=17Oct10:07:20SGT; existing rapid-recovery post already LIVE, not recreated. Native fixed-prompt AI-platform responses unavailable; user-observed recommendations ONLY lymphoedema, not cosmetic/reconstructive. LCP attribution remains conditional on usable page-specific trace; next quota checkpoint17Oct, not hourly repetition.

Final assessment17Oct must distinguish GSC averages<=10 from verified live rank, AI referrals from actual citations, and clicks/events from qualified enquiries. These repairs establish publication and navigational relevance, not outcome uplift.

## Repository validation and release

Application source/dependencies unchanged. Production build47routes and31mocked tests pass; credential terminology68files, five contrast cases, LLM source39bullets26URLs,789fragment links41pages,42navigationHTML and12comparison tables pass. TypeScript lint, FAQ parity30routes, sitemap/date parity and diff check pass. No live provider/test-enquiry call.

Exact-head READY preview and GitHub success, fresh main/mergeability/local-remote tree guards, expected-head merge, exact-main production identity and publication completion are recorded in issue7. Vercel validates the unchanged repository release, not the WordPress saves; the latter have separate authenticated/public proof above. No protected-preview bypass or share-link generation.
