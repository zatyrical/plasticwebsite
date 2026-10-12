# Contact honeypot conversion integrity — 13 October 2026

## Observed fault

The contact API deliberately returns an HTTP 200 response when the hidden `website` honeypot is filled, so automated submissions cannot use the response to learn that they were rejected. The client previously treated every HTTP 200 response as a successful enquiry and emitted GA4 `generate_lead`. As a result, a honeypot-caught bot could be counted as a lead even though the API did not send an email.

This is a measurement-integrity fault. It does not show that historical `generate_lead` rows were spam, and no historical event count is being restated.

## Implemented

- The API now returns `accepted: false` for the silent honeypot response and `accepted: true` only after Resend confirms a successful email request.
- The client keeps the existing generic success experience for any HTTP 200 response, so the honeypot remains non-revealing.
- GA4 `generate_lead` now fires only when the same successful response explicitly reports `accepted: true`.
- Error handling, required fields, enquiry type, page-source capture, recipient configuration and the no-test-enquiry safeguard are unchanged.

## Validation

- TypeScript and production build must pass before publication.
- Static source assertions verify that the honeypot and delivered-email paths return different `accepted` values and that `generate_lead` is guarded by `data?.accepted === true`.
- No live form submission or test email is required or permitted for this change.

## Rollback

Revert this change to restore the prior `{ ok: true }` response contract and HTTP-status-only client tracking. That rollback would also restore the known possibility of counting honeypot responses as leads.

## Measurement note

This change improves the definition of a recorded form lead; it does not prove more enquiries, bookings, rankings or AI mentions. WhatsApp and external-contact click events remain separate actions.
