import Image from 'next/image';
import { destinations, type Destination } from '@/content/imersao-japao';
import { Eyebrow } from './Eyebrow';

function DestinationCard({ d }: { d: Destination }) {
  const wide = d.layout === 'wide';
  const tall = d.layout === 'tall';
  return (
    <article
      className={`group relative overflow-hidden rounded-md bg-placeholder ${tall ? 'row-span-2' : ''} ${wide ? 'col-span-full' : ''}`}
    >
      {d.image && (
        <Image
          src={d.image.src}
          alt={d.image.alt}
          fill
          sizes={wide ? '(max-width: 1240px) 100vw, 1130px' : '(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 380px'}
          className="object-cover transition-transform duration-800 ease-in-out group-hover:scale-[1.04]"
          style={{ objectPosition: d.image.position }}
        />
      )}
      {wide ? (
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-2 bg-[linear-gradient(to_right,rgba(17,17,17,0.82)_0%,rgba(17,17,17,0.35)_55%,rgba(17,17,17,0)_80%)] px-[clamp(24px,3vw,40px)] py-7">
          <h3 className="m-0 font-display text-[clamp(22px,2.4vw,30px)] font-bold uppercase tracking-[0.08em] text-white">{d.name}</h3>
          <p className="m-0 max-w-[380px] text-[17px] leading-[1.5] text-white">{d.text}</p>
        </div>
      ) : (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1.5 bg-[linear-gradient(to_top,rgba(17,17,17,0.88),rgba(17,17,17,0))] px-6 pb-[22px] ${tall ? 'pt-20' : 'pt-16'}`}
        >
          <h3 className="m-0 flex items-baseline gap-2.5 font-display text-[22px] font-bold uppercase tracking-[0.08em] text-white">
            {d.name}
            {d.ja && (
              <span lang="ja" className="text-sm font-medium tracking-normal">
                {d.ja}
              </span>
            )}
          </h3>
          <p className="m-0 text-base leading-[1.5] text-white">{d.text}</p>
        </div>
      )}
    </article>
  );
}

export function DestinationsSection() {
  return (
    <section id="destinos" className="bg-offwhite">
      <div className="container-page section-y flex flex-col gap-[clamp(36px,4vw,56px)]">
        <div className="flex flex-wrap items-end gap-x-16 gap-y-6">
          <div className="flex min-w-0 flex-[1.3_1_460px] flex-col gap-[22px]">
            <Eyebrow data={destinations.eyebrow} />
            <h2 className="h2-title">{destinations.title}</h2>
          </div>
          <p className="m-0 min-w-0 flex-[1_1_300px] text-lg leading-[1.65] text-body">{destinations.intro}</p>
        </div>
        <div className="grid auto-rows-[320px] grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3.5">
          {destinations.items.map((d) => (
            <DestinationCard key={d.name} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
