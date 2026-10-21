import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [{ source: '/', destination: '/imersao-japao/', permanent: false }];
  },
};

export default nextConfig;
