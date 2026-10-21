// Validação compartilhada entre o formulário (cliente) e o Route Handler (servidor).

export type RegistrationFields = { name: string; email: string; phone: string; privacy: boolean };
export type FieldKey = keyof RegistrationFields;
export type FieldErrors = Partial<Record<FieldKey, true>>;

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const digits = (v: string) => v.replace(/\D/g, '');

export function formatPhone(v: string) {
  const d = digits(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function validate(f: RegistrationFields): FieldErrors {
  const e: FieldErrors = {};
  if (f.name.trim().split(/\s+/).filter(Boolean).length < 2) e.name = true;
  if (!EMAIL_RE.test(f.email.trim())) e.email = true;
  const d = digits(f.phone);
  if (d.length < 10 || d.length > 11) e.phone = true;
  if (!f.privacy) e.privacy = true;
  return e;
}

export const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;

export type RegistrationPayload = {
  product: 'imersao-japao';
  name: string;
  email: string;
  whatsapp: string;
  consent_privacy: true;
  consent_marketing: boolean;
  page_url: string;
  submitted_at: string;
} & Partial<Record<(typeof UTM_KEYS)[number], string>>;
