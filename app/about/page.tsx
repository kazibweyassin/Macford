import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import { JsonLd } from '@/components/json-ld'
import Link from 'next/link'
import { Target, Eye, Heart, MapPin, ArrowRight, Building2, Scale, Users } from 'lucide-react'
import { siteConfig, firmValues, practiceAreas } from '@/lib/site'
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Our Firm',
  description: `${siteConfig.name} is a corporate and commercial law firm at AfriCourts, Nakasero, Kampala. Partner-led counsel for businesses, investors, and institutions in Uganda since ${siteConfig.established}.`,
  path: '/about',
  keywords: [
    'about McFord Advocates',
    'law firm Nakasero Kampala',
    'corporate lawyers Uganda',
    'AfriCourts advocates',
    ...siteConfig.keywords.slice(0, 8),
  ],
})

export default function About() {
  return (
    <>
      <JsonLd
        id="about-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Our Firm', path: '/about' },
        ])}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Firm"
          title={`About ${siteConfig.name}`}
          description="A trusted corporate and commercial practice advising businesses from the heart of Kampala’s professional district."
          image="https://images.unsplash.com/photo-1676181739859-08330dea8999?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Modern professional office and legal counsel"
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Our Firm' },
          ]}
        />

        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-6">
                <SectionHeader
                  eyebrow="Our Story"
                  title="Built for businesses that need clear commercial counsel"
                  className="mb-6"
                />
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p className="text-lg text-foreground/80">
                    Established in {siteConfig.established}, {siteConfig.name} was
                    founded to give clients in Uganda a firm that combines technical
                    excellence with practical, business-minded advice.
                  </p>
                  <p>
                    We advise companies, mining operators, entrepreneurs, financial
                    institutions, and investors - with a core focus on mineral law
                    and precious metal trade, alongside corporate law, mergers and
                    acquisitions, banking and finance, intellectual property,
                    commercial law, and employment law.
                  </p>
                  <p>
                    Our chambers are at{' '}
                    <strong className="font-medium text-foreground">
                      AfriCourts, 4th Floor, Plot 107 Buganda Road, Nakasero
                    </strong>
                    , with postal address {siteConfig.address.postal}.
                  </p>
                </div>
                <div className="mt-8 flex items-start gap-3 p-5 border border-border bg-secondary">
                  <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">Chambers</p>
                    <p className="text-muted-foreground font-light">
                      {siteConfig.address.short}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-3">
                {[
                  { icon: Building2, label: 'Location', value: 'Nakasero, Kampala' },
                  { icon: Scale, label: 'Focus', value: 'Mineral · Corporate · Commercial' },
                  { icon: Users, label: 'Approach', value: 'Partner-led service' },
                  { icon: Heart, label: 'Promise', value: 'Integrity & clarity' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="card-lift p-6 sm:p-8 border border-border bg-card"
                    >
                      <Icon className="h-5 w-5 text-accent mb-4" strokeWidth={1.5} />
                      <p className="eyebrow text-muted-foreground mb-2">{item.label}</p>
                      <p className="font-display text-xl text-foreground">{item.value}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-secondary">
          <div className="container-page">
            <SectionHeader
              eyebrow="Principles"
              title="Mission, vision & values"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: Target,
                  title: 'Mission',
                  text: 'To deliver exceptional legal solutions that empower clients to achieve their business objectives while upholding the highest ethical standards.',
                },
                {
                  icon: Eye,
                  title: 'Vision',
                  text: 'To be the firm clients trust first for corporate, commercial, and mineral-sector matters in Uganda - known for excellence, integrity, and results.',
                },
                {
                  icon: Heart,
                  title: 'Values',
                  text: 'Integrity, excellence, client focus, commercial awareness, and collaboration guide every engagement we undertake.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="card-quiet p-8 border border-border bg-card">
                    <Icon className="h-6 w-6 text-accent mb-5" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {firmValues.map((v) => (
                <div key={v.title} className="card-quiet p-6 border border-border bg-card">
                  <div className="h-0.5 w-6 bg-accent/50 mb-4" />
                  <h4 className="font-display text-lg text-foreground mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page">
            <SectionHeader
              eyebrow="Expertise"
              title="Areas we advise on"
              action={
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors group"
                >
                  Full practice list
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {practiceAreas.map((area, index) => (
                <div
                  key={area.slug}
                  className={`card-quiet p-7 border ${
                    area.slug === 'mineral-law'
                      ? 'border-accent/35 bg-ink text-primary-foreground md:col-span-2'
                      : 'border-border bg-secondary/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <h3
                      className={`font-display text-xl ${
                        area.slug === 'mineral-law' ? 'text-primary-foreground' : 'text-foreground'
                      }`}
                    >
                      <Link
                        href={`/services/${area.slug}`}
                        className="hover:text-accent transition-colors"
                      >
                        {area.title}
                      </Link>
                    </h3>
                    <span
                      className={`font-display text-lg ${
                        area.slug === 'mineral-law' ? 'text-accent/40' : 'text-accent/20'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  {area.slug === 'mineral-law' && (
                    <p className="text-sm text-primary-foreground/65 font-light mb-4 max-w-2xl">
                      {area.short}
                    </p>
                  )}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {area.details.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className={`flex gap-2 items-start text-sm font-light ${
                          area.slug === 'mineral-law'
                            ? 'text-primary-foreground/60'
                            : 'text-muted-foreground'
                        }`}
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
              Work with a firm that treats your business seriously
            </h2>
            <p className="text-primary-foreground/60 font-light mb-9 text-lg">
              Visit us at AfriCourts or request a consultation online.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact the firm
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
