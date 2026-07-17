import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import Link from 'next/link'
import {
  Briefcase,
  Building2,
  Award,
  Gavel,
  Scale,
  Users,
  Home,
  Zap,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { siteConfig, practiceAreas } from '@/lib/site'

export const metadata = {
  title: 'Practice Areas',
  description: `Legal practice areas at ${siteConfig.name}: corporate, M&A, banking, disputes, IP, employment, real estate, and energy.`,
}

const iconMap: Record<string, LucideIcon> = {
  'corporate-commercial': Briefcase,
  'mergers-acquisitions': Building2,
  'banking-finance': Award,
  'dispute-resolution': Gavel,
  'intellectual-property': Scale,
  employment: Users,
  'real-estate': Home,
  'energy-infrastructure': Zap,
}

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Practice Areas"
          title="Legal services for business"
          description="Full-service corporate and commercial capability from our Kampala chambers - structured so you always know who to call."
          image="https://images.unsplash.com/photo-1619771766980-368d32e44b82?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Professional legal counsel and business advisory"
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas' },
          ]}
        />

        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
              {practiceAreas.map((service) => {
                const Icon = iconMap[service.slug] ?? Briefcase
                return (
                  <article
                    key={service.slug}
                    id={service.slug}
                    className="group relative bg-card p-8 sm:p-10 scroll-mt-28 hover:bg-paper transition-colors"
                  >
                    <div className="absolute top-0 left-0 h-full w-0.5 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="mb-6 flex h-11 w-11 items-center justify-center border border-border bg-secondary group-hover:border-accent/30 transition-colors">
                      <Icon className="h-5 w-5 text-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
                    </div>
                    <h2 className="font-display text-2xl sm:text-[1.75rem] text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-2.5 items-start text-sm text-muted-foreground font-light"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                <div key={item.title} className="p-7 border border-border bg-card">
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

        <section className="relative overflow-hidden hero-mesh grain py-20 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="container-page text-center max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl text-balance mb-4">
              Need advice in one of these areas?
            </h2>
            <p className="text-primary-foreground/60 font-light mb-8">
              Call {siteConfig.phones[0].display} or send a confidential enquiry.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground hover:bg-champagne transition-colors"
            >
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
