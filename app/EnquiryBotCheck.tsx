'use client';

import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function EnquiryBotCheck() {
  const container = useRef<HTMLDivElement>(null);
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  useEffect(() => {
    const node = container.current;
    document.dispatchEvent(new Event('enquiry-bot-check:mount'));
    return () => {
      if (node) document.dispatchEvent(new CustomEvent('enquiry-bot-check:remove', { detail: node }));
    };
  }, []);
  if (!sitekey) return null;
  return <>
    <div ref={container} data-enquiry-bot-check data-sitekey={sitekey}>
      <div data-bot-widget />
      <p data-bot-status role="status" aria-live="polite">Loading security check… If it does not load, please contact the clinic using the links below.</p>
      <noscript>Please enable JavaScript to complete the security check, or contact the clinic using the links below.</noscript>
    </div>
    <Script src="/enquiry-bot-check.js" strategy="afterInteractive" onReady={() => { document.dispatchEvent(new Event('enquiry-bot-check:mount')); }} />
  </>;
}
