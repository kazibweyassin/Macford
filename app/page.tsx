import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/ui/section-header'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Scale,
  Users,
  Award,
  Briefcase,
  Gavel,
  Building2,
  Shield,
  Quote,
  Check,
  Landmark,
  FileText,
  Handshake,
} from 'lucide-react'
import {
  siteConfig,
  practiceAreas,
  firmValues,
  selectedExperience,
  insights,
} from '@/lib/site'

const homePractices = practiceAreas.slice(0, 6)
const icons = [Briefcase, Building2, Award, Gavel, Scale, Shield]

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden text-primary-foreground min-h-[min(82vh,780px)] flex items-end sm:items-center">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Legal chambers and professional counsel"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_28%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/25" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 rule-gold" />

          <div className="container-page relative w-full py-16 sm:py-24 lg:py-32">
            <div className="max-w-3xl animate-fade-up">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent" />
                <span className="eyebrow text-accent">
                  Kampala · Est. {siteConfig.established}
                </span>
              </div>

              <h1 className="font-display text-[2.75rem] sm:text-5xl lg:text-[3.75rem] leading-[1.06] text-balance drop-shadow-sm">
                Clear counsel.
                <span className="block text-champagne italic font-normal mt-1">
                  Confident decisions.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-xl text-primary-foreground/90 max-w-xl leading-relaxed font-light drop-shadow-sm">
                McFord Advocates is a corporate and commercial law firm in
                Nakasero, advising businesses, investors, and institutions across
                Uganda with precision and commercial judgment.
              </p>

              <p className="mt-4 text-sm sm:text-base text-primary-foreground/70 font-light">
                We are McFord. AfriCourts, Kampala.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-all hover:bg-champagne"
                >
                  Request a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center border border-white/40 bg-white/10 backdrop-blur-[2px] px-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-white/20"
                >
                  Our Practice Areas
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CREDENTIAL STRIP ─── */}
        <section className="border-b border-border bg-paper">
          <div className="container-page py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {[
                { label: 'Established', value: String(siteConfig.established) },
                { label: 'Practice areas', value: '8+' },
                { label: 'Chambers', value: 'Nakasero' },
                { label: 'Service model', value: 'Partner-led' },
              ].map((item) => (
                <div key={item.label} className="text-center md:text-left">
                  <p className="font-display text-2xl sm:text-3xl text-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHO WE ARE ─── */}
        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-5">
                <SectionHeader
                  eyebrow="Who We Are"
                  title="A full-service commercial practice, built around your business"
                  className="mb-0"
                />
                <div className="mt-6 space-y-4 text-muted-foreground font-light leading-relaxed text-[15px] sm:text-base">
                  <p>
                    From our chambers at AfriCourts on Buganda Road, we advise
                    companies, financial institutions, investors, and
                    entrepreneurs on the legal issues that shape growth:
                    transactions, regulation, disputes, and the protection of
                    commercial value.
                  </p>
                  <p>
                    Clients instruct McFord for partner-led attention, practical
                    advice, and disciplined execution. We combine deep knowledge
                    of the Ugandan market with the standards expected of a modern
                    commercial firm.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors group"
                >
                  Learn more about the firm
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: Users,
                    title: 'Partner-led matters',
                    text: 'Senior lawyers stay involved from first instruction through to closing or judgment.',
                  },
                  {
                    icon: Shield,
                    title: 'Risk, made clear',
                    text: 'We identify legal and commercial exposure early, so you can decide with confidence.',
                  },
                  {
                    icon: Building2,
                    title: 'Commercial judgment',
                    text: 'Advice framed around deals, timelines, and outcomes, not jargon for its own sake.',
                  },
                  {
                    icon: Award,
                    title: 'Uganda market insight',
                    text: 'Local knowledge of regulators, institutions, and how business is actually done.',
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="card-lift group p-7 border border-border bg-card"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center border border-border bg-secondary group-hover:border-accent/50 group-hover:bg-accent/5 transition-colors">
                        <Icon
                          className="h-5 w-5 text-primary group-hover:text-accent transition-colors"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRACTICE AREAS ─── */}
        <section className="section-y bg-secondary">
          <div className="container-page">
            <SectionHeader
              eyebrow="Practice Areas"
              title="Legal expertise across the commercial spectrum"
              description="From corporate formation and financing to disputes, property, and intellectual property, we provide counsel that supports your commercial objectives."
              action={
                <Link
                  href="/services"
                  className="inline-flex h-11 items-center justify-center gap-2 bg-primary px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-ink-soft"
                >
                  View all services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-sm">
              {homePractices.map((area, index) => {
                const Icon = icons[index % icons.length]
                return (
                  <Link
                    key={area.slug}
                    href={`/services#${area.slug}`}
                    className="group relative bg-card p-8 sm:p-9 transition-all duration-300 hover:bg-paper"
                  >
                    <div className="absolute top-0 left-0 h-full w-0.5 bg-accent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300" />
                    <Icon
                      className="h-5 w-5 text-accent mb-5"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display text-xl sm:text-[1.35rem] text-foreground mb-2 group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                      {area.short}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      Learn more
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── WHO WE ACT FOR ─── */}
        <section className="section-y-sm border-b border-border">
          <div className="container-page">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="lg:max-w-xs shrink-0">
                <p className="eyebrow text-accent mb-2">Who We Act For</p>
                <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                  Clients who demand clarity and results
                </h2>
              </div>
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
                {[
                  'Private companies & SMEs',
                  'Financial institutions',
                  'Investors & sponsors',
                  'Real estate developers',
                  'Technology businesses',
                  'International counsel',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <Check className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={2.5} />
                    <span className="text-sm text-muted-foreground font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SELECTED EXPERIENCE (ENS-style) ─── */}
        <section className="section-y">
          <div className="container-page">
            <SectionHeader
              eyebrow="Experience"
              title="Selected work that reflects how we advise"
              description="Representative, anonymised matters across our core practices. Client confidentiality is always preserved."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {selectedExperience.map((item) => (
                <article
                  key={item.headline}
                  className="bg-card p-7 sm:p-8 hover:bg-paper transition-colors"
                >
                  <p className="eyebrow text-accent mb-3">{item.sector}</p>
                  <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 uppercase tracking-wide">
                    {item.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-xs text-muted-foreground font-light max-w-2xl mx-auto">
              Examples are illustrative of the nature of work we undertake and do
              not disclose confidential client information.
            </p>
          </div>
        </section>

        {/* ─── INSIGHTS ─── */}
        <section className="section-y bg-secondary">
          <div className="container-page">
            <SectionHeader
              eyebrow="Insights"
              title="Helping clients manage legal complexity"
              description="Practical notes on issues that frequently arise for businesses operating in Uganda."
              action={
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center gap-2 border border-primary/20 bg-primary px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-ink-soft"
                >
                  Discuss a matter
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {insights.map((post) => (
                <article
                  key={post.title}
                  className="group flex flex-col border border-border bg-card p-7 sm:p-8 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      {post.category}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
                  >
                    Speak to our team
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ─── */}
        <section className="section-y">
          <div className="container-page">
            <SectionHeader
              eyebrow="Why McFord"
              title="Known for the way we work with clients"
              description="We are known for client focus, collaboration, excellence, integrity, and meticulous execution. Those values guide every instruction we accept."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {firmValues.map((value, i) => (
                <div
                  key={value.title}
                  className="relative p-7 sm:p-8 border border-border bg-card hover:border-accent/30 transition-colors"
                >
                  <span className="font-display text-4xl text-accent/15 absolute top-5 right-6 leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl text-foreground mb-2 pr-10">
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

        {/* ─── PERSONAL ATTENTION BAND ─── */}
        <section className="relative overflow-hidden hero-mesh grain py-20 sm:py-24 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="absolute bottom-0 left-0 right-0 rule-gold" />
          <div className="container-page relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="eyebrow text-accent mb-4">Personalised Attention</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] text-balance leading-tight">
                  Advice that is rigorous, responsive, and commercially aware
                </h2>
                <p className="mt-5 text-primary-foreground/70 font-light text-lg max-w-xl leading-relaxed">
                  Whether you are closing a transaction, resolving a dispute, or
                  structuring a new venture, you work with lawyers who understand
                  both the law and the business context in which it operates.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="border border-primary-foreground/15 bg-primary-foreground/[0.06] backdrop-blur-sm p-8">
                  <Quote
                    className="h-7 w-7 text-accent mb-5 opacity-80"
                    strokeWidth={1.25}
                  />
                  <blockquote className="font-display text-xl sm:text-2xl leading-snug text-primary-foreground/95">
                    We measure success by outcomes: clean closings, well-managed
                    disputes, and clients who return because the advice was clear
                    and the execution reliable.
                  </blockquote>
                  <p className="mt-6 eyebrow text-primary-foreground/45">
                    {siteConfig.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW WE WORK ─── */}
        <section className="section-y bg-secondary">
          <div className="container-page">
            <SectionHeader
              eyebrow="How We Work"
              title="A clear path from first call to resolution"
              description="Every engagement follows a disciplined process designed to give you certainty on scope, cost, and next steps."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 border border-border bg-border gap-px">
              {[
                {
                  step: '01',
                  icon: Handshake,
                  title: 'Consult',
                  text: 'We listen to your objectives, understand the commercial context, and identify the legal issues that matter.',
                },
                {
                  step: '02',
                  icon: FileText,
                  title: 'Plan',
                  text: 'You receive a clear strategy covering risk, timeline, deliverables, and a transparent fee arrangement.',
                },
                {
                  step: '03',
                  icon: Landmark,
                  title: 'Execute',
                  text: 'We draft, negotiate, advocate, and project-manage with precision until the matter is resolved.',
                },
                {
                  step: '04',
                  icon: Scale,
                  title: 'Partner',
                  text: 'We remain available as your ongoing legal counsel as your business and risk profile evolve.',
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.step} className="bg-card p-7 sm:p-8">
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-3xl text-accent/35">
                        {item.step}
                      </span>
                      <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="section-y">
          <div className="container-page">
            <div className="relative overflow-hidden border border-border bg-ink text-primary-foreground">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,oklch(0.68_0.11_78_/_0.3),transparent_55%)]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 sm:p-14 lg:p-16 items-center">
                <div className="lg:col-span-7">
                  <p className="eyebrow text-accent mb-4">Get Started</p>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
                    Instruct counsel that treats your business seriously
                  </h2>
                  <p className="mt-5 text-primary-foreground/65 font-light text-lg max-w-lg leading-relaxed">
                    Call us, write to us, or send a confidential enquiry. We respond
                    promptly and handle every matter with discretion.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center gap-2 bg-accent px-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-all hover:bg-champagne"
                  >
                    Contact the firm
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={siteConfig.phones[0].href}
                    className="inline-flex h-12 items-center justify-center border border-primary-foreground/25 px-8 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all hover:border-accent/60 hover:bg-primary-foreground/5"
                  >
                    {siteConfig.phones[0].display}
                  </a>
                  <a
                    href={siteConfig.emailHref}
                    className="inline-flex h-12 items-center justify-center border border-primary-foreground/15 px-8 text-[12px] font-medium tracking-wide text-primary-foreground/80 transition-all hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
