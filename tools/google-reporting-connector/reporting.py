"""Fixed Google reporting endpoints. No arbitrary URLs, credentials, or writes."""
from datetime import date
from urllib.parse import quote
import httpx

PROPERTIES = {"drsun": "553866170", "lymphedasia": "410145787"}
SITES = {"drsun": "sc-domain:drjeremysun.com", "lymphedasia": "sc-domain:lymphedasia.com"}
DIMENSIONS = {"date", "landingPage", "sessionDefaultChannelGroup", "eventName", "sessionSource", "sessionMedium", "country"}
METRICS = {"sessions", "engagedSessions", "engagementRate", "averageSessionDuration", "userEngagementDuration", "eventCount", "keyEvents", "totalUsers"}

def window(start: str, end: str) -> None:
    first, last = date.fromisoformat(start), date.fromisoformat(end)
    if first > last or last >= date.today() or (last - first).days > 365:
        raise ValueError("Use ordered exact past dates, at most 366 days; verify source freshness separately.")

class Reports:
    def __init__(self, client: httpx.AsyncClient, token: str):
        self.client, self.headers = client, {"Authorization": "Bearer " + token}

    async def request(self, method: str, url: str, body=None):
        # All callers below construct fixed Google API URLs; this is not an MCP tool.
        try:
            response = await self.client.request(method, url, headers=self.headers, json=body,
                                                 timeout=30, follow_redirects=False)
        except httpx.RequestError:
            raise RuntimeError("Google reporting request unavailable; no automatic retry.") from None
        if response.status_code != 200:
            # Never echo provider bodies, request headers, URLs containing search queries or tokens.
            raise RuntimeError(f"Google reporting returned HTTP {response.status_code}; reconcile access/filters before retry.")
        return response.json()

    async def property_details(self, site: str):
        prop = PROPERTIES[site]
        return await self.request("GET", f"https://analyticsadmin.googleapis.com/v1beta/properties/{prop}")

    async def key_event_definitions(self, site: str):
        prop = PROPERTIES[site]
        return await self.request("GET", f"https://analyticsadmin.googleapis.com/v1beta/properties/{prop}/keyEvents?pageSize=200")

    async def ga4(self, site: str, start: str, end: str, dimensions: list[str], metrics: list[str],
                  organic_only: bool = True, limit: int = 1000):
        prop = PROPERTIES[site]
        window(start, end)
        if not dimensions or not set(dimensions) <= DIMENSIONS or len(dimensions) > 7:
            raise ValueError("Unsupported aggregate dimension; identifiers and query-string dimensions are excluded.")
        if not metrics or not set(metrics) <= METRICS or len(metrics) > 8 or not 1 <= limit <= 1000:
            raise ValueError("Unsupported metric or row limit.")
        filters = [{"filter": {"fieldName": "country", "stringFilter": {"matchType": "EXACT", "value": "Singapore"}}}]
        if organic_only:
            filters.append({"filter": {"fieldName": "sessionDefaultChannelGroup", "stringFilter": {"matchType": "EXACT", "value": "Organic Search"}}})
        result = await self.request("POST", f"https://analyticsdata.googleapis.com/v1beta/properties/{prop}:runReport", {
            "dateRanges": [{"startDate": start, "endDate": end}],
            "dimensions": [{"name": x} for x in dimensions], "metrics": [{"name": x} for x in metrics],
            "dimensionFilter": {"andGroup": {"expressions": filters}}, "limit": limit,
            "returnPropertyQuota": True,
        })
        return {"property": prop, "country": "Singapore", "channel": "Organic Search" if organic_only else "all channels",
                "start": start, "end": end, "source": result,
                "limitations": "Check timezone/freshness, thresholding and row limits. Contact clicks are not accepted leads; referrals are not native AI citations."}

    async def gsc(self, site: str, start: str, end: str, dimensions: list[str], query_regex: str | None = None,
                  exclude_regex: bool = False, page: str | None = None, limit: int = 1000, start_row: int = 0):
        property_id = SITES[site]
        window(start, end)
        if not dimensions or not set(dimensions) <= {"query", "page", "date", "device"}:
            raise ValueError("Unsupported Search Console dimensions.")
        if not 1 <= limit <= 1000 or not 0 <= start_row <= 25000:
            raise ValueError("Unsupported row range.")
        filters = [{"dimension": "country", "operator": "equals", "expression": "sgp"}]
        if query_regex:
            if len(query_regex) > 1000:
                raise ValueError("Regex too long.")
            filters.append({"dimension": "query", "operator": "excludingRegex" if exclude_regex else "includingRegex", "expression": query_regex})
        if page:
            if len(page) > 500 or not page.startswith(("https://drjeremysun.com/", "https://www.drjeremysun.com/")) and site == "drsun":
                raise ValueError("Page is outside the selected property.")
            if site == "lymphedasia" and not page.startswith(("https://lymphedasia.com/", "https://www.lymphedasia.com/")):
                raise ValueError("Page is outside the selected property.")
            filters.append({"dimension": "page", "operator": "equals", "expression": page})
        result = await self.request("POST", f"https://www.googleapis.com/webmasters/v3/sites/{quote(property_id, safe='')}/searchAnalytics/query", {
            "startDate": start, "endDate": end, "type": "web", "dataState": "final", "dimensions": dimensions,
            "dimensionFilterGroups": [{"groupType": "and", "filters": filters}], "rowLimit": limit, "startRow": start_row,
        })
        return {"property": property_id, "country": "sgp", "searchType": "web", "dataState": "final",
                "start": start, "end": end, "source": result,
                "limitations": "Preserve recorded brand/cohort and canonical definitions. Query rows omit anonymised data; average position is not verified live rank."}
