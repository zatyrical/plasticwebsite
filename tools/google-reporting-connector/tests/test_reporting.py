import asyncio
import json
import os
import unittest
from unittest.mock import patch
import httpx
from cryptography.fernet import Fernet
from starlette.testclient import TestClient
from reporting import Reports, window
from server import build_server, identity_allowed, redis_connection_url

class ReportingTests(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.requests = []
        def respond(request):
            self.requests.append(request)
            return httpx.Response(200, json={"rows": []})
        self.client = httpx.AsyncClient(transport=httpx.MockTransport(respond))
        self.reports = Reports(self.client, "test-token-never-a-real-credential")

    async def asyncTearDown(self):
        await self.client.aclose()

    async def test_ga4_combines_country_and_organic_with_exact_dates(self):
        await self.reports.ga4("drsun", "2026-09-01", "2026-09-07", ["landingPage"], ["sessions"])
        request = self.requests[0]
        self.assertEqual(str(request.url), "https://analyticsdata.googleapis.com/v1beta/properties/553866170:runReport")
        body = json.loads(request.content)
        self.assertEqual(body["dateRanges"], [{"startDate": "2026-09-01", "endDate": "2026-09-07"}])
        self.assertEqual(len(body["dimensionFilter"]["andGroup"]["expressions"]), 2)
        self.assertNotIn("queryString", request.content.decode())

    async def test_all_channel_mode_keeps_country_for_separate_ai_referrals(self):
        await self.reports.ga4("lymphedasia", "2026-09-01", "2026-09-07", ["sessionSource"], ["sessions"], False)
        body = json.loads(self.requests[0].content)
        self.assertEqual(len(body["dimensionFilter"]["andGroup"]["expressions"]), 1)
        self.assertIn("410145787", str(self.requests[0].url))

    async def test_rejects_other_properties_and_pii_dimensions_before_network(self):
        with self.assertRaises(KeyError):
            await self.reports.property_details("another")
        with self.assertRaises(ValueError):
            await self.reports.ga4("drsun", "2026-09-01", "2026-09-07", ["userId"], ["sessions"])
        with self.assertRaises(ValueError):
            await self.reports.ga4("drsun", "2026-09-01", "2026-09-07", ["landingPagePlusQueryString"], ["sessions"])
        self.assertEqual(self.requests, [])

    async def test_gsc_keeps_final_sg_web_regex_and_exact_page(self):
        page = "https://www.drjeremysun.com/tummy-tuck-singapore"
        await self.reports.gsc("drsun", "2026-09-01", "2026-09-07", ["query", "page"], "jeremy|astrid", True, page, 20, 40)
        request = self.requests[0]
        self.assertIn("sc-domain%3Adrjeremysun.com/searchAnalytics/query", str(request.url))
        body = json.loads(request.content)
        self.assertEqual((body["type"], body["dataState"], body["startRow"]), ("web", "final", 40))
        filters = body["dimensionFilterGroups"][0]["filters"]
        self.assertEqual(filters[0]["expression"], "sgp")
        self.assertEqual(filters[1]["operator"], "excludingRegex")
        self.assertEqual(filters[2]["expression"], page)

    async def test_rejects_cross_property_page_and_excessive_rows(self):
        with self.assertRaises(ValueError):
            await self.reports.gsc("lymphedasia", "2026-09-01", "2026-09-07", ["page"], page="https://www.drjeremysun.com/")
        with self.assertRaises(ValueError):
            await self.reports.gsc("drsun", "2026-09-01", "2026-09-07", ["query"], limit=50000)
        self.assertEqual(self.requests, [])

    async def test_provider_error_does_not_echo_secret_body_or_retry(self):
        calls = []
        def fail(request):
            calls.append(request)
            return httpx.Response(403, json={"error": "private-provider-detail"})
        async with httpx.AsyncClient(transport=httpx.MockTransport(fail)) as client:
            with self.assertRaisesRegex(RuntimeError, "HTTP 403") as error:
                await Reports(client, "secret-test").property_details("drsun")
        self.assertNotIn("private-provider-detail", str(error.exception))
        self.assertNotIn("secret-test", str(error.exception))
        self.assertEqual(len(calls), 1)

    async def test_inspection_fixed_endpoint_property_and_exact_url(self):
        for site, url, prop in [
            ("drsun", "https://www.drjeremysun.com/rib-rhinoplasty-singapore", "sc-domain:drjeremysun.com"),
            ("lymphedasia", "https://lymphedasia.com/lymphoscintigraphy-for-lymphedema/", "sc-domain:lymphedasia.com"),
        ]:
            result = await self.reports.inspect_url(site, url)
            request = self.requests[-1]
            self.assertEqual(request.method, "POST")
            self.assertEqual(str(request.url), "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect")
            self.assertEqual(json.loads(request.content), {"inspectionUrl": url, "siteUrl": prop, "languageCode": "en-US"})
            self.assertEqual((result["property"], result["url"]), (prop, url))
            self.assertIn("checkedAtUtc", result)
            self.assertEqual(result["source"], {"rows": []})
            self.assertNotIn("indexed", result)  # No invented verdict from missing provider fields.

    async def test_inspection_rejects_cross_property_and_unsafe_urls_before_network(self):
        for url in ["https://lymphedasia.com/", "https://www.drjeremysun.com.evil.example/",
                    "http://www.drjeremysun.com/", "https://127.0.0.1/", "https://user@www.drjeremysun.com/",
                    "https://www.drjeremysun.com:443/", "https://www.drjeremysun.com",
                    "https://www.drjeremysun.com/?token=private", "https://www.drjeremysun.com/?",
                    "https://www.drjeremysun.com/#contact", "https://www.drjeremysun.com/#",
                    "https://www.drjeremysun.com/white space", "https://www.drjeremysun.com/\\evil",
                    "https://www.drjeremysun.com/" + "a" * 2048]:
            with self.subTest(url=url), self.assertRaises(ValueError):
                await self.reports.inspect_url("drsun", url)
        with self.assertRaises(KeyError):
            await self.reports.inspect_url("other", "https://www.drjeremysun.com/")
        self.assertEqual(self.requests, [])

    async def test_sitemaps_read_is_fixed_property_get_with_no_mutation(self):
        for site, prop in [("drsun", "drjeremysun.com"), ("lymphedasia", "lymphedasia.com")]:
            result = await self.reports.sitemaps(site)
            request = self.requests[-1]
            self.assertEqual(request.method, "GET")
            self.assertEqual(str(request.url), "https://www.googleapis.com/webmasters/v3/sites/sc-domain%3A" + prop + "/sitemaps")
            self.assertEqual(request.content, b"")
            self.assertEqual(result["source"], {"rows": []})
            self.assertNotIn("indexed", result)
        with self.assertRaises(KeyError):
            await self.reports.sitemaps("other")
        self.assertEqual(len(self.requests), 2)

    async def test_inspection_retains_google_verdict_canonicals_and_absent_fields(self):
        source = {"inspectionResult": {"indexStatusResult": {"verdict": "NEUTRAL",
                  "coverageState": "Crawled - currently not indexed", "lastCrawlTime": "2026-11-15T00:00:00Z",
                  "googleCanonical": "https://www.drjeremysun.com/", "userCanonical": "https://www.drjeremysun.com/example"}}}
        async with httpx.AsyncClient(transport=httpx.MockTransport(lambda r: httpx.Response(200, json=source))) as client:
            result = await Reports(client, "test-only").inspect_url("drsun", "https://www.drjeremysun.com/example")
        self.assertEqual(result["source"], source)
        self.assertNotIn("sitemap", result["source"]["inspectionResult"]["indexStatusResult"])

    async def test_inspection_redirects_are_not_followed_and_errors_are_redacted(self):
        calls = []
        def respond(request):
            calls.append(request)
            return httpx.Response(302, headers={"Location": "https://elsewhere.example/"}, json={"error": "private detail"})
        async with httpx.AsyncClient(transport=httpx.MockTransport(respond), follow_redirects=True) as client:
            with self.assertRaisesRegex(RuntimeError, "HTTP 302") as error:
                await Reports(client, "private-test-token").inspect_url("drsun", "https://www.drjeremysun.com/")
        self.assertEqual(len(calls), 1)
        self.assertNotIn("private", str(error.exception))

class AuthBoundaryTests(unittest.TestCase):
    def test_upstash_integration_name_and_explicit_override(self):
        with patch.dict(os.environ, {"REPORTING_REDIS_REDIS_URL": "rediss://integration.example:6379"}, clear=True):
            self.assertEqual(redis_connection_url(), "rediss://integration.example:6379")
            os.environ["REPORTING_REDIS_URL"] = "rediss://explicit.example:6379"
            self.assertEqual(redis_connection_url(), "rediss://explicit.example:6379")

    def test_redis_configuration_rejects_plaintext_without_echoing_credentials(self):
        for key in ["REPORTING_REDIS_URL", "REPORTING_REDIS_REDIS_URL"]:
            with patch.dict(os.environ, {key: "redis://private-test-password@localhost:6379"}, clear=True):
                with self.assertRaisesRegex(ValueError, "verified TLS") as error:
                    redis_connection_url()
                self.assertNotIn("private-test-password", str(error.exception))

    def test_identity_requires_exact_verified_email(self):
        self.assertTrue(identity_allowed({"email": "Owner@example.com", "email_verified": True}, "owner@example.com"))
        for claims in [{}, {"email": "owner@example.com"}, {"email": "owner@example.com", "email_verified": False}, {"email": "other@example.com", "email_verified": True}]:
            self.assertFalse(identity_allowed(claims, "owner@example.com"))

    def test_dates_exclude_partial_days_and_reversed_windows(self):
        for start, end in [("2026-09-07", "2026-09-01"), ("2000-01-01", "2999-01-01")]:
            with self.assertRaises(ValueError):
                window(start, end)

    def test_missing_configuration_fails_closed(self):
        with patch.dict(os.environ, {}, clear=True):
            with self.assertRaises(KeyError):
                build_server()

    def test_anonymous_mcp_denied_and_discovery_available(self):
        # Entirely fake setup; Redis is lazy and no real Google/Redis requests are made.
        env = {"REPORTING_BASE_URL": "https://reporting.example.com", "REPORTING_REDIS_URL": "rediss://localhost:6379",
               "REPORTING_JWT_SIGNING_KEY": "x" * 64, "REPORTING_STORAGE_KEY": Fernet.generate_key().decode(),
               "REPORTING_GOOGLE_EMAIL": "owner@example.com", "GOOGLE_CLIENT_ID": "test.apps.googleusercontent.com", "GOOGLE_CLIENT_SECRET": "test-only"}
        with patch.dict(os.environ, env, clear=True):
            app = build_server().http_app(path="/mcp", stateless_http=True, json_response=True)
            with TestClient(app, base_url="https://reporting.example.com") as client:
                response = client.post("/mcp", json={"jsonrpc": "2.0", "id": 1, "method": "tools/list"})
                self.assertEqual(response.status_code, 401)
                self.assertIn("resource_metadata", response.headers.get("www-authenticate", ""))
                metadata = client.get("/.well-known/oauth-authorization-server")
                self.assertEqual(metadata.status_code, 200)
                scopes = metadata.json()["scopes_supported"]
                self.assertIn("https://www.googleapis.com/auth/analytics.readonly", scopes)
                self.assertNotIn("https://www.googleapis.com/auth/analytics.edit", scopes)

if __name__ == "__main__":
    unittest.main()
