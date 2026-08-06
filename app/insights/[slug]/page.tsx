import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { practiceAreas, siteConfig } from '@/lib/site'
import {
  getInsight,
  getRelatedInsights,
  insights,
} from '@/lib/insights'
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  absoluteUrl,
} from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getInsight(slug)
  if (!post) return {}

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    keywords: [
      post.type,
      practiceAreas.find((p) => p.slug === post.practiceSlug)?.title ?? '',
      'legal insights Uganda',
      ...siteConfig.keywords.slice(0, 5),
    ].filter(Boolean),
  })
}

function practiceTitle(slug: string) {
  return practiceAreas.find((p) => p.slug === slug)?.title ?? slug
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = getInsight(slug)
  if (!post) notFound()

  const related = getRelatedInsights(post.slug, 3)
  const practice = practiceAreas.find((p) => p.slug === post.practiceSlug)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/insights/${post.slug}`),
    articleSection: practiceTitle(post.practiceSlug),
  }

  return (
    <>
      <JsonLd
        id="insight-breadcrumb"
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />
      <JsonLd id="insight-article-schema" data={articleJsonLd} />
      <Navbar />
      <main>
        {/* Article hero */}
        <section className="relative overflow-hidden text-primary-foreground">
          {post.image ? (
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/70 to-ink/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/40" />
            </div>
          ) : (
            <div className="absolute inset-0 hero-mesh grain" />
          )}
          <div className="absolute bottom-0 left-0 right-0 rule-gold" />

          <div className="container-page relative py-16 sm:py-20 lg:py-24">
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-primary-foreground/55 font-medium">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-accent/50">/</li>
                <li>
                  <Link href="/insights" className="hover:text-accent transition-colors">
                    Insights
                  </Link>
                </li>
                <li className="text-accent/50">/</li>
                <li className="text-primary-foreground/85 line-clamp-1 max-w-[12rem] sm:max-w-none">
                  {post.type}
                </li>
              </ol>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                {post.type}
              </span>
              <Link
                href={`/insights?practice=${post.practiceSlug}`}
                className="text-[11px] uppercase tracking-[0.12em] text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {practiceTitle(post.practiceSlug)}
              </Link>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] leading-[1.1] text-balance max-w-3xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/65 font-light">
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span className="h-1 w-1 rounded-full bg-primary-foreground/30" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <article className="lg:col-span-8">
                <p className="text-lg sm:text-xl text-foreground/85 font-light leading-relaxed border-l-2 border-accent pl-5 mb-10">
                  {post.excerpt}
                </p>

                <div className="space-y-10">
                  {post.sections.map((section, i) => (
                    <div key={i}>
                      {section.heading && (
                        <h2 className="font-display text-2xl sm:text-[1.65rem] text-foreground mb-4">
                          {section.heading}
                        </h2>
                      )}
                      <div className="space-y-4">
                        {section.paragraphs.map((p, j) => (
                          <p
                            key={j}
                            className="text-muted-foreground font-light leading-relaxed text-[15px] sm:text-base"
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-5 border border-border bg-secondary/60 text-xs text-muted-foreground font-light leading-relaxed">
                  <strong className="font-medium text-foreground">Disclaimer. </strong>
                  This insight is for general information only and does not constitute legal advice.
                  For advice on your specific circumstances, please{' '}
                  <Link href="/contact" className="text-accent font-medium hover:underline">
                    contact {siteConfig.name}
                  </Link>
                  .
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    All insights
                  </Link>
                  {practice && (
                    <Link
                      href={`/services/${practice.slug}`}
                      className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-accent transition-colors"
                    >
                      {practice.title} practice
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </article>

              <aside className="lg:col-span-4 space-y-6">
                {post.takeaways && post.takeaways.length > 0 && (
                  <div className="border border-border bg-card p-7 shadow-[var(--shadow-soft)] sticky top-28">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-px w-6 bg-accent" />
                      <p className="eyebrow text-accent">Key takeaways</p>
                    </div>
                    <ul className="space-y-3.5">
                      {post.takeaways.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 items-start text-sm text-muted-foreground font-light"
                        >
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="btn-secondary mt-8 w-full !h-11 !text-[11px]"
                    >
                      Discuss with our team
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                )}

                {practice && (
                  <div className="border border-border bg-secondary/50 p-6">
                    <p className="eyebrow text-accent mb-2">Related practice</p>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      <Link
                        href={`/services/${practice.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {practice.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {practice.short}
                    </p>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-y bg-secondary border-t border-border">
            <div className="container-page">
              <div className="flex items-end justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-7 bg-accent" />
                    <p className="eyebrow text-accent">Related</p>
                  </div>
                  <h2 className="font-display text-3xl text-foreground">
                    More insights
                  </h2>
                </div>
                <Link
                  href="/insights"
                  className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-accent transition-colors"
                >
                  View all
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((item) => (
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
      </main>
      <Footer />
    </>
  )
}
