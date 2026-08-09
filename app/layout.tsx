import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Outfit } from 'next/font/google'
import { JsonLd } from '@/components/json-ld'
import WhatsAppWidget from '@/components/whatsapp-widget'
import { siteConfig } from '@/lib/site'
import { organizationJsonLd } from '@/lib/seo'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const body = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Mineral Law & Corporate Counsel · Kampala`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Legal Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      'text/plain': [
        { url: '/llms.txt', title: 'LLM context' },
        { url: '/llms-full.txt', title: 'LLM full context' },
      ],
    },
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: `${siteConfig.name} | Mineral Law & Gold Trade Counsel Uganda`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_UG',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - mineral law and corporate counsel, Kampala`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Mineral Law & Gold Trade Counsel Uganda`,
    description: siteConfig.description,
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'UG-C',
    'geo.placename': 'Kampala',
    'geo.position': `${siteConfig.address.geo.latitude};${siteConfig.address.geo.longitude}`,
    ICBM: `${siteConfig.address.geo.latitude}, ${siteConfig.address.geo.longitude}`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#141c2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-UG" className={`light ${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-body antialiased">
        <JsonLd id="organization-schema" data={organizationJsonLd()} />
        {children}
        <WhatsAppWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
