import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MAX_MESSAGE_LENGTH = 2000;
const MAX_FIELD_LENGTH = 200;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid enquiry format.' }, { status: 400 });
  }

  const honeypot = clean(payload.website);
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 160).toLowerCase();
  const phone = clean(payload.phone, 60);
  const enquiryType = clean(payload.enquiryType, 120) || 'Website enquiry';
  const message = clean(payload.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Please provide your name, email and enquiry message.' }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Dr Sun Plastic Surgery <onboarding@resend.dev>';

  if (!apiKey || !toEmail) {
    return NextResponse.json({ error: 'The enquiry form is not configured yet. Please try again later.' }, { status: 503 });
  }

  const submittedAt = new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' });
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'Not available';

  const html = `
    <h2>New website enquiry</h2>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
    <p><strong>Enquiry type:</strong> ${escapeHtml(enquiryType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
    <hr />
    <p style="color:#667; font-size:12px;">Source: Dr Sun Plastic Surgery website enquiry form. IP: ${escapeHtml(ip)}</p>
  `;

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Website enquiry: ${enquiryType}`,
      html
    })
  });

  if (!resendResponse.ok) {
    console.error('Resend email failed', await resendResponse.text());
    return NextResponse.json({ error: 'The enquiry could not be sent. Please try again later.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
