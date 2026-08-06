import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import { JsonLd } from '@/components/json-ld'
import Link from 'next/link'
import {
  Briefcase,
  Building2,
  Award,
  Scale,
  FileText,
  Users,
  Pickaxe,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { siteConfig, practiceAreas } from '@/lib/site'
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  practiceAreasJsonLd,
} from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Practice Areas',
  description: `Legal practice areas at ${siteConfig.name}: mineral law & precious metal trade, corporate law, M&A, banking & finance, intellectual property, commercial law, and employment law in Uganda.`,
  path: '/services',
  keywords: [
    'practice areas',
    'mineral law Uganda',
    'gold trading legal counsel Uganda',
    'corporate lawyers Kampala',
    'M&A lawyers Uganda',
    'commercial law firm Uganda',
    ...siteConfig.keywords,
  ],
})

const iconMap: Record<string, LucideIcon> = {
  'mineral-law': Pickaxe,
  'corporate-law': Briefcase,
  'mergers-acquisitions': Building2,
  'banking-finance': Award,
  'intellectual-property': Scale,
  'commercial-law': FileText,
  'employment-law': Users,
}

export default function Services() {
  return (
    <>
      <JsonLd
        id="services-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Practice Areas', path: '/services' },
        ])}
      />
      <JsonLd id="practice-areas-schema" data={practiceAreasJsonLd()} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Practice Areas"
          title="Legal services for business"
          description="Seven practice areas for business - led by mineral law and precious metal trade, with full corporate, M&A, banking, IP, commercial, and employment capability from our Kampala chambers."
          image="https://images.unsplash.com/photo-1619771766980-368d32e44b82?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Professional legal counsel and business advisory"
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas' },
          ]}
        />

        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border shadow-[var(--shadow-soft)]">
              {practiceAreas.map((service, index) => {
                const Icon = iconMap[service.slug] ?? Briefcase
                const isFeatured = service.slug === 'mineral-law'
                return (
                  <article
                    key={service.slug}
                    id={service.slug}
                    className={`group relative p-8 sm:p-10 scroll-mt-28 transition-colors duration-300 ${
                      isFeatured
                        ? 'bg-ink text-primary-foreground md:col-span-2'
                        : 'bg-card hover:bg-paper'
                    }`}
                  >
                    <div className="absolute top-0 left-0 h-full w-0.5 bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center border transition-colors ${
                          isFeatured
                            ? 'border-primary-foreground/15 bg-primary-foreground/5 group-hover:border-accent/50'
                            : 'border-border bg-secondary group-hover:border-accent/40 group-hover:bg-accent/5'
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 transition-colors ${
                            isFeatured
                              ? 'text-accent'
                              : 'text-primary group-hover:text-accent'
                          }`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="text-right">
                        {isFeatured && (
                          <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                            Core practice
                          </span>
                        )}
                        <span
                          className={`font-display text-2xl select-none transition-colors ${
                            isFeatured
                              ? 'text-accent/35 group-hover:text-accent/55'
                              : 'text-accent/15 group-hover:text-accent/35'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    <h2
                      className={`font-display text-2xl sm:text-[1.75rem] mb-3 ${
                        isFeatured ? 'text-primary-foreground' : 'text-foreground'
                      }`}
                    >
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h2>
                    <p
                      className={`font-light leading-relaxed mb-6 ${
                        isFeatured
                          ? 'text-primary-foreground/70 max-w-3xl'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {service.description}
                    </p>
                    <ul
                      className={`space-y-2.5 mb-7 ${
                        isFeatured ? 'sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-2.5 sm:space-y-0' : ''
                      }`}
                    >
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className={`flex gap-2.5 items-start text-sm font-light ${
                            isFeatured
                              ? 'text-primary-foreground/60'
                              : 'text-muted-foreground'
                          }`}
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
                    >
                      Learn more
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section-y bg-secondary">
          <div className="container-page">
            <SectionHeader
              eyebrow="Our Difference"
              title={`Why instruct ${siteConfig.shortName}?`}
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Commercial clarity',
                  description:
                    'Advice written for decision-makers - options, risks, and recommended next steps.',
                },
                {
                  title: 'Uganda market expertise',
                  description:
                    'Deep familiarity with local regulators, institutions, and how deals close in practice.',
                },
                {
                  title: 'Partner-led matters',
                  description:
                    'Senior involvement from strategy through to closing or judgment.',
                },
                {
                  title: 'Transparent fees',
                  description:
                    'Fee arrangements agreed upfront - fixed, staged, or hourly as the matter requires.',
                },
                {
                  title: 'Cross-border readiness',
                  description:
                    'Comfortable working with international counsel and multi-jurisdiction structures.',
                },
                {
                  title: 'Responsive service',
                  description:
                    'Timely updates and a clear single point of contact on every matter.',
                },
              ].map((item) => (
                <div key={item.title} className="card-quiet p-7 border border-border bg-card">
                  <div className="h-0.5 w-7 bg-accent/55 mb-5" />
                  <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page">
            <SectionHeader
              eyebrow="Engagement"
              title="Our process"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 border border-border">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  description: 'We listen to your objectives and map the legal issues that matter.',
                },
                {
                  step: '02',
                  title: 'Planning',
                  description: 'Strategy, timeline, deliverables, and fees - agreed in writing.',
                },
                {
                  step: '03',
                  title: 'Implementation',
                  description: 'Drafting, negotiation, filings, or advocacy executed with precision.',
                },
                {
                  step: '04',
                  title: 'Ongoing support',
                  description: 'Continued counsel as your business or dispute evolves.',
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`p-7 bg-card ${i < 3 ? 'border-b md:border-b-0 md:border-r border-border' : ''}`}
                >
                  <span className="font-display text-3xl text-accent/35">{item.step}</span>
                  <h3 className="font-display text-xl text-foreground mt-3 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden hero-mesh grain py-20 sm:py-24 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="absolute bottom-0 left-0 right-0 rule-gold" />
          <div className="container-page text-center max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-7 bg-accent" />
              <p className="eyebrow text-accent">Engage us</p>
              <span className="h-px w-7 bg-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-balance mb-4">
              Need advice in one of these areas?
            </h2>
            <p className="text-primary-foreground/60 font-light mb-9 text-lg">
              Call {siteConfig.phones[0].display} or send a confidential enquiry.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
