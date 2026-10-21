'use client';

import { useEffect } from 'react';
import { trackOnce } from '@/lib/analytics';

export const CONSENT_EVENT = 'imersao:analytics-consent';

declare global {
  interface Window {
    /** A ferramenta de consentimento (LGPD) deve definir true e disparar CONSENT_EVENT. */
    __analyticsConsent?: boolean;
  }
}

function loadScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadTags(gtmId: string, ga4Id: string) {
  window.dataLayer = window.dataLayer || [];
  if (gtmId) {
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
  }
  if (ga4Id) {
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', ga4Id);
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`);
  }
}

/** Eventos de página + carregamento de GTM/GA4 somente após consentimento. */
export function Analytics({ gtmId, ga4Id, page }: { gtmId: string; ga4Id: string; page: 'landing' | 'thank_you' }) {
  useEffect(() => {
    trackOnce(page === 'landing' ? 'view_landing_page' : 'view_thank_you');

    let io: IntersectionObserver | undefined;
    const prog = document.getElementById('programa');
    if (prog && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            trackOnce('view_curriculum');
            io?.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      io.observe(prog);
    }

    let loaded = false;
    const maybeLoad = () => {
      if (loaded || !window.__analyticsConsent || (!gtmId && !ga4Id)) return;
      loaded = true;
      loadTags(gtmId, ga4Id);
    };
    maybeLoad();
    window.addEventListener(CONSENT_EVENT, maybeLoad);
    return () => {
      io?.disconnect();
      window.removeEventListener(CONSENT_EVENT, maybeLoad);
    };
  }, [gtmId, ga4Id, page]);

  return null;
}
