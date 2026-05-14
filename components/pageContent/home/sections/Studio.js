import { FONTS, PALETTE } from '../../../../data/tokens';
import { HOME } from '../../../../data/home';

const p = PALETTE;

function renderBodyWithEmphasis(body, emphasis) {
  if (!body) return null;
  if (!emphasis || !body.includes(emphasis)) return body;
  const [before, after] = body.split(emphasis);
  return (
    <>
      {before}<em style={{ color: p.accent }}>{emphasis}</em>{after}
    </>
  );
}

function DesktopStudio({ data }) {
  const stats = data.stats || [];
  const capabilities = data.capabilities || [];
  return (
    <section style={{ padding: '120px 32px', borderTop: `1px solid ${p.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{ gridColumn: 'span 5' }} data-reveal>
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.08em',
            color: p.fgDim, marginBottom: 24,
          }}>{data.eyebrow}</div>
          <p style={{
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 'clamp(31.2px, 3.38vw, 46.8px)',
            lineHeight: 1.2, margin: 0, color: p.fg,
            letterSpacing: '-0.012em',
          }}>
            {renderBodyWithEmphasis(data.body, data.bodyEmphasis)}
          </p>
          <div style={{
            marginTop: 40, display: 'flex', gap: 24,
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.06em', color: p.fgDim,
          }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ color: p.fg }}>{s.label}</div>
                <div style={{ marginTop: 4 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ gridColumn: '7 / span 6' }}>
          {capabilities.map((c, i) => (
            <div key={c.label} data-reveal data-reveal-delay={i * 60} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24,
              padding: '20px 0',
              borderTop: i === 0 ? `1px solid ${p.rule}` : 'none',
              borderBottom: `1px solid ${p.rule}`,
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: FONTS.mono,
                fontSize: 12, letterSpacing: '0.1em',
                color: p.accent3,
              }}>/{c.label}</div>
              <div style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(23.4px, 1.95vw, 28.6px)',
                color: p.fg, lineHeight: 1.4,
                letterSpacing: '-0.005em',
              }}>{(c.items || []).join(' · ')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileStudio({ data }) {
  const stats = data.stats || [];
  const capabilities = data.capabilities || [];
  return (
    <section style={{ padding: '64px 20px 40px', borderTop: `1px solid ${p.rule}` }}>
      <div data-mreveal style={{
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em', color: p.fgDim,
        marginBottom: 16,
      }}>{data.eyebrow}</div>

      <p data-mreveal data-mreveal-delay="60" style={{
        fontFamily: FONTS.serif, fontWeight: 300,
        fontSize: 28.6, lineHeight: 1.3, letterSpacing: '-0.012em',
        margin: '0 0 36px', color: p.fg,
      }}>
        {renderBodyWithEmphasis(data.body, data.bodyEmphasis)}
      </p>

      <div data-mreveal data-mreveal-delay="120" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
        padding: '16px 0',
        borderTop: `1px solid ${p.rule}`,
        borderBottom: `1px solid ${p.rule}`,
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.06em', color: p.fgDim,
        marginBottom: 32,
      }}>
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ color: p.fg }}>{s.label}</div>
            <div style={{ marginTop: 4 }}>{s.value}</div>
          </div>
        ))}
      </div>

      {capabilities.map((c, i) => (
        <div key={c.label} data-mreveal data-mreveal-delay={i * 50} style={{
          padding: '16px 0',
          borderBottom: `1px solid ${p.rule}`,
        }}>
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.1em',
            color: p.accent3, marginBottom: 6,
          }}>/{c.label}</div>
          <div style={{
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 22.1, lineHeight: 1.4, letterSpacing: '-0.005em',
            color: p.fg,
          }}>{(c.items || []).join(' · ')}</div>
        </div>
      ))}
    </section>
  );
}

export default function Studio({ variant = 'desktop', studioSection = HOME.studioSection }) {
  const Inner = variant === 'mobile' ? MobileStudio : DesktopStudio;
  return <Inner data={studioSection} />;
}
