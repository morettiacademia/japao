import { config, faq, getFaqItems } from '@/content/imersao-japao';
import { Accordion } from './Accordion';
import { Eyebrow } from './Eyebrow';

export function FAQSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="container-page section-y flex flex-wrap items-start gap-[clamp(32px,6vw,88px)]">
        <div className="flex min-w-0 flex-[0.7_1_300px] flex-col gap-[22px]">
          <Eyebrow data={faq.eyebrow} />
          <h2 className="h2-title text-[clamp(28px,3.4vw,44px)]">{faq.title}</h2>
        </div>
        <div className="min-w-0 flex-[1.5_1_480px]">
          <Accordion variant="faq" items={getFaqItems(config)} defaultOpen={0} />
        </div>
      </div>
    </section>
  );
}
