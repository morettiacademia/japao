import type { Metadata } from 'next';
import { AcademySection } from '@/components/AcademySection';
import { Analytics } from '@/components/Analytics';
import { AudienceSection } from '@/components/AudienceSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { ClosingSection } from '@/components/ClosingSection';
import { CurriculumSection } from '@/components/CurriculumSection';
import { DestinationsSection } from '@/components/DestinationsSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OpportunitySection } from '@/components/OpportunitySection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { assets, config, seo } from '@/content/imersao-japao';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: config.canonicalUrl || '/imersao-japao/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Academia da Magia',
    title: seo.title,
    description: seo.ogDescription,
    url: config.canonicalUrl || '/imersao-japao/',
    images: [{ url: assets.og, width: 1200, height: 630, alt: seo.ogImageAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.twitterDescription,
    images: [assets.og],
  },
};

function JsonLd() {
  // Organization: apenas `name` até haver dados oficiais. Event: só com data confirmada.
  const graph: Record<string, unknown>[] = [{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Academia da Magia' }];
  if (config.eventStartISO) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Imersão Japão',
      description: 'Imersão online e ao vivo para agentes de viagens sobre o Japão como destino e oportunidade comercial.',
      startDate: config.eventStartISO,
      ...(config.eventEndISO ? { endDate: config.eventEndISO } : {}),
      eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'VirtualLocation', ...(config.canonicalUrl ? { url: config.canonicalUrl } : {}) },
      organizer: { '@type': 'Organization', name: 'Academia da Magia' },
    });
  }
  return graph.map((ld, i) => (
    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld).replace(/</g, '\\u003c') }} />
  ));
}

export default function ImersaoJapaoPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="conteudo">
        <Hero />
        <OpportunitySection />
        <AudienceSection />
        <CurriculumSection />
        <DestinationsSection />
        <BenefitsSection />
        <AcademySection />
        <RegistrationSection />
        <FAQSection />
        <ClosingSection />
      </main>
      <Footer />
      <StickyMobileCTA />
      <Analytics gtmId={config.gtmId} ga4Id={config.ga4Id} page="landing" />
    </>
  );
}
