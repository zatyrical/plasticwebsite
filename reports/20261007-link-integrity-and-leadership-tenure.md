# Rendered-link integrity and leadership-tenure repair — 7 October 2026

## Scope

This batch checked the rendered internal-link graph after the surgeon-guide consolidation, then corrected a stale leadership-tenure presentation on the homepage and in `llms.txt`.

## Rendered-link audit

- Built the current production source at main commit `763d7cd44ec953cc2c7cefcc84e206f1f5e97582`.
- Audited 1,457 rendered internal link instances across the generated HTML.
- Found no missing internal page route.
- Found no internal fragment pointing to a missing target ID.
- Found no rendered link to the retired `/top-plastic-surgeon-singapore` URL.
- The apparent source-scan misses were image/static asset paths, not broken navigation.

No internal-link change was made because the tested graph was intact.

## Observed factual inconsistency

The homepage credential tile and `llms.txt` described “Head of Service, Plastic Surgery, Changi General Hospital” without a tenure, which could be read as a current role. The approved credential record is Head of Service from 2025 to 2026.

Current first-party checks on 7 October 2026:

- Changi General Hospital's doctor listing identifies Dr Jeremy Sun as Consultant and Director of the Plastic, Reconstructive and Aesthetic Surgery Service and Director of the Lymphoedema Service. It does not list Head of Service.
- The Academy of Medicine, Singapore lists Dr Jeremy Sun as Chairman of the Chapter of Plastic, Reconstructive and Aesthetic Surgeons for the 2025–2027 board term.

Sources:

- https://www.cgh.com.sg/doctor/plastic-surgery/sun-mingfa-jeremy
- https://www.ams.edu.sg/colleges/CSS/chapter-of-plastic-reconstructive-aesthetic-surgeons

## Implemented repair

- Homepage leadership tile now states `Head of Service` with `Plastic Surgery, 2025–2026`.
- `llms.txt` now records the same 2025–2026 tenure instead of leaving the role undated.
- Homepage metadata and sitemap modification date were updated to 7 October 2026.
- Current Senior Consultant, CGH affiliation, service-director and Chapter Chairman wording was otherwise preserved.

## Safeguards

- No clinical claim, procedure copy, outcome, price, form, tracking, canonical or URL changed.
- No unsupported current title was introduced.
- The historical leadership role remains visible, but is no longer presented as timeless/current.
- This factual correction does not establish a ranking, enquiry or AI-citation improvement.

## Rollback

Revert the pull-request merge commit. This restores the previous homepage tile, `llms.txt` wording and sitemap date.
