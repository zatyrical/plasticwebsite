'use client';

import { FormEvent, useEffect, useState } from 'react';
import { trackAcceptedEnquiry } from './contactAnalytics';
import EnquiryBotCheck from './EnquiryBotCheck';

type Status = 'idle' | 'sending' | 'sent' | 'error';

type EnquiryType =
  | 'Consultation enquiry'
  | 'Aesthetic surgery'
  | 'Reconstructive surgery'
  | 'Lymphedema / LVA surgery';

export default function ContactForm({ defaultEnquiryType = 'Consultation enquiry' }: { defaultEnquiryType?: EnquiryType }) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [pageUrl, setPageUrl] = useState('');

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      const data = await response.json().catch(() => null);

      if (response.ok && typeof data?.accepted !== 'boolean') {
        setStatus('error');
        setMessage('We could not confirm that your enquiry was sent. Your details are still here. Please contact the clinic before submitting again.');
        return;
      }

      if (response.ok) {
        form.reset();
        setStatus('sent');
        setMessage('Thank you. Your enquiry has been received. The clinic team will respond through the contact details provided.');
        trackAcceptedEnquiry(response.ok, data);
        return;
      }

      setStatus('error');
      setMessage(data?.error || 'Sorry, the enquiry could not be sent. Please try again later.');
    } catch {
      setStatus('error');
      setMessage('We could not confirm that your enquiry was sent. Your details are still here. Please check your connection or contact Astrid using the WhatsApp link below.');
    } finally {
      // Siteverify tokens are single use, including when email delivery fails.
      form.dispatchEvent(new Event('enquiry-bot-reset'));
    }
  }

  return (
    <form className="contact-form" action="/api/contact" method="post" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name (required)
          <input name="name" type="text" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Email (required)
          <input name="email" type="email" autoComplete="email" required maxLength={160} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone (optional)
          <input name="phone" type="tel" autoComplete="tel" maxLength={60} />
        </label>
        <label>
          Enquiry type
          <select name="enquiryType" defaultValue={defaultEnquiryType}>
            <option>Consultation enquiry</option>
            <option>Aesthetic surgery</option>
            <option>Reconstructive surgery</option>
            <option>Lymphedema / LVA surgery</option>
            <option>Referral / professional enquiry</option>
          </select>
        </label>
      </div>
      <label>
        Message (required)
        <textarea name="message" rows={5} required maxLength={2000} placeholder="Please include the reason for enquiry and preferred contact method. Do not include urgent medical information." />
      </label>
      <label className="hp-field" aria-hidden="true">
        Leave this field blank
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <input name="pageUrl" type="hidden" value={pageUrl} readOnly />
      <input name="redirectSuccess" type="hidden" value="https://www.drjeremysun.com/enquiry-response/received" readOnly />
      <input name="redirectError" type="hidden" value="https://www.drjeremysun.com/enquiry-response/unconfirmed" readOnly />
      <EnquiryBotCheck />
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
      </button>
      <p role="status" aria-atomic="true" className={`form-status ${status}`}>{message}</p>
      <p className="form-note">For non-urgent private consultation enquiries, you may also <a href="https://wa.me/6587649219" target="_blank" rel="noreferrer">message Astrid on WhatsApp</a> or <a href="https://www.astridplasticsurgery.com/contact-us/" target="_blank" rel="noreferrer">use Astrid Plastic Surgery’s contact form</a>.</p>
      <p className="form-note">This form is for non-urgent enquiries only. It does not establish a doctor-patient relationship until a consultation has taken place.</p>
    </form>
  );
}
