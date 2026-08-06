import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/** McFord Advocates favicon - ink navy monogram with champagne gold accents */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#141c2e',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: '#c4a35a',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            fontWeight: 600,
            color: '#f5f0e8',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: 1,
            marginTop: 1,
            letterSpacing: -0.5,
          }}
        >
          M
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 4,
            left: 7,
            width: 18,
            height: 2,
            background: '#c4a35a',
            borderRadius: 1,
          }}
        />
      </div>
    ),
    { ...size },
  )
}
