from server import build_server

# Missing configuration fails closed; there is deliberately no unauthenticated mode.
app = build_server().http_app(path="/mcp", stateless_http=True, json_response=True)
