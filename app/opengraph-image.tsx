import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const alt = `${siteConfig.name} - Corporate & Commercial Law Firm, Kampala`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
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
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                border: '1px solid rgba(196, 163, 90, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#c4a35a',
                fontSize: 32,
                fontWeight: 600,
                marginRight: 18,
              }}
            >
              M
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 28,
                  letterSpacing: 1,
                  fontWeight: 600,
                }}
              >
                {siteConfig.name}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 14,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  color: 'rgba(245, 240, 232, 0.55)',
                  fontFamily: 'system-ui, sans-serif',
                  marginTop: 4,
                }}
              >
                Est. {siteConfig.established} · Kampala, Uganda
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 40,
              fontSize: 58,
              lineHeight: 1.1,
              fontWeight: 500,
              maxWidth: 920,
            }}
          >
            <div style={{ display: 'flex' }}>Clear counsel.</div>
            <div style={{ display: 'flex', color: '#e8d5a3', fontStyle: 'italic' }}>
              Confident decisions.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: 20,
              fontSize: 24,
              lineHeight: 1.45,
              color: 'rgba(245, 240, 232, 0.72)',
              maxWidth: 860,
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Corporate & commercial law · Mineral law · Disputes · Finance
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
            AfriCourts · Buganda Road · Kampala
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              color: '#c4a35a',
              letterSpacing: 0.5,
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
