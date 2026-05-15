import { FONTS, PALETTE } from '../../../../data/tokens';
import { HOME } from '../../../../data/home';

const p = PALETTE;

function renderBodyWithEmphasis(body, emphasis) {
  if (!body) return null;
  if (!emphasis || !body.includes(emphasis)) return body;
  const [before, after] = body.split(emphasis);
  return (
    <>
      {before}<em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{emphasis}</em>{after}
    </>
  );
}

function DesktopStudio({ data }) {
  const stats = data.stats || [];
  const capabilities = data.capabilities || [];
  return (
    <div style={{ height: '200vh' }}>
      <section style={{
        position: 'sticky', top: 0,
        height: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: p.fg,
        padding: '0 32px', boxSizing: 'border-box',
      }}>
        <ScrollArrow bottom={32} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
          <div style={{ gridColumn: 'span 5' }}>
            <div style={{
              fontFamily: FONTS.mono,
              fontSize: 11, letterSpacing: '0.08em',
              color: `${p.bg}99`, marginBottom: 24,
            }}>{data.eyebrow}</div>
            <p style={{
              fontFamily: FONTS.serif, fontWeight: 300,
              fontSize: 'clamp(31.2px, 3.38vw, 46.8px)',
              lineHeight: 1.2, margin: 0, color: p.bg,
              letterSpacing: '-0.012em',
            }}>
              {renderBodyWithEmphasis(data.body, data.bodyEmphasis)}
            </p>
            <div style={{
              marginTop: 40, display: 'flex', gap: 24,
              fontFamily: FONTS.mono,
              fontSize: 11, letterSpacing: '0.06em', color: `${p.bg}99`,
            }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div style={{ color: p.bg }}>{s.label}</div>
                  <div style={{ marginTop: 4 }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ gridColumn: '7 / span 6' }}>
            {capabilities.map((c, i) => (
              <div key={c.label} style={{
                display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24,
                padding: '20px 0',
                borderTop: i === 0 ? `1px solid ${p.bg}22` : 'none',
                borderBottom: `1px solid ${p.bg}22`,
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: FONTS.mono,
                  fontSize: 12, letterSpacing: '0.1em',
                  color: p.accent,
                }}>/{c.label}</div>
                <div style={{
                  fontFamily: FONTS.serif, fontWeight: 300,
                  fontSize: 'clamp(23.4px, 1.95vw, 28.6px)',
                  color: p.bg, lineHeight: 1.4,
                  letterSpacing: '-0.005em',
                }}>{(c.items || []).join(' · ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileStudio({ data }) {
  const stats = data.stats || [];
  const capabilities = data.capabilities || [];
  return (
    <div>
      <section style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: p.fg,
        padding: '60px 20px', boxSizing: 'border-box',
      }}>
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99`,
          marginBottom: 16,
        }}>{data.eyebrow}</div>

        <ScrollArrow bottom={24} />

        <p style={{
          fontFamily: FONTS.serif, fontWeight: 300,
          fontSize: 28.6, lineHeight: 1.3, letterSpacing: '-0.012em',
          margin: '0 0 36px', color: p.bg,
        }}>
          {renderBodyWithEmphasis(data.body, data.bodyEmphasis)}
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
          padding: '16px 0',
          borderTop: `1px solid ${p.bg}22`,
          borderBottom: `1px solid ${p.bg}22`,
          fontFamily: FONTS.mono,
          fontSize: 10, letterSpacing: '0.06em', color: `${p.bg}99`,
          marginBottom: 32,
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ color: p.bg }}>{s.label}</div>
              <div style={{ marginTop: 4 }}>{s.value}</div>
            </div>
          ))}
        </div>

        {capabilities.map((c, i) => (
          <div key={c.label} style={{
            padding: '16px 0',
            borderBottom: `1px solid ${p.bg}22`,
          }}>
            <div style={{
              fontFamily: FONTS.mono,
              fontSize: 11, letterSpacing: '0.1em',
              color: p.accent, marginBottom: 6,
            }}>/{c.label}</div>
            <div style={{
              fontFamily: FONTS.serif, fontWeight: 300,
              fontSize: 22.1, lineHeight: 1.4, letterSpacing: '-0.005em',
              color: p.bg,
            }}>{(c.items || []).join(' · ')}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

const arrowStyle = `
  @keyframes arrowDrift {
    0%, 100% { transform: translateY(0); opacity: 0.45; }
    50%       { transform: translateY(7px); opacity: 1; }
  }
`;

function ScrollArrow({ bottom = 32 }) {
  return (
    <>
      <style>{arrowStyle}</style>
      <div style={{
        position: 'absolute', bottom, left: '50%', transform: 'translateX(-50%)',
      }}>
        <svg
          width="22" height="22" viewBox="0 0 16 16" fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: 'arrowDrift 1.8s ease-in-out infinite', display: 'block' }}
        >
          <path d="M8 3v10M3 8l5 5 5-5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </>
  );
}

export default function Studio({ variant = 'desktop', studioSection = HOME.studioSection }) {
  const Inner = variant === 'mobile' ? MobileStudio : DesktopStudio;
  return <Inner data={studioSection} />;
}
