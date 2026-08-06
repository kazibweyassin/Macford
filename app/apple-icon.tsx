import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/** Apple touch icon - McFord monogram */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0f1524 0%, #141c2e 50%, #1a2540 100%)',
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
            background: 'linear-gradient(90deg, #a8883f, #c4a35a, #e8d5a3, #c4a35a, #a8883f)',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 96,
            fontWeight: 600,
            color: '#f5f0e8',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          M
        </div>
        <div
          style={{
            marginTop: 10,
            width: 56,
            height: 4,
            background: '#c4a35a',
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size },
  )
}
