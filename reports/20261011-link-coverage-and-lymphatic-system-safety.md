# Lymphedasia link-coverage reconciliation and lymphatic-system safety cleanup

Date: 11 October 2026

## Why this batch was chosen

The supplied report screenshot labelled link coverage at 36.99%, said that the majority of posts were not linked enough, and assigned a 0% link-quality score. It did not identify the audited domain, page set, denominator, crawl date, scoring formula or affected URLs. Those percentages were therefore treated as discovery prompts rather than facts.

A fresh authenticated WordPress database read counted published post bodies directly:

| Post type | Published | With absolute Lymphedasia link | With root-relative link | With any anchor |
| --- | ---: | ---: | ---: | ---: |
| Posts | 187 | 175 | 7 | 176 |
| Pages | 32 | 28 | 7 | 30 |

Eleven posts contained neither an absolute same-domain link nor a root-relative link. This is a specific, inspectable cohort; it does not support the screenshot's broad “majority unlinked” description. The counts are presence/absence checks, not a claim that every existing link is useful.

Several zero-link candidates are already held for clinical or provenance review. They were not padded with links. Post 4226, `/lymphatic-system-function-lymphedema/`, was selected because it combined a missing reader path with a more important trust and safety issue.

## Observed post 4226 issues

The fresh 14,345-character Gutenberg source contained:

- no anchor links;
- “immune system would collapse” and “system-wide failure” wording;
- an unattributed first-person quotation presented as Dr Sun's clinical perspective;
- a promise contrasting “reversing damage” with lifelong management;
- deterministic progression and “preserved or restored” language;
- an arbitrary four-week specialist-referral threshold;
- urgency and outcome language already removed from the maintained core guide;
- a public typographical remnant (`passed,d`);
- an unlinked consultation prompt.

The existing August 2026 clinical-review date was not treated as proof of quote provenance or approval of the specific marketing language.

## Published changes

The exact source was backed up before a single Gutenberg-supported read-modify-write:

- replaced deterministic opening language with neutral fluid-balance, immune-function and differential-assessment wording;
- removed the unverified quotation and linked the existing diagnosis guide;
- qualified progression language and removed restoration/outcome promises;
- replaced the fixed four-week threshold with persistent, progressive or unexplained swelling;
- preserved urgent red-flag language without promotional urgency;
- linked the maintained private-assessment pathway twice;
- replaced the promotional CTA and final outcome promise with neutral next-step language;
- preserved the title, URL, publication status, author, featured image and August 2026 clinical-review label.

No new surgical outcome, candidacy, price, credential, metadata, form or tracking claim was added.

## Verification

- WordPress saved post 4226 at `2026-10-11T14:07:26Z`.
- Ordinary public retrieval returned HTTP 200 directly.
- Live output has one H1, one self-canonical URL and no `noindex` token.
- The diagnosis link appears once and the private-consultation destination appears twice in the article body.
- Removed phrases are absent from fresh live HTML.
- The neutral opening, assessment wording and linked next steps are live.
- Gutenberg source retained balanced block markup in the supported save.

## Rollback

Exact pre-edit source: `reports/backups/20261011-lymphatic-system-post4226-before.html`.

Prefer a narrow reverse patch after reconciling the current post revision. WordPress also retained a revision through the supported update. Do not restore the full backup if later edits exist.

## Queue disposition

- COMPLETE: post 4226 safety, provenance and reader-path repair.
- CLOSED: the screenshot's 36.99%, 0% and 3–7-word scores are not actionable without the product's domain, denominator and scoring method; do not reshape anchors to satisfy them.
- HELD: post 4163, post 4283 and other clinically sensitive zero-link candidates remain gated by their recorded evidence/provenance questions.
- READY DISCOVERY: inspect the remaining zero-link cohort individually, prioritising factual safety and patient utility before links.
- WAITING: GSC/GA4 access remains blocked by the expired GSC Wizard entitlement; GBP is next eligible 12 October at or after 07:57 SGT.

This batch does not establish recrawling, ranking, AI citation, traffic or enquiry uplift.
