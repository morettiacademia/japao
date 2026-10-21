import type { Eyebrow as EyebrowData } from '@/content/imersao-japao';

export function Eyebrow({ data, dark = false }: { data: EyebrowData; dark?: boolean }) {
  return (
    <p className={`m-0 flex flex-wrap items-baseline gap-x-3.5 gap-y-1 text-[13px] ${dark ? 'text-label-dark' : 'text-muted'}`}>
      <span className={`font-display font-bold uppercase tracking-[0.18em] ${dark ? 'text-red-bright' : 'text-red'}`}>{data.label}</span>
      <span lang="ja" className={`text-[15px] ${dark ? 'text-white' : 'text-ink'}`}>
        {data.ja}
      </span>
      <span>{data.romaji}</span>
    </p>
  );
}
