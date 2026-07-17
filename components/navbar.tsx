'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
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

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden lg:block bg-ink text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-between text-[11px] tracking-wide">
          <p className="text-primary-foreground/55 font-medium">
            AfriCourts · Plot 107 Buganda Road · Nakasero, Kampala
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.phones.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {p.display}
              </a>
            ))}
            <a
              href={siteConfig.emailHref}
              className="text-primary-foreground/70 hover:text-accent transition-colors"
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
            ? 'bg-background/90 backdrop-blur-xl border-border shadow-[0_8px_30px_-12px_rgba(20,28,46,0.12)]'
            : 'bg-background/95 backdrop-blur-md border-border/60'
        )}
      >
        <div className="container-page">
          <div className="flex h-[4.25rem] items-center justify-between gap-6">
            <Link href="/" className="group flex items-center gap-3.5 min-w-0">
              <div className="relative flex h-10 w-10 items-center justify-center border border-primary/15 bg-primary text-primary-foreground transition-colors group-hover:border-accent/40">
                <span className="font-display text-lg font-semibold tracking-tight">M</span>
                <span className="absolute -bottom-px left-1 right-1 h-px bg-accent opacity-80" />
              </div>
              <div className="leading-none min-w-0">
                <span className="block font-display text-[1.35rem] font-semibold text-primary tracking-tight">
                  McFord
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
                  Advocates
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
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
                        'absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-accent transition-opacity duration-300',
                        active ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </Link>
                )
              })}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center border border-accent/30 bg-primary px-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-all hover:bg-ink-soft hover:border-accent/60"
              >
                Consultation
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-border text-foreground"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen && (
            <div className="lg:hidden border-t border-border pb-5 pt-3 space-y-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-2 py-3 text-sm font-medium text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 flex h-11 items-center justify-center bg-primary text-[12px] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
              >
                Request Consultation
              </Link>
              <div className="px-2 pt-4 space-y-1 text-xs text-muted-foreground">
                <p>{siteConfig.phones[0].display}</p>
                <p>{siteConfig.email}</p>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
