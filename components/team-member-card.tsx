'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export type TeamMemberCardData = {
  name: string
  title: string
  specialization: string
  experience: string
  image: string
  description: string
  bio: readonly string[]
  focus: readonly string[]
  education?: string
  linkedin?: string
}

export function TeamMemberCard({ member }: { member: TeamMemberCardData }) {
  const [open, setOpen] = useState(false)

  return (
    <article
      className={cn(
        'group relative border border-border bg-card overflow-hidden transition-all duration-300',
        open
          ? 'shadow-[var(--shadow-lift)] border-accent/30'
          : 'hover:border-accent/25 hover:shadow-[var(--shadow-soft)]',
      )}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.title} at McFord Advocates`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            'object-cover object-top transition-transform duration-700',
            open ? 'scale-[1.04]' : 'group-hover:scale-[1.04]',
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

        {/* Hover / open bio overlay on photo */}
        <div
          className={cn(
            'absolute inset-0 flex flex-col justify-end p-5 sm:p-6 bg-ink/88 backdrop-blur-[2px] transition-all duration-400 ease-out',
            open
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto',
          )}
        >
          <p className="eyebrow text-accent mb-2">{member.experience}</p>
          <div className="space-y-2.5 max-h-[55%] overflow-y-auto pr-1 scrollbar-thin">
            {member.bio.slice(0, 2).map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-[12px] sm:text-[13px] text-primary-foreground/85 font-light leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
          {member.focus.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {member.focus.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="border border-accent/35 bg-accent/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Name strip always visible at bottom of photo when not hovering */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-opacity duration-300',
            open ? 'opacity-0' : 'opacity-100 group-hover:opacity-0',
          )}
        >
          <p className="eyebrow text-accent mb-1">{member.title}</p>
          <h3 className="font-display text-2xl text-primary-foreground leading-tight">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 border-t border-border">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <p className="eyebrow text-accent mb-1.5 sm:hidden">{member.title}</p>
            <h3 className="font-display text-xl sm:text-2xl text-foreground leading-tight sm:hidden">
              {member.name}
            </h3>
            <p className="hidden sm:block text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {member.specialization}
            </p>
            <p className="sm:hidden mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {member.specialization}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">
          {member.description}
        </p>

        {/* Expandable full bio (better than hover-only on mobile) */}
        <div
          className={cn(
            'grid transition-all duration-400 ease-out',
            open ? 'grid-rows-[1fr] mt-5 opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-3 border-t border-border pt-5">
              {member.bio.map((para) => (
                <p
                  key={para.slice(0, 48)}
                  className="text-sm text-muted-foreground font-light leading-relaxed"
                >
                  {para}
                </p>
              ))}
              {member.education && (
                <p className="text-xs text-muted-foreground/80 font-medium tracking-wide pt-1">
                  {member.education}
                </p>
              )}
              <ul className="flex flex-wrap gap-2 pt-1">
                {member.focus.map((item) => (
                  <li
                    key={item}
                    className="border border-border bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent hover:text-primary transition-colors pt-1"
                >
                  LinkedIn profile
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-border bg-secondary/60 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent/40 hover:bg-secondary"
          aria-expanded={open}
        >
          {open ? 'Hide full profile' : 'View full profile'}
          <ChevronDown
            className={cn(
              'h-3.5 w-3.5 transition-transform duration-300',
              open && 'rotate-180',
            )}
          />
        </button>
      </div>
    </article>
  )
}
