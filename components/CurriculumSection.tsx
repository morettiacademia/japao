import { curriculum } from '@/content/imersao-japao';
import { Accordion } from './Accordion';
import { CtaLink } from './CtaLink';
import { Eyebrow } from './Eyebrow';

export function CurriculumSection() {
  return (
    <section id="programa" className="bg-white">
      <div className="container-page section-y flex flex-wrap items-start gap-[clamp(40px,6vw,88px)]">
        <div className="flex min-w-0 flex-[0.8_1_320px] flex-col gap-6 nav:sticky nav:top-[110px]">
          <Eyebrow data={curriculum.eyebrow} />
          <h2 className="h2-title text-[clamp(28px,3.4vw,44px)]">{curriculum.title}</h2>
          <p className="m-0 text-lg leading-[1.65] text-body">{curriculum.subtitle}</p>
          <p className="m-0 flex flex-wrap gap-[18px] font-display text-sm font-semibold text-ink">
            <span>{curriculum.meta[0]}</span>
            <span aria-hidden="true" className="text-red">
              ·
            </span>
            <span>{curriculum.meta[1]}</span>
          </p>
        </div>
        <div className="flex min-w-0 flex-[1.4_1_480px] flex-col">
          <Accordion variant="modules" items={curriculum.modules} defaultOpen={0} />
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <CtaLink location="curriculum" className="btn-primary">
              {curriculum.cta} <span aria-hidden="true">→</span>
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
