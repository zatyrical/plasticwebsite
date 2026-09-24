import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 2000;
const MAX_FIELD_LENGTH = 200;
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

export async function POST(request: NextRequest) {
  let payload: Record<string, unknown> = {};
  const contentType = request.headers.get('content-type') || '';
  const isBrowserFormPost = contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data');

  try {
    if (isBrowserFormPost) {
      payload = Object.fromEntries((await request.formData()).entries());
    } else {
      payload = await request.json();
    }
  } catch {
    return jsonResponse(request, { error: 'Invalid enquiry format.' }, { status: 400 });
  }

  const honeypot = clean(payload.website);
  if (honeypot) {
    return jsonResponse(request, { ok: true });
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

  const apiKey = process.env.RESEND_API_KEY;
  const toEmails = (process.env.CONTACT_TO_EMAIL || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Dr Jeremy Sun Website <onboarding@resend.dev>';

  if (!apiKey || !toEmails.length) {
    return formError('The enquiry form is not configured yet. Please try again later.', 503);
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
  } catch (error) {
    console.error('Resend email request failed', error);
    return formError('The enquiry could not be sent. Please try again later.', 502);
  }

  if (!resendResponse.ok) {
    console.error('Resend email failed', await resendResponse.text());
    return formError('The enquiry could not be sent. Please try again later.', 502);
  }

  if (isBrowserFormPost && redirectSuccess) return NextResponse.redirect(redirectSuccess, { status: 303 });
  return jsonResponse(request, { ok: true });
}
