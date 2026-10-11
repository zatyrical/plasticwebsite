# Credential wording integrity for active drafts — 12 October 2026

## Observed fault

The public Dr Jeremy Sun pages had already replaced two ambiguous credential labels:

- `MOH-accredited` fellowship wording became **dedicated HMDP fellowship training in comprehensive multidisciplinary lymphoedema management and lymphatic surgery in Tokyo**.
- `MOH specialist` / `Ministry of Health-accredited plastic surgeon` became **Specialist registration — Plastic surgery, Singapore** or **Senior Consultant plastic surgeon in Singapore**, depending on the context.

A fresh repository-wide check found four stale `MOH-accredited` references in three active content-draft files. They were not deployed, but retaining them made a future copy-and-paste regression possible.

## Implemented

- Replaced the four stale draft references with the already approved HMDP fellowship wording.
- Added `scripts/audit-credential-terminology.mjs`.
- Added the audit to the production build and as the standalone `audit:credential-terminology` command.
- Limited the guard to deployable application source and active drafts. Historical reports and backups remain unchanged so the correction trail is preserved.

The guard rejects these retired phrases:

1. `MOH-accredited` / `MOH accredited`
2. `MOH specialist`
3. `Ministry of Health-accredited plastic surgeon`, with or without the Singapore prefix

Legitimate references to current MOH documents, licence conditions and the official specialist-search URL are not blocked.

## Validation and scope

- Credential audit: no retired phrases under `app/` or `content/drafts/`.
- Production build: 45 routes, TypeScript passed.
- `/llms.txt` integrity audit: no duplicate bullet and no missing Dr-site route.
- No public page copy, clinical statement, URL, form, tracking, WordPress content or business-profile field changed in this batch.

## Rollback

Revert this isolated repository change. The public site needs no separate rollback because the stale wording was confined to non-rendered drafts.

## Measurement boundary

This prevents a factual-authority regression; it is not evidence of ranking, enquiry, referral or AI-citation change.
