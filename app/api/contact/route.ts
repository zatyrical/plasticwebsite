import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'node:crypto';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 2000;
const MAX_FIELD_LENGTH = 200;
const MAX_BODY_BYTES = 64 * 1024;
const ABUSE_WINDOW_MS = 15 * 60 * 1000;
const MAX_ABUSE_ENTRIES = 4096;
// These are supplemental, per-instance limits. Cold starts/other instances have separate counters.
// Keep only short-lived digests, never enquiry text or contact details in this cache or logs.
const abuseEntries = new Map<string, { count: number; expires: number }>();
const REPORTED_SPAM_HOSTS = new Set(['volgograd.ru', 'nanmed.ru', 'nashipesni.ru']);
const GAMBLING_LINK = /(?:^|[\W_])(?:casinos?|sportsbook|pokies|1xbet|promokod(?:y)?|slot[-_]?machines?|online[-_]?slots|slots[-_]?games)(?:$|[\W_])/i;
// Bound the provider wait; an aborted request can still have been accepted upstream.
const EMAIL_PROVIDER_TIMEOUT_MS = 15000;
const UNCONFIRMED_ENQUIRY = 'We could not confirm that your enquiry was sent. Please contact the clinic before submitting again.';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_ORIGINS = new Set([
  'https://www.drjeremysun.com',
  'https://drjeremysun.com',
  'https://lymphedasia.com',
  'https://www.lymphedasia.com'
]);

const ALLOWED_REDIRECT_HOSTS = new Set([
  'www.drjeremysun.com',
  'drjeremysun.com',
  'lymphedasia.com',
  'www.lymphedasia.com'
]);

function safeRedirect(value: unknown) {
  const raw = clean(value, 500);
  if (!raw) return '';

  try {
    const url = new URL(raw);
    if (url.protocol === 'https:' && ALLOWED_REDIRECT_HOSTS.has(url.hostname)) return url.toString();
  } catch {
    return '';
  }

  return '';
}

function corsHeaders(request: NextRequest) {
  const origin = request.headers.get('origin') || '';
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : 'https://www.drjeremysun.com';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin'
  };
}

function jsonResponse(request: NextRequest, body: Record<string, unknown>, init: ResponseInit = {}) {
  return NextResponse.json(body, {
    ...init,
    headers: {
      ...corsHeaders(request),
      'Cache-Control': 'no-store',
      ...(init.headers || {})
    }
  });
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders(request)
  });
}

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return String(value || '').trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function digest(kind: string, value: string) {
  return createHash('sha256').update(kind).update('\0').update(value).digest('hex');
}

function reserveSubmission(email: string, message: string, ip: string) {
  const now = Date.now();
  for (const [key, entry] of abuseEntries) {
    if (entry.expires <= now) abuseEntries.delete(key);
  }
  const duplicate = digest('message', email + '\0' + message.normalize('NFKC').replace(/\s+/g, ' ').trim());
  if (abuseEntries.has(duplicate)) return 'duplicate';

  const buckets = [{ key: digest('email', email), limit: 3 }];
  if (ip) buckets.push({ key: digest('ip', ip), limit: 20 });
  if (buckets.some(({ key, limit }) => (abuseEntries.get(key)?.count || 0) >= limit)) return 'limited';

  // Reserve synchronously before awaiting the provider so parallel requests cannot race here.
  while (abuseEntries.size > MAX_ABUSE_ENTRIES - buckets.length - 1) {
    const oldest = abuseEntries.keys().next().value;
    if (oldest === undefined) break;
    abuseEntries.delete(oldest);
  }
  for (const { key } of buckets) {
    const entry = abuseEntries.get(key);
    abuseEntries.set(key, { count: (entry?.count || 0) + 1, expires: entry?.expires || now + ABUSE_WINDOW_MS });
  }
  abuseEntries.set(duplicate, { count: 1, expires: now + ABUSE_WINDOW_MS });
  return '';
}

function hasPromotionalLink(message: string) {
  // Inspect URL text locally. Never fetch submitted links or send medical messages to a classifier.
  const links = message.normalize('NFKC').match(/(?:https?:\/\/|www\.)[^\s<>"']+/gi) || [];
  return links.some((link) => {
    try {
      const url = new URL(/^www\./i.test(link) ? 'https://' + link : link);
      const host = url.hostname.toLowerCase().replace(/\.$/, '');
      if ([...REPORTED_SPAM_HOSTS].some((blocked) => host === blocked || host.endsWith('.' + blocked))) return true;
      let destination = host + url.pathname + url.search;
      try { destination = decodeURIComponent(destination); } catch { /* Inspect the original malformed encoding. */ }
      return GAMBLING_LINK.test(destination);
    } catch {
      return false;
    }
  });
}

async function readPayload(request: NextRequest, contentType: string, native: boolean) {
  if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) throw new RangeError('body');
  if (!request.body) throw new Error('body');
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new RangeError('body');
    }
    chunks.push(value);
  }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength; }
  const payload: unknown = native
    ? Object.fromEntries((await new Response(body, { headers: { 'Content-Type': contentType } }).formData()).entries())
    : JSON.parse(new TextDecoder().decode(body));
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new Error('payload');
  if (Object.values(payload).some((value) => typeof value !== 'string')) throw new Error('fields');
  return payload as Record<string, unknown>;
}

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown> = {};
  const contentType = request.headers.get('content-type') || '';
  const isBrowserFormPost = contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data');
  const origin = request.headers.get('origin');
  if (origin && !ALLOWED_ORIGINS.has(origin)) {
    return jsonResponse(request, { error: 'Please submit your enquiry from the clinic website.' }, { status: 403 });
  }

  try {
    payload = await readPayload(request, contentType, isBrowserFormPost);
  } catch (error) {
    return jsonResponse(request, { error: 'Invalid enquiry format or size.' }, { status: error instanceof RangeError ? 413 : 400 });
  }

  const honeypot = clean(payload.website);
  if (honeypot) {
    return jsonResponse(request, { ok: true, accepted: false });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160).toLowerCase();
  const phone = clean(payload.phone, 60);
  const enquiryType = clean(payload.enquiryType, 120) || 'Website enquiry';
  const message = clean(payload.message, MAX_MESSAGE_LENGTH);
  const pageUrl = clean(payload.pageUrl, 300);
  const redirectSuccess = safeRedirect(payload.redirectSuccess);
  const redirectError = safeRedirect(payload.redirectError);

  function formError(messageText: string, status = 400) {
    if (isBrowserFormPost && redirectError) return NextResponse.redirect(redirectError, { status: 303 });
    return jsonResponse(request, { error: messageText }, { status });
  }

  if (!name || !email || !message) {
    return formError('Please provide your name, email and enquiry message.', 400);
  }

  if (!EMAIL_REGEX.test(email)) {
    return formError('Please provide a valid email address.', 400);
  }

  if (hasPromotionalLink(message)) {
    return formError('This message contains a promotional link that cannot be submitted. Please remove it or contact the clinic using the contact details below.', 422);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmails = (process.env.CONTACT_TO_EMAIL || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Dr Jeremy Sun Website <onboarding@resend.dev>';

  if (!apiKey || !toEmails.length) {
    return formError('The enquiry form is not configured yet. Please try again later.', 503);
  }

  // Enable only after both sites have the matching public widget. Never trust a
  // browser-only check, Origin header or pageUrl as proof of a completed challenge.
  if (process.env.CONTACT_BOT_CHECK === 'turnstile') {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) return formError('The security check is temporarily unavailable. Please contact the clinic directly.', 503);
    const token = payload['cf-turnstile-response'];
    if (typeof token !== 'string' || !token.trim() || token.length > 2048) {
      return formError('Please complete the security check before submitting your enquiry.', 422);
    }
    try {
      const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(8000),
        body: JSON.stringify({ secret, response: token })
      });
      if (!verification.ok) throw new Error('verification unavailable');
      const result = await verification.json();
      const hostnames = new Set([...ALLOWED_ORIGINS].map((allowed) => new URL(allowed).hostname));
      if (result?.success !== true || result.action !== 'clinic_enquiry' || !hostnames.has(result.hostname) ||
          (origin && new URL(origin).hostname !== result.hostname)) {
        return formError('The security check expired or was unsuccessful. Please complete a fresh check and submit again.', 422);
      }
    } catch {
      // No retry, token/secret logging, fail-open mail delivery or accepted lead.
      return formError('The security check could not be verified. No enquiry was sent. Please try a fresh check or contact the clinic directly.', 503);
    }
  } else if (process.env.CONTACT_BOT_CHECK) {
    // A misspelled activation value must not silently switch protection off.
    return formError('The security check is temporarily unavailable. Please contact the clinic directly.', 503);
  }

  // Vercel supplies this header itself; do not use a client-provided IP on other hosts.
  const clientIp = process.env.VERCEL === '1'
    ? (request.headers.get('x-vercel-forwarded-for') || '').split(',')[0].trim()
    : '';
  const abuse = reserveSubmission(email, message, clientIp);
  if (abuse === 'duplicate') {
    return formError('A matching enquiry was submitted recently. Please contact the clinic before sending it again.', 409);
  }
  if (abuse === 'limited') {
    if (isBrowserFormPost && redirectError) return NextResponse.redirect(redirectError, { status: 303 });
    return jsonResponse(request, { error: 'Too many enquiries were submitted recently. Please wait 15 minutes or contact the clinic directly.' }, { status: 429, headers: { 'Retry-After': '900' } });
  }

  const submittedAt = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' });
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'Not available';

  const html = `
    <h2>New Astrid / Dr Jeremy Sun website enquiry</h2>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
    <p><strong>Enquiry type:</strong> ${escapeHtml(enquiryType)}</p>
    <p><strong>Page/source:</strong> ${escapeHtml(pageUrl || 'Not provided')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
    <hr />
    <p style="color:#667; font-size:12px;">Source: drjeremysun.com enquiry form. IP: ${escapeHtml(ip)}</p>
  `;

  let resendResponse: Response;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      signal: AbortSignal.timeout(EMAIL_PROVIDER_TIMEOUT_MS),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: toEmails,
        reply_to: email,
        subject: `Astrid website enquiry: ${enquiryType}`,
        html
      })
    });
  } catch {
    console.error('Resend email request failed');
    return formError(UNCONFIRMED_ENQUIRY, 502);
  }

  if (!resendResponse.ok) {
    // Error-body consumption can stall or expose provider details; status is enough here.
    console.error('Resend email failed', resendResponse.status);
    return formError(UNCONFIRMED_ENQUIRY, 502);
  }

  if (isBrowserFormPost && redirectSuccess) return NextResponse.redirect(redirectSuccess, { status: 303 });
  return jsonResponse(request, { ok: true, accepted: true });
}
