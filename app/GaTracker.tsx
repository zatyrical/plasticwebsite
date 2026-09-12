'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const GA_ID = 'G-448HBLCGJ8';
const PRODUCTION_HOST = 'www.drjeremysun.com';

function sanitiseUrl(value: string) {
  try {
    const url = new URL(value);
    url.search = '';
    url.hash = '';
    return url.toString();
  } catch {
    return '';
  }
}

export default function GaTracker() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const [ready, setReady] = useState(false);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    setEnabled(window.location.hostname === PRODUCTION_HOST);
  }, []);

  useEffect(() => {
    if (!enabled || !ready || !pathname || lastTrackedPath.current === pathname) return;

    const pageLocation = `${window.location.origin}${pathname}`;
    window.gtag?.('event', 'page_view', {
      page_location: pageLocation,
      page_referrer: sanitiseUrl(document.referrer)
    });
    lastTrackedPath.current = pathname;
  }, [enabled, pathname, ready]);

  if (!enabled) return null;

  return (
    <>
      <Script id="ga4-bootstrap" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${GA_ID}',{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});`}
      </Script>
      <Script
        id="ga4-library"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
    </>
  );
}
