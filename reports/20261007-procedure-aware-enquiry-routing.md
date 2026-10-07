# Procedure-aware enquiry routing — 7 October 2026

## Scope

This batch audited the consultation form defaults on every DrJeremySun.com page. The form already sends `generate_lead` only after the enquiry API confirms success, and it records the selected enquiry type plus page location. No duplicate analytics tag or test enquiry was needed.

## Observed gap

The shared form contained five valid categories, but its typed default supported only three. Several standalone procedure pages therefore showed the generic `Consultation enquiry` option even when the page intent was unambiguous.

That generic default was also used in the clinic email subject and the successful `generate_lead.enquiry_type` parameter. This made first-party enquiry classification less useful without affecting delivery.

## Implemented routing

| Page cohort | Default category |
|---|---|
| Lymphoedema surgery, LVA surgery, choosing a lymphoedema surgeon, and the Japan fellowship journey | `Lymphedema / LVA surgery` |
| Asian eyelid surgery, breast implant illness evidence, and postoperative liposuction compression/foam/massage | `Aesthetic surgery` |
| Breast reconstruction | `Reconstructive surgery` |
| Homepage, surgeon profile and training/fellowship pages | Remain `Consultation enquiry` |

The user can change the selected category before submitting.

## Safeguards

- No enquiry was submitted.
- No recipient, email-delivery setting, contact detail, form field, consent note or API behaviour changed.
- No clinical wording, outcome, price, title, canonical, structured data or page URL changed.
- No new GA tag or duplicate `generate_lead` event was added.
- The existing success-only event rule remains unchanged.

## Expected mechanism and measurement

The change should make genuine incoming enquiries easier to triage and make the existing successful-lead event's `enquiry_type` parameter more informative. It does not create enquiries and does not establish an organic-ranking, lead-quality or conversion-rate improvement.

Future measurement should distinguish event counts from qualified enquiries and booked consultations. The next comparable analytics checkpoint remains after 8 October 2026 at 09:08 SGT.

## Rollback

Revert the pull-request merge commit. This restores the generic default on the affected standalone pages without changing form delivery or historical analytics.
