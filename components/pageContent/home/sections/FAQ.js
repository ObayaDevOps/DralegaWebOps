import { useState } from 'react';
import { FONTS, PALETTE, MOTION } from '../../../../data/tokens';
import { HOME } from '../../../../data/home';

const p = PALETTE;

function DesktopFAQ({ data }) {
  const [open, setOpen] = useState(null);
  const items = data.items || [];

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
          }}>{data.heading}</p>
        </div>

        <div style={{ gridColumn: '7 / span 6' }}>
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} data-reveal data-reveal-delay={i * 60} style={{
                borderTop: i === 0 ? `1px solid ${p.rule}` : 'none',
                borderBottom: `1px solid ${p.rule}`,
              }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', background: 'none', border: 'none',
                    padding: '20px 0', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'baseline', gap: 24,
                  }}
                >
                  <span style={{
                    fontFamily: FONTS.serif, fontWeight: 300,
                    fontSize: 'clamp(20px, 1.8vw, 26px)',
                    color: p.fg, letterSpacing: '-0.01em',
                    textAlign: 'left', lineHeight: 1.3,
                  }}>{item.q}</span>
                  <span style={{
                    fontFamily: FONTS.mono,
                    fontSize: 16, color: isOpen ? p.accent2 : p.fgDim,
                    flexShrink: 0,
                    transition: `color 200ms ${MOTION.ease}`,
                  }}>{isOpen ? '—' : '+'}</span>
                </button>
                {isOpen && (
                  <div style={{
                    paddingBottom: 24,
                    fontFamily: FONTS.serif, fontWeight: 300,
                    fontSize: 'clamp(16px, 1.3vw, 19px)',
                    color: p.fgDim, lineHeight: 1.65,
                    letterSpacing: '-0.005em',
                  }}>{item.a}</div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function MobileFAQ({ data }) {
  const [open, setOpen] = useState(null);
  const items = data.items || [];

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
        margin: '0 0 32px', color: p.fg,
      }}>{data.heading}</p>

      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} data-mreveal data-mreveal-delay={i * 50} style={{
            borderTop: i === 0 ? `1px solid ${p.rule}` : 'none',
            borderBottom: `1px solid ${p.rule}`,
          }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{
                width: '100%', background: 'none', border: 'none',
                padding: '16px 0', cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'baseline', gap: 12,
              }}
            >
              <span style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 20, color: p.fg, letterSpacing: '-0.01em',
                textAlign: 'left', lineHeight: 1.3,
              }}>{item.q}</span>
              <span style={{
                fontFamily: FONTS.mono,
                fontSize: 14, color: isOpen ? p.accent2 : p.fgDim,
                flexShrink: 0,
              }}>{isOpen ? '—' : '+'}</span>
            </button>
            {isOpen && (
              <div style={{
                paddingBottom: 18,
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 16, color: p.fgDim, lineHeight: 1.65,
                letterSpacing: '-0.005em',
              }}>{item.a}</div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default function FAQ({ variant = 'desktop', faqSection = HOME.faqSection }) {
  return variant === 'mobile'
    ? <MobileFAQ data={faqSection} />
    : <DesktopFAQ data={faqSection} />;
}
