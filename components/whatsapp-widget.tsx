import React from 'react'

export function WhatsAppWidget(): JSX.Element | null {
  const numberEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  const country = process.env.NEXT_PUBLIC_WHATSAPP_COUNTRY || '256'
  const suffix = process.env.NEXT_PUBLIC_WHATSAPP_SUFFIX

  const phone = numberEnv || (suffix ? `${country}${suffix}` : '')

  if (!phone || phone.length < 6) {
    if (typeof console !== 'undefined') console.warn('WhatsApp widget: no valid phone number provided')
    return null
  }

  const href = `https://wa.me/${phone}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Open WhatsApp chat"
      className="fixed z-50 bottom-6 right-6 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      style={{ backgroundColor: '#25D366', color: 'white' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.9 11.9 0 0012 0C5.373 0 .02 5.355 0 11.98 0 14.53.78 17 2.22 18.98L.2 24l5.13-2.13A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12 0-2.96-1.04-5.7-2.48-7.52zM12 21.5c-2.02 0-3.95-.55-5.64-1.6l-.4-.25-3.05 1.27 1.3-3.02-.26-.41A9.5 9.5 0 012.5 11.98C2.5 7.36 6.38 3.5 11 3.5c4.62 0 8.5 3.88 8.5 8.48S16.62 20.5 12 20.5zm5.27-7.78c-.29-.15-1.71-.84-1.98-.93-.27-.09-.47-.14-.67.15-.2.29-.77.93-.94 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.12-.6.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.04-.35-.02-.5-.06-.14-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.35-.26.28-.99.97-.99 2.37 0 1.4 1.01 2.75 1.15 2.94.14.19 1.99 3.04 4.82 4.26 1.34.56 1.9.6 2.58.5.66-.1 2.05-.84 2.34-1.66.29-.82.29-1.52.2-1.66-.09-.14-.31-.2-.6-.35z" />
      </svg>
    </a>
  )
}

export default WhatsAppWidget
