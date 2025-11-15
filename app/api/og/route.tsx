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
                display: 'flex',
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
                display: 'flex',
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
                display: 'flex',
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
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span>Enterprise AI Strategy &</span>
              <span>Implementation</span>
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
              zIndex: 5,
            }}
          >
            {/* Image Container */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                width: '380px',
                height: '475px',
              }}
            >
              {/* Main Image */}
              <img
                src={`data:image/jpeg;base64,${Buffer.from(imageData).toString('base64')}`}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px',
                  objectFit: 'cover',
                }}
                alt="Dr. Cory Kidd"
              />

              {/* Corner Frame Overlays */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '-12px',
                  width: '40px',
                  height: '40px',
                  borderTop: '3px solid #00D9FF',
                  borderLeft: '3px solid #00D9FF',
                  display: 'flex',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  right: '-12px',
                  width: '40px',
                  height: '40px',
                  borderBottom: '3px solid #00D9FF',
                  borderRight: '3px solid #00D9FF',
                  display: 'flex',
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
