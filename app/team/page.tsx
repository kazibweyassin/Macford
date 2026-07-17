import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig, teamMembers, firmValues } from '@/lib/site'

export const metadata = {
  title: 'Our Lawyers',
  description: `Meet the legal professionals at ${siteConfig.name}, AfriCourts, Nakasero, Kampala.`,
}

export default function Team() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Lawyers"
          title="The people behind the counsel"
          description="A focused team of advocates committed to rigorous, client-centred legal work for businesses in Uganda and beyond."
          image="https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Professional team and business counsel"
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Our Lawyers' },
          ]}
        />

        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
              <div className="lg:col-span-6">
                <SectionHeader
                  eyebrow="Approach"
                  title="How we work together"
                  className="mb-6"
                />
                <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Matters at {siteConfig.name} are staffed for quality and
                    efficiency. Senior lawyers set strategy; associates deliver
                    precise research, drafting, and coordination - so clients get
                    depth without unnecessary cost.
                  </p>
                  <p>
                    Based at AfriCourts, Plot 107 Buganda Road, Nakasero. Reach us on{' '}
                    <a
                      href={siteConfig.phones[0].href}
                      className="text-accent font-medium hover:text-primary transition-colors"
                    >
                      {siteConfig.phones[0].display}
                    </a>{' '}
                    or{' '}
                    <a
                      href={siteConfig.phones[1].href}
                      className="text-accent font-medium hover:text-primary transition-colors"
                    >
                      {siteConfig.phones[1].display}
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="lg:col-span-6 border border-border bg-secondary p-8 sm:p-10">
                <h3 className="font-display text-2xl text-foreground mb-5">
                  What clients can expect
                </h3>
                <ul className="space-y-3.5">
                  {[
                    'Clear ownership of every matter',
                    'Accessible, timely communication',
                    'Practical commercial judgment',
                    'Ethical, confidential handling of information',
                    'Collaborative multi-practice support when needed',
                    'Respect for your timelines and budget',
                  ].map((point) => (
                    <li key={point} className="flex gap-3 items-start">
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-muted-foreground font-light">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <SectionHeader
              eyebrow="Leadership"
              title="Meet the team"
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {teamMembers.map((member) => (
                <article
                  key={member.image}
                  className="card-lift group border border-border bg-card overflow-hidden"
                >
                  <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/50 to-transparent opacity-80" />
                  </div>
                  <div className="p-6 border-t border-border">
                    <p className="eyebrow text-accent mb-2">{member.title}</p>
                    <h3 className="font-display text-2xl text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-3">
                      {member.specialization}
                    </p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground font-light max-w-xl mx-auto">
              For a matter-specific introduction, contact the firm and we will
              connect you with the right lawyer.
            </p>
          </div>
        </section>

        <section className="section-y bg-secondary">
          <div className="container-page">
            <SectionHeader
              eyebrow="Culture"
              title="Values we live by"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {firmValues.map((value) => (
                <div key={value.title} className="p-7 border border-border bg-card">
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {value.description}
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
              Speak with our team
            </h2>
            <p className="text-primary-foreground/60 font-light mb-8">
              Email {siteConfig.email} or visit AfriCourts, Nakasero.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground hover:bg-champagne transition-colors"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
