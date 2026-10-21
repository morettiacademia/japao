import Image from 'next/image';
import { closing, hero } from '@/content/imersao-japao';
import { CtaLink } from './CtaLink';

export function ClosingSection() {
  return (
    <section id="encerramento" className="relative flex min-h-[min(86vh,760px)] items-center overflow-hidden bg-ink text-white">
      <Image src={hero.image.src} alt="" fill sizes="100vw" className="object-cover object-[50%_34%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(17,17,17,0.35),rgba(17,17,17,0.78)_70%)]" />
      <div className="container-page relative flex w-full flex-col items-center gap-7 py-[clamp(96px,12vw,160px)] text-center">
        <div aria-hidden="true" className="size-14 rounded-full bg-red" />
        <h2 className="m-0 max-w-[900px] font-display text-[clamp(30px,4.6vw,62px)] font-bold leading-[1.06] tracking-[-0.025em] text-white">
          {closing.title}
        </h2>
        <p className="m-0 max-w-[640px] text-[clamp(17px,1.5vw,20px)] leading-[1.6] text-white">{closing.text}</p>
        <p className="m-0 font-display text-[clamp(18px,1.8vw,22px)] font-bold text-white">{closing.strong}</p>
        <CtaLink location="closing" className="btn-primary mt-2 min-h-[60px] px-9 text-center">
          {closing.cta} <span aria-hidden="true">→</span>
        </CtaLink>
      </div>
    </section>
  );
}
