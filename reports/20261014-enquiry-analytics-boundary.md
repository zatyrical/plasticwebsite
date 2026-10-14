# Enquiry acknowledgement and analytics boundary — 14 October 2026

Base main: e76d82befc461eb0ba1f9c43d6c81c22603608ed. Isolated branch: seo/enquiry-analytics-boundary-20261014.
Read campaign issue7 through PR199 completion/merge and latest consultation report. No open or overlapping PR. WordPress capacity was98/100 with2remaining at19:04SGT; no Elementor write begun and no reset used. Independent repository work continued.

## Observed fault

Current `app/ContactForm.tsx` performed optional `gtag` tracking inside the same try/catch as the contact request. A synchronous analytics exception after `accepted:true`, form reset and the accepted receipt could reach the outer catch and change the patient-facing message to “could not confirm”. This is a source-demonstrated failure path, not evidence that a real visitor encountered it.

The custom lead emitter also used full `window.location.href`, unlike the already sanitised `GaTracker` page-view/click URLs, and sent the selected enquiry category in `enquiry_type`.

The13October honeypot fix is already complete: API returns `accepted:false` for a silent honeypot and `accepted:true` only after the email provider accepts the request. Its contract and API source are unchanged. No duplicate event or GA tag was added.

## Implemented scope

- Extracted a non-throwing `trackAcceptedEnquiry` helper. Optional measurement cannot change the accepted enquiry receipt.
- Preserved strict successful HTTP plus `accepted === true` gating; honeypot/missing acknowledgements emit no lead.
- Kept the existing `generate_lead` event and generic method/category. Production-host gate matches the existing GA loader; previews/SSR do not emit.
- Lead-event `page_location` is origin plus pathname, excluding query and fragment.
- Removed selected medical enquiry category from this custom analytics event as data minimisation. The same category remains in the operational request/clinic email for triage; form options/defaults/routing are unchanged.
- Added a mocked regression suite to the production build gate, plus `npm run test:contact-analytics`.

No claim that a category alone is legally prohibited PII, that HIPAA applies to this Singapore practice, or that historical data contained patient identifiers. This is narrow custom-event hardening, not certification of all Google/enhanced-measurement or third-party data processing. No historical data deletion, GA Admin setting, consent change or automatic page-view attribution change.

Primary guidance checked14October:
https://support.google.com/analytics/answer/6366371?hl=en — avoid PII in URLs/parameters and user-entered analytics data. No new legal conclusion or clinical statement.
ElectiveSEO's measurement principle applied: a useful enquiry receipt and trustworthy successful-response tracking matter more than inflated lead counts.

## Verification before release

Eight isolated Node tests pass:
1. One fixed accepted-lead event; no query/fragment/category or form-input parameters.
2. HTTP rejection, honeypot, missing and non-boolean acknowledgement suppression.
3. SSR, absent analytics and preview suppression.
4. Analytics exceptions contained.
5. Actual transpiled ContactForm handler keeps `sent` and accepted receipt when analytics throws.
6. Operational payload retains enquiry category while analytics excludes it and personal fields.
7. Honeypot/missing JSON retains intentionally generic receipt but no lead.
8. Delivery/network failures retain fields and emit no lead.

Every request/analytics dependency in these tests is mocked. No real contact POST, enquiry email, analytics event or secret access. An initial test-harness props omission failed before handler execution; corrected to supply `{}` and reran successfully. This was not a site failure.

TypeScript/lint, Next16.3.4 production build (45routes), credential/LLM-source/internal-fragment/navigation audits, FAQ parity, sitemap-date parity and diff checks pass. Fragment audit767links across39staticpages; navigation audit40HTMLfiles with no reported failure. No clinical article, URL, title/schema/FAQ/date, image, form field or API source change. API and GaTracker stay at their base hashes. No dependency changes.

Exact preview/production SHAs and public bundle/HTML checks are recorded in issue7 after release. Protected preview bypass/share links are not attempted; static/build and ordinary public checks are used. Live delivery is deliberately not tested; email deliverability and new lead quality remain unverified.

## Rollback

Revert this PR's merge after reconciling later changes. This restores the previous custom-event parameters and analytics-exception behaviour; it does not revert the13October accepted-acknowledgement/honeypot fix. No WordPress rollback required.

## Ranked queue / waiting gates

|Priority|URL/item|Evidence / action|Status / blocker / next eligible|
|---|---|---|---|
|1|Shared Dr-site contact form|Analytics exception could overturn accepted receipt; full custom-event href/input category|Implemented and mocked/build verified; release proof in issue7|
|2|https://lymphedasia.com/lymph-node-transfer-and-lymph-vessel-flaps/|Existing Elementor664 assessment/source paths missing; widgets mapped in PR199|READY only with sufficient ordinary capacity for current version/widget instructions, fresh source/backup/guard, supported save and verification; check>=14Oct20:00SGT, not guaranteed reset|
|3|VLNT clinical claims; consultation preparation; tummy-tuck practical milestones; lipedema staging; legacy rewrites|Exact original clinical/clinic input absent|HELD; no invented answer or copied timeline|
|4|GA4/GSC outcomes|Expired entitlement confirmed14Oct|WAITING authorised restored reporting/export;16Oct/final17Oct, no hourly retry|
|5|GBP|Daily authenticated factual check cadence|WAITING>=15Oct09:08SGT|
|6|Eyebag/profile crawl|72hour cadence|WAITING>=16Oct09:00SGT|

Publications-source completeness candidate reconciled with7/10October reports: all8entries already linked; no duplicate authority addition. No ranking, qualified-enquiry or native AI-citation uplift inferred from this technical fix.
