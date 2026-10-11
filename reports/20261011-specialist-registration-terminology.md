# Specialist-registration terminology consistency — 11 October 2026

## Observed gap

After the HMDP fellowship correction, a separate sitewide authority audit found four clinician-title phrases that still used `MOH specialist` or `Singapore Ministry of Health-accredited plastic surgeon` language:

1. Homepage credential strip
2. Homepage about card
3. Breast-augmentation surgeon-choice section
4. `/llms.txt`

These phrases were distinct from the corrected fellowship-program wording. They blurred the official sequence already documented in `reports/20261011-specialist-register-verification-path.md`: the Specialists Accreditation Board describes accreditation followed by registration in the Singapore Medical Council Register of Specialists before a doctor may practise as a specialist.

## Implemented

- Replaced the homepage credential label with `Specialist registration — Plastic surgery, Singapore`.
- Replaced the two `Ministry of Health-accredited plastic surgeon` descriptions with the already established factual wording `Senior Consultant plastic surgeon in Singapore`.
- Replaced `/llms.txt`'s `MOH specialist` label with `Senior Consultant Plastic Surgeon in Singapore` and added the official Ministry of Health Professional Registration System specialist-search URL.

No new credential, ranking, superiority, clinical, outcome, price, form or tracking claim was added. The AI-readable source gives users and answer systems the official verification route without asserting what a particular search result will show.

## Validation and rollback

- Repo-wide search confirms the ambiguous clinician-title phrases no longer remain under `app/`.
- TypeScript, lint and the 45-route production build passed.
- FAQ structured-data parity passed across all 30 audited routes.
- Rendered homepage and breast-augmentation checks retain one H1, self-canonical metadata, forms and existing Paragon contact details.
- The rendered `/llms.txt` response contains the Senior Consultant wording and official specialist-search URL, with no ambiguous clinician-title phrase.
- Rollback: revert the isolated merge commit or pull request.

## Measurement boundary

This is a factual entity-consistency and verification-path improvement. It is not evidence of a ranking, enquiry, referral or AI-citation change.
