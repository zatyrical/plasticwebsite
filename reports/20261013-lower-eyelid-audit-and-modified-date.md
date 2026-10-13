# Lower-eyelid decision audit and modification-date correction — 13 October 2026

Base main: `99160f102b08322d9966063f4a33094ce9841843`. Branch: `seo/lower-eyelid-modified-date-20261013`.

## Discovery and disposition

The live lower-eyelid guide was compared with current Singapore patient pages from the Singapore Association of Plastic Surgeons and Colin Tham Plastic Surgery. The recurring decisions remain the distinction between a protruding bag, hollow/tear trough and loose skin; internal versus external access; fat removal versus repositioning; recovery; risks; and individual suitability.

The existing Dr Jeremy Sun guide already provides:

- a four-row concern → assessment → implication comparison for protruding bags, grooves, sunken areas and loose skin;
- an intent-specific 1188×1324 educational illustration labelling the eye bag, tear trough groove and lid–cheek junction, with movement arrows and a non-result disclaimer;
- explicit wording that transconjunctival access is inside the lower eyelid, does not itself remove excess skin and does not eliminate retraction risk;
- separate explanations for fat repositioning and selected tear-trough implants;
- recovery, risks, quotation factors, consultation questions and seven FAQs;
- contextual links to the separate Asian-eyelid and face/neck assessment guides; and
- a direct successful-enquiry route.

A second diagram, another comparison table or a new keyword URL would duplicate the existing decision support. The visual/content candidate is therefore **CLOSED — no content change**.

The homepage image-alt scan also found three empty `alt` attributes in the training photo strip. The parent strip is explicitly `aria-hidden="true"`; those images are decorative and the empty alt text is intentional, so no accessibility change was made.

## Observed technical discrepancy and correction

The lower-eyelid guide's loose-skin decision row and contextual pathways were published and documented on 6 October 2026 in `reports/20261006-ultrasound-and-lower-eyelid-paths.md`. The article object had no `modifiedIso`, so `ProcedureArticle` fell back to the 4 October clinical-review date for `dateModified`. The sitemap also hard-coded 4 October for this URL.

This batch adds the truthful `modifiedIso: 2026-10-06` and aligns the sitemap entry to the same date. The clinical-review date remains 4 October because this correction does not claim a new clinician review. No visible medical wording, title, description, route, image, FAQ, form, tracking, price, timeline or outcome claim changed.

## Validation and rollback

Required checks before publication:

- TypeScript and production build;
- sitemap/schema modification-date parity for the lower-eyelid URL;
- FAQ parity and internal-fragment integrity;
- credential terminology, navigation accessibility and `llms.txt` source coverage;
- exact-head Vercel deployment and fresh live schema/sitemap verification after merge.

Rollback is to revert the isolated merge commit. Restoring both dates to 4 October would return the prior state, although it would reintroduce the documented metadata discrepancy.

## Queue

- **CLOSED:** lower-eyelid visual/decision candidate; further additions would duplicate current coverage without clinician input.
- **CLOSED:** rapid-recovery breast augmentation repeat audit; the existing page already separates protocol components from the 24-hour misconception and covers selection, activity, limits, risks and primary-source provenance.
- **READY next:** rotate to the main breast-augmentation guide and inspect whether its implant-dimensions/plane decision support has a genuine visual comprehension gap; close if the existing comparison/photo already answers it.
- **WAITING:** GBP moderation/public propagation after 14 October 08:11 SGT; crawl/index sampling after 16 October 09:00 SGT; GSC/GA4 connector entitlement remains unavailable and should not be retried hourly.

This correction improves machine-readable accuracy. It is not evidence of ranking, enquiry, referral or AI-citation uplift.
