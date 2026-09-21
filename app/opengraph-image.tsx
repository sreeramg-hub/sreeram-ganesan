import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/data'

export const alt = `${SITE.name} — ${SITE.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#020617',
          backgroundImage: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: '#60a5fa',
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          sreeramganesan.dev
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 88,
            fontWeight: 700,
            backgroundImage: 'linear-gradient(135deg, #60a5fa, #3b82f6, #93c5fd)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 42,
            color: '#e2e8f0',
            marginTop: 20,
          }}
        >
          {SITE.title}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
