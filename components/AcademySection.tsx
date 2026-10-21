import Image from 'next/image';
import { academy, assets } from '@/content/imersao-japao';

export function AcademySection() {
  return (
    <section id="academia" className="bg-white">
      {/* wrap-reverse: no mobile a foto vem antes do texto */}
      <div className="container-page section-y flex flex-wrap-reverse items-center gap-[clamp(40px,6vw,96px)]">
        <div className="flex min-w-0 flex-[1.25_1_440px] flex-col gap-[26px]">
          <Image
            src={assets.logoAcademia.src}
            alt="Academia da Magia"
            width={assets.logoAcademia.width}
            height={assets.logoAcademia.height}
            sizes="120px"
            className="block h-auto w-[120px]"
          />
          <p className="m-0 font-display text-[13px] font-bold uppercase tracking-[0.18em] text-red">{academy.eyebrow}</p>
          <h2 className="h2-title">{academy.title}</h2>
          <div className="flex max-w-[620px] flex-col gap-[18px] text-lg leading-[1.7] text-body">
            {academy.paragraphs.map((p) => (
              <p key={p.text} className={`m-0 ${p.strong ? 'font-semibold text-ink' : ''}`}>
                {p.text}
              </p>
            ))}
          </div>
        </div>
        <div className="relative mx-auto min-w-0 max-w-[460px] flex-[0.8_1_300px]">
          <div aria-hidden="true" className="absolute -bottom-[18px] -left-[18px] aspect-square w-[46%] rounded-full border-2 border-red" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[120px_4px_4px_4px] bg-line">
            <Image
              src={academy.image.src}
              alt={academy.image.alt}
              fill
              sizes="(max-width: 860px) 100vw, 460px"
              className="object-cover object-[50%_45%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
