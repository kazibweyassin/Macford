import Link from 'next/link'
import { siteConfig, practiceAreas } from '@/lib/site'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const practices = practiceAreas.slice(0, 6)

  return (
    <footer className="relative bg-ink text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_top_right,oklch(0.68_0.11_78),transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 rule-gold" />

      <div className="container-page relative pt-16 pb-10 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10 mb-14">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="relative flex h-11 w-11 items-center justify-center border border-primary-foreground/15 bg-primary-foreground/5">
                <span className="font-display text-xl font-semibold text-accent">M</span>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight">
                  {siteConfig.name}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/45 mt-0.5">
                  Est. {siteConfig.established} · Kampala
                </p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-sm font-light">
              Full-service corporate and commercial counsel from AfriCourts,
              Nakasero - practical, discreet, and partner-led.
            </p>
            <a
              href={siteConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent hover:text-champagne transition-colors"
            >
              WhatsApp the firm
              <span aria-hidden>→</span>
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
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors link-underline"
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
              {practices.map((area) => (
                <li key={area.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors link-underline"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow text-accent/90 mb-5">Chambers</p>
            <address className="not-italic space-y-4 text-sm text-primary-foreground/60 font-light leading-relaxed">
              <div>
                {siteConfig.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block mt-2 text-primary-foreground/40 text-xs">
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
              <div className="text-xs text-primary-foreground/40 pt-1">
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.saturday}</p>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40 tracking-wide">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/35 tracking-[0.12em] uppercase">
            Advocates & Legal Consultants
          </p>
        </div>
      </div>
    </footer>
  )
}
