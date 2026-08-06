import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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
  Check,
  type LucideIcon,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import { JsonLd } from '@/components/json-ld'
import { practiceAreas, siteConfig } from '@/lib/site'
import { getInsightsByPractice } from '@/lib/insights'
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  getPracticeArea,
  practiceServiceJsonLd,
} from '@/lib/seo'

const iconMap: Record<string, LucideIcon> = {
  'mineral-law': Pickaxe,
  'corporate-law': Briefcase,
  'mergers-acquisitions': Building2,
  'banking-finance': Award,
  'intellectual-property': Scale,
  'commercial-law': FileText,
  'employment-law': Users,
}

const practiceKeywords: Record<string, string[]> = {
  'mineral-law': [
    'mineral law Uganda',
    'mining lawyer Kampala',
    'gold mining legal counsel Uganda',
    'precious metal trade Uganda',
    'gold export compliance Uganda',
    'mining licence Uganda',
  ],
  'corporate-law': [
    'corporate lawyer Kampala',
    'company registration Uganda',
    'corporate governance Uganda',
  ],
  'mergers-acquisitions': [
    'M&A lawyers Uganda',
    'mergers acquisitions Kampala',
    'share purchase agreement Uganda',
  ],
  'banking-finance': [
    'banking lawyers Uganda',
    'project finance Kampala',
    'security perfection Uganda',
  ],
  'intellectual-property': [
    'trademark lawyer Uganda',
    'IP registration Kampala',
    'patent copyright Uganda',
  ],
  'commercial-law': [
    'commercial lawyer Kampala',
    'contract drafting Uganda',
    'commercial dispute resolution Uganda',
  ],
  'employment-law': [
    'employment lawyer Uganda',
    'labour law Kampala',
    'employment contracts Uganda',
  ],
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const area = getPracticeArea(slug)
  if (!area) return {}

  return buildPageMetadata({
    title: `${area.title} Lawyers Uganda`,
    description: `${area.description} Instruct ${siteConfig.name} in Kampala for ${area.title.toLowerCase()} matters.`,
    path: `/services/${area.slug}`,
    keywords: [
      area.title,
      `${area.title} Uganda`,
      `${area.title} Kampala`,
      ...(practiceKeywords[area.slug] ?? []),
      ...siteConfig.keywords.slice(0, 6),
    ],
  })
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params
  const area = getPracticeArea(slug)
  if (!area) notFound()

  const Icon = iconMap[area.slug] ?? Briefcase
  const related = practiceAreas
    .filter((p) => p.slug !== area.slug)
    .slice(0, 3)
  const practiceInsights = getInsightsByPractice(area.slug).slice(0, 3)

  return (
    <>
      <JsonLd
        id="practice-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Practice Areas', path: '/services' },
          { name: area.title, path: `/services/${area.slug}` },
        ])}
      />
      <JsonLd id="practice-service-schema" data={practiceServiceJsonLd(area)} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Practice Area"
          title={area.title}
          description={area.description}
          image="https://images.unsplash.com/photo-1619771766980-368d32e44b82?auto=format&fit=crop&w=1920&q=80"
          imageAlt={`${area.title} legal counsel at ${siteConfig.name}`}
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Practice Areas', href: '/services' },
            { label: area.title },
          ]}
        />

        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-7">
                <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border bg-secondary">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-5">
                  How we advise on {area.title.toLowerCase()}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed text-base sm:text-lg mb-6">
                  {area.description} Clients instruct {siteConfig.name} for
                  partner-led attention, practical drafting, and clear
                  commercial judgment from our chambers at AfriCourts, Nakasero,
                  Kampala.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed mb-10">
                  Whether you need transactional support, regulatory guidance,
                  or dispute strategy, we frame advice around risk, timeline,
                  and outcomes - so decision-makers can act with confidence.
                </p>

                <h3 className="font-display text-2xl text-foreground mb-5">
                  What this practice covers
                </h3>
                <ul className="space-y-3.5">
                  {area.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 items-start text-muted-foreground font-light"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 text-accent shrink-0"
                        strokeWidth={2}
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:col-span-5">
                <div className="border border-border bg-card p-8 sticky top-28 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-6 bg-accent" />
                    <p className="eyebrow text-accent">Instruct us</p>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">
                    Speak to our {area.title.toLowerCase()} team
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    Call, email, or send a confidential enquiry. We respond
                    promptly with next steps and a clear engagement path.
                  </p>
                  <div className="space-y-3 text-sm mb-8">
                    <a
                      href={siteConfig.phones[0].href}
                      className="block text-foreground hover:text-accent transition-colors"
                    >
                      {siteConfig.phones[0].display}
                    </a>
                    <a
                      href={siteConfig.emailHref}
                      className="block text-foreground hover:text-accent transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-muted-foreground font-light">
                      {siteConfig.address.short}
                    </p>
                  </div>
                  <Link href="/contact" className="btn-secondary w-full">
                    Request a consultation
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {practiceInsights.length > 0 && (
          <section className="section-y border-t border-border">
            <div className="container-page">
              <SectionHeader
                eyebrow="Insights"
                title={`${area.title} insights`}
                description="Practical notes and guides related to this practice."
                action={
                  <Link
                    href={`/insights?practice=${area.slug}`}
                    className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors"
                  >
                    View all
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {practiceInsights.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/insights/${item.slug}`}
                    className="card-quiet group border border-border bg-card p-6 sm:p-7"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                        {item.type}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="text-[10px] text-muted-foreground">
                        {item.dateLabel}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light line-clamp-2">
                      {item.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-y bg-secondary">
          <div className="container-page">
            <SectionHeader
              eyebrow="Related practices"
              title="Other ways we support your business"
              description="Complex matters often span more than one practice. Explore related capabilities."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border shadow-[var(--shadow-soft)]">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group bg-card p-8 hover:bg-paper transition-colors"
                >
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-5">
                    {item.short}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    Learn more
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors"
              >
                View all practice areas
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden hero-mesh grain py-20 sm:py-24 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="absolute bottom-0 left-0 right-0 rule-gold" />
          <div className="container-page text-center max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl text-balance mb-4">
              Ready to instruct on {area.title.toLowerCase()}?
            </h2>
            <p className="text-primary-foreground/60 font-light mb-9 text-lg">
              Call {siteConfig.phones[0].display} or send a confidential enquiry
              from our contact page.
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
