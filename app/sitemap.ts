import type { MetadataRoute } from 'next';
import { config } from '@/content/imersao-japao';

// PENDENTE: definir NEXT_PUBLIC_SITE_URL com o domínio oficial.
const base = config.siteUrl || 'https://SEU-DOMINIO';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${base}/imersao-japao/`, changeFrequency: 'weekly', priority: 1 }];
}
