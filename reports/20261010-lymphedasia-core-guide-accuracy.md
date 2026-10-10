# Lymphedasia core guide: accuracy and advertising-language repair

Date: 10 October 2026

## Observed gap

`https://lymphedasia.com/what-is-lymphedema/` is a clinically reviewed core patient guide, but the live copy still contained several promotional, deterministic or patient-outcome phrases. Examples included “Singapore’s leading”, “entirely preventable”, “gold-standard”, “genuine long-term reduction”, “life-changing”, a patient-like outcome statement, and urgency-led calls to action. The two in-article illustrations also had empty or generic alternative text.

The repair is intentionally narrow: preserve the useful structure and reviewed clinical material, remove wording that overstates certainty or resembles subjective praise/testimonial content, and improve accessibility. It does not add new clinical claims, rankings, credentials, prices or outcomes.

Primary policy references checked on 10 October 2026:

- [Singapore Medical Council Ethical Code and Ethical Guidelines](https://www.smc.gov.sg/for-professionals/regulations-guidelines-circulars/ethical-code-and-ethical-guidelines-and-handbook-on-medical-ethics/)
- [SMC advisory on medical practitioners’ participation in SEO platforms](https://www.smc.gov.sg/publications-and-newsroom/announcements/advisory--medical-practitioners--participation-in-online-search-engine-optimisation-platforms/)
- [Healthcare Services Act summary of requirements](https://www.hcsa.gov.sg/about-us/2-summary-of-requirements/)

## Completed live change

The first supported WordPress edit batch was published to post `4218` at `2026-10-10T13:04:32+00:00`:

- replaced the opening promise and urgency language with a neutral explanation of the guide and an individual-assessment caveat;
- removed the “Singapore’s leading” claim from the first consultation prompt and linked it to the existing specialist consultation page;
- changed absolute descriptions of pain, short-lived swelling and irreversible fibrosis to cautious clinical language;
- replaced the anecdotal Dr Sun quote and “entirely preventable” statement with a neutral post-cancer clinical-context note;
- clarified that swelling needs assessment and other causes should be excluded;
- added descriptive alternative text to the first in-article illustration.

No enquiry or test submission was made.

## Checkpoint and remaining patch

The second editor call returned without a reliable receipt. A fresh public fetch showed that none of its proposed replacements had reached the live page, while the first batch was live. The WordPress connector then reached its rolling fair-use limit and explicitly blocked further reads and writes until approximately `2026-10-10T16:10:00+00:00` (`2026-10-11 00:10` Singapore time). The account’s banked reset was not used without explicit authorisation.

After the connector becomes available, reconcile the editor source before writing and replace only still-present phrases in these remaining groups:

1. deterministic stage table and “reversible” labels;
2. “gold-standard” imaging and blanket referral urgency;
3. “very effectively controlled”, “genuine long-term reduction”, “most effective”, “regenerate” and “life-changing” treatment wording;
4. the patient-like outcome sentence and “most costly mistakes” wording;
5. the bottom urgency-led consultation box and deterministic key takeaways;
6. the second illustration’s generic alternative text.

Do not retry the uncertain second write blindly. First inspect post `4218` with `context=edit`, match each old/new phrase, then run only the missing exact match-once edits.

## Rollback

- Exact pre-edit WordPress source and metadata: `reports/backups/20261010-lymphedasia-what-is-post4218.json`.
- WordPress post revisions are also retained by the supported content editor.

## Live validation at this checkpoint

- URL returned a complete HTML document.
- One H1.
- One self-referencing canonical: `https://lymphedasia.com/what-is-lymphedema/`.
- No `noindex` token.
- The new opening, clinical-context note, first consultation link and first descriptive image alt were present once.
- The untouched stage/treatment phrases proved the uncertain second batch had not published.

## Waiting gates and next action

- Resume this same branch and page after `2026-10-11 00:10` Singapore time; finish, validate and publish this coherent batch before opening a PR.
- GBP: next eligible check `2026-10-11 07:06` Singapore time.
- GSC/GA4: next eligible check `2026-10-11 09:08` Singapore time.
- Overseas crawl: next eligible check `2026-10-12 19:00` Singapore time.
- Lower-eyelid and surgeon-profile crawl/index: next eligible check `2026-10-13 09:00` Singapore time.

This checkpoint makes no ranking, enquiry or AI-citation claim.
