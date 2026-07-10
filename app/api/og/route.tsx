import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Brand palette
const NAVY = '#1B2A4A';
const NAVY_DEEP = '#14213B';
const CREAM = '#F8F4EE';
const CREAM_MUTED = '#CFC8BA';
const GOLD = '#C9A84C';

// Calibration-tick signature — five gold bars of varying height
function Ticks() {
  const heights = [9, 15, 23, 13, 18];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', height: 24 }}>
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: h,
            background: GOLD,
            marginRight: i < heights.length - 1 ? 5 : 0,
          }}
        />
      ))}
    </div>
  );
}

export async function GET() {
  try {
    const [gloock, instrumentSans] = await Promise.all([
      fetch(new URL('./fonts/Gloock-Regular.ttf', import.meta.url)).then((r) =>
        r.arrayBuffer()
      ),
      fetch(new URL('./fonts/InstrumentSans-SemiBold.ttf', import.meta.url)).then((r) =>
        r.arrayBuffer()
      ),
    ]);

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '80px',
            backgroundColor: NAVY_DEEP,
            backgroundImage: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
            position: 'relative',
            fontFamily: 'Instrument Sans',
          }}
        >
          {/* Radial navy-soft lift in the top-right corner (matches hero) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              backgroundImage:
                'radial-gradient(120% 90% at 82% 8%, #24365e 0%, rgba(36,54,94,0) 55%)',
            }}
          />

          {/* Gold corner brackets echoing the portrait frame */}
          <div
            style={{
              position: 'absolute',
              top: 44,
              left: 44,
              width: 46,
              height: 46,
              borderTop: `3px solid ${GOLD}`,
              borderLeft: `3px solid ${GOLD}`,
              display: 'flex',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 44,
              right: 44,
              width: 46,
              height: 46,
              borderBottom: `3px solid ${GOLD}`,
              borderRight: `3px solid ${GOLD}`,
              display: 'flex',
            }}
          />

          {/* Top — tick cluster + eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Ticks />
            <div
              style={{
                marginLeft: 16,
                fontFamily: 'Instrument Sans',
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: GOLD,
              }}
            >
              Advient Advisors
            </div>
          </div>

          {/* Center — dominant tagline (two lines, "advantage" in gold) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'Gloock',
              fontSize: 78,
              lineHeight: 1.05,
              color: CREAM,
              margin: '30px 0 46px',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex' }}>We turn AI ambition</div>
            <div style={{ display: 'flex' }}>
              <span style={{ color: CREAM }}>into&nbsp;</span>
              <span style={{ color: GOLD }}>advantage.</span>
            </div>
          </div>

          {/* Bottom — gold hairline, name, tagline */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <div
              style={{
                width: 104,
                height: 2,
                background: GOLD,
                marginBottom: 26,
                display: 'flex',
              }}
            />
            <div
              style={{
                fontFamily: 'Gloock',
                fontSize: 30,
                color: CREAM,
                display: 'flex',
              }}
            >
              Dr. Cory Kidd, Ph.D.
            </div>
            <div
              style={{
                fontFamily: 'Instrument Sans',
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: '0.02em',
                color: CREAM_MUTED,
                marginTop: 10,
                display: 'flex',
              }}
            >
              Enterprise AI — built, not just advised
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: 'Gloock', data: gloock, weight: 400, style: 'normal' },
          { name: 'Instrument Sans', data: instrumentSans, weight: 600, style: 'normal' },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
