import { FONTS, PALETTE } from '../../../../data/tokens';
import Button from '../../../primitives/Button';
import Marquee from './Marquee';

const p = PALETTE;

function DesktopHero() {
  return (
    <section style={{ padding: '0 32px', position: 'relative', minHeight: '85vh' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 24,
        padding: '64px 0 88px',
        alignItems: 'start',
      }}>
        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
          color: p.fgDim, paddingTop: 8,
        }} data-reveal>
          <div>/INDEX 2026</div>
          <div style={{ marginTop: 6 }}>/v 4.2</div>
          <div style={{ marginTop: 24, height: 1, background: p.rule, width: 32 }} />
          <div style={{ marginTop: 16 }}>00°18′49″N</div>
          <div>32°34′52″E</div>
        </div>

        <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
          <h1 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(24px, 4vw, 66px)',
            lineHeight: 0.94, letterSpacing: '-0.025em',
            margin: 0, color: p.fg,
          }}>
            Websites for<br />
            Uganda&rsquo;s most<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: p.accent }}>ambitious</em> businesses.
          </h1>
          <p style={{
            fontFamily: FONTS.serif, fontWeight: 300, fontStyle: 'italic',
            fontSize: 'clamp(18px, 1.6vw, 22px)',
            lineHeight: 1.4, color: p.fgDim,
            margin: '32px 0 0', maxWidth: '46ch',
          }}>
            Designed to compete globally.<br />
            Built for how Uganda actually works.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <Button href="#work" bg={p.accent} color="#FAFAF7" border={p.accent}>
              SEE THE WORK <span aria-hidden>→</span>
            </Button>
            <Button href="#start" color={p.fg} border={`${p.fg}55`}>
              START A PROJECT <span aria-hidden>→</span>
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
            <span style={{ color: p.fg }}>Bank-grade engineering. Founding member of Afropocene.</span>
            <span style={{ color: p.accent2 }}>›</span>
            <span>Built by a former AVP Software Developer ($7T in assets) and a working artist.</span>
          </div>
        </div>

        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.06em',
          color: p.fgDim, paddingTop: 8, textAlign: 'right',
        }} data-reveal data-reveal-delay="160">
          <div style={{ color: p.fg }}>NOW</div>
          <div style={{ marginTop: 4 }}>Booking Q3 2026</div>
          <div style={{ marginTop: 18, color: p.fg }}>STATUS</div>
          <div style={{ marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{
              width: 6, height: 6, background: p.accent2,
              display: 'inline-block', borderRadius: '50%',
              boxShadow: `0 0 0 3px ${p.accent2}33`,
            }} />
            <span>2 slots open</span>
          </div>
          <div style={{ marginTop: 18, color: p.fg }}>NEXT</div>
          <div style={{ marginTop: 4 }}>Yujo Izakaya<br />ships 14 May</div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Marquee variant="desktop" />
      </div>
    </section>
  );
}

function MobileHero() {
  return (
    <section style={{ padding: '40px 20px 28px' }}>
      <div data-mreveal style={{
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em', color: p.fgDim,
        display: 'flex', justifyContent: 'space-between',
        marginBottom: 28,
      }}>
        <span>/INDEX 2026 · v 4.2</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          <span style={{
            width: 5, height: 5, background: p.accent2,
            display: 'inline-block', borderRadius: '50%',
            boxShadow: `0 0 0 3px ${p.accent2}33`,
          }} />
          <span>2 SLOTS OPEN</span>
        </span>
      </div>

      <h1 data-mreveal data-mreveal-delay="80" style={{
        fontFamily: FONTS.serif, fontWeight: 400,
        fontSize: 'clamp(44px, 13vw, 64px)',
        lineHeight: 0.94, letterSpacing: '-0.025em',
        margin: 0, color: p.fg,
      }}>
        Websites for<br />
        Uganda&rsquo;s most<br />
        <em style={{ fontStyle: 'italic', fontWeight: 300, color: p.accent }}>ambitious</em><br />
        businesses.
      </h1>

      <p data-mreveal data-mreveal-delay="160" style={{
        fontFamily: FONTS.serif, fontWeight: 300, fontStyle: 'italic',
        fontSize: 17, lineHeight: 1.4,
        color: p.fgDim, margin: '24px 0 0',
      }}>
        Designed to compete globally.<br />
        Built for how Uganda actually works.
      </p>

      <div data-mreveal data-mreveal-delay="220" style={{ display: 'grid', gap: 8, marginTop: 28 }}>
        <a href="#work" style={{
          background: p.accent, color: '#FAFAF7',
          padding: '16px 18px', borderRadius: 2,
          fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em',
          textDecoration: 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: `1px solid ${p.accent}`,
        }}>
          <span>SEE THE WORK</span><span aria-hidden>→</span>
        </a>
        <a href="#mstart" style={{
          background: 'transparent', color: p.fg,
          padding: '16px 18px', borderRadius: 2,
          fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em',
          textDecoration: 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: `1px solid ${p.fg}55`,
        }}>
          <span>START A PROJECT</span><span aria-hidden>→</span>
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
        <span style={{ color: p.fg }}>Bank-grade engineering. Founding member of Afropocene.</span>
        <span style={{ color: p.accent2 }}>›</span>
        <span>Built by a former AVP Software Developer ($7T in assets) and a working artist.</span>
      </div>
    </section>
  );
}

export default function Hero({ variant = 'desktop' }) {
  return variant === 'mobile' ? <MobileHero /> : <DesktopHero />;
}
