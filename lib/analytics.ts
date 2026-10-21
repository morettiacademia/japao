'use client';

// Eventos para dataLayer (+ gtag, se existir). Nunca enviar nome, e-mail ou telefone.

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const fired = new Set<string>();

export function track(name: string, params: Params = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
  if (typeof window.gtag === 'function') window.gtag('event', name, params);
}

/** Eventos únicos (view_landing_page, view_curriculum, form_start, generate_lead…) não duplicam. */
export function trackOnce(name: string, params?: Params) {
  if (fired.has(name)) return;
  fired.add(name);
  track(name, params);
}

export type CtaLocation = 'hero' | 'header' | 'curriculum' | 'closing' | 'sticky_mobile';

export function trackCta(location: CtaLocation) {
  track(location === 'hero' ? 'click_primary_cta' : 'click_registration_cta', { cta_location: location });
}
