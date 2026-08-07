import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/ui/section-header'
import { JsonLd } from '@/components/json-ld'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Scale,
  Users,
  Award,
  Briefcase,
  Building2,
  Shield,
  Quote,
  Check,
  Landmark,
  FileText,
  Handshake,
  Pickaxe,
  type LucideIcon,
} from 'lucide-react'
import HeroSlider from '@/components/hero-slider'
import {
  siteConfig,
  practiceAreas,
  firmValues,
  selectedExperience,
} from '@/lib/site'
import { getInsightsSorted } from '@/lib/insights'
import {
  buildPageMetadata,
  faqJsonLd,
  firmFaqs,
} from '@/lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'Mineral Law & Corporate Counsel · Kampala',
    description: siteConfig.description,
    path: '/',
    keywords: [
      ...siteConfig.keywords,
      'gold lawyer Uganda',
      'mining legal counsel Kampala',
      'precious metal export lawyer',
    ],
  }),
  title: {
    absolute: `${siteConfig.name} | Mineral Law & Corporate Counsel · Kampala, Uganda`,
  },
}

const practiceIcons: Record<string, LucideIcon> = {
  'mineral-law': Pickaxe,
  'corporate-law': Briefcase,
  'mergers-acquisitions': Building2,
  'banking-finance': Award,
  'intellectual-property': Scale,
  'commercial-law': FileText,
  'employment-law': Users,
}

const mineralPractice = practiceAreas.find((p) => p.slug === 'mineral-law')!
const homeInsights = getInsightsSorted().slice(0, 3)

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80'
const MINERAL_IMAGE =
  'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1400&q=80'
const CHAMBERS_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'

export default function Home() {
  return (
    <>
      <JsonLd id="home-faq-schema" data={faqJsonLd([...firmFaqs])} />
      <Navbar />
      <main>
        {/* ─── HERO SLIDER (team) ─── */}
        {/* Replace the hero with a team slider for experimentation */}
        {/* The HeroSlider component is loaded client-side — run `pnpm install` to add Swiper before running the dev server. */}
        {/** Render the client `HeroSlider` component */}
        <HeroSlider />

        {/* ─── CREDENTIAL STRIP ─── */}
        <section className="border-b border-border bg-paper">
          <div className="container-page py-8 sm:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              {[
                { label: 'Established', value: String(siteConfig.established) },
                { label: 'Practice areas', value: String(practiceAreas.length) },
                { label: 'Chambers', value: 'Kampala' },
                { label: 'Service model', value: 'Partner-led' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="stat-divider text-center md:text-left md:px-6 first:md:pl-0 last:md:pr-0"
                >
                  <p className="font-display text-3xl sm:text-4xl text-primary tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED: MINERAL LAW ─── */}
        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border overflow-hidden shadow-[var(--shadow-soft)]">
              <div className="relative lg:col-span-5 min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                <Image
                  src={MINERAL_IMAGE}
                  alt="Gold and mineral trade - legal counsel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ink/30" />
                <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
                  <span className="inline-flex items-center gap-2 border border-accent/40 bg-ink/60 backdrop-blur-sm px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    <Pickaxe className="h-3.5 w-3.5" strokeWidth={1.75} />
                    Core practice
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 bg-card p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-7 bg-accent" />
                  <p className="eyebrow text-accent">01 · Featured practice</p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] text-foreground text-balance leading-tight">
                  {mineralPractice.title}
                </h2>
                <p className="mt-5 text-muted-foreground font-light leading-relaxed text-base sm:text-lg max-w-xl">
                  {mineralPractice.description}
                </p>
                <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mineralPractice.details.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground font-light">
                      <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/12">
                        <Check className="h-2.5 w-2.5 text-accent" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                  <Link href="/services/mineral-law" className="btn-secondary !h-11 !px-6 !text-[11px]">
                    Explore mineral law
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center gap-2 border border-border px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent/40 hover:text-primary"
                  >
                    Instruct this practice
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHO WE ARE ─── */}
        <section className="section-y bg-secondary relative">
          <div className="absolute top-0 left-0 right-0 rule-gold opacity-50" />
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[4/5] overflow-hidden border border-border shadow-[var(--shadow-lift)]">
                  <Image
                    src={CHAMBERS_IMAGE}
                    alt="Professional chambers at AfriCourts, Kampala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="eyebrow text-accent mb-1">Chambers</p>
                    <p className="font-display text-xl text-primary-foreground">
                      AfriCourts, Kampala
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <SectionHeader
                  eyebrow="Who We Are"
                  title="A full-service commercial practice, built around your business"
                  className="mb-0"
                />
                <div className="mt-6 space-y-4 text-muted-foreground font-light leading-relaxed text-[15px] sm:text-base">
                  <p>
                    From our chambers at AfriCourts on Buganda Road in Kampala, we
                    advise companies, mining operators, financial institutions,
                    investors, and entrepreneurs, with particular depth in mineral
                    law and precious metal trade, alongside corporate, banking, IP,
                    and employment counsel.
                  </p>
                  <p>
                    Clients instruct McFord for partner-led attention, practical
                    advice, and disciplined execution. We combine deep knowledge
                    of the Ugandan market with the standards expected of a modern
                    commercial firm.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      icon: Users,
                      title: 'Partner-led matters',
                      text: 'Senior involvement from first instruction to closing.',
                    },
                    {
                      icon: Shield,
                      title: 'Risk, made clear',
                      text: 'Exposure identified early so you can decide with confidence.',
                    },
                    {
                      icon: Building2,
                      title: 'Commercial judgment',
                      text: 'Advice framed around deals, timelines, and outcomes.',
                    },
                    {
                      icon: Pickaxe,
                      title: 'Extractives insight',
                      text: 'Practical counsel on mining and precious metal trade.',
                    },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="card-quiet flex gap-4 p-5 border border-border bg-card"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-secondary">
                          <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-display text-lg text-foreground mb-0.5">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground font-light leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors group"
                >
                  Learn more about the firm
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRACTICE AREAS ─── */}
        <section className="section-y">
          <div className="container-page">
            <SectionHeader
              eyebrow="Practice Areas"
              title="Legal expertise across the commercial spectrum"
              description="From mineral law and precious metal trade to corporate formation, financing, IP, and employment - counsel that supports your commercial objectives."
              action={
                <Link href="/services" className="btn-secondary !h-11 !px-6 !text-[11px]">
                  View all services
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-[var(--shadow-soft)]">
              {practiceAreas.map((area, index) => {
                const Icon = practiceIcons[area.slug] ?? Briefcase
                const isFeatured = area.slug === 'mineral-law'
                return (
                  <Link
                    key={area.slug}
                    href={`/services/${area.slug}`}
                    className={`group relative p-8 sm:p-9 transition-all duration-300 hover:bg-paper ${
                      isFeatured
                        ? 'bg-ink text-primary-foreground md:col-span-2 lg:col-span-1'
                        : 'bg-card'
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 h-full w-0.5 scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300 ${
                        isFeatured ? 'bg-accent' : 'bg-accent'
                      }`}
                    />
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className={`flex h-11 w-11 items-center justify-center border transition-colors ${
                          isFeatured
                            ? 'border-primary-foreground/15 bg-primary-foreground/5 group-hover:border-accent/50'
                            : 'border-border bg-secondary group-hover:border-accent/40 group-hover:bg-accent/5'
                        }`}
                      >
                        <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <span
                        className={`font-display text-2xl select-none transition-colors ${
                          isFeatured
                            ? 'text-accent/35 group-hover:text-accent/55'
                            : 'text-accent/20 group-hover:text-accent/40'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    {isFeatured && (
                      <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                        Core focus
                      </span>
                    )}
                    <h3
                      className={`font-display text-xl sm:text-[1.35rem] mb-2 transition-colors ${
                        isFeatured
                          ? 'text-primary-foreground'
                          : 'text-foreground group-hover:text-primary'
                      }`}
                    >
                      {area.title}
                    </h3>
                    <p
                      className={`text-sm font-light leading-relaxed mb-6 ${
                        isFeatured
                          ? 'text-primary-foreground/65'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {area.short}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      Learn more
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* ─── WHO WE ACT FOR ─── */}
        <section className="section-y-sm border-y border-border bg-paper">
          <div className="container-page">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
              <div className="lg:max-w-xs shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-6 bg-accent" />
                  <p className="eyebrow text-accent">Who We Act For</p>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-foreground">
                  Clients who demand clarity and results
                </h2>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3.5">
                {[
                  'Mining operators & traders',
                  'Precious metal exporters',
                  'Private companies & SMEs',
                  'Financial institutions',
                  'Investors & sponsors',
                  'International counsel',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-sm border border-transparent px-1 py-1.5 hover:border-border hover:bg-card transition-colors"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Check className="h-3 w-3 text-accent" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm text-muted-foreground font-light">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SELECTED EXPERIENCE ─── */}
        <section className="section-y">
          <div className="container-page">
            <SectionHeader
              eyebrow="Experience"
              title="Selected work that reflects how we advise"
              description="Representative, anonymised matters across our core practices. Client confidentiality is always preserved."
              align="center"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border shadow-[var(--shadow-soft)]">
              {selectedExperience.map((item) => (
                <article
                  key={item.headline}
                  className="card-quiet bg-card p-7 sm:p-8 group"
                >
                  <p className="eyebrow text-accent mb-3">{item.sector}</p>
                  <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors">
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
                <Link href="/insights" className="btn-secondary !h-11 !px-6 !text-[11px]">
                  View all insights
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              }
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {homeInsights.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="card-lift group flex flex-col border border-border bg-card p-7 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                      {post.type}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {post.dateLabel}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                    Read insight
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
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
                  className="card-quiet relative p-7 sm:p-8 border border-border bg-card"
                >
                  <span className="font-display text-5xl text-accent/12 absolute top-4 right-5 leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-0.5 w-8 bg-accent/60 mb-5" />
                  <h3 className="font-display text-xl text-foreground mb-2 pr-12">
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
        <section className="relative overflow-hidden hero-mesh grain py-20 sm:py-28 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="absolute bottom-0 left-0 right-0 rule-gold" />
          <div className="container-page relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-px w-7 bg-accent" />
                  <p className="eyebrow text-accent">Personalised Attention</p>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
                  Advice that is rigorous, responsive, and commercially aware
                </h2>
                <p className="mt-5 text-primary-foreground/70 font-light text-lg max-w-xl leading-relaxed">
                  Whether you are closing a transaction, structuring a precious
                  metal trade, resolving a dispute, or launching a venture - you
                  work with lawyers who understand both the law and the business
                  context.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative border border-primary-foreground/12 bg-primary-foreground/[0.05] backdrop-blur-sm p-8 sm:p-9 frame-corners">
                  <Quote
                    className="h-8 w-8 text-accent mb-5 opacity-70"
                    strokeWidth={1.25}
                  />
                  <blockquote className="font-display text-xl sm:text-2xl leading-snug text-primary-foreground/95">
                    We measure success by outcomes: clean closings, well-managed
                    disputes, and clients who return because the advice was clear
                    and the execution reliable.
                  </blockquote>
                  <p className="mt-7 eyebrow text-primary-foreground/40">
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
            <div className="grid grid-cols-1 md:grid-cols-4 border border-border bg-border gap-px shadow-[var(--shadow-soft)]">
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
                  <div
                    key={item.step}
                    className="bg-card p-7 sm:p-8 group hover:bg-paper transition-colors"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-display text-3xl text-accent/30 group-hover:text-accent/50 transition-colors">
                        {item.step}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center border border-border bg-secondary group-hover:border-accent/40 transition-colors">
                        <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                      </div>
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

        {/* ─── FAQ ─── */}
        <section className="section-y border-t border-border" aria-label="Frequently asked questions">
          <div className="container-page">
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions about the firm"
              description="Quick answers for clients and advisors evaluating corporate counsel in Kampala."
              align="center"
            />
            <div className="mx-auto max-w-3xl divide-y divide-border border border-border bg-card shadow-[var(--shadow-soft)]">
              {firmFaqs.map((faq) => (
                <details key={faq.question} className="group p-6 sm:p-7">
                  <summary className="cursor-pointer list-none font-display text-lg sm:text-xl text-foreground flex items-start justify-between gap-4 hover:text-primary transition-colors">
                    <span>{faq.question}</span>
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center border border-border text-accent text-sm transition-all duration-300 group-open:rotate-45 group-open:border-accent/40 group-open:bg-accent/5"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm sm:text-base text-muted-foreground font-light leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="section-y">
          <div className="container-page">
            <div className="relative overflow-hidden panel-ink">
              <div className="absolute inset-0 opacity-50 bg-[radial-gradient(ellipse_at_top_right,oklch(0.66_0.12_76_/_0.28),transparent_55%)]" />
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[48px_48px]" />
              <div className="absolute top-0 left-0 right-0 rule-gold" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 sm:p-14 lg:p-16 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-px w-7 bg-accent" />
                    <p className="eyebrow text-accent">Get Started</p>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-balance leading-tight">
                    Instruct counsel that treats your business seriously
                  </h2>
                  <p className="mt-5 text-primary-foreground/60 font-light text-lg max-w-lg leading-relaxed">
                    Call us, write to us, or send a confidential enquiry. We respond
                    promptly and handle every matter with discretion.
                  </p>
                </div>
                <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link href="/contact" className="btn-primary w-full sm:w-auto lg:w-full">
                    Contact the firm
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={siteConfig.phones[0].href}
                    className="inline-flex h-12 items-center justify-center border border-primary-foreground/20 px-8 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-all hover:border-accent/50 hover:bg-primary-foreground/5"
                  >
                    {siteConfig.phones[0].display}
                  </a>
                  <a
                    href={siteConfig.emailHref}
                    className="inline-flex h-12 items-center justify-center border border-primary-foreground/10 px-8 text-[12px] font-medium tracking-wide text-primary-foreground/70 transition-all hover:text-accent hover:border-accent/30"
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
