import Image from 'next/image';
import { assets, nav } from '@/content/imersao-japao';
import { CtaLink } from './CtaLink';

export function Header() {
  return (
    <>
      <a
        href="#conteudo"
        className="absolute -top-16 left-4 z-[100] rounded-md bg-ink px-4 py-3 font-semibold text-white no-underline focus:top-3 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-white/94 backdrop-blur-[10px] backdrop-saturate-[1.4]">
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <a href="#topo" aria-label="Imersão Japão — voltar ao topo" className="flex items-center">
            <Image
              src={assets.logoImersao.src}
              alt="Imersão Japão"
              width={assets.logoImersao.width}
              height={assets.logoImersao.height}
              sizes="118px"
              className="block h-[38px] w-auto"
            />
          </a>
          <nav aria-label="Seções da página" className="hidden items-center gap-[30px] nav:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-[15px] font-medium text-ink no-underline transition-colors hover:text-red">
                {item.label}
              </a>
            ))}
          </nav>
          <CtaLink
            location="header"
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-md bg-ink px-5 font-display text-[13px] font-bold uppercase tracking-[0.06em] text-white no-underline transition-colors hover:bg-red hover:text-white"
          >
            Inscrever-se
          </CtaLink>
        </div>
      </header>
    </>
  );
}
