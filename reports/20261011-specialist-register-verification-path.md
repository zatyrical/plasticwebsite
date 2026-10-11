# Official specialist-register verification path — 11 October 2026

## Observed gap

The primary surgeon profile told patients to check specialist accreditation, but it did not provide a direct route to the official Singapore register. The page already linked institutional profiles, training and publications, so this was a narrow verification-path gap rather than a need for more biography copy.

## Current official source

The Specialists Accreditation Board e-Services page, last updated 10 March 2026 and checked 11 October 2026, links to the Ministry of Health Professional Registration System as “Search for a medical specialist”:

- https://sab.healthprofessionals.gov.sg/e-services/
- https://prs.moh.gov.sg/prs/internet/profSearch/main.action?hpe=SMC

The SAB also explains that, after accreditation, a doctor must be registered in the Singapore Medical Council Register of Specialists before practising as a specialist:

- https://sab.healthprofessionals.gov.sg/specialist-training/becoming-a-specialist/

## Implemented

- Replaced the unlinked “check MOH specialist accreditation” instruction with a direct link to the official specialist-search service.
- Told readers to check current specialist registration and then review plastic surgery training background.
- Updated only the technical modification date and sitemap date to 11 October 2026; the clinical review date remains unchanged.

No credential, ranking, superiority, clinical, outcome, price, form or tracking claim was added. The change does not assert what a particular search result will show; it gives patients the regulator-backed route to verify for themselves.

## Validation and rollback

- TypeScript and the 45-route production build passed.
- The rendered page contains one self-canonical, one H1, the official PRS URL, unchanged 6 September 2026 clinical review date, and `dateModified=2026-10-11`.
- The rendered sitemap reports 11 October 2026 for the route.
- A rendered internal-fragment audit checked 719 fragment links across 41 generated pages and found no missing routes or target IDs.
- Rollback: revert the isolated merge commit.

## Discovery disposition

- Breast-implant-illness route: closed without change because route-specific social metadata and contents/anchor navigation were already repaired on 9–10 October.
- This is a patient-verification and authority improvement, not evidence of ranking, enquiry, referral or AI-citation change.
