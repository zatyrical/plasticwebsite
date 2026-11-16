"""Deployment candidate only. Requires explicit OAuth, hosting and persistent-storage setup."""
import os
from typing import Literal
from urllib.parse import urlsplit
import httpx
from cryptography.fernet import Fernet
from fastmcp import FastMCP
from fastmcp.server.auth.providers.google import GoogleProvider
from fastmcp.server.dependencies import get_access_token
from key_value.aio.stores.redis import RedisStore
from key_value.aio.wrappers.encryption import FernetEncryptionWrapper
from reporting import Reports

SCOPES = ["openid", "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/analytics.readonly", "https://www.googleapis.com/auth/webmasters.readonly"]
Site = Literal["drsun", "lymphedasia"]

def identity_allowed(claims: dict, allowed_email: str) -> bool:
    return claims.get("email_verified") in (True, "true") and str(claims.get("email", "")).casefold() == allowed_email.casefold()

class OwnerOnlyGoogle(GoogleProvider):
    def __init__(self, *, allowed_email: str, **kwargs):
        self.allowed_email = allowed_email
        super().__init__(**kwargs)

    async def load_access_token(self, token: str):
        verified = await super().load_access_token(token)
        if verified and identity_allowed(verified.claims, self.allowed_email):
            return verified
        return None

def redis_connection_url() -> str:
    # Vercel's Upstash integration appends REDIS_URL to the chosen prefix.
    # Read the server-side secret directly; never copy it into source or logs.
    redis_url = os.environ.get("REPORTING_REDIS_URL") or os.environ["REPORTING_REDIS_REDIS_URL"]
    if not redis_url.startswith("rediss://"):
        raise ValueError("Persistent Redis must use verified TLS (rediss).")
    return redis_url

def build_server():
    base = os.environ["REPORTING_BASE_URL"].rstrip("/")
    parsed = urlsplit(base)
    if parsed.scheme != "https" or not parsed.hostname or parsed.path or parsed.query or parsed.fragment or parsed.username:
        raise ValueError("REPORTING_BASE_URL must be an HTTPS origin.")
    redis_url = redis_connection_url()
    signing = os.environ["REPORTING_JWT_SIGNING_KEY"]
    if len(signing) < 43:
        raise ValueError("Use a newly generated high-entropy signing key.")
    email = os.environ["REPORTING_GOOGLE_EMAIL"].strip()
    if "@" not in email:
        raise ValueError("Set the exact authorised Google account.")
    auth = OwnerOnlyGoogle(
        allowed_email=email, client_id=os.environ["GOOGLE_CLIENT_ID"], client_secret=os.environ["GOOGLE_CLIENT_SECRET"],
        base_url=base, required_scopes=SCOPES, jwt_signing_key=signing.encode(),
        client_storage=FernetEncryptionWrapper(key_value=RedisStore(url=redis_url, default_collection="jeremy-google-reporting"),
                                              fernet=Fernet(os.environ["REPORTING_STORAGE_KEY"])),
        allowed_client_redirect_uris=["https://chatgpt.com/connector_platform_oauth_redirect", "https://chatgpt.com/connector/oauth/*"],
        require_authorization_consent=True, forward_resource=False,
        extra_authorize_params={"access_type": "offline", "prompt": "consent"},
        token_expiry_threshold_seconds=60,
    )
    mcp = FastMCP("Jeremy Google Reporting", auth=auth)

    def token():
        current = get_access_token()
        if not current or not identity_allowed(current.claims, email):
            raise PermissionError("The authorised Google account is required.")
        return current.token

    @mcp.tool(annotations={"readOnlyHint": True, "destructiveHint": False, "openWorldHint": True})
    async def ga4_property_details(site: Site) -> dict:
        """Read timezone/property configuration for one of the two approved GA4 properties."""
        async with httpx.AsyncClient() as client:
            return await Reports(client, token()).property_details(site)

    @mcp.tool(annotations={"readOnlyHint": True, "destructiveHint": False, "openWorldHint": True})
    async def ga4_key_event_definitions(site: Site) -> dict:
        """Read key-event definitions; never create tracking events or change settings."""
        async with httpx.AsyncClient() as client:
            return await Reports(client, token()).key_event_definitions(site)

    @mcp.tool(annotations={"readOnlyHint": True, "destructiveHint": False, "openWorldHint": True})
    async def ga4_report(site: Site, start: str, end: str, dimensions: list[str], metrics: list[str], organic_only: bool = True, limit: int = 1000) -> dict:
        """Aggregate exact-date Singapore reports. Organic Search by default; explicitly select all channels for separate AI-referral analysis. No personal/user identifiers."""
        async with httpx.AsyncClient() as client:
            return await Reports(client, token()).ga4(site, start, end, dimensions, metrics, organic_only, limit)

    @mcp.tool(annotations={"readOnlyHint": True, "destructiveHint": False, "openWorldHint": True})
    async def gsc_report(site: Site, start: str, end: str, dimensions: list[str], query_regex: str | None = None, exclude_regex: bool = False, page: str | None = None, limit: int = 1000, start_row: int = 0) -> dict:
        """Read exact-date final Singapore Web query/page data. Pass the recorded nonbrand/cohort regex unchanged; paginate explicitly and keep canonical variants separate."""
        async with httpx.AsyncClient() as client:
            return await Reports(client, token()).gsc(site, start, end, dimensions, query_regex, exclude_regex, page, limit, start_row)

    return mcp
