'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { siteConfig, teamMembers } from '@/lib/site'

export function HeroSlider() {
  const slides = teamMembers.filter((m) => m.name !== 'Rwangoga Enoth')

  return (
    <section className="relative overflow-hidden text-primary-foreground min-h-[min(80vh,760px)] flex items-end sm:items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,oklch(0.66_0.12_76_/_0.14),transparent_55%)]" />
      </div>

      <div className="container-page relative w-full py-12 sm:py-20 lg:py-28">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          className="hero-swiper"
        >
          {slides.map((member) => (
            <SwiperSlide key={member.name}>
              <div className="relative min-h-[48vh] sm:min-h-[56vh] lg:min-h-[64vh] rounded-lg overflow-hidden shadow-[var(--shadow-soft)]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.title}`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end sm:items-center">
                  <div className="p-6 sm:p-10 lg:p-12 max-w-3xl">
                    <p className="eyebrow mb-2 text-accent">{member.title}</p>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-balance mb-3">
                      {member.name}
                    </h2>
                    <p className="text-base sm:text-lg text-primary-foreground/90 max-w-xl font-light mb-6">
                      {member.description}
                    </p>
                    <div className="flex gap-3">
                      <Link href="/team" className="btn-primary">
                        View team
                      </Link>
                      <Link href="/team" className="btn-ghost-light">
                        View profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
