import type { Metadata, Viewport } from 'next';
import { DM_Sans, Noto_Sans_JP, Sora } from 'next/font/google';
import { config } from '@/content/imersao-japao';
import './globals.css';

const sora = Sora({ subsets: ['latin'], weight: ['500', '600', '700', '800'], display: 'swap', variable: '--font-sora' });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-dm-sans' });
// Glifos japoneses chegam por unicode-range; sem preload para não pesar o LCP.
const notoJp = Noto_Sans_JP({ weight: ['400', '500', '700'], display: 'swap', variable: '--font-noto-jp', preload: false });

export const metadata: Metadata = {
  metadataBase: config.siteUrl ? new URL(config.siteUrl) : undefined,
};

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${dmSans.variable} ${notoJp.variable}`}>
      <body>{children}</body>
    </html>
  );
}
