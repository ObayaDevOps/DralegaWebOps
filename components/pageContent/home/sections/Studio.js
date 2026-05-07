import { FONTS, PALETTE } from '../../../../data/tokens';

const p = PALETTE;

const CAPABILITIES_DESKTOP = [
  { l: 'BUILD',  items: ['Next.js', 'TypeScript', 'Sanity', 'Shopify', 'Postgres', 'Headless CMS'] },
  { l: 'PAY',    items: ['Pesapal', 'MTN MoMo', 'Airtel Money', 'Stripe', 'Crypto rails'] },
  { l: 'DESIGN', items: ['Brand systems', 'Editorial type', 'Motion', 'Art direction', 'UX research'] },
  { l: 'GROW',   items: ['SEO (PR 95+)', 'Analytics', 'Email', 'WhatsApp', 'Performance'] },
];

const CAPABILITIES_MOBILE = [
  { l: 'BUILD',  items: 'Next.js · TypeScript · Sanity · Shopify · Postgres' },
  { l: 'PAY',    items: 'Pesapal · MTN MoMo · Airtel Money · Stripe' },
  { l: 'DESIGN', items: 'Brand systems · Editorial type · Motion · UX' },
  { l: 'GROW',   items: 'SEO (PR 95+) · Analytics · Email · WhatsApp' },
];

function DesktopStudio() {
  return (
    <section style={{ padding: '120px 32px', borderTop: `1px solid ${p.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{ gridColumn: 'span 5' }} data-reveal>
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.08em',
            color: p.fgDim, marginBottom: 24,
          }}>/SECTION 02 — STUDIO</div>
          <p style={{
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 'clamp(24px, 2.6vw, 36px)',
            lineHeight: 1.2, margin: 0, color: p.fg,
            letterSpacing: '-0.012em',
          }}>
            We are two people who care a lot. A bank engineer who left a $7T balance sheet,
            and a working artist with a studio practice.{' '}
            <em style={{ color: p.accent }}>The combination is the point.</em>
          </p>
          <div style={{
            marginTop: 40, display: 'flex', gap: 24,
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.06em', color: p.fgDim,
          }}>
            <div><div style={{ color: p.fg }}>SINCE</div><div style={{ marginTop: 4 }}>2021</div></div>
            <div><div style={{ color: p.fg }}>SHIPPED</div><div style={{ marginTop: 4 }}>40+ projects</div></div>
            <div><div style={{ color: p.fg }}>HEADCOUNT</div><div style={{ marginTop: 4 }}>2 + collaborators</div></div>
          </div>
        </div>
        <div style={{ gridColumn: '7 / span 6' }}>
          {CAPABILITIES_DESKTOP.map((c, i) => (
            <div key={c.l} data-reveal data-reveal-delay={i * 60} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24,
              padding: '20px 0',
              borderTop: i === 0 ? `1px solid ${p.rule}` : 'none',
              borderBottom: `1px solid ${p.rule}`,
              alignItems: 'baseline',
            }}>
              <div style={{
                fontFamily: FONTS.mono,
                fontSize: 12, letterSpacing: '0.1em',
                color: p.accent,
              }}>/{c.l}</div>
              <div style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                color: p.fg, lineHeight: 1.4,
                letterSpacing: '-0.005em',
              }}>{c.items.join(' · ')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileStudio() {
  return (
    <section style={{ padding: '64px 20px 40px', borderTop: `1px solid ${p.rule}` }}>
      <div data-mreveal style={{
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em', color: p.fgDim,
        marginBottom: 16,
      }}>/SECTION 02 — STUDIO</div>

      <p data-mreveal data-mreveal-delay="60" style={{
        fontFamily: FONTS.serif, fontWeight: 300,
        fontSize: 22, lineHeight: 1.3, letterSpacing: '-0.012em',
        margin: '0 0 36px', color: p.fg,
      }}>
        Two people who care a lot. A bank engineer who left a $7T balance sheet, and a working
        artist with a studio practice.{' '}
        <em style={{ color: p.accent }}>The combination is the point.</em>
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
        <div><div style={{ color: p.fg }}>SINCE</div><div style={{ marginTop: 4 }}>2021</div></div>
        <div><div style={{ color: p.fg }}>SHIPPED</div><div style={{ marginTop: 4 }}>40+ projects</div></div>
        <div><div style={{ color: p.fg }}>HEAD</div><div style={{ marginTop: 4 }}>2 + collabs</div></div>
      </div>

      {CAPABILITIES_MOBILE.map((c, i) => (
        <div key={c.l} data-mreveal data-mreveal-delay={i * 50} style={{
          padding: '16px 0',
          borderBottom: `1px solid ${p.rule}`,
        }}>
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.1em',
            color: p.accent, marginBottom: 6,
          }}>/{c.l}</div>
          <div style={{
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 17, lineHeight: 1.4, letterSpacing: '-0.005em',
            color: p.fg,
          }}>{c.items}</div>
        </div>
      ))}
    </section>
  );
}

export default function Studio({ variant = 'desktop' }) {
  return variant === 'mobile' ? <MobileStudio /> : <DesktopStudio />;
}
