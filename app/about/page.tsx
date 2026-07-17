import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import Link from 'next/link'
import { Target, Eye, Heart, MapPin, ArrowRight, Building2, Scale, Users } from 'lucide-react'
import { siteConfig, firmValues, practiceAreas } from '@/lib/site'

export const metadata = {
  title: 'Our Firm',
  description: `About ${siteConfig.name} - corporate and commercial law at AfriCourts, Nakasero, Kampala.`,
}

export default function About() {
  return (
    <>
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
                    We advise companies, entrepreneurs, financial institutions, and
                    investors on corporate structuring, commercial transactions,
                    banking and finance, employment, intellectual property, and
                    dispute resolution.
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
                  { icon: Scale, label: 'Focus', value: 'Corporate & commercial' },
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
                  text: 'To be the firm clients trust first for corporate and commercial matters in Uganda - known for excellence, integrity, and results.',
                },
                {
                  icon: Heart,
                  title: 'Values',
                  text: 'Integrity, excellence, client focus, commercial awareness, and collaboration guide every engagement we undertake.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="p-8 border border-border bg-card">
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
                <div key={v.title} className="p-6 border border-border bg-card">
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
              {practiceAreas.map((area) => (
                <div key={area.slug} className="p-7 border border-border bg-secondary/50">
                  <h3 className="font-display text-xl text-foreground mb-4">{area.title}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {area.details.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 items-start text-sm text-muted-foreground font-light"
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

        <section className="relative overflow-hidden hero-mesh grain py-20 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="container-page text-center max-w-3xl">
            <h2 className="font-display text-3xl sm:text-4xl text-balance mb-4">
              Work with a firm that treats your business seriously
            </h2>
            <p className="text-primary-foreground/60 font-light mb-8">
              Visit us at AfriCourts or request a consultation online.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground hover:bg-champagne transition-colors"
            >
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
