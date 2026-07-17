import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site'

export function Topbar() {
  return (
    <div className="hidden lg:block bg-primary text-primary-foreground text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between gap-6">
          <div className="flex items-center gap-6 min-w-0">
            <a
              href={siteConfig.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity truncate"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{siteConfig.address.short}</span>
            </a>
          </div>
          <div className="flex items-center gap-6 shrink-0">
            <a
              href={siteConfig.phones[0].href}
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{siteConfig.phones[0].display}</span>
            </a>
            <a
              href={siteConfig.phones[1].href}
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>{siteConfig.phones[1].display}</span>
            </a>
            <a
              href={siteConfig.emailHref}
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
