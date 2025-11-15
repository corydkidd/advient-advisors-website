import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    // Load the headshot image
    const imageData = await fetch(
      new URL('../../../public/images/cory-kidd-headshot.jpg', import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#0A1628',
            position: 'relative',
          }}
        >
          {/* Particle Network Pattern Background */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.15,
              background: 'radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 217, 255, 0.2) 0%, transparent 50%)',
            }}
          />

          {/* Left Side - Text Content (60%) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              width: '60%',
              padding: '80px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* Advient Advisors */}
            <div
              style={{
                fontSize: '24px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                color: '#00D9FF',
                marginBottom: '24px',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              ADVIENT ADVISORS
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: '64px',
                fontWeight: 700,
                color: '#E8E9ED',
                lineHeight: 1.1,
                marginBottom: '16px',
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Dr. Cory Kidd
            </div>

            {/* Cyan Accent Line */}
            <div
              style={{
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, #00D9FF 0%, transparent 100%)',
                marginBottom: '32px',
              }}
            />

            {/* Subtitle */}
            <div
              style={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#A0A4B0',
                lineHeight: 1.3,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              Enterprise AI Strategy &<br />Implementation
            </div>
          </div>

          {/* Right Side - Headshot (40%) */}
          <div
            style={{
              display: 'flex',
              width: '40%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '60px',
            }}
          >
            {/* Image Container with Cyan Border */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                maxWidth: '380px',
              }}
            >
              {/* Main Image */}
              <img
                src={`data:image/jpeg;base64,${Buffer.from(imageData).toString('base64')}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  position: 'relative',
                  zIndex: 2,
                }}
                alt="Dr. Cory Kidd"
              />

              {/* Cyan Glow Border */}
              <div
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  right: '-8px',
                  bottom: '-8px',
                  border: '3px solid #00D9FF',
                  borderRadius: '16px',
                  boxShadow: '0 0 40px rgba(0, 217, 255, 0.4)',
                  zIndex: 1,
                }}
              />

              {/* Top-Left Corner Frame */}
              <div
                style={{
                  position: 'absolute',
                  top: '-16px',
                  left: '-16px',
                  width: '40px',
                  height: '40px',
                  borderTop: '3px solid #00D9FF',
                  borderLeft: '3px solid #00D9FF',
                  zIndex: 3,
                }}
              />

              {/* Bottom-Right Corner Frame */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  right: '-16px',
                  width: '40px',
                  height: '40px',
                  borderBottom: '3px solid #00D9FF',
                  borderRight: '3px solid #00D9FF',
                  zIndex: 3,
                }}
              />
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
