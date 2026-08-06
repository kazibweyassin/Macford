import type { Metadata } from 'next'
import { practiceAreas, siteConfig, teamMembers } from '@/lib/site'

const baseUrl = siteConfig.url

export const routes = [
  {
    path: '/',
    title: `${siteConfig.name} | Corporate & Commercial Law Firm · Kampala`,
    description: siteConfig.description,
    changeFrequency: 'weekly' as const,
    priority: 1,
  },
  {
    path: '/about',
    title: `Our Firm | ${siteConfig.name}`,
    description: `${siteConfig.name} is a corporate and commercial law firm at AfriCourts, Nakasero, Kampala. Partner-led counsel for businesses, investors, and institutions in Uganda since ${siteConfig.established}.`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    path: '/services',
    title: `Practice Areas | ${siteConfig.name}`,
    description: `Legal practice areas at ${siteConfig.name}: mineral law & precious metal trade, corporate law, M&A, banking & finance, intellectual property, commercial law, and employment law in Uganda.`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  },
  {
    path: '/insights',
    title: `Insights | ${siteConfig.name}`,
    description: `Legal insights, guides, and updates from ${siteConfig.name} on mineral law, corporate, commercial, banking, IP, and employment issues in Uganda.`,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  },
  {
    path: '/team',
    title: `Our Lawyers | ${siteConfig.name}`,
    description: `Meet the advocates and legal professionals at ${siteConfig.name}, AfriCourts, Nakasero, Kampala - partner-led commercial counsel for Uganda and East Africa.`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    path: '/contact',
    title: `Contact | ${siteConfig.name}`,
    description: `Contact ${siteConfig.name} at AfriCourts, Plot 107 Buganda Road, Nakasero, Kampala. Phone, email, WhatsApp, and consultation requests for corporate and commercial legal matters.`,
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  },
] as const

type BuildPageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}

/** Shared page metadata: canonical, Open Graph, Twitter, robots */
export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [...siteConfig.keywords],
  noIndex = false,
}: BuildPageMetadataInput): Metadata {
  const url = path === '/' ? baseUrl : `${baseUrl}${path}`
  const ogTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: baseUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: 'Legal Services',
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_UG',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Corporate & Commercial Law Firm, Kampala`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: ['/twitter-image'],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  }
}

export function absoluteUrl(path = '/'): string {
  if (path === '/') return baseUrl
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`
}

/** Organization + LegalService graph for the whole site */
export function organizationJsonLd() {
  const practiceNames = practiceAreas.map((p) => p.title)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LegalService', 'Attorney', 'ProfessionalService', 'LocalBusiness'],
        '@id': `${baseUrl}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        alternateName: [siteConfig.shortName, 'McFord Advocates Kampala'],
        description: siteConfig.longDescription,
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: absoluteUrl('/icon.svg'),
        },
        image: absoluteUrl('/icon.svg'),
        email: siteConfig.email,
        telephone: siteConfig.phones.map((p) => p.display),
        foundingDate: siteConfig.foundingDate,
        priceRange: '$$',
        currenciesAccepted: 'UGX, USD',
        paymentAccepted: 'Cash, Bank Transfer',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${siteConfig.address.building}, ${siteConfig.address.street}`,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.countryCode,
          postalCode: '10363',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.address.geo.latitude,
          longitude: siteConfig.address.geo.longitude,
        },
        hasMap: siteConfig.address.mapsUrl,
        areaServed: siteConfig.areaServed.map((name) => ({
          '@type': 'Place',
          name,
        })),
        knowsAbout: [
          ...practiceNames,
          'Gold mining compliance Uganda',
          'Precious metal trade Uganda',
          'Uganda Mining Act advisory',
          'Corporate governance',
          'Commercial contracts',
          'Company registration Uganda',
        ],
        sameAs: [siteConfig.social.linkedin].filter(Boolean),
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '13:00',
          },
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: siteConfig.phones[0].display,
            contactType: 'customer service',
            email: siteConfig.email,
            areaServed: 'UG',
            availableLanguage: ['English'],
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Legal practice areas',
          itemListElement: practiceAreas.map((area, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: area.title,
              description: area.description,
              url: `${baseUrl}/services/${area.slug}`,
              provider: { '@id': `${baseUrl}/#organization` },
              areaServed: siteConfig.areaServed,
            },
          })),
        },
        employee: teamMembers
          .filter((m) => m.name !== 'Advocate')
          .map((member) => ({
            '@type': 'Person',
            name: member.name,
            jobTitle: member.title,
            worksFor: { '@id': `${baseUrl}/#organization` },
            description: member.description,
            knowsAbout: member.specialization,
            image: absoluteUrl(member.image),
          })),
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { '@id': `${baseUrl}/#organization` },
        inLanguage: 'en-UG',
      },
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/#webpage`,
        url: baseUrl,
        name: routes[0].title,
        isPartOf: { '@id': `${baseUrl}/#website` },
        about: { '@id': `${baseUrl}/#organization` },
        description: siteConfig.description,
        inLanguage: 'en-UG',
      },
    ],
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function practiceAreasJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${siteConfig.name} practice areas`,
    description: `Legal services offered by ${siteConfig.name} in Kampala, Uganda`,
    numberOfItems: practiceAreas.length,
    itemListElement: practiceAreas.map((area, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: area.title,
      url: `${baseUrl}/services/${area.slug}`,
      description: area.short,
      item: {
        '@type': 'Service',
        name: area.title,
        description: area.description,
        provider: {
          '@type': 'LegalService',
          name: siteConfig.name,
          url: baseUrl,
        },
        areaServed: siteConfig.areaServed,
        url: `${baseUrl}/services/${area.slug}`,
      },
    })),
  }
}

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug)
}

export function practiceServiceJsonLd(
  area: (typeof practiceAreas)[number],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: area.title,
    description: area.description,
    url: `${baseUrl}/services/${area.slug}`,
    serviceType: area.title,
    provider: {
      '@type': 'LegalService',
      name: siteConfig.name,
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${siteConfig.address.building}, ${siteConfig.address.street}`,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.countryCode,
      },
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      '@type': 'Place',
      name,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${area.title} services`,
      itemListElement: area.details.map((detail, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: detail,
        },
      })),
    },
  }
}

export function teamJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Lawyers at ${siteConfig.name}`,
    itemListElement: teamMembers.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.title,
        description: member.description,
        worksFor: {
          '@type': 'LegalService',
          name: siteConfig.name,
          url: baseUrl,
        },
        knowsAbout: member.specialization,
        image: absoluteUrl(member.image),
      },
    })),
  }
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/** Common firm FAQs - aids rich results and LLM Q&A extraction */
export const firmFaqs = [
  {
    question: 'Where is McFord Advocates located?',
    answer: `${siteConfig.name} is based at ${siteConfig.address.building}, ${siteConfig.address.street}, ${siteConfig.address.area}, ${siteConfig.address.city}, ${siteConfig.address.country}. Postal: ${siteConfig.address.postal}.`,
  },
  {
    question: 'What practice areas does McFord Advocates cover?',
    answer: `${siteConfig.name} advises on ${practiceAreas.map((p) => p.title).join(', ')}.`,
  },
  {
    question: 'How can I contact McFord Advocates?',
    answer: `Call ${siteConfig.phones[0].display}, email ${siteConfig.email}, WhatsApp ${siteConfig.whatsapp.display}, or visit AfriCourts, Nakasero, Kampala during ${siteConfig.hours.weekdays}.`,
  },
  {
    question: 'Does McFord Advocates advise on mineral law and gold trading?',
    answer:
      'Yes. Mineral Law & Precious Metal Trade is a core practice covering mining and mineral rights licensing, gold and precious metal trading compliance, export documentation, joint ventures, and related regulatory issues in Uganda.',
  },
] as const
