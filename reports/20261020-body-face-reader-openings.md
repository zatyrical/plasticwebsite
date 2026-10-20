# Body-contouring and face/neck reader-purpose openings — 20 October 2026

## Observed and implemented editorial scope

Ordinary public GET20October confirmed HTTP200/self-canonical/oneH1 and the old search-narration paragraph on:
- https://www.drjeremysun.com/body-contouring-liposuction-singapore
- https://www.drjeremysun.com/face-neck-lift-singapore

In EACH existing `who-this-is-for` section, remove only the first sentence listing what people search for. Retain the existing patient-purpose sentence verbatim:

| Guide | Retained opening |
| --- | --- |
| Body contouring / liposuction | This page is intended for patients who want an assessment-led discussion rather than a package based only on the number of areas treated. |
| Face / neck lift | This page is intended for patients who want to understand whether the visible concern is skin laxity, deeper tissue descent, jowls, neck bands, volume loss or skin quality before choosing treatment. |

These are modest readability edits, not a diagnosed ranking penalty, removal of search demand, or a change of medical advice. Body paragraph51→23words and face paragraph52→31; the counts describe the change, not a target word count. All actual assessment, alternatives, device/technique limitations, recovery, risks and consultation content remains in the detailed existing sections.

Only TWO existing string values in `app/procedureArticles.ts` change. All other source characters, including every other article and PR262's breast introduction, remain identical. No new advice, credentials, fees, clinical data, first-person story or product preference. No title/lead/description/keyword/canonical, image, link, fragment, FAQ, form, tracking, CSS or component change. Both guides'16October modification/schema/sitemap dates and6September clinical-review dates are preserved; this small shortening is not a fresh clinical review.

## Reconciliation and primary guidance

Fetched main `b15131570c415f5259922bff7626992280848ad2`, issue7 through6281009245, latest PR262 report,17October resumed/final assessment and6234803759 before selecting. DraftPR252/257 are separate and untouched. The body opening was an explicit READY investigation, and the face opening was a prior independently queued candidate, not a blanket rewrite.

Reviewed19October rhinoplasty-reader introduction precedent and current actual body/face fields before deciding this exact scope. GLP1/preparation/weight-stability protocols were found ALREADY held in6258769886; not falsely relabelled a new discovery or imported from other practices. Wider face technique/scar/personal timing questions likewise remain clinical holds.

Google primary guidance reopened20October:
https://developers.google.com/search/docs/fundamentals/creating-helpful-content .
It supports content written for readers and cautions against date changes merely to appear fresh; it does not establish that removing a sentence causes a ranking or enquiry gain. Elective main, interview and execution references guided direct patient-purpose copy and preservation of medical qualifications, not a new article per keyword. Ubersuggest foundational rules were inspected; no account-data call/credit spend/volume estimate or paid tool used.

## Backup, testing and release

Isolated branch/worktree `seo/body-face-reader-openings-20261020`; issue7 checkpoint6281556813 owns ONLY these two paragraph values.
Base source blob `7ef2a47cf52ac9054d7689da7f60fcc507a29f3f`; edited blob `dd367722e5af3f611eae08f312544277e3e660ad`.
Exact old/new strings, field, baseline HTTP/canonical and rollback archived BEFORE edit at `reports/backups/20261020-body-face-reader-openings-before-and-plan.json`, remote commit `d186528ed1146c274ec6da10745acf83ac6e44c1`.

Tests completed before release:
- Each old/new paragraph has an exact unique guard. Applying only those two substitutions to base yields the entire current source; inverse restores base byte-for-byte. Each new string is an exact suffix of its original, preserving its existing patient-purpose sentence.
- Normal production build PASS with46mocked tests and configured credential, label/diagram contrast, enquiry-focus, article-link cue, LLM, internal-fragment, navigation, comparison-table, full-size-image and sitemap/schema/ProfilePage date guards. No real enquiry/provider email/synthetic analytics.
- Separate TypeScript and FAQ parity PASS; git diff --check PASS.
- Local generated HTML matches ordinary live BEFORE after precisely the two intended paragraph replacements. Body retains53paragraphs/28headings/72anchor-attribute sets/3images/1form; face51paragraphs/28headings/75anchor-attribute sets/4images/1form. All remaining paragraph texts, headings, anchor attributes, canonical and JSON-LD exact. Image attributes exact after stripping ONLY Vercel's deployment-id cache parameter. No browser pixel/keyboard/full-WCAG certification claimed.
- Existing installed dependencies copied into this isolated checkout, no dependency/lock/config change or install. No WP mutation or quota probe.

Before merge require exact local/remote tree, current unchanged main, fresh mergeability and expected-head guard, exact-head intended-project READY status. Protected preview bypass/share links remain prohibited. Final merge/deployment IDs and ordinary LIVE parity are recorded in issue7 after actual verification; no pre-emptive publication claim in this report.

## Rollback

Read current source, confirm each new string still occurs uniquely in its original article/field, restore ONLY that archived old paragraph and preserve unrelated changes. Rebuild/test/guarded release and ordinary live check. Revert the isolated merge only after checking subsequent overlap. No WordPress/database rollback.

## READY / WAITING queue

| State / URL | Observed source / approved action | Blocker / next eligible check |
| --- | --- | --- |
| READY release /two guides above | Actual live search-narration + existing approved purpose sentences; retain only the latter | Gates above; final publication proof in issue7 |
| READY independent investigation /https://lymphedasia.com/lymphedema-treatment/ | Next rotation to lymphoedema assessment/conservative-treatment journey, using current maintained material | Read prior completed report/clinical holds before any fresh scoped audit; no duplicate generic link panel or unapproved advice implied |
| WAITING /existing body/facial clinical subquestions | Prior personal GLP1, weight/nutrition thresholds, technique/scar/revision timing holds | Original clinician explanation, not new competitor-derived protocol |
| WAITING /PR257 scan article | Actual19Oct clinician pointers incorporated | Exact final prose approval, no automatic publication/universal ICG-specificity superiority/BMI cutoff |
| WAITING /Lymphedasia PR252 link cues | Native style owner/rendering gate;PR260main/PR261page repairs already complete | Supported usable editor path + fresh current guard; no stale3901 replay/CSS/snippet workaround |
| WAITING /both GSC+GA4 | Last actual matched18Oct;20Oct08:00:02 Browser Unknown tool is transport, not observed Google sign-out | Next ordinary probe20Oct>=12:00SGT/restoration;Wizard>=16:40/restoration; not re-probed now |
| WAITING /GBP both profiles | Last19Oct22:05 actual facts and5totalLIVE |20Oct>=22:06SGT/new notice; no duplicate posts |
| WAITING /routine eyelid/profile/tummy/UTM |72h gates; no new observed fault |21Oct>=15:01SGT;UTM>=17:30 |
| WAITING /screening441video | Original thumbnail/date/video facts + supported RankMath owner needed | No unavailable-host alternate-client workaround |
| WAITING /five native AI prompts | Native response surfaces unavailable | Web/referrals not native mentions/citations |

No verified new rank, qualified enquiry, native AI citation or earned backlink. SCS pitch remains sent ONCE/no follow-up; HealthXchange excluded; extra ISAPS Dr link request closed/baseline specialist link preserved; owned LinkedIn not earned. No new automation, payment, outreach or tracking change. Independent ready work remains authorised.
