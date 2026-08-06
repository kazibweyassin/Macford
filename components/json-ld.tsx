type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
  id?: string
}

/** Renders schema.org JSON-LD for search engines and AI crawlers */
export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
