# Direct Google reporting connector — prepared, not deployed

16 November 2026. This isolated service is a deployment candidate, not an existing server URL or a working OAuth connection. It makes direct Google API requests; there is no Wizard, paid reporting intermediary, tracking change or browser authentication workaround. No Google credentials or analytics exports are committed.

## Exact scope

Only GA4 properties553866170/410145787 and GSC domain properties drjeremysun.com/lymphedasia.com. Aggregate GA4 dimensions exclude user identifiers and landing query strings. The four exposed MCP tools read property configuration, key-event definitions, aggregate GA4 reports and final Singapore Web GSC data. Google uses POST for reporting, but these are read-only API methods. No arbitrary URL/request proxy or settings-write tool exists.

Singapore country is fixed; GA4 Organic Search is the default AND filter. Set organic_only=false explicitly for separate source/medium referral analysis, never mix it into organic results. The caller must preserve the existing stable property-specific nonbrand/procedure-cohort manifest, exact settled comparison periods, canonical variants, source timezone, thresholding and pagination limits. This does not itself prove qualification, attribution or native AI citations. No synthetic analytics or real test enquiries.

## Security and hosting requirements

FastMCP4.2.0 GoogleProvider handles the OAuth proxy, PKCE, client registration, consent, token validation, expiry and refresh. Its Google-token verification returns an upstream token only inside server request context; that token is never returned as tool output. Explicit owner email and Google's verified-email claim are required. Redirects are limited to documented ChatGPT callbacks; downstream consent protections remain enabled. Persistent Redis over verified TLS is wrapped with Fernet encryption for OAuth records. A fixed high-entropy signing key survives restarts. There is no unauthenticated fallback or in-memory production token store.

Deploy to a SEPARATE project, not either patient website's production root. Candidate Vercel root directory: tools/google-reporting-connector. api/index.py exports ASGI and vercel.json forwards routes. This configuration still needs an actual hosting build, callback/discovery checks, real OAuth consent and restart/refresh validation. The public MCP URL is deliberately not invented. No deployment, storage provisioning, spending or permission expansion has been executed. Existing encrypted compatible storage must be identified or separately approved before production; do not silently add a paid service or reuse an unrelated application's database.

## User setup sequence

1. User reports Google Cloud project and Analytics Data/Admin + Search Console APIs enabled. No cloud-project ID has been supplied/verified by this code.
2. Approve the separate hosting target and encrypted persistent storage. Create the project and verify its actual assigned HTTPS origin.
3. In that Google Cloud project configure the OAuth consent app. Use an exact authorised Google email; account must already access the two GA4 and two GSC properties. Add the two read-only scopes plus openid/email for authenticating that owner.
4. Create a Web application OAuth client. Add ONLY the connector's verified HTTPS origin plus /auth/callback as the Google callback. This upstream Google callback is different from ChatGPT's downstream callback. Never guess or copy an unrelated callback.
5. Enter client ID/secret and storage/signing/encryption configuration in the host's secure environment settings, never chat or git. Variable names are in .env.example. Generate signing and Fernet keys in a trusted secret-management interface; do not print them into chat/logs.
6. Deploy and verify public metadata, unauthenticated tools401, callback path, owner-only access and exact four-property reporting. Validate the framework's actual downstream callback against the management page; narrow the allowlist further when possible. Do not disable OAuth, consent or domain restrictions to make a test pass.
7. In ChatGPT Plugins > Add custom MCP server, enter the verified /mcp URL, choose OAuth, install and complete secure Google consent. Check Google consent publishing/test-user status and refresh-token lifetime; Testing must not be assumed to provide indefinite access.
8. Verify a later existing scheduled run can call the installed tool, restart persistence and token refresh. No duplicate task. A successful interactive query alone is not unattended reliability or an SEO outcome.

Required secure variables: REPORTING_BASE_URL, REPORTING_GOOGLE_EMAIL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REPORTING_REDIS_URL, REPORTING_JWT_SIGNING_KEY, REPORTING_STORAGE_KEY.

## Local verification

Install requirements in an isolated Python environment; run `python -m unittest discover -s tests -v` from this directory. Tests mock Google; no actual Google API, Redis, patient, enquiry or email data is used. They cover fixed-property/filter boundaries, separate all-channel mode, unsafe dimensions/pages/limits, sanitized failure/no retries, exact verified owner identity and anonymous MCP rejection/discovery. Live OAuth/Redis/deployment/refresh validation is still required.

Rollback: disable this separate connector deployment and revoke its Google grant; remove it from ChatGPT. Preserve existing websites, reporting baselines and task. Reconcile any actual tokens/stored records before deletion through the storage owner's supported recovery workflow.

Primary documentation inspected16Nov2026:
- https://developers.openai.com/plugins/build/auth
- https://developers.openai.com/api/docs/guides/custom-mcp-server
- https://developers.google.com/analytics/devguides/MCP
- https://developers.google.com/webmaster-tools/v1/how-tos/authorizing
- https://developers.google.com/identity/protocols/oauth2/web-server
- https://gofastmcp.com/docs/integrations/google
- https://gofastmcp.com/docs/servers/auth/oauth-proxy

Framework is an implementation library, not a third-party analytics-data intermediary. Google remains the reporting source; the privately hosted connector and its encrypted OAuth storage are new access infrastructure requiring explicit setup/approval.
