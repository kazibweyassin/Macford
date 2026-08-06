import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { siteConfig } from '@/lib/site'
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description: `Contact ${siteConfig.name} at AfriCourts, Plot 107 Buganda Road, Nakasero, Kampala. Phone, email, WhatsApp, and consultation requests for corporate and commercial legal matters.`,
  path: '/contact',
  keywords: [
    'contact McFord Advocates',
    'law firm Kampala contact',
    'AfriCourts Buganda Road',
    'advocates Nakasero phone',
    ...siteConfig.keywords.slice(0, 6),
  ],
})

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd
        id="contact-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      {children}
    </>
  )
}
