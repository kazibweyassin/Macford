'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Download, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

export type RepresentativeExperienceGroup = {
  category: string
  matters: readonly string[]
}

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
  representativeExperience?: readonly RepresentativeExperienceGroup[]
  jurisdictions?: readonly string[]
  /** Optional full CV / profile PDF (public path) */
  profilePdf?: string
}

export function TeamMemberCard({ member }: { member: TeamMemberCardData }) {
  const [open, setOpen] = useState(false)
  const contentId = useId()
  const hasPdf = Boolean(member.profilePdf)
  const overlayParas = member.bio.slice(0, 1)

  return (
    <article
      className={cn(
        'group relative overflow-hidden border border-border bg-card transition-all duration-300',
        open
          ? 'border-accent/30 shadow-[var(--shadow-lift)]'
          : 'hover:border-accent/25 hover:shadow-[var(--shadow-soft)]',
      )}
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
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

        {/* Hover overlay */}
        <div
          className={cn(
            'absolute inset-0 flex flex-col justify-end bg-ink/88 p-5 backdrop-blur-[2px] transition-all duration-300 ease-out sm:p-6',
            open
              ? 'translate-y-0 opacity-100'
              : 'pointer-events-none translate-y-3 opacity-0 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100',
          )}
        >
          <p className="eyebrow mb-2 text-accent">{member.experience}</p>

          <div className="max-h-[50%] space-y-2.5 overflow-y-auto pr-1">
            {overlayParas.map((para) => (
              <p
                key={para.slice(0, 40)}
                className="text-[12px] font-light leading-relaxed text-primary-foreground/85 sm:text-[13px]"
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

        {/* Name strip */}
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-300 sm:p-6',
            open ? 'opacity-0' : 'opacity-100 group-hover:opacity-0',
          )}
        >
          <p className="eyebrow mb-1 text-accent">{member.title}</p>
          <h3 className="font-display text-2xl leading-tight text-primary-foreground">
            {member.name}
          </h3>
        </div>
      </div>

      {/* Card body */}
      <div className="border-t border-border p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow mb-1.5 text-accent sm:hidden">{member.title}</p>
            <h3 className="font-display text-xl leading-tight text-foreground sm:hidden sm:text-2xl">
              {member.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:mt-0">
              {member.specialization}
            </p>
          </div>

          {/* Compact PDF download arrow */}
          {hasPdf && member.profilePdf && (
            <a
              href={member.profilePdf}
              download
              aria-label={`Download ${member.name}'s full profile PDF`}
              title="Download full profile PDF"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-secondary text-accent transition-colors hover:border-accent/50 hover:bg-accent hover:text-accent-foreground"
            >
              <Download className="h-4 w-4" />
            </a>
          )}
        </div>

        <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
          {member.description}
        </p>

        {/* Full profile */}
        <div
          id={contentId}
          className={cn(
            'grid transition-all duration-300 ease-out',
            open ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <div className="space-y-6 border-t border-border pt-5">
              {/* Biography */}
              <section>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  Profile
                </h4>
                <div className="space-y-3">
                  {member.bio.map((para) => (
                    <p
                      key={para.slice(0, 48)}
                      className="text-sm font-light leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>

              {/* Practice focus */}
              {member.focus.length > 0 && (
                <section>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                    Practice Focus
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {member.focus.map((item) => (
                      <li
                        key={item}
                        className="border border-border bg-secondary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground/80"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Representative experience */}
              {member.representativeExperience &&
                member.representativeExperience.length > 0 && (
                  <section>
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                      Representative Experience
                    </h4>

                    <div className="space-y-5">
                      {member.representativeExperience.map((group) => (
                        <div key={group.category}>
                          <h5 className="mb-2 font-display text-base text-foreground">
                            {group.category}
                          </h5>
                          <ul className="space-y-2">
                            {group.matters.map((matter) => (
                              <li
                                key={matter}
                                className="flex gap-2.5 text-sm font-light leading-relaxed text-muted-foreground"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent"
                                />
                                <span>{matter}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

              {/* Regional practice */}
              {member.jurisdictions && member.jurisdictions.length > 0 && (
                <section>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                    Regional Practice
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    Qualified to practise in {member.jurisdictions.join(', ')}.
                  </p>
                </section>
              )}

              {/* Education */}
              {member.education && (
                <section>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                    Education & Qualifications
                  </h4>
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {member.education}
                  </p>
                </section>
              )}

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 pt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-primary"
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
          onClick={() => setOpen((value) => !value)}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-border bg-secondary/60 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent/40 hover:bg-secondary"
          aria-expanded={open}
          aria-controls={contentId}
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
