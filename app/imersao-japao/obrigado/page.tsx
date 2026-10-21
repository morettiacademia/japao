import type { Metadata } from 'next';
import Image from 'next/image';
import { Analytics } from '@/components/Analytics';
import { assets, config, thankYou } from '@/content/imersao-japao';

export const metadata: Metadata = {
  title: thankYou.title,
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <main className="box-border flex min-h-screen items-center justify-center bg-offwhite px-5 py-12">
      <div className="flex w-full max-w-[640px] flex-col items-start gap-6 rounded-[10px] border border-line bg-white p-[clamp(32px,6vw,64px)]">
        <Image
          src={assets.logoImersao.src}
          alt="Imersão Japão"
          width={assets.logoImersao.width}
          height={assets.logoImersao.height}
          sizes="220px"
          preload
          className="block h-auto w-[220px]"
        />
        <div className="flex items-center gap-3.5">
          <span aria-hidden="true" className="size-3.5 rounded-full bg-red" />
          <span lang="ja" className="text-[15px] font-bold">
            {thankYou.ja}
          </span>
          <span className="text-sm text-muted">{thankYou.romaji}</span>
        </div>
        <h1 className="m-0 font-display text-[clamp(28px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">{thankYou.heading}</h1>
        <p className="m-0 text-lg leading-[1.65] text-body">{thankYou.text}</p>
        <a
          href="/imersao-japao/"
          className="inline-flex min-h-[52px] items-center rounded-md bg-ink px-6 font-display text-sm font-bold uppercase tracking-[0.06em] text-white no-underline transition-colors hover:bg-red hover:text-white"
        >
          {thankYou.back}
        </a>
      </div>
      <Analytics gtmId={config.gtmId} ga4Id={config.ga4Id} page="thank_you" />
    </main>
  );
}
