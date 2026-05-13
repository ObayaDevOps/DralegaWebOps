import { FONTS, PALETTE } from '../../../../data/tokens';
import { HOME } from '../../../../data/home';
import Button from '../../../primitives/Button';
import Marquee from './Marquee';
import Iridescence from './Iridescence';

const p = PALETTE;

function splitLines(text) {
  if (!text) return [];
  return text.split(/\r?\n/);
}

function DesktopHero({ hero }) {
  const taglineLines = splitLines(hero.tagline);
  const nextLines = splitLines(hero.nextValue);
  return (
    <section style={{ padding: '0 32px', position: 'relative', minHeight: '85vh', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.18 }}>
        <Iridescence color={[1, 1, 1]} mouseReact={true} amplitude={0.1} speed={0.3} />
      </div>
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 24,
        padding: '120px 0 88px',
        alignItems: 'start',
      }}>
        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
          color: p.fgDim, paddingTop: 8,
        }} data-reveal>
          <div>{hero.indexLabel}</div>
          <div style={{ marginTop: 6 }}>{hero.version}</div>
          <div style={{ marginTop: 24, height: 1, background: p.rule, width: 32 }} />
          <div style={{ marginTop: 16 }}>{hero.coordsLat}</div>
          <div>{hero.coordsLon}</div>
        </div>

        <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(17px, 2.8vw, 66px)',
            lineHeight: 0.94, letterSpacing: '-0.025em',
            margin: 0, color: p.fg,
          }}>
            {hero.heading}<br />
            {hero.headingLine2}<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: p.accent3 }}>{hero.headingEmphasis}</em>{' '}{hero.headingTail}
          </h1>
          <p style={{
            fontFamily: FONTS.serif, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(18px, 1.6vw, 22px)',
            lineHeight: 1.4, color: p.fgDim,
            margin: '32px 0 0', maxWidth: '46ch',
          }}>
            {taglineLines.map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <Button href={hero.ctaPrimary?.href || '#work'} bg={p.accent} color={p.fg} border={p.accent}>
              {hero.ctaPrimary?.label || 'SEE THE WORK'} <span aria-hidden>→</span>
            </Button>
            <Button href={hero.ctaSecondary?.href || '#start'} color={p.fg} border={`${p.fg}55`}>
              {hero.ctaSecondary?.label || 'START A PROJECT'} <span aria-hidden>→</span>
            </Button>
          </div>

          <div style={{
            marginTop: 56, paddingTop: 20,
            borderTop: `1px solid ${p.rule}`,
            display: 'grid',
            gridTemplateColumns: '12px 1fr',
            columnGap: 16, rowGap: 6,
            maxWidth: 720,
            fontFamily: FONTS.mono,
            fontSize: 12, letterSpacing: '0.02em',
            color: p.fgDim, lineHeight: 1.55,
          }}>
            <span style={{ color: p.accent2 }}>›</span>
            <span style={{ color: p.fg }}>{hero.credential1}</span>
            <span style={{ color: p.accent2 }}>›</span>
            <span>{hero.credential2}</span>
          </div>
        </div>

        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.06em',
          color: p.fgDim, paddingTop: 8, textAlign: 'right',
        }} data-reveal data-reveal-delay="160">
          <div style={{ color: p.fg }}>{hero.nowLabel}</div>
          <div style={{ marginTop: 4 }}>{hero.nowValue}</div>
          <div style={{ marginTop: 18, color: p.fg }}>{hero.statusLabel}</div>
          <div style={{ marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              width: 6, height: 6, background: p.accent2,
              display: 'inline-block', borderRadius: '50%',
              boxShadow: `0 0 0 3px ${p.accent2}33`,
            }} />
            <span>{hero.statusValue}</span>
          </div>
          <div style={{ marginTop: 18, color: p.fg }}>{hero.nextLabel}</div>
          <div style={{ marginTop: 4 }}>
            {nextLines.map((line, i) => (
              <span key={i}>{line}{i < nextLines.length - 1 && <br />}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 1 }}>
        <Marquee variant="desktop" items={hero.marqueeItems} />
      </div>
    </section>
  );
}

function MobileHero({ hero }) {
  const taglineLines = splitLines(hero.tagline);
  return (
    <section style={{ padding: '80px 20px 28px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.18 }}>
        <Iridescence color={[1, 1, 1]} mouseReact={false} amplitude={0.1} speed={0.3} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div data-mreveal style={{
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em', color: p.fgDim,
        display: 'flex', justifyContent: 'space-between',
        marginBottom: 28,
      }}>
        <span>{hero.indexLabel} · {hero.version?.replace(/^\//, '')}</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{
            width: 5, height: 5, background: p.accent2,
            display: 'inline-block', borderRadius: '50%',
            boxShadow: `0 0 0 3px ${p.accent2}33`,
          }} />
          <span>{hero.statusValue?.toUpperCase()}</span>
        </span>
      </div>

      <h1 data-mreveal data-mreveal-delay="80" style={{
        fontFamily: FONTS.serif, fontWeight: 400,
        fontSize: 'clamp(31px, 9.1vw, 45px)',
        lineHeight: 0.94, letterSpacing: '-0.025em',
        margin: 0, color: p.fg,
      }}>
        {hero.heading}<br />
        {hero.headingLine2}<br />
        <em style={{ fontStyle: 'italic', fontWeight: 300, color: p.accent3 }}>{hero.headingEmphasis}</em><br />
        {hero.headingTail}
      </h1>

      <p data-mreveal data-mreveal-delay="160" style={{
        fontFamily: FONTS.serif, fontWeight: 300, fontStyle: 'italic',
        fontSize: 17, lineHeight: 1.4,
        color: p.fgDim, margin: '24px 0 0',
      }}>
        {taglineLines.map((line, i) => (
          <span key={i}>{line}{i < taglineLines.length - 1 && <br />}</span>
        ))}
      </p>

      <div data-mreveal data-mreveal-delay="220" style={{ display: 'grid', gap: 8, marginTop: 28 }}>
        <a href={hero.ctaPrimary?.href || '#work'} style={{
          background: p.accent, color: p.accent3,
          padding: '16px 18px', borderRadius: 2,
          fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em',
          textDecoration: 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: `1px solid ${p.accent}`,
        }}>
          <span>{hero.ctaPrimary?.label || 'SEE THE WORK'}</span><span aria-hidden>→</span>
        </a>
        <a href={hero.ctaSecondary?.href || '#mstart'} style={{
          background: 'transparent', color: p.fg,
          padding: '16px 18px', borderRadius: 2,
          fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em',
          textDecoration: 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: `1px solid ${p.fg}55`,
        }}>
          <span>{hero.ctaSecondary?.label || 'START A PROJECT'}</span><span aria-hidden>→</span>
        </a>
      </div>

      <div data-mreveal data-mreveal-delay="280" style={{
        marginTop: 36, paddingTop: 16,
        borderTop: `1px solid ${p.rule}`,
        fontFamily: FONTS.mono,
        fontSize: 11, letterSpacing: '0.02em',
        color: p.fgDim, lineHeight: 1.55,
        display: 'grid', gridTemplateColumns: '12px 1fr',
        columnGap: 12, rowGap: 6,
      }}>
        <span style={{ color: p.accent2 }}>›</span>
        <span style={{ color: p.fg }}>{hero.credential1}</span>
        <span style={{ color: p.accent2 }}>›</span>
        <span>{hero.credential2}</span>
      </div>
      </div>
    </section>
  );
}

export default function Hero({ variant = 'desktop', hero = HOME.hero }) {
  return variant === 'mobile' ? <MobileHero hero={hero} /> : <DesktopHero hero={hero} />;
}
