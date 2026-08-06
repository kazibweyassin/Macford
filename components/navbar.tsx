'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden lg:block bg-ink text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-between text-[11px] tracking-wide">
          <p className="text-primary-foreground/50 font-medium">
            Official site: {siteConfig.domain} · AfriCourts, Nakasero, Kampala
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="inline-flex items-center gap-1.5 text-primary-foreground/65 hover:text-accent transition-colors"
              >
                <Phone className="h-3 w-3 opacity-60" strokeWidth={1.75} />
                {p.display}
              </a>
            ))}
            <a
              href={siteConfig.emailHref}
              className="text-primary-foreground/65 hover:text-accent transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={cn(
          'border-b transition-all duration-300',
          scrolled
            ? 'bg-background/92 backdrop-blur-xl border-border shadow-[0_10px_40px_-18px_rgba(20,28,46,0.18)]'
            : 'bg-background/96 backdrop-blur-md border-border/50'
        )}
      >
        <div className="container-page">
          <div className="flex h-[4.35rem] items-center justify-between gap-6">
            <Link href="/" className="group flex items-center gap-3.5 min-w-0">
              <div className="relative flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-[1.03]">
                <span className="font-display text-lg font-semibold tracking-tight">
                  M
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
              </div>
              <div className="leading-none min-w-0">
                <span className="block font-display text-[1.4rem] font-semibold text-primary tracking-tight">
                  McFord
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-medium">
                  Advocates
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {siteConfig.nav.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors',
                      active
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        'absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] bg-accent transition-all duration-300 origin-left',
                        active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                      )}
                    />
                  </Link>
                )
              })}
            </div>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn-secondary !h-10 !px-5 !text-[11px]">
                Consultation
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-border bg-card text-foreground transition-colors hover:border-accent/40"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={cn(
              'lg:hidden overflow-hidden transition-all duration-300 ease-out',
              isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
            )}
          >
            <div className="border-t border-border pb-6 pt-3 space-y-0.5">
              {siteConfig.nav.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between px-2 py-3.5 text-sm font-medium transition-colors',
                      active ? 'text-primary' : 'text-foreground/80'
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="btn-primary mt-3 w-full"
              >
                Request Consultation
              </Link>
              <div className="px-2 pt-5 space-y-1.5 text-xs text-muted-foreground border-t border-border mt-4">
                <a href={siteConfig.phones[0].href} className="block hover:text-accent transition-colors">
                  {siteConfig.phones[0].display}
                </a>
                <a href={siteConfig.emailHref} className="block hover:text-accent transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
