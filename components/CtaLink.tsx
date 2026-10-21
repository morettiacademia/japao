'use client';

import { trackCta, type CtaLocation } from '@/lib/analytics';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { location: CtaLocation };

/** Todos os CTAs são âncoras para #inscricao. */
export function CtaLink({ location, onClick, href = '#inscricao', ...rest }: Props) {
  return (
    <a
      href={href}
      onClick={(e) => {
        trackCta(location);
        onClick?.(e);
      }}
      {...rest}
    />
  );
}
