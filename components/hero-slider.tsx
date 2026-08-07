'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { teamMembers } from '@/lib/site'

export interface HeroTeamMember {
  name: string
  role: string
  /** Path under /public, e.g. "/team/jane-mcford.jpg" */
  image: string
  description?: string
}

interface HeroSliderProps {
  /** Environmental/office photos only — NOT headshots. These crossfade behind the copy. */
  backgroundImages: string[]
  /** Lawyer headshots for the scrollable strip below the headline. */
  team?: HeroTeamMember[]
  /** The existing hero copy (eyebrow, h1, paragraph, tag pills, CTAs) */
  children: React.ReactNode
}

export function HeroSlider({ backgroundImages, team, children }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (backgroundImages.length <= 1) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % backgroundImages.length)
    }, 6500)
    return () => clearInterval(id)
  }, [backgroundImages.length])

  // Ensure we always have a stable array to render. If `team` prop is
  // omitted, collect members from shared `teamMembers` and exclude Enoth.
  const displayTeam: HeroTeamMember[] = (team ??
    teamMembers
      .filter((m) => !/enoth/i.test(m.name))
      .map((m) => ({ name: m.name, role: m.title, image: m.image, description: m.description }))
  )

  return (
    <section className="relative overflow-hidden text-primary-foreground min-h-[460px] sm:min-h-[560px] lg:min-h-[620px] flex items-end sm:items-center">
      {/* ─── Background crossfade ─── */}
      <div className="absolute inset-0">
        {backgroundImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Legal chambers and professional counsel"
            fill
            priority={i === 0}
            sizes="100vw"
            quality={75}
            className={`object-cover object-[center_32%] transition-opacity duration-[1600ms] ease-in-out ${
              i === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,oklch(0.66_0.12_76_/_0.14),transparent_55%)]" />
      </div>

      {/* Slide indicators — only shown when there's more than one background photo */}
      {backgroundImages.length > 1 && (
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10 flex gap-1.5">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Show background photo ${i + 1}`}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? 'w-6 bg-accent'
                  : 'w-1.5 bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
            />
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 rule-gold" />

      <div className="container-page relative w-full py-14 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {children}

          {/* ─── Team headshot strip ─── */}
          {displayTeam.length > 0 && (
            <div className="mt-9 sm:mt-11 animate-fade-up delay-500">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/50">
                Meet the team
              </p>
              <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 snap-x snap-mandatory">
                {displayTeam.map((member, idx) => (
                  <div
                    key={`${member.name}-${idx}`}
                    className="group relative shrink-0 w-[100px] sm:w-[112px] snap-start border border-primary-foreground/15 bg-primary-foreground/[0.05] backdrop-blur-sm p-2 transition-colors hover:border-accent/40"
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="112px"
                        className="object-cover grayscale-[15%] transition-all group-hover:grayscale-0"
                      />
                    </div>
                    <p className="mt-2 text-[11px] font-medium text-primary-foreground/90 truncate">
                      {member.name}
                    </p>
                    <p className="text-[10px] text-primary-foreground/50 truncate">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
