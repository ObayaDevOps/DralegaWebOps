import { useEffect, useState } from 'react';
import { FONTS, PALETTE, MOTION, REVEAL, PROJECTS, MARQUEE_ITEMS } from './data';
import { TFSNav, TFSFooter } from '../shared/TFSShell';

const p = PALETTE;

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach((it) => it.setAttribute('data-revealed', '1'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.getAttribute('data-reveal-delay') || '0', 10);
            setTimeout(() => e.target.setAttribute('data-revealed', '1'), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: REVEAL.threshold.desktop, rootMargin: REVEAL.rootMargin.desktop }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);
}

function ProjectVisual({ proj }) {
  const stripe = 'rgba(26,26,26,0.045)';
  const stripe2 = 'rgba(26,26,26,0.015)';
  const ratio = proj.span === 'wide' ? '16 / 9' : proj.span === 'half' ? '4 / 3' : '3 / 4';
  return (
    <div
      className="tfs-visual"
      style={{
        position: 'relative',
        aspectRatio: ratio,
        width: '100%',
        background: `repeating-linear-gradient(135deg, ${stripe} 0 12px, ${stripe2} 12px 24px)`,
        border: `1px solid ${p.rule}`,
        overflow: 'hidden',
        transition: `transform 600ms ${MOTION.ease}, filter 600ms ${MOTION.ease}`,
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '14px 16px',
        fontFamily: FONTS.mono,
        fontSize: 11, color: p.fgDim, letterSpacing: '0.04em',
      }}>
        <span>/{proj.n}</span>
        <span>{proj.placeholder}</span>
      </div>
      <div style={{
        position: 'absolute', top: 14, right: 16,
        fontFamily: FONTS.mono,
        fontSize: 11, color: p.fgDim, letterSpacing: '0.04em',
      }}>
        {proj.year}
      </div>
    </div>
  );
}

function ProjectTile({ proj, idx }) {
  return (
    <a
      href="#"
      className="tfs-tile"
      data-reveal
      data-reveal-delay={idx * 60}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        gridColumn: proj.span === 'wide' ? 'span 12'
          : proj.span === 'half' ? 'span 6'
            : 'span 4',
      }}
    >
      <ProjectVisual proj={proj} />
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 24, marginTop: 18,
      }}>
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.08em',
            color: p.fgDim, marginBottom: 6,
          }}>
            /{proj.n}
          </div>
          <h3
            className="tfs-tile-title"
            style={{
              fontFamily: FONTS.serif,
              fontWeight: 400,
              fontSize: 'clamp(22px, 2.4vw, 32px)',
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: '-0.01em',
              display: 'inline-block',
              backgroundImage: `linear-gradient(${p.accent2}, ${p.accent2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '0 100%',
              backgroundSize: '0% 2px',
              transition: `background-size 600ms ${MOTION.ease}`,
              paddingBottom: 2,
            }}
          >
            {proj.title}
          </h3>
          <p style={{
            fontFamily: FONTS.sans,
            fontSize: 14, lineHeight: 1.55,
            color: p.fgDim, margin: '8px 0 0',
            maxWidth: '52ch',
          }}>
            {proj.blurb}
          </p>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4,
          fontFamily: FONTS.mono,
          fontSize: 10, letterSpacing: '0.08em',
          color: p.fgDim, textAlign: 'right',
          flex: '0 0 auto',
        }}>
          {proj.tags.map((t) => <span key={t}>/{t}</span>)}
        </div>
      </div>
    </a>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{
      borderTop: `1px solid ${p.rule}`,
      borderBottom: `1px solid ${p.rule}`,
      padding: '14px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', gap: 36, whiteSpace: 'nowrap',
        width: 'max-content',
        animation: `tfs-marquee ${MOTION.marquee.desktop} linear infinite`,
        fontFamily: FONTS.mono,
        fontSize: 12, letterSpacing: '0.12em',
        color: p.fgDim,
      }}>
        {items.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 36 }}>
            {w}
            <span style={{
              display: 'inline-block', width: 4, height: 4,
              background: p.accent, borderRadius: 0,
            }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
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
            fontFamily: FONTS.serif,
            fontWeight: 400,
            fontSize: 'clamp(24px, 4vw, 66px)',
            lineHeight: 0.94,
            letterSpacing: '-0.025em',
            margin: 0,
            color: p.fg,
          }}>
            Websites for<br />
            Uganda&rsquo;s most<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: p.accent }}>ambitious</em> businesses.
          </h1>
          <p style={{
            fontFamily: FONTS.serif,
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(18px, 1.6vw, 22px)',
            lineHeight: 1.4,
            color: p.fgDim,
            margin: '32px 0 0',
            maxWidth: '46ch',
          }}>
            Designed to compete globally.<br />
            Built for how Uganda actually works.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            <a href="#work" className="tfs-btn" style={{
              background: p.accent, color: '#FAFAF7',
              padding: '14px 22px', borderRadius: 2,
              fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em',
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              border: `1px solid ${p.accent}`,
            }}>
              SEE THE WORK <span aria-hidden>→</span>
            </a>
            <a href="#start" className="tfs-btn" style={{
              background: 'transparent', color: p.fg,
              padding: '14px 22px', borderRadius: 2,
              fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em',
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              border: `1px solid ${p.fg}55`,
            }}>
              START A PROJECT <span aria-hidden>→</span>
            </a>
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
        <Marquee />
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" style={{ padding: '120px 32px 80px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
        marginBottom: 56,
      }}>
        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
          color: p.fgDim, paddingTop: 14,
        }} data-reveal>/SECTION 01 — WORK</div>
        <h2 style={{
          gridColumn: '4 / span 8',
          fontFamily: FONTS.serif,
          fontWeight: 300,
          fontSize: 'clamp(36px, 5vw, 72px)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          margin: 0, color: p.fg,
        }} data-reveal data-reveal-delay="80">
          Eight projects.<br />
          <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>One studio.</em>
          <span style={{ color: p.fgDim }}>&nbsp;&nbsp;Built to last.</span>
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        columnGap: 24,
        rowGap: 88,
      }}>
        {PROJECTS.map((proj, i) => (
          <ProjectTile key={proj.n} proj={proj} idx={i} />
        ))}
      </div>
    </section>
  );
}

function Studio() {
  const capabilities = [
    { l: 'BUILD', items: ['Next.js', 'TypeScript', 'Sanity', 'Shopify', 'Postgres', 'Headless CMS'] },
    { l: 'PAY', items: ['Pesapal', 'MTN MoMo', 'Airtel Money', 'Stripe', 'Crypto rails'] },
    { l: 'DESIGN', items: ['Brand systems', 'Editorial type', 'Motion', 'Art direction', 'UX research'] },
    { l: 'GROW', items: ['SEO (PR 95+)', 'Analytics', 'Email', 'WhatsApp', 'Performance'] },
  ];
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
            fontFamily: FONTS.serif,
            fontWeight: 300,
            fontSize: 'clamp(24px, 2.6vw, 36px)',
            lineHeight: 1.2,
            margin: 0, color: p.fg,
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
            <div>
              <div style={{ color: p.fg }}>SINCE</div>
              <div style={{ marginTop: 4 }}>2021</div>
            </div>
            <div>
              <div style={{ color: p.fg }}>SHIPPED</div>
              <div style={{ marginTop: 4 }}>40+ projects</div>
            </div>
            <div>
              <div style={{ color: p.fg }}>HEADCOUNT</div>
              <div style={{ marginTop: 4 }}>2 + collaborators</div>
            </div>
          </div>
        </div>
        <div style={{ gridColumn: '7 / span 6' }}>
          {capabilities.map((c, i) => (
            <div
              key={c.l}
              data-reveal
              data-reveal-delay={i * 60}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: 24,
                padding: '20px 0',
                borderTop: i === 0 ? `1px solid ${p.rule}` : 'none',
                borderBottom: `1px solid ${p.rule}`,
                alignItems: 'baseline',
              }}
            >
              <div style={{
                fontFamily: FONTS.mono,
                fontSize: 12, letterSpacing: '0.1em',
                color: p.accent,
              }}>/{c.l}</div>
              <div style={{
                fontFamily: FONTS.serif,
                fontWeight: 300,
                fontSize: 'clamp(18px, 1.5vw, 22px)',
                color: p.fg, lineHeight: 1.4,
                letterSpacing: '-0.005em',
              }}>
                {c.items.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Start() {
  const [stage, setStage] = useState(0);
  const [data, setData] = useState({ scope: [], budget: '', when: '' });
  const stages = ['scope', 'budget', 'when'];

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid #F4F1EC55`,
    color: '#F4F1EC',
    padding: '14px 0',
    fontFamily: FONTS.serif,
    fontSize: 'clamp(20px, 2.2vw, 28px)',
    fontWeight: 300,
    outline: 'none',
    letterSpacing: '-0.01em',
    boxSizing: 'border-box',
  };

  return (
    <section id="start" style={{
      padding: '140px 32px',
      background: p.fg,
      color: p.bg,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
          color: `${p.bg}aa`,
        }} data-reveal>/SECTION 03 — START</div>
        <div style={{ gridColumn: 'span 10' }} data-reveal data-reveal-delay="80">
          <h2 style={{
            fontFamily: FONTS.serif,
            fontWeight: 300,
            fontSize: 'clamp(48px, 7vw, 104px)',
            lineHeight: 0.96,
            letterSpacing: '-0.025em',
            margin: 0, color: p.bg,
          }}>
            Tell us what you&rsquo;re<br />
            <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>building.</em>
          </h2>
        </div>
      </div>

      <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{ gridColumn: '3 / span 8' }}>
          <div style={{
            display: 'flex', gap: 24, marginBottom: 32,
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.08em',
            color: `${p.bg}88`,
          }}>
            {stages.map((s, i) => (
              <button key={s} onClick={() => setStage(i)} style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                color: i === stage ? p.accent2 : `${p.bg}88`,
                fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
              }}>
                /{(i + 1).toString().padStart(2, '0')} {s.toUpperCase()}
              </button>
            ))}
          </div>

          {stage === 0 && (
            <div>
              <label style={{
                fontFamily: FONTS.mono,
                fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}aa`,
              }}>WHAT KIND OF PROJECT</label>
              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['E-commerce', 'Brand site', 'Web app', 'Booking', 'CMS rebuild', 'Brand system', 'Other'].map((s) => {
                  const on = data.scope.includes(s);
                  return (
                    <button key={s}
                      onClick={() => setData((d) => ({
                        ...d,
                        scope: on ? d.scope.filter((x) => x !== s) : [...d.scope, s],
                      }))}
                      style={{
                        padding: '12px 18px', borderRadius: 2,
                        border: `1px solid ${on ? p.accent2 : p.bg + '44'}`,
                        background: on ? p.accent2 : 'transparent',
                        color: on ? p.fg : p.bg,
                        fontFamily: FONTS.mono,
                        fontSize: 12, letterSpacing: '0.06em',
                        cursor: 'pointer',
                        transition: `all 200ms ${MOTION.ease}`,
                      }}>
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {stage === 1 && (
            <div>
              <label style={{
                fontFamily: FONTS.mono,
                fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}aa`,
              }}>RANGE (USD)</label>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {['Under 10k', '10k — 25k', '25k — 60k', '60k +', "Let's discuss"].map((b) => {
                  const on = data.budget === b;
                  return (
                    <button key={b}
                      onClick={() => setData((d) => ({ ...d, budget: b }))}
                      style={{
                        textAlign: 'left', padding: '20px 0',
                        background: 'none', border: 'none',
                        borderBottom: `1px solid ${p.bg}22`,
                        color: on ? p.accent2 : p.bg,
                        fontFamily: FONTS.serif,
                        fontWeight: 300,
                        fontSize: 'clamp(20px, 2.2vw, 28px)',
                        cursor: 'pointer', letterSpacing: '-0.01em',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      }}>
                      <span>{b}</span>
                      <span style={{
                        fontFamily: FONTS.mono,
                        fontSize: 11, letterSpacing: '0.08em',
                        color: on ? p.accent2 : `${p.bg}66`,
                      }}>{on ? '◉' : '○'}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {stage === 2 && (
            <div>
              <label style={{
                fontFamily: FONTS.mono,
                fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}aa`,
              }}>EMAIL</label>
              <input style={inputStyle} placeholder="hello@studio.com" />
              <label style={{
                fontFamily: FONTS.mono,
                fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}aa`,
                display: 'block', marginTop: 40,
              }}>A LINK OR ROUGH BRIEF</label>
              <textarea
                style={{ ...inputStyle, resize: 'none', minHeight: 100 }}
                placeholder="A url, a sentence, or a paragraph. Whatever's true."
              />
            </div>
          )}

          <div style={{
            marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <button onClick={() => setStage((s) => Math.max(0, s - 1))} style={{
              background: 'none', border: 'none', padding: 0,
              cursor: stage === 0 ? 'default' : 'pointer',
              color: stage === 0 ? `${p.bg}33` : p.bg,
              fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em',
            }}>← BACK</button>
            <button onClick={() => stage < 2 ? setStage(stage + 1) : null} style={{
              background: p.accent2, color: p.fg,
              padding: '16px 28px', borderRadius: 2,
              fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em',
              border: 'none', cursor: 'pointer',
            }}>
              {stage < 2 ? 'CONTINUE →' : 'SEND BRIEF →'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useReveal();
  return (
    <div style={{
      position: 'relative',
      background: p.bg,
      color: p.fg,
      minHeight: '100vh',
      fontFamily: FONTS.sans,
      backgroundImage: `radial-gradient(${p.grid} 1px, transparent 1px)`,
      backgroundSize: '8px 8px',
      backgroundPosition: '0 0',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <TFSNav />
      <Hero />
      <Work />
      <Studio />
      <Start />
      <TFSFooter />
    </div>
  );
}
