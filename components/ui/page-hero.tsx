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
            className="object-cover object-center scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/45 to-ink/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/35" />
        </div>
      ) : (
        <>
          <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[56px_56px]" />
          <div className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 rule-gold" />

      <div className="container-page relative py-16 sm:py-20 lg:py-28">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-7 animate-fade-in">
            <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-primary-foreground/55 font-medium">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="text-accent/50 select-none" aria-hidden>
                      /
                    </span>
                  )}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="hover:text-accent transition-colors"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-primary-foreground/85">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <div className="mb-5 flex items-center gap-3 animate-fade-up">
            <span className="h-px w-8 bg-accent shrink-0" aria-hidden />
            <p className="eyebrow text-accent drop-shadow-sm">{eyebrow}</p>
          </div>
        )}

        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.06] text-balance max-w-3xl animate-fade-up delay-100 drop-shadow-sm">
          {title}
        </h1>

        {description && (
          <p className="mt-6 text-base sm:text-lg text-primary-foreground/88 max-w-2xl leading-relaxed font-light animate-fade-up delay-200 drop-shadow-sm">
            {description}
          </p>
        )}

        {children && (
          <div className="mt-9 animate-fade-up delay-300">{children}</div>
        )}
      </div>
    </section>
  )
}
