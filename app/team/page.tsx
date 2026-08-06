import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import { JsonLd } from '@/components/json-ld'
import { TeamMemberCard } from '@/components/team-member-card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteConfig, teamMembers, firmValues } from '@/lib/site'
import { breadcrumbJsonLd, buildPageMetadata, teamJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Our Lawyers',
  description: `Meet the advocates and legal professionals at ${siteConfig.name}, AfriCourts, Kampala. Partner-led commercial and mineral law counsel for Uganda and East Africa.`,
  path: '/team',
  keywords: [
    'McFord Advocates lawyers',
    'Ampaire Tumwebaze',
    'advocates Kampala',
    'corporate lawyers Uganda team',
    'mining lawyer Kampala team',
    ...siteConfig.keywords.slice(0, 6),
  ],
})

export default function Team() {
  return (
    <>
      <JsonLd
        id="team-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Our Lawyers', path: '/team' },
        ])}
      />
      <JsonLd id="team-schema" data={teamJsonLd()} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Lawyers"
          title="The people behind the counsel"
          description="A focused team of advocates committed to rigorous, client-centred legal work for businesses in Uganda and beyond. Hover a photo or open a full profile to read more."
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
                    precise research, drafting, and coordination so clients get
                    depth without unnecessary cost.
                  </p>
                  <p>
                    Based at AfriCourts, Plot 107 Buganda Road, Kampala. Reach us on{' '}
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
              description="Hover a portrait for a quick bio, or open the full profile for focus areas and background."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.image}
                  member={{
                    name: member.name,
                    title: member.title,
                    specialization: member.specialization,
                    experience: member.experience,
                    image: member.image,
                    description: member.description,
                    bio: member.bio,
                    focus: member.focus,
                    education: member.education,
                    linkedin: 'linkedin' in member ? member.linkedin : undefined,
                    profilePdf:
                      'profilePdf' in member ? member.profilePdf : undefined,
                  }}
                />
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
                <div key={value.title} className="card-quiet p-7 border border-border bg-card">
                  <div className="h-0.5 w-6 bg-accent/50 mb-4" />
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

        <section className="relative overflow-hidden hero-mesh grain py-20 sm:py-24 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="absolute bottom-0 left-0 right-0 rule-gold" />
          <div className="container-page text-center max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-7 bg-accent" />
              <p className="eyebrow text-accent">Next step</p>
              <span className="h-px w-7 bg-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-balance mb-4">
              Speak with our team
            </h2>
            <p className="text-primary-foreground/60 font-light mb-9 text-lg">
              Email {siteConfig.email} or visit AfriCourts in Kampala.
            </p>
            <Link href="/contact" className="btn-primary">
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
