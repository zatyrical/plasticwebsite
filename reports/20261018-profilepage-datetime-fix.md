# ProfilePage dateModified correction — 18 October 2026

User supplied a Search Console alert: invalid datetime value for dateModified in Profile page structured data.

## Confirmed cause and correction

Ordinary live GET of https://www.drjeremysun.com/plastic-surgeon-singapore returned200 and a combined MedicalWebPage/ProfilePage graph node with dateModified2026-10-15. Google's current ProfilePage documentation recommends DateTime for this property, unlike date-only values accepted on other page types.

The profile now uses2026-10-15T20:07:02+08:00. This is the recorded author/committer timestamp of the last profile source edit,a439417aaac062acb1050fad280348972f11efb5, whose date was already maintained as15October. No current-date freshness claim or invented midnight time was used.

A shared profileModifiedIso constant in app/seoIdentity.ts supplies both the profile JSON-LD and its sitemap entry. Clinical lastReviewed remains2026-09-06. Visible content, physician identity, mainEntity and article publication date are unchanged.

## Regression and release checks

Extended the existing rendered sitemap/date audit to detect ProfilePage nodes (including array-valued types) and reject dateCreated/dateModified values that are present without a complete parseable ISO datetime and timezone. Optional absent fields remain optional. Other MedicalWebPage date-only values remain supported.

Before the source correction, the audit reproduced the alert on the existing build: one ProfilePage, dateModified2026-10-15, exit1. After correction, the normal production build passed with one ProfilePage and zero profile-date issues, plus sitemap/date equality. The audit now runs automatically at the end of every production build. Existing mocked interaction/enquiry tests and rendering/accessibility checks passed; no real enquiry or synthetic analytics event was sent.

Base main8efd68d5c09e8f6aeb2a7f4e67ea4c049909c743; clean worktree and latest issue7/PR241 completion reconciled before isolated branch fix/profilepage-datetime-20261018. In-progress checkpoint6247856610. Source/history/source timestamp and live pre-fix value were inspected before changes. No WordPress write or unrelated URL recovery was repeated.

The PR and issue7 release receipt record the fresh base, expected PR head, preview/production status and ordinary live profile/sitemap readback. Google recrawl/validation completion is a separate external state; a successful build/publication is not claimed as a cleared Search Console warning.

Rollback: revert this isolated PR through a new reviewed branch, preserving concurrent edits. This restores the earlier date-only output and removes the new build check; prefer correcting any discovered regression without restoring the reported defect.

Primary source checked18October2026:
https://developers.google.com/search/docs/appearance/structured-data/profile-page
