import Link from 'next/link'
import Image from 'next/image'
import { siteConfig, practiceAreas } from '@/lib/site'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const practices = practiceAreas

  return (
    <footer className="relative bg-ink text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_top_right,oklch(0.68_0.12_76),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[64px_64px]" />
      <div className="absolute top-0 left-0 right-0 rule-gold" />

      <div className="container-page relative pt-16 pb-10 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="McFord Advocates logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </Link>
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight">
                  {siteConfig.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40 mt-0.5">
                  Est. {siteConfig.established} · Kampala
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/55 leading-relaxed max-w-sm font-light">
              Full-service corporate and commercial counsel from AfriCourts in
              Nakasero, Kampala. Practical, discreet, and partner-led.
            </p>
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand hover:text-brand transition-colors group"
            >
              WhatsApp the firm
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-accent/90 mb-5">Navigate</p>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors link-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-accent/90 mb-5">Practice</p>
            <ul className="space-y-3">
              {practices.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/services/${area.slug}`}
                    className="text-sm text-primary-foreground/55 hover:text-primary-foreground transition-colors link-underline"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/insights"
                  className="text-sm text-accent/90 hover:text-accent transition-colors link-underline"
                >
                  Insights & updates
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-accent/90 mb-5">Chambers</p>
            <address className="not-italic space-y-4 text-sm text-primary-foreground/55 font-light leading-relaxed">
              <div>
                {siteConfig.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block mt-2 text-primary-foreground/35 text-xs">
                  {siteConfig.address.postal}
                </span>
              </div>
              <div className="space-y-1.5">
                {siteConfig.phones.map((p) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className="block text-primary-foreground/75 hover:text-accent transition-colors"
                  >
                    {p.display}
                  </a>
                ))}
                <a
                  href={siteConfig.emailHref}
                  className="block text-primary-foreground/75 hover:text-accent transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="text-xs text-primary-foreground/35 pt-1 space-y-0.5">
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.saturday}</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1.5">
            <p className="text-xs text-primary-foreground/35 tracking-wide">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-[11px] text-primary-foreground/30 font-light max-w-xl leading-relaxed">
              Official website: {siteConfig.domain}. The former domain{' '}
              {siteConfig.formerDomain} is not controlled by this firm - please
              use {siteConfig.domain} only.
            </p>
          </div>
          <p className="text-xs text-primary-foreground/30 tracking-[0.14em] uppercase shrink-0">
            Advocates & Legal Consultants
          </p>
        </div>
      </div>
    </footer>
  )
}
