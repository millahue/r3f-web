import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuración para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/r3f-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/r3f-web/' : '',
}

export default nextConfig
