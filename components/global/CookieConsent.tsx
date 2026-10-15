"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export const COOKIE_CONSENT_KEY = 'cookieConsent';
export const COOKIE_CONSENT_EVENT = 'cookie-consent-change';

export type CookieConsentValue = 'accepted' | 'declined';

export function readCookieConsent(): CookieConsentValue | null {
  try {
    const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

function saveCookieConsent(value: CookieConsentValue) {
  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
  } catch {
    // storage unavailable: the choice applies to this page view only
  }
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(readCookieConsent() === null);
  }, []);

  if (!visible) return null;

  const choose = (value: CookieConsentValue) => {
    saveCookieConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-28 lg:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[300] bg-white text-deep-navy border border-deep-navy/10 rounded-2xl shadow-2xl p-5 md:p-6"
    >
      <p className="text-sm leading-relaxed text-deep-navy/80">
        We use cookies, including the Meta Pixel, to understand how visitors use our website and to support our marketing.
        Marketing cookies load only if you accept. See our{' '}
        <Link href="/privacy-policy#cookies" className="text-electric-sapphire font-semibold hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose('accepted')}
          className="flex-1 bg-electric-sapphire hover:bg-deep-navy text-white text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose('declined')}
          className="flex-1 border border-deep-navy/20 hover:border-deep-navy text-deep-navy text-sm font-bold px-4 py-2.5 rounded-xl transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
