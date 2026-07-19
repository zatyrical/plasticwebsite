'use client';

import { FormEvent, useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');
    setMessage('');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries()))
    });

    if (response.ok) {
      form.reset();
      setStatus('sent');
      setMessage('Thank you. Your enquiry has been received. The clinic team will respond through the contact details provided.');
      return;
    }

    const data = await response.json().catch(() => null);
    setStatus('error');
    setMessage(data?.error || 'Sorry, the enquiry could not be sent. Please try again later.');
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required maxLength={160} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Phone
          <input name="phone" type="tel" autoComplete="tel" maxLength={60} />
        </label>
        <label>
          Enquiry type
          <select name="enquiryType" defaultValue="Consultation enquiry">
            <option>Consultation enquiry</option>
            <option>Aesthetic surgery</option>
            <option>Reconstructive surgery</option>
            <option>Lymphedema surgery</option>
            <option>Referral / professional enquiry</option>
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea name="message" rows={5} required maxLength={2000} placeholder="Please include the reason for enquiry and preferred contact method. Do not include urgent medical information." />
      </label>
      <label className="hp-field" aria-hidden="true">
        Leave this field blank
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit enquiry'}
      </button>
      {message ? <p className={`form-status ${status}`}>{message}</p> : null}
      <p className="form-note">This form is for non-urgent enquiries only. It does not establish a doctor-patient relationship until a consultation has taken place.</p>
    </form>
  );
}
