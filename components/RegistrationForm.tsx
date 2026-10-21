'use client';

import { CircleAlert } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { registration } from '@/content/imersao-japao';
import { track, trackOnce } from '@/lib/analytics';
import {
  digits,
  formatPhone,
  UTM_KEYS,
  validate,
  type FieldErrors,
  type FieldKey,
  type RegistrationFields,
  type RegistrationPayload,
} from '@/lib/registration';

type Props = {
  endpoint: string;
  mode: 'form' | 'checkout';
  checkoutUrl: string;
  thankYouUrl: string;
  marketingConsent: boolean;
  privacyPolicyUrl: string;
  contactEmail: string;
};

const t = registration.form;
const ORDER: FieldKey[] = ['name', 'email', 'phone', 'privacy'];

const inputClass = (invalid: boolean) =>
  `h-[54px] rounded-lg border-[1.5px] bg-white px-4 font-sans text-base text-ink outline-offset-2 ${invalid ? 'border-error' : 'border-input'}`;

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return (
    <span id={id} role="alert" className="text-sm font-medium text-error empty:hidden">
      {msg ?? ''}
    </span>
  );
}

export function RegistrationForm(props: Props) {
  // Dados pessoais ficam só em memória — nunca em localStorage.
  const [fields, setFields] = useState<RegistrationFields>({ name: '', email: '', phone: '', privacy: false });
  const [marketing, setMarketing] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [message, setMessage] = useState('');
  const utm = useRef<Partial<Record<(typeof UTM_KEYS)[number], string>>>({});
  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    privacy: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search);
      for (const k of UTM_KEYS) {
        const v = q.get(k);
        if (v) utm.current[k] = v.slice(0, 200);
      }
    } catch {}
  }, []);

  const formStart = () => trackOnce('form_start', { form: 'inscricao_imersao_japao' });

  function setField<K extends FieldKey>(k: K, v: RegistrationFields[K]) {
    formStart();
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => {
      const { [k]: _, ...rest } = e;
      return rest;
    });
    if (status !== 'error') setMessage('');
  }

  async function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (status === 'loading' || status === 'success') return;

    const errs = validate(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setMessage('');
      const first = ORDER.find((k) => errs[k]);
      if (first) refs[first].current?.focus();
      return;
    }

    track('form_submit', { form: 'inscricao_imersao_japao' });

    // Nunca simular sucesso sem endpoint configurado.
    if (!props.endpoint) {
      console.warn('[Imersão Japão] registrationEndpoint não configurado — inscrição não enviada.');
      setStatus('error');
      setMessage(t.errors.closed + (props.contactEmail ? ` ou escreva para ${props.contactEmail}.` : '.'));
      return;
    }

    setStatus('loading');
    setMessage('');
    setErrors({});

    const payload: RegistrationPayload = {
      product: 'imersao-japao',
      name: fields.name.trim(),
      email: fields.email.trim().toLowerCase(),
      whatsapp: digits(fields.phone),
      consent_privacy: true,
      consent_marketing: props.marketingConsent ? marketing : false,
      ...utm.current,
      page_url: window.location.href.split('?')[0],
      submitted_at: new Date().toISOString(),
    };

    try {
      const res = await fetch(props.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      // Lead ≠ compra: `purchase` só via confirmação de pagamento (webhook).
      trackOnce('generate_lead', { form: 'inscricao_imersao_japao' });
      setStatus('success');
      if (props.mode === 'checkout' && props.checkoutUrl) {
        trackOnce('begin_checkout');
        window.location.href = props.checkoutUrl;
      } else {
        window.location.href = props.thankYouUrl;
      }
    } catch {
      setStatus('error');
      setMessage(t.errors.network);
    }
  }

  const busy = status === 'loading' || status === 'success';
  const errMsg = (k: FieldKey) => (errors[k] ? t.errors[k] : undefined);

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="form-title" aria-busy={busy} className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <h3 id="form-title" className="m-0 font-display text-[22px] font-bold tracking-[-0.01em]">
          {t.title}
        </h3>
        <p className="m-0 text-[15px] text-muted">{t.hint}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-name" className="text-[15px] font-semibold">
          {t.labels.name}
        </label>
        <input
          ref={refs.name}
          id="f-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby="e-name"
          value={fields.name}
          onChange={(e) => setField('name', e.target.value)}
          onFocus={formStart}
          className={inputClass(!!errors.name)}
        />
        <FieldError id="e-name" msg={errMsg('name')} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-email" className="text-[15px] font-semibold">
          {t.labels.email}
        </label>
        <input
          ref={refs.email}
          id="f-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby="e-email"
          value={fields.email}
          onChange={(e) => setField('email', e.target.value)}
          onFocus={formStart}
          className={inputClass(!!errors.email)}
        />
        <FieldError id="e-email" msg={errMsg('email')} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-phone" className="text-[15px] font-semibold">
          {t.labels.phone}
        </label>
        <input
          ref={refs.phone}
          id="f-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={t.phonePlaceholder}
          required
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby="e-phone"
          value={fields.phone}
          onChange={(e) => setField('phone', formatPhone(e.target.value))}
          onFocus={formStart}
          className={inputClass(!!errors.phone)}
        />
        <FieldError id="e-phone" msg={errMsg('phone')} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-privacy" className="flex cursor-pointer items-start gap-3 text-[15px] leading-[1.5] text-body">
          <input
            ref={refs.privacy}
            id="f-privacy"
            name="privacy"
            type="checkbox"
            required
            aria-required="true"
            checked={fields.privacy}
            onChange={(e) => setField('privacy', e.target.checked)}
            aria-invalid={!!errors.privacy}
            aria-describedby="e-privacy"
            className="mt-px size-[22px] flex-none cursor-pointer accent-red"
          />
          <span>
            {t.privacy[0]}
            {props.privacyPolicyUrl ? (
              <a href={props.privacyPolicyUrl} target="_blank" rel="noopener">
                {t.privacy[1]}
              </a>
            ) : (
              t.privacy[1]
            )}
            {t.privacy[2]}
          </span>
        </label>
        <FieldError id="e-privacy" msg={errMsg('privacy')} />
      </div>

      {props.marketingConsent && (
        <label htmlFor="f-marketing" className="flex cursor-pointer items-start gap-3 text-[15px] leading-[1.5] text-body">
          <input
            id="f-marketing"
            name="marketing"
            type="checkbox"
            checked={marketing}
            onChange={(e) => setMarketing(e.target.checked)}
            className="mt-px size-[22px] flex-none cursor-pointer accent-red"
          />
          <span>{t.marketing}</span>
        </label>
      )}

      {message && (
        <div role="alert" className="flex gap-2.5 rounded-lg border border-alert-border bg-alert-bg px-4 py-3.5 text-[15px] leading-[1.5] text-alert-text">
          <CircleAlert aria-hidden="true" size={20} strokeWidth={2} className="mt-px flex-none" />
          <span>{message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className={`flex min-h-[60px] cursor-pointer items-center justify-center gap-3 rounded-md border-0 px-6 font-display text-[15px] font-bold uppercase tracking-[0.05em] text-white transition-colors duration-200 disabled:cursor-wait ${
          busy ? 'bg-muted' : 'bg-red hover:bg-red-hover'
        }`}
      >
        {busy ? t.submitting : t.submit}
      </button>
      <p className="m-0 text-center text-[13px] leading-[1.5] text-muted">{t.footnote}</p>
    </form>
  );
}
