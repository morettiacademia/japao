import { differential } from '@/content/imersao-japao';
import { Eyebrow } from './Eyebrow';

export function BenefitsSection() {
  return (
    <section id="diferencial" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        lang="ja"
        className="pointer-events-none absolute top-1/2 -right-[4%] -translate-y-1/2 select-none text-[clamp(320px,46vw,680px)] font-bold leading-none text-watermark"
      >
        {differential.watermark}
      </div>
      <div className="container-page relative flex flex-col gap-[clamp(40px,5vw,64px)] py-[clamp(80px,11vw,160px)]">
        <Eyebrow data={differential.eyebrow} dark />
        <h2 className="m-0 max-w-[960px] font-display text-[clamp(30px,4.2vw,58px)] font-bold leading-[1.08] tracking-[-0.025em] text-white">
          {differential.titleLead} <span className="text-red-bright">{differential.titleHighlight}</span>
        </h2>
        <div className="flex flex-wrap gap-x-[clamp(40px,6vw,96px)] gap-y-8">
          {differential.columns.map((col, i) => (
            <div key={i} className="flex min-w-0 flex-[1_1_360px] flex-col gap-[18px] text-lg leading-[1.7] text-body-dark">
              {col.map((p) => (
                <p key={p.text} className={`m-0 ${'strong' in p && p.strong ? 'font-semibold text-white' : ''}`}>
                  {p.text}
                </p>
              ))}
            </div>
          ))}
        </div>
        <p className="m-0 max-w-[900px] border-t border-divider-dark pt-9 font-display text-[clamp(22px,2.6vw,34px)] font-bold leading-[1.25] tracking-[-0.015em] text-white">
          {differential.closingLead} <span className="text-red-bright">{differential.closingHighlight}</span>
        </p>
      </div>
    </section>
  );
}
