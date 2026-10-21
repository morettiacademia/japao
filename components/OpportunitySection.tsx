import Image from 'next/image';
import { opportunity } from '@/content/imersao-japao';
import { Eyebrow } from './Eyebrow';

export function OpportunitySection() {
  return (
    <section id="oportunidade" className="border-t border-line bg-white">
      <div className="container-page section-y flex flex-wrap items-start gap-[clamp(40px,6vw,96px)]">
        <figure className="m-0 min-w-0 flex-[0.85_1_320px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded bg-line">
            <Image
              src={opportunity.image.src}
              alt={opportunity.image.alt}
              fill
              sizes="(max-width: 860px) 100vw, 460px"
              className="object-cover object-[50%_25%]"
            />
          </div>
          <figcaption className="mt-3.5 text-[13px] text-muted">{opportunity.image.caption}</figcaption>
        </figure>
        <div className="flex min-w-0 flex-[1.25_1_440px] flex-col gap-[26px]">
          <Eyebrow data={opportunity.eyebrow} />
          <h2 className="h2-title">{opportunity.title}</h2>
          <div className="flex max-w-[620px] flex-col gap-[18px] text-lg leading-[1.7] text-body">
            {opportunity.paragraphs.map((p) => (
              <p key={p.text} className={`m-0 ${p.strong ? 'font-semibold text-ink' : ''}`}>
                {p.text}
              </p>
            ))}
          </div>
          <p className="m-0 mt-3 max-w-[620px] border-t border-line pt-7 font-display text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.25] tracking-[-0.015em] text-red">
            {opportunity.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
