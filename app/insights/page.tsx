import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { SectionHeader } from '@/components/ui/section-header'
import { JsonLd } from '@/components/json-ld'
import { practiceAreas, siteConfig } from '@/lib/site'
import {
  getInsightsSorted,
  insightTypes,
  type Insight,
  type InsightType,
} from '@/lib/insights'
import {
  breadcrumbJsonLd,
  buildPageMetadata,
} from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Insights',
  description: `Legal insights, guides, and updates from ${siteConfig.name} - mineral law, corporate, commercial, banking, IP, and employment issues for businesses in Uganda.`,
  path: '/insights',
  keywords: [
    'legal insights Uganda',
    'mineral law updates Uganda',
    'gold trading compliance Uganda guide',
    'mining licence Uganda insight',
    'law firm insights Kampala',
    'corporate law guide Uganda',
    ...siteConfig.keywords.slice(0, 10),
  ],
})

function practiceTitle(slug: string) {
  return practiceAreas.find((p) => p.slug === slug)?.title ?? slug
}

function buildFilterHref(opts: { type?: string; practice?: string }) {
  const q = new URLSearchParams()
  if (opts.type) q.set('type', opts.type)
  if (opts.practice) q.set('practice', opts.practice)
  const s = q.toString()
  return s ? `/insights?${s}` : '/insights'
}

function FilterChip({
  href,
  active,
  label,
}: {
  href: string
  active: boolean
  label: string
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center px-3 py-1.5 text-[11px] font-medium tracking-wide border transition-colors ${
        active
          ? 'border-primary bg-primary text-primary-foreground'
          : 'border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground'
      }`}
    >
      {label}
    </Link>
  )
}

function InsightCard({ post }: { post: Insight }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="card-lift group flex flex-col border border-border bg-card overflow-hidden"
    >
      {post.image && (
        <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            {post.type}
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
            {post.dateLabel}
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground mb-2">
          {practiceTitle(post.practiceSlug)}
        </p>
        <h3 className="font-display text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
          Read more
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

type PageProps = {
  searchParams: Promise<{ practice?: string; type?: string }>
}

export default async function InsightsPage({ searchParams }: PageProps) {
  const params = await searchParams
  const practiceFilter = params.practice
  const typeFilter = params.type as InsightType | undefined

  let items = getInsightsSorted()
  if (practiceFilter) {
    items = items.filter((i) => i.practiceSlug === practiceFilter)
  }
  if (typeFilter && insightTypes.includes(typeFilter)) {
    items = items.filter((i) => i.type === typeFilter)
  }

  const featured = items[0]
  const rest = items.slice(1)

  return (
    <>
      <JsonLd
        id="insights-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ])}
      />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Legal updates & insights"
          description="Practical notes, guides, and updates for businesses, investors, and operators navigating law and regulation in Uganda - from mineral trade to corporate and commercial matters."
          image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80"
          imageAlt="Legal research and professional insights"
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Insights' },
          ]}
        />

        <section className="border-b border-border bg-paper">
          <div className="container-page py-5 sm:py-6">
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mr-1">
                  Type
                </span>
                <FilterChip href="/insights" active={!typeFilter} label="All" />
                {insightTypes.map((t) => (
                  <FilterChip
                    key={t}
                    href={buildFilterHref({ type: t, practice: practiceFilter })}
                    active={typeFilter === t}
                    label={t}
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground mr-1">
                  Practice
                </span>
                <FilterChip
                  href={buildFilterHref({ type: typeFilter })}
                  active={!practiceFilter}
                  label="All practices"
                />
                {practiceAreas.map((p) => (
                  <FilterChip
                    key={p.slug}
                    href={buildFilterHref({ type: typeFilter, practice: p.slug })}
                    active={practiceFilter === p.slug}
                    label={p.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-page">
            {items.length === 0 ? (
              <div className="text-center py-16 border border-border bg-card">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-4" strokeWidth={1.5} />
                <h2 className="font-display text-2xl text-foreground mb-2">
                  No insights match these filters
                </h2>
                <p className="text-sm text-muted-foreground font-light mb-6">
                  Try another practice area or view all insights.
                </p>
                <Link href="/insights" className="btn-secondary !h-11 !px-6 !text-[11px]">
                  Clear filters
                </Link>
              </div>
            ) : (
              <>
                {featured && (
                  <Link
                    href={`/insights/${featured.slug}`}
                    className="group grid grid-cols-1 lg:grid-cols-12 border border-border overflow-hidden shadow-[var(--shadow-soft)] mb-10 hover:border-accent/30 transition-colors"
                  >
                    <div className="relative lg:col-span-5 min-h-[240px] sm:min-h-[300px]">
                      {featured.image ? (
                        <Image
                          src={featured.image}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          priority
                        />
                      ) : (
                        <div className="absolute inset-0 bg-secondary" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    </div>
                    <div className="lg:col-span-7 bg-card p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                          {featured.type}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="text-[11px] text-muted-foreground uppercase tracking-[0.12em]">
                          {practiceTitle(featured.practiceSlug)}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-border" />
                        <span className="text-[11px] text-muted-foreground">
                          {featured.dateLabel}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.15rem] text-foreground leading-tight group-hover:text-primary transition-colors text-balance">
                        {featured.title}
                      </h2>
                      <p className="mt-4 text-muted-foreground font-light leading-relaxed max-w-xl">
                        {featured.excerpt}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                        Read insight
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                )}

                {rest.length > 0 && (
                  <>
                    <SectionHeader
                      eyebrow="More insights"
                      title="Browse our latest notes"
                      className="mb-8 lg:mb-10"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {rest.map((post) => (
                        <InsightCard key={post.slug} post={post} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>

        <section className="relative overflow-hidden hero-mesh grain py-20 sm:py-24 text-primary-foreground">
          <div className="absolute top-0 left-0 right-0 rule-gold" />
          <div className="absolute bottom-0 left-0 right-0 rule-gold" />
          <div className="container-page text-center max-w-3xl">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-7 bg-accent" />
              <p className="eyebrow text-accent">Discuss a matter</p>
              <span className="h-px w-7 bg-accent" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-balance mb-4">
              Need advice on a specific issue?
            </h2>
            <p className="text-primary-foreground/60 font-light mb-9 text-lg">
              Insights are educational. For counsel on your facts, contact the firm.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
