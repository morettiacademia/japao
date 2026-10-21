'use client';

import { useEffect, useState } from 'react';
import { stickyCta } from '@/content/imersao-japao';
import { CtaLink } from './CtaLink';

/** Barra fixa < 860px; oculta enquanto #inscricao está visível. */
export function StickyMobileCTA() {
  const [mobile, setMobile] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 859.98px)');
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);

    const target = document.getElementById('inscricao');
    let io: IntersectionObserver | undefined;
    if (target && 'IntersectionObserver' in window) {
      io = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.12 });
      io.observe(target);
    }
    return () => {
      mq.removeEventListener('change', update);
      io?.disconnect();
    };
  }, []);

  if (!mobile || formVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/96 px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] backdrop-blur-[8px]">
      <CtaLink
        location="sticky_mobile"
        className="flex min-h-[54px] items-center justify-center rounded-md bg-red font-display text-[15px] font-bold uppercase tracking-[0.06em] text-white no-underline hover:bg-red-hover hover:text-white"
      >
        {stickyCta}
      </CtaLink>
    </div>
  );
}
