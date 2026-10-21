import type { MetadataRoute } from 'next';
import { config } from '@/content/imersao-japao';

// PENDENTE: definir NEXT_PUBLIC_SITE_URL com o domínio oficial.
const base = config.siteUrl || 'https://SEU-DOMINIO';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/imersao-japao/', disallow: ['/imersao-japao/obrigado/', '/api/'] },
    sitemap: `${base}/sitemap.xml`,
  };
}
