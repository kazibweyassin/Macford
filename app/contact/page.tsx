'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PageHero } from '@/components/ui/page-hero'
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { siteConfig, practiceAreas } from '@/lib/site'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
    setTimeout(() => {
      setIsSubmitted(false)
      e.currentTarget?.reset()
    }, 4000)
  }

  const fieldClass = 'field-input'

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Get in touch"
          description="Speak with our team about your matter. Visit us at AfriCourts in Kampala, or reach us by phone, email, or WhatsApp."
          crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]}
        />

        <section className="section-y">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <p className="eyebrow text-accent mb-3">Chambers</p>
                  <h2 className="font-display text-3xl text-foreground mb-3">
                    How to reach us
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">
                    Clients are welcome by appointment. Urgent matters can be raised
                    by phone or WhatsApp.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: 'Office location',
                      body: (
                        <>
                          {siteConfig.address.lines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                          <span className="block mt-2 text-muted-foreground/70 text-xs">
                            {siteConfig.address.postal}
                          </span>
                          <a
                            href={siteConfig.address.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent hover:text-primary mt-3 transition-colors"
                          >
                            Open in Maps
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </>
                      ),
                    },
                    {
                      icon: Phone,
                      title: 'Phone',
                      body: (
                        <div className="space-y-1">
                          {siteConfig.phones.map((p) => (
                            <a
                              key={p.href}
                              href={p.href}
                              className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
                            >
                              {p.display}
                            </a>
                          ))}
                        </div>
                      ),
                    },
                    {
                      icon: Mail,
                      title: 'Email',
                      body: (
                        <a
                          href={siteConfig.emailHref}
                          className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                        >
                          {siteConfig.email}
                        </a>
                      ),
                    },
                    {
                      icon: MessageCircle,
                      title: 'WhatsApp',
                      body: (
                        <a
                          href={siteConfig.whatsapp.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                        >
                          {siteConfig.whatsapp.display}
                        </a>
                      ),
                    },
                    {
                      icon: Clock,
                      title: 'Business hours',
                      body: (
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {siteConfig.hours.weekdays}
                          <br />
                          {siteConfig.hours.saturday}
                          <br />
                          {siteConfig.hours.sunday}
                        </p>
                      ),
                    },
                  ].map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-secondary">
                          <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-foreground mb-1.5">
                            {item.title}
                          </h3>
                          <div className="text-sm text-muted-foreground font-light">
                            {item.body}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="border border-border bg-card p-7 sm:p-10 shadow-[var(--shadow-soft)]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-6 bg-accent" />
                    <p className="eyebrow text-accent">Enquiry</p>
                  </div>
                  <h2 className="font-display text-3xl text-foreground mb-2">
                    Send a message
                  </h2>
                  <p className="text-sm text-muted-foreground font-light mb-8">
                    Tell us briefly about your matter. All enquiries are confidential.
                  </p>

                  {isSubmitted ? (
                    <div className="border border-accent/30 bg-secondary p-8 text-center">
                      <h3 className="font-display text-2xl text-foreground mb-2">
                        Message received
                      </h3>
                      <p className="text-sm text-muted-foreground font-light">
                        Thank you for contacting {siteConfig.name}. We will respond shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground mb-2">
                            Full name *
                          </label>
                          <input type="text" id="name" name="name" required className={fieldClass} placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground mb-2">
                            Email *
                          </label>
                          <input type="email" id="email" name="email" required className={fieldClass} placeholder="you@company.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground mb-2">
                            Phone
                          </label>
                          <input type="tel" id="phone" name="phone" className={fieldClass} placeholder="+256 XXX XXX XXX" />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground mb-2">
                            Organisation
                          </label>
                          <input type="text" id="company" name="company" className={fieldClass} placeholder="Company name" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground mb-2">
                          Practice area
                        </label>
                        <select id="service" name="service" className={fieldClass}>
                          <option value="">Select a practice area</option>
                          {practiceAreas.map((area) => (
                            <option key={area.slug} value={area.slug}>
                              {area.title}
                            </option>
                          ))}
                          <option value="other">Other / general enquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground mb-2">
                          How can we help? *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className={`${fieldClass} resize-none`}
                          placeholder="Briefly describe your legal needs..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary w-full disabled:opacity-60 disabled:pointer-events-none"
                      >
                        {isLoading ? 'Sending…' : 'Send message'}
                      </button>

                      <p className="text-xs text-muted-foreground text-center font-light">
                        Or call{' '}
                        <a href={siteConfig.phones[0].href} className="text-accent font-medium">
                          {siteConfig.phones[0].display}
                        </a>
                        {' / '}
                        <a href={siteConfig.phones[1].href} className="text-accent font-medium">
                          {siteConfig.phones[1].display}
                        </a>
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28">
          <div className="container-page">
            <div className="border border-border overflow-hidden bg-secondary">
              <iframe
                title="McFord Advocates office location"
                src={siteConfig.address.mapsEmbed}
                className="w-full h-[360px] sm:h-[440px] border-0 grayscale contrast-95"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-center text-xs uppercase tracking-[0.16em] text-muted-foreground mt-5">
              AfriCourts, 4th Floor · Plot 107 Buganda Road · Kampala
            </p>
          </div>
        </section>

        <section className="section-y bg-secondary">
          <div className="container-page">
            <h2 className="font-display text-3xl sm:text-4xl text-foreground text-center mb-10">
              Frequently asked questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
              {[
                {
                  q: 'How do I schedule a consultation?',
                  a: `Call either number, email ${siteConfig.email}, or use the form. We will confirm a time at AfriCourts or virtually.`,
                },
                {
                  q: 'What should I bring to a first meeting?',
                  a: 'Contracts, correspondence, company documents, or court papers related to your matter. A short written summary helps.',
                },
                {
                  q: 'Do you act for international clients?',
                  a: 'Yes. We regularly advise foreign investors and work with international counsel on Uganda-facing matters.',
                },
                {
                  q: 'How are fees structured?',
                  a: 'We may agree fixed fees, staged fees, or hourly rates. Fees are discussed transparently before work begins.',
                },
              ].map((item) => (
                <div key={item.q} className="p-7 border border-border bg-card">
                  <h3 className="font-display text-xl text-foreground mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
