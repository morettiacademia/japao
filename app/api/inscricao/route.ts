import { NextResponse } from 'next/server';
import { digits, EMAIL_RE, UTM_KEYS, validate, type RegistrationPayload } from '@/lib/registration';

// Repassa a inscrição ao CRM/automação. Credenciais ficam só no servidor:
// REGISTRATION_WEBHOOK_URL (obrigatória) e REGISTRATION_WEBHOOK_TOKEN (opcional, enviado como Bearer).

const str = (v: unknown, max = 300) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(req: Request) {
  const webhook = process.env.REGISTRATION_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ ok: false, error: 'registration_not_configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const name = str(body.name, 200);
  const email = str(body.email, 254).toLowerCase();
  const whatsapp = digits(str(body.whatsapp, 30));
  const errors = validate({ name, email, phone: whatsapp, privacy: body.consent_privacy === true });
  if (Object.keys(errors).length || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_fields', fields: Object.keys(errors) }, { status: 422 });
  }

  const payload: RegistrationPayload = {
    product: 'imersao-japao',
    name,
    email,
    whatsapp,
    consent_privacy: true,
    consent_marketing: body.consent_marketing === true,
    page_url: str(body.page_url, 500),
    submitted_at: str(body.submitted_at, 40) || new Date().toISOString(),
  };
  for (const k of UTM_KEYS) {
    const v = str(body[k], 200);
    if (v) payload[k] = v;
  }

  try {
    const token = process.env.REGISTRATION_WEBHOOK_TOKEN;
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error('[inscricao] CRM respondeu', res.status);
      return NextResponse.json({ ok: false, error: 'upstream_error' }, { status: 502 });
    }
  } catch (err) {
    console.error('[inscricao] falha ao contatar CRM', err);
    return NextResponse.json({ ok: false, error: 'upstream_unreachable' }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
