# Diagnosis-report table header semantics — 22 October 2026

## Observed gap and scope

Source: https://lymphedasia.com/lymphedema-diagnosis-report-explained/ (post4291).

Fresh authenticated source and ordinary public HTML showed one genuine five-column comparison table. Five column headers were th, but six feature labels in the first body column were ordinary td cells. This makes the row-label relationship unavailable as a table-header association. No body images were present, so no image edit was justified.

Changed only the six first-column labels to th scope="row" and the five existing column headers to scope="col". All cell text and all surrounding content are byte-identical. This is a structural accessibility repair, not a medical update or a full accessibility certification.

## Evidence and supported save

- Primary W3C guidance read22October: https://www.w3.org/WAI/tutorials/tables/ . Row and column headers provide context to assistive technology.
- Loaded WPVibe Gutenberg, table block schema and edit-content guidance before mutation.
- Read actual installed WordPress6.9.10 table schema at https://lymphedasia.com/wp-includes/blocks/table/block.json (ordinary200). Both head/body cell schemas select td,th and explicitly parse tag and scope. No guessed custom block attribute, plugin, CSS workaround or feature activation.
- Authenticated site_info confirmed plugin1.20.1 content_edit feature and read access. Usage check showed50 calls remaining, allowing verification and recovery.
- A current full raw backup was archived BEFORE mutation at commit63c4108f1c92c4a707e95aa0c7f92eafab218fde on seo/diagnosis-table-headers-20261022. Fresh read immediately before write matched original raw and modified time.
- content/search confirmed one table. Replacement strings were derived from complete fresh raw source, not extended from the truncated search preview or rendered HTML.
- One supported content/edit exact unique replacement reported edited/replaced1; no validation errors returned.

## Validation

- Fresh full raw readback equals the expected whole post exactly. Only the table tag/scope changes differ. Removing them restores the original full raw source.
- All35 table-cell contents preserved; seven rows retain five cells each, including header.
- All unrelated metadata fields compare equal except expected WordPress modified timestamps and revision links. Modified moved from2026-10-12T21:08:05 to2026-10-22T13:10:42 UTC; predecessor revision5551, total revisions8.
- Published status, URL, title, author, featured image, excerpt, slug, categories/tags, SEO metadata and August2026 clinical-review text preserved.
- Ordinary public GET200, correct self-canonical, oneH1, one table, six scope=row headers, five scope=col headers and seven rows verified.
- No application code changed. A Next.js build is not applicable to this WordPress content/report-only batch; no implementation-mirroring tests added.
- No tracking changes, real enquiry, email, analytics reprobe or protected preview.

## Clinical boundary

Preserve the13October hold on L-Dex threshold, bioimpedance explanation, stage-specific responses/candidacy, progression triggers and comparison-table clinical wording. This repair does not validate those claims. No treatment protocol, clinical fact or new review date was introduced. PR257 exact lymphoscintigraphy draft remains awaiting clinician review.

## Reconciliation and rollback

Read issue7 through6340475714, current main a810e26acdb4e20e70355155044725390b325b3a, latest PR285 report and7/13October diagnosis reports before selection. IN PROGRESS6341487602 reserves only this table. Independent held PR252/257 do not overlap. Older local published modifications preserved.

Backups:
- reports/backups/20261022-diagnosis-table-post4291-before.json
- reports/backups/20261022-diagnosis-table-post4291-after.json

Rollback: fresh read and exact-match the current modified table, then reverse only its six row-header tags and five column scopes using supported content/edit. Reconcile any later table/content change first; never replay an old whole post. Git report revert does not reverse WordPress. Before backup and native revision retain recovery evidence.

## Queue

COMPLETE: this specific table semantic gap. Reopen for observed fault.
READY investigation: next distinct cosmetic-cluster question/reader defect, using current source and completed-work ledger before selecting work.
WAITING clinical: diagnosis-report claims above; exact clinician-approved replacement required, not a general publishing block.
WAITING measurement: direct GSC/GA4 signed out and Wizard payment_required22October; next ordinary>=23October18:00SGT or known restoration/export. Latest matched outcomes21October12:02,12–18October versus5–11October.
WAITING GBP: next>=23October17:59SGT or actual observed issue.
WAITING routine eyebag/profile crawl: >=24October15:05SGT absent fault.
Other supported-editor, original clinician and message-specific outreach holds unchanged. No ranking, qualified-enquiry, earned-link or native-AI-citation gain inferred. No-implementation count0 after live verification.
