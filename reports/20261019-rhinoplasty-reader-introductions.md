# Rhinoplasty reader introductions —19October2026

## Scope and observed evidence

Base main `fdb7facd02c429e1a545a25180afad5905e05c24`; latest issue7 checkpoint6256894912 and current reports read. Separate draftPR252 remains unmerged and untouched. This is an independent Git-backed editorial batch, not a WordPress quota workaround.

Ordinary live reads19October returned200, self-canonical URLs and one H1 for:
- https://www.drjeremysun.com/asian-rhinoplasty-singapore
- https://www.drjeremysun.com/rib-rhinoplasty-singapore

Both rendered the search-phrase lists found in their `who-this-is-for` opening paragraphs. These lists talk about what people search for rather than helping them understand the page. They repeat the already-present titles, leads and explanation of procedure choices. This is an observed prose/readability concern, not a diagnosed Google penalty.

## Exact editorial change

Only two paragraph strings in `app/procedureArticles.ts` change:

| Guide | Replacement opening paragraph |
|---|---|
| Asian rhinoplasty | This guide is for patients who want to understand how the nose is assessed before deciding whether surgery is appropriate. |
| Rib rhinoplasty | This guide explains why different graft or implant materials may be discussed during rhinoplasty planning. |

The first keeps the existing patient-purpose sentence with a plain guide label; the second retains the purpose of the old paragraph without its search-synonym list. Graft and implant choices are already explained in the same approved guide. No new clinical advice or preferred material is introduced.

Everything else is byte-for-byte unchanged in this source: clinical assessment, suitability, risks, recovery, revision limitations, alternatives, donor-site explanation, FAQs, illustrations, headings, fragment IDs, internal/external links, quotation guidance and metadata. The previous source is preserved in the base commit, blob `3f74cee681ca2156844ced4eacafd49202ce8810`.

Clinical review dates are NOT advanced. Existing modification/schema/sitemap dates remain13October: this small editorial shortening does not represent a new clinical review or justify a freshness signal. No URLs, title/description keywords, tracking, form behaviour or contact details change.

## Question-discovery disposition

Actual current Singapore competitor page inspected19October:
https://www.drterencegoh.com/revision-rhinoplasty-singapore-correcting-previous-nose-surgery/

Its revision FAQs explicitly address timing after earlier surgery, pain and breathing concerns. Existing own Asian/rib guides already discuss swelling over months, revision complexity, airway assessment, available graft material and separate donor-site recovery. Those topics are CLOSED as already covered; no duplicate supporting article proposed.

Specific revision timing is a distinct candidate but HELD for clinician input, not borrowed from a competitor. Suggested original explanation for the existing revision section: “How do you distinguish the timing of an assessment from the timing of another operation after rhinoplasty? What findings change that discussion, and when should someone seek earlier medical assessment rather than simply wait?” This is an interview prompt, not clinical advice or established query demand. Do not publish a universal waiting interval, medication instruction, complication rate, outcome claim or first-person experience from competitor material. No new article is needed unless original clinician input establishes a genuinely distinct useful purpose.

## Validation and release gates

- Exact two-string unique guards and reversal PASS: replacing only those two strings reproduces the complete base source byte-for-byte.
- TypeScript (`npm run lint`) PASS.
- Full production build PASS:47 generated pages;46 unit tests pass, including mocked contact/tracking/navigation/motion tests. No actual enquiry or email sent.
- Build audits PASS: credentials68 files; known light-label/diagram contrast checks; enquiry focus; LLM source39 bullets/26 site URLs/no missing routes;789 internal fragments across41 static pages; navigation42 HTML files; comparison-table semantics; full-size diagram links; sitemap/schema/ProfilePage date checks.
- Full FAQ parity PASS, including10 Asian-rhinoplasty and6 rib-rhinoplasty questions.
- `git diff --check` PASS. Only source plus this report belong to the batch.

Publication requires remote/local tree equality, fresh main and expected-head/mergeability checks, successful intended-project deployment and ordinary accessible live HTML proving both replacement paragraphs and removal of their old lists. Do not bypass protected previews. Live proof/merge IDs belong in issue7 after release; this report records tested candidate content, not a pre-emptive publication claim.

Rollback: revert only the isolated merge commit or restore the two old paragraph strings after checking for concurrent edits. There is no database/WordPress mutation or migration to reverse.

## Guidance, limits and queue

Google primary guidance reopened19October:
https://developers.google.com/search/docs/fundamentals/creating-helpful-content
It prioritises reader benefit and cautions against date changes merely to appear fresh. This supports concise reader-purpose copy; it does not establish that removing a sentence causes ranking gains. The elective-seo-playbook guided improvement of existing useful pages rather than a new page for every question.

READY: release this validated two-paragraph batch after normal guards. Further face/neck opening prose is an investigation candidate, not an authorised blanket rewrite or new clinical content.

WAITING: PR252 ordinary WP capacity probe>=19Oct10:00SGT plus scoped-link-versus-layout decision and fresh3901 guard/backup; DrGSC>=15:01; GA4acquisition>=16:20; LymphGSC>=17:30 (4052/4060/hub exact-query/page overlap); source/events/hostname>=20:30; GBP>=22:05. Profile validation already Started18October, no repeated ValidateFix. No early analytics/GBP/quota probes this session.

HELD: revision-timing clinician explanation above, survivorship draft clinician/source review and missing-main supported wrapper solution. Outreach restrictions unchanged. No native AI response sampled or new AI mention established. No ranking, qualified enquiry or citation gain claimed.
