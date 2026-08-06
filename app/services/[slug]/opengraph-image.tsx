import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'
import { getPracticeArea } from '@/lib/seo'

export const alt = 'Practice area - McFord Advocates'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function PracticeOpenGraphImage({ params }: Props) {
  const { slug } = await params
  const area = getPracticeArea(slug)
  const title = area?.title ?? 'Practice Areas'
  const short =
    area?.short ??
    'Corporate and commercial counsel from Kampala, Uganda.'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(145deg, #0f1524 0%, #141c2e 45%, #1a2540 100%)',
          color: '#f5f0e8',
          padding: '56px 64px',
          fontFamily: 'Georgia, "Times New Roman", serif',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            display: 'flex',
            background: 'linear-gradient(90deg, #c4a35a, #e8d5a3, #c4a35a)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 14,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: '#c4a35a',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {siteConfig.name} · Practice Area
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 56,
              lineHeight: 1.08,
              fontWeight: 500,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 22,
              fontSize: 24,
              lineHeight: 1.4,
              color: 'rgba(245, 240, 232, 0.72)',
              maxWidth: 900,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            {short}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid rgba(245, 240, 232, 0.12)',
            paddingTop: 28,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 18,
              color: 'rgba(245, 240, 232, 0.55)',
            }}
          >
            Kampala · Uganda · Est. {siteConfig.established}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              color: '#c4a35a',
            }}
          >
            {siteConfig.domain}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
