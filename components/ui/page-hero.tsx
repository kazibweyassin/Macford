import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Crumb = { label: string; href?: string }

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  crumbs?: Crumb[]
  className?: string
  children?: React.ReactNode
  /** Optional background photo (e.g. Unsplash). Uses a light overlay so the image stays visible. */
  image?: string
  imageAlt?: string
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  className,
  children,
  image,
  imageAlt = '',
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden text-primary-foreground',
        !image && 'hero-mesh grain',
        className
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Light overlays - photo stays visible, text stays readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/30 to-ink/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />
        </div>
      ) : (
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[48px_48px]" />
      )}

      <div className="absolute bottom-0 left-0 right-0 rule-gold" />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-primary-foreground/60 font-body tracking-wide">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && <span className="text-accent/60">/</span>}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-accent transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-primary-foreground/80">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p className="eyebrow text-accent mb-4 animate-fade-up drop-shadow-sm">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] text-balance max-w-3xl animate-fade-up delay-100 drop-shadow-sm">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base sm:text-lg text-primary-foreground/90 max-w-2xl leading-relaxed font-light animate-fade-up delay-200 drop-shadow-sm">
            {description}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-up delay-300">{children}</div>
        )}
      </div>
    </section>
  )
}
