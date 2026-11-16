# Direct Google reporting connector

Prepared 16 November 2026. Current hosting, connection and verification status is recorded in repository issue7; source code and mocked tests alone do not establish a working OAuth connection. This isolated service makes direct Google API requests; there is no Wizard, paid reporting intermediary, tracking change or browser authentication workaround. No Google credentials or analytics exports are committed.

## Exact scope

Only GA4 properties553866170/410145787 and GSC domain properties drjeremysun.com/lymphedasia.com. Aggregate GA4 dimensions exclude user identifiers and landing query strings. The four exposed MCP tools read property configuration, key-event definitions, aggregate GA4 reports and final Singapore Web GSC data. Google uses POST for reporting, but these are read-only API methods. No arbitrary URL/request proxy or settings-write tool exists.

Singapore country is fixed; GA4 Organic Search is the default AND filter. Set organic_only=false explicitly for separate source/medium referral analysis, never mix it into organic results. The caller must preserve the existing stable property-specific nonbrand/procedure-cohort manifest, exact settled comparison periods, canonical variants, source timezone, thresholding and pagination limits. This does not itself prove qualification, attribution or native AI citations. No synthetic analytics or real test enquiries.

## Security and hosting requirements

FastMCP4.2.0 GoogleProvider handles the OAuth proxy, PKCE, client registration, consent, token validation, expiry and refresh. Its Google-token verification returns an upstream token only inside server request context; that token is never returned as tool output. Explicit owner email and Google's verified-email claim are required. Redirects are limited to documented ChatGPT callbacks; downstream consent protections remain enabled. Persistent Redis over verified TLS is wrapped with Fernet encryption for OAuth records. A fixed high-entropy signing key survives restarts. There is no unauthenticated fallback or in-memory production token store.

Deploy to a SEPARATE project, not either patient website's production root. Candidate Vercel root directory: tools/google-reporting-connector. api/index.py exports ASGI and vercel.json forwards routes. Actual hosting build, callback/discovery checks, real OAuth consent and restart/refresh validation remain separate release gates. The assigned separate project origin is https://jeremy-google-reporting.vercel.app; its existence is not proof that the service is deployed or reachable. The user authorised this separate hosting/encrypted-storage setup and created and connected Upstash on 17 November; their screenshot shows the Free plan. No paid provision is authorised, and unrelated application databases must not be reused.

With the chosen REPORTING_REDIS integration prefix, Vercel injects REPORTING_REDIS_REDIS_URL. The server reads that secret directly when REPORTING_REDIS_URL is absent; an explicit REPORTING_REDIS_URL takes precedence. Either native URL must use rediss:// (verified TLS). REST API URL/token variables are not native Redis connection URLs and are not used. Keep these server-only variables scoped to Production. No credential copying, source interpolation or secret logging is needed.

## User setup sequence

1. User reports Google Cloud project and Analytics Data/Admin + Search Console APIs enabled. No cloud-project ID has been supplied/verified by this code.
2. The separate hosting/storage setup is authorised; project jeremy-google-reporting has the assigned origin above. Reconcile the actual connected store, secure configuration and latest issue7 checkpoint before deploying.
3. In that Google Cloud project configure the OAuth consent app. Use an exact authorised Google email; account must already access the two GA4 and two GSC properties. Add the two read-only scopes plus openid/email for authenticating that owner.
4. Create a Web application OAuth client. The intended upstream Google callback is https://jeremy-google-reporting.vercel.app/auth/callback, established from the assigned origin and the provider's default path. Registering it is configuration preparation; live callback verification still requires deployment. This callback is different from ChatGPT's downstream callback. Never guess or copy an unrelated callback.
5. Enter client ID/secret and storage/signing/encryption configuration in the host's secure environment settings, never chat or git. Variable names are in .env.example. Generate signing and Fernet keys in a trusted secret-management interface; do not print them into chat/logs.
6. Deploy and verify public metadata, unauthenticated tools401, callback path, owner-only access and exact four-property reporting. Validate the framework's actual downstream callback against the management page; narrow the allowlist further when possible. Do not disable OAuth, consent or domain restrictions to make a test pass.
7. In ChatGPT Plugins > Add custom MCP server, enter the verified /mcp URL, choose OAuth, install and complete secure Google consent. Check Google consent publishing/test-user status and refresh-token lifetime; Testing must not be assumed to provide indefinite access.
8. Verify a later existing scheduled run can call the installed tool, restart persistence and token refresh. No duplicate task. A successful interactive query alone is not unattended reliability or an SEO outcome.

Required secure variables: REPORTING_BASE_URL, REPORTING_GOOGLE_EMAIL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REPORTING_JWT_SIGNING_KEY, REPORTING_STORAGE_KEY, plus either REPORTING_REDIS_URL or the injected REPORTING_REDIS_REDIS_URL.

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
