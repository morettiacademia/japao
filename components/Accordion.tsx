'use client';

import { useId, useState } from 'react';

type ModuleItem = { title: string; description: string; topics: string[] };
type FaqItem = { q: string; a: string };

type Props =
  | { variant: 'modules'; items: ModuleItem[]; defaultOpen?: number }
  | { variant: 'faq'; items: FaqItem[]; defaultOpen?: number };

/** Um item aberto por vez. Painéis ficam no HTML (hidden) para SEO e aria-controls válido. */
export function Accordion(props: Props) {
  const [open, setOpen] = useState(props.defaultOpen ?? 0);
  const uid = useId();
  const toggle = (i: number) => setOpen((cur) => (cur === i ? -1 : i));

  if (props.variant === 'modules') {
    return (
      <ol className="m-0 list-none border-t-2 border-ink p-0">
        {props.items.map((m, i) => {
          const isOpen = open === i;
          const num = String(i + 1).padStart(2, '0');
          const btnId = `${uid}-btn-${i}`;
          const panelId = `${uid}-panel-${i}`;
          return (
            <li key={m.title} className="border-b border-line py-7">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-[22px] gap-y-1">
                <span aria-hidden="true" className="pt-1 font-display text-[15px] font-bold text-red">
                  {num}
                </span>
                <h3 className="m-0 font-display text-[clamp(18px,1.7vw,22px)] font-bold leading-[1.3] tracking-[-0.005em]">
                  <span className="sr-only">Módulo {num}: </span>
                  {m.title}
                </h3>
                <p className="col-start-2 m-0 mt-1.5 text-[17px] leading-[1.6] text-body">{m.description}</p>
                <div className="col-start-2 mt-3.5">
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className={`inline-flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border border-ink pr-4 pl-3.5 font-display text-[13px] font-semibold tracking-[0.04em] transition-colors duration-200 ${
                      isOpen ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-offwhite'
                    }`}
                  >
                    <span aria-hidden="true" className="w-3 text-center text-lg leading-none">
                      {isOpen ? '−' : '+'}
                    </span>
                    {isOpen ? 'Ocultar tópicos' : `Ver os ${m.topics.length} tópicos`}
                  </button>
                </div>
                <ul
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="col-start-2 m-0 mt-[18px] flex list-none flex-wrap gap-2 p-0 [&[hidden]]:hidden"
                >
                  {m.topics.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-offwhite px-3.5 py-[9px] text-[15px] text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <div className="border-t-2 border-ink">
      {props.items.map((f, i) => {
        const isOpen = open === i;
        const btnId = `${uid}-btn-${i}`;
        const panelId = `${uid}-panel-${i}`;
        return (
          <div key={f.q} className="border-b border-line">
            <h3 className="m-0">
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent py-6 text-left font-display text-[clamp(17px,1.5vw,20px)] font-semibold leading-[1.35] text-ink transition-colors hover:text-red"
              >
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="flex size-9 flex-none items-center justify-center rounded-full border border-ink text-xl leading-none"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="pr-[60px] pb-[26px] max-sm:pr-0">
              <p className="m-0 text-[17px] leading-[1.65] text-body">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
