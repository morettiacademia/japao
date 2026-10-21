import { Award, Compass, Layers, MessageSquareText } from 'lucide-react';
import { audience } from '@/content/imersao-japao';
import { Eyebrow } from './Eyebrow';

const icons = { compass: Compass, message: MessageSquareText, layers: Layers, award: Award };

export function AudienceSection() {
  return (
    <section id="publico" className="bg-offwhite">
      <div className="container-page section-y flex flex-col gap-[clamp(40px,5vw,64px)]">
        <div className="flex flex-wrap items-end gap-x-16 gap-y-6">
          <div className="flex min-w-0 flex-[1.3_1_460px] flex-col gap-[22px]">
            <Eyebrow data={audience.eyebrow} />
            <h2 className="h2-title">{audience.title}</h2>
          </div>
          <p className="m-0 min-w-0 flex-[1_1_320px] text-lg leading-[1.65] text-body">{audience.intro}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-4">
          {audience.cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <article
                key={card.title}
                className="flex flex-col gap-[18px] rounded-lg border border-line bg-white p-[clamp(28px,3vw,40px)] transition-[transform,border-color,box-shadow] duration-250 ease-in-out hover:-translate-y-1 hover:border-red hover:shadow-[0_18px_40px_-28px_rgba(17,17,17,0.35)]"
              >
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" size={32} strokeWidth={1.6} className="text-red" />
                  <span className="font-display text-[13px] font-semibold text-muted">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="m-0 font-display text-lg font-bold uppercase leading-[1.3] tracking-[0.02em]">{card.title}</h3>
                <p className="m-0 text-[17px] leading-[1.6] text-body">{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
