import Image from 'next/image';
import { assets, config, getEventInfo, hero } from '@/content/imersao-japao';
import { CtaLink } from './CtaLink';

export function Hero() {
  const info = getEventInfo(config).filter((i) => i.value);

  return (
    <section id="topo" className="relative overflow-hidden bg-white">
      <div className="container-page flex flex-wrap items-center gap-[clamp(40px,5vw,72px)] pt-[clamp(40px,6vw,88px)] pb-[clamp(56px,7vw,104px)]">
        <div className="flex min-w-0 flex-[1.15_1_440px] flex-col gap-7">
          <p className="m-0 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            <span aria-hidden="true" className="block h-0.5 w-7 bg-red" />
            {hero.kicker}
          </p>
          <Image
            src={assets.logoImersao.src}
            alt={hero.logoAlt}
            width={assets.logoImersao.width}
            height={assets.logoImersao.height}
            sizes="(max-width: 440px) 100vw, 400px"
            loading="eager"
            className="-ml-1.5 block h-auto w-[min(100%,400px)]"
          />
          <h1 className="m-0 font-display text-[clamp(30px,4.2vw,54px)] font-bold leading-[1.08] tracking-[-0.025em] text-ink">
            {hero.titleLead} <span className="text-red">{hero.titleHighlight}</span>
          </h1>
          <p className="m-0 max-w-[560px] text-[clamp(17px,1.4vw,19px)] leading-[1.6] text-body">{hero.subheadline}</p>
          <ul
            aria-label="Formato"
            className="m-0 flex list-none flex-wrap gap-x-[22px] gap-y-2.5 p-0 font-display text-[13px] font-bold uppercase tracking-[0.12em] text-ink"
          >
            {hero.format.map((f) => (
              <li key={f} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-[7px] rounded-full bg-red" />
                {f}
              </li>
            ))}
          </ul>
          {info.length > 0 && (
            <dl className="m-0 flex flex-wrap border-y border-line">
              {info.map((i) => (
                <div key={i.label} className="mr-6 flex flex-col gap-0.5 py-3.5 pr-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{i.label}</dt>
                  <dd className="m-0 font-display text-base font-semibold text-ink">{i.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <div className="flex flex-col items-start gap-3.5">
            <CtaLink location="hero" className="btn-primary shadow-[0_10px_24px_-12px_rgba(213,9,32,0.6)] hover:-translate-y-px">
              {hero.cta} <span aria-hidden="true">→</span>
            </CtaLink>
            <p className="m-0 text-[15px] text-muted">{hero.microcopy}</p>
          </div>
        </div>

        <div className="relative mx-auto min-w-0 max-w-[520px] flex-[1_1_360px]">
          <div aria-hidden="true" className="absolute -top-[6%] -right-[14%] aspect-square w-[62%] rounded-full bg-red" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px_120px_4px_4px] bg-line">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              preload
              sizes="(max-width: 860px) 100vw, 520px"
              className="object-cover object-[50%_30%]"
            />
          </div>
          <p className="absolute bottom-6 -left-px m-0 flex items-center gap-3 bg-white py-3 pr-[18px] text-[13px] text-body">
            <span lang="ja" className="text-lg font-bold text-ink">
              {hero.tag.ja}
            </span>
            {hero.tag.label}
          </p>
        </div>
      </div>
    </section>
  );
}
