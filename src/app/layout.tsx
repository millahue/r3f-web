import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { withBasePath } from '@/lib/paths'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

// SEO Optimizado con Open Graph, Twitter Cards y más
export const metadata: Metadata = {
  title: {
    default: 'R3F + Next.js | Proyecto Moderno 3D',
    template: '%s | R3F Web Project',
  },
  description:
    'Experimenta el futuro del desarrollo web con nuestro proyecto moderno que combina Next.js 15, React 19, React Three Fiber, Tailwind CSS v4 y Shadcn/ui. Interactividad 3D optimizada y experiencia de usuario excepcional.',
  keywords: [
    'Next.js 15',
    'React 19',
    'React Three Fiber',
    'R3F',
    'Three.js',
    'Tailwind CSS v4',
    'Shadcn/ui',
    'TypeScript',
    '3D Web Development',
    'WebGL',
    'Interactive 3D',
    'Modern Web App',
    'Frontend Development',
    'Web Performance',
    'Turbopack',
    'Server Components',
  ],
  authors: [{ name: 'R3F Web Team', url: 'https://r3f-web.dev' }],
  creator: 'R3F Web Project',
  publisher: 'R3F Web Project',
  category: 'Technology',
  classification: 'Web Development',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    url: 'https://r3f-web.vercel.app',
    siteName: 'R3F Web Project',
    title: 'R3F + Next.js | Proyecto Moderno 3D',
    description:
      'Experimenta el futuro del desarrollo web con tecnologías 3D interactivas. Next.js 15, React 19, React Three Fiber y más.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'R3F Web Project - Desarrollo 3D Moderno',
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'R3F + Next.js | Proyecto Moderno 3D',
    description:
      'Experimenta el futuro del desarrollo web con tecnologías 3D interactivas',
    images: ['/twitter-image.png'],
    creator: '@r3fweb',
    site: '@r3fweb',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification
  verification: {
    google: 'google-site-verification=your-verification-code',
    yandex: 'yandex-verification=your-verification-code',
    yahoo: 'yahoo-site-verification=your-verification-code',
  },

  // Additional
  alternates: {
    canonical: 'https://r3f-web.vercel.app',
    languages: {
      'es-ES': 'https://r3f-web.vercel.app',
      'en-US': 'https://r3f-web.vercel.app/en',
    },
  },

  // App-specific
  applicationName: 'R3F Web Project',
  referrer: 'origin-when-cross-origin',

  // Icons
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
    ],
  },

  // Manifest
  manifest: '/manifest.json',
}

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'R3F Web Project',
              description:
                'Proyecto moderno de desarrollo web 3D con Next.js, React Three Fiber y más',
              url: 'https://r3f-web.millahue.tech',
              author: {
                '@type': 'Organization',
                name: 'R3F Web Team',
              },
              publisher: {
                '@type': 'Organization',
                name: 'R3F Web Project',
              },
              dateCreated: '2024-01-01',
              dateModified: new Date().toISOString().split('T')[0],
              inLanguage: 'es-ES',
              keywords:
                'Next.js 15, React 19, React Three Fiber, Three.js, Tailwind CSS v4, Shadcn/ui, TypeScript, 3D Web Development',
              mainEntity: {
                '@type': 'SoftwareApplication',
                name: 'R3F Web Project',
                applicationCategory: 'WebApplication',
                operatingSystem: 'Web Browser',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'EUR',
                },
              },
            }),
          }}
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href={withBasePath('/fonts/GeistVF.woff2')}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to main content for screen readers */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Ir al contenido principal
          </a>

          {/* Navigation landmark for screen readers */}
          <header aria-label="Navegación principal del sitio">
            {/* Header content will go here */}
          </header>

          {/* Main content area */}
          <main
            id="main-content"
            role="main"
            aria-label="Contenido principal"
            className="min-h-screen"
          >
            {children}
          </main>

          {/* Footer landmark */}
          <footer
            role="contentinfo"
            aria-label="Información del sitio y enlaces adicionales"
            className="border-t border-slate-200 dark:border-slate-800 bg-background/80 backdrop-blur-sm"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>
                  © 2024 R3F Web Project. Construido con{' '}
                  <span className="text-primary font-medium">Next.js 15</span>,{' '}
                  <span className="text-primary font-medium">React 19</span> y{' '}
                  <span className="text-primary font-medium">
                    React Three Fiber
                  </span>{' '}
                  .
                </p>
                <p className="mt-2">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                      aria-hidden="true"
                    ></span>{' '}
                    <span className="sr-only">Estado del proyecto: </span>
                    Proyecto activo y en desarrollo
                  </span>
                </p>
              </div>
            </div>
          </footer>

          {/* Live region for screen reader announcements */}
          <div
            id="announcements"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
