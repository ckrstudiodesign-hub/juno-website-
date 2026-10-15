"use client";

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { COOKIE_CONSENT_EVENT, readCookieConsent } from '@/components/global/CookieConsent';

// Meta Pixel loads only after the visitor accepts cookies in the cookie banner.
export default function MetaPixel() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(readCookieConsent() === 'accepted');
    const onChange = (e: Event) => {
      setConsented((e as CustomEvent).detail === 'accepted');
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  if (!consented) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2658532794542128');
        fbq('track', 'PageView');
      `}
    </Script>
  );
}
