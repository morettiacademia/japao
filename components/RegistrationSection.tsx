import { config, getEventInfo, registration } from '@/content/imersao-japao';
import { Eyebrow } from './Eyebrow';
import { RegistrationForm } from './RegistrationForm';

export function RegistrationSection() {
  const rows = [
    ...registration.fixedInfo.map((r) => ({ ...r, pending: false })),
    ...getEventInfo(config).map((r) => ({ label: r.label, value: r.value || registration.tbd, pending: !r.value })),
  ];

  return (
    <section id="inscricao" className="border-t border-line bg-offwhite">
      <div className="container-page section-y flex flex-wrap items-start gap-[clamp(40px,6vw,88px)]">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-6">
          <Eyebrow data={registration.eyebrow} />
          <h2 className="h2-title text-[clamp(28px,3.4vw,44px)]">{registration.title}</h2>
          <div className="flex flex-col gap-4 text-lg leading-[1.65] text-body">
            {registration.paragraphs.map((p) => (
              <p key={p} className="m-0">
                {p}
              </p>
            ))}
          </div>
          <dl className="m-0 mt-2 grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] border-t-2 border-ink p-0">
            {rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-[3px] border-b border-divider py-4 pr-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{r.label}</dt>
                <dd className={`m-0 font-display text-base font-semibold leading-[1.35] ${r.pending ? 'text-muted' : 'text-ink'}`}>{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="min-w-0 flex-[1_1_420px] rounded-[10px] border border-line bg-white p-[clamp(24px,3.4vw,44px)] shadow-[0_30px_60px_-48px_rgba(17,17,17,0.45)]">
          <RegistrationForm
            endpoint={config.registrationEndpoint}
            mode={config.registrationMode}
            checkoutUrl={config.checkoutUrl}
            thankYouUrl={config.thankYouUrl}
            marketingConsent={config.marketingConsent}
            privacyPolicyUrl={config.privacyPolicyUrl}
            contactEmail={config.contactEmail}
          />
        </div>
      </div>
    </section>
  );
}
