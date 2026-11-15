# Preserve multiline enquiry endings at the message limit

16 November 2026. Base08279bf0d62db8affd189b319793fc4bfb28bfd5; reservation6901355381.

The form allows2000 characters, counting textarea newlines as one character. Native form encoding can represent these as CRLF pairs. The contact API previously trimmed/sliced the raw message before normalising line endings, so a legitimate multiline message at the visible limit could lose its ending. This was reproduced against the actual API handler with the provider fully mocked; no real enquiry, email or analytics event was created. This is a bounded code-path defect, not evidence of an actual patient's lost message or a conversion count.

Normalise CRLF and lone CR to LF before applying the existing message limit. Keep the2000-character limit, other field limits, anti-abuse/challenge checks, provider deadline, fixed outcome redirects, tracking and clinical copy unchanged. The regression checks the entire delivered HTML message for JSON, CRLF URL-encoded and multipart input at the textarea limit. It failed before the fix.

Current primary HTML Living Standard inspected16Nov2026: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#limiting-user-input-length:-the-maxlength-attribute — textarea length checks normalise newlines to one character. This does not establish actual browser/device or live delivery behaviour. Publication and appropriate build/check results are recorded in issue7; source tests are not live-enquiry proof.

Rollback: revert only this isolated API/test/report change against freshly fetched main; preserve later changes. Original route/test bytes are recoverable at the base above. No clinical-review or content dates changed, and this operational repair is not the weekly substantial article or a measured enquiry improvement.

Verification: the new at-limit multiline regression failed on the base handler, then passed after the normalisation. The full normal production build and all configured audits/tests passed (70 tests, zero failures;47 static routes). TypeScript compilation and git diff whitespace checks passed. The provider stayed mocked for all functional tests. Existing open PRs401/397/381/355/257/252 are independent of this API/test/report scope; no preview-auth, local browser or protected-origin workaround was attempted.
