import Image from 'next/image';
import { assets, config, footer } from '@/content/imersao-japao';

export function Footer() {
  // Links institucionais/redes só renderizam se a URL existir (nunca href="#").
  const links = [
    { label: 'Política de Privacidade', href: config.privacyPolicyUrl },
    { label: 'Termos de uso', href: config.termsUrl },
    { label: config.contactEmail, href: config.contactEmail && `mailto:${config.contactEmail}` },
    { label: 'Instagram', href: config.instagramUrl, external: true },
    { label: 'YouTube', href: config.youtubeUrl, external: true },
  ].filter((l) => l.href);

  return (
    <footer className="border-t border-[#222] bg-ink text-label-dark">
      <div className="container-page flex flex-wrap items-center justify-between gap-x-14 gap-y-8 pt-14 pb-10">
        <div className="flex items-center gap-[18px]">
          <Image
            src={assets.logoAcademia.src}
            alt="Academia da Magia"
            width={assets.logoAcademia.width}
            height={assets.logoAcademia.height}
            sizes="84px"
            className="block h-auto w-[84px]"
          />
          <div className="flex flex-col gap-1">
            <span className="font-display text-base font-bold text-white">{footer.name}</span>
            <span className="text-sm">{footer.description}</span>
          </div>
        </div>
        {links.length > 0 && (
          <nav aria-label="Links institucionais" className="flex flex-wrap gap-x-7 gap-y-3 text-[15px]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white hover:text-red-bright"
                {...(l.external ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <div className="container-page border-t border-[#222] pt-5 pb-8 text-[13px] text-[#9A9A9A]">
        © {new Date().getFullYear()} {footer.rights}
      </div>
      {/* Espaço para o CTA fixo no mobile */}
      <div aria-hidden="true" className="h-[84px] nav:hidden" />
    </footer>
  );
}
