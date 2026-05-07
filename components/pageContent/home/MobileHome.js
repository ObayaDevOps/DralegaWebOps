import { useEffect, useState } from 'react';
import PixelMark from './PixelMark';
import { FONTS, PALETTE, MOTION, REVEAL, GLASS, PROJECTS, MARQUEE_ITEMS } from './data';

const p = PALETTE;

function useMReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-mreveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach((it) => it.setAttribute('data-revealed', '1'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const d = parseInt(e.target.getAttribute('data-mreveal-delay') || '0', 10);
            setTimeout(() => e.target.setAttribute('data-revealed', '1'), d);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: REVEAL.threshold.mobile, rootMargin: REVEAL.rootMargin.mobile }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);
}

function MVisual({ proj, ratio = '4 / 3' }) {
  return (
    <div style={{
      position: 'relative',
      aspectRatio: ratio,
      width: '100%',
      background: 'repeating-linear-gradient(135deg, rgba(26,26,26,0.045) 0 12px, rgba(26,26,26,0.015) 12px 24px)',
      border: `1px solid ${p.rule}`,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: '10px 12px',
        fontFamily: FONTS.mono,
        fontSize: 10, color: p.fgDim, letterSpacing: '0.04em',
      }}>
        <span>/{proj.n}</span>
        <span>{proj.placeholder}</span>
      </div>
      <div style={{
        position: 'absolute', top: 10, right: 12,
        fontFamily: FONTS.mono,
        fontSize: 10, color: p.fgDim, letterSpacing: '0.04em',
      }}>{proj.year}</div>
    </div>
  );
}

function MTopbar({ onMenu }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 5,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 20px',
      background: `${p.bg}ee`,
      backdropFilter: GLASS.blur.mobile,
      WebkitBackdropFilter: GLASS.blur.mobile,
      borderBottom: `1px solid ${p.rule}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 22 }}>
          <PixelMark color={p.accent} sessionKey="tfs-mboot-top" />
        </span>
      </div>
      <button onClick={onMenu} aria-label="Menu" style={{
        background: 'none', border: `1px solid ${p.rule}`,
        padding: '8px 12px', borderRadius: 2,
        fontFamily: FONTS.mono,
        fontSize: 11, letterSpacing: '0.08em',
        color: p.fg, cursor: 'pointer',
      }}>MENU</button>
    </header>
  );
}

function MDrawer({ open, onClose }) {
  return (
    <>
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, background: '#1A1A1A',
        opacity: open ? 0.4 : 0,
        transition: `opacity ${MOTION.drawerOverlay} ${MOTION.ease}`,
        pointerEvents: open ? 'auto' : 'none', zIndex: 9,
      }} />
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(86%, 320px)',
        background: p.bg,
        borderLeft: `1px solid ${p.rule}`,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: `transform ${MOTION.drawerPanel} ${MOTION.ease}`,
        zIndex: 10, padding: '24px 24px 32px',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 48,
        }}>
          <span style={{
            fontFamily: FONTS.mono, fontSize: 11,
            letterSpacing: '0.08em', color: p.fgDim,
          }}>/MENU</span>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', padding: 0,
            fontFamily: FONTS.mono,
            fontSize: 12, letterSpacing: '0.08em',
            color: p.fg, cursor: 'pointer',
          }}>CLOSE ✕</button>
        </div>
        <nav style={{ display: 'grid', gap: 4, flex: 1 }}>
          {[
            ['/01', 'Work',    '/work'],
            ['/02', 'About',   '/about'],
            ['/03', 'Pricing', '/pricing'],
            ['/04', 'Journal', '/journal'],
            ['/05', 'Contact', '/contact'],
          ].map(([n, l, href]) => (
            <a key={l} href={href} onClick={onClose} style={{
              display: 'grid', gridTemplateColumns: '40px 1fr',
              alignItems: 'baseline', gap: 8,
              padding: '14px 0',
              borderBottom: `1px solid ${p.rule}`,
              textDecoration: 'none', color: p.fg,
            }}>
              <span style={{
                fontFamily: FONTS.mono, fontSize: 11,
                color: p.fgDim, letterSpacing: '0.08em',
              }}>{n}</span>
              <span style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 36, letterSpacing: '-0.01em',
              }}>{l}</span>
            </a>
          ))}
        </nav>
        <div style={{
          marginTop: 28,
          fontFamily: FONTS.mono,
          fontSize: 10, letterSpacing: '0.08em', color: p.fgDim,
          lineHeight: 1.6,
        }}>
          <div style={{ color: p.fg, marginBottom: 8 }}>/CONTACT</div>
          <div>hello@twofivesix.ug</div>
          <div>+256 ··· ····</div>
          <div style={{ marginTop: 14 }}>00°18′49″N · 32°34′52″E</div>
        </div>
      </aside>
    </>
  );
}

function MHero() {
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
        fontFamily: FONTS.serif,
        fontWeight: 400,
        fontSize: 'clamp(44px, 13vw, 64px)',
        lineHeight: 0.94,
        letterSpacing: '-0.025em',
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
          fontFamily: FONTS.mono,
          fontSize: 12, letterSpacing: '0.08em',
          textDecoration: 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          border: `1px solid ${p.accent}`,
        }}>
          <span>SEE THE WORK</span><span aria-hidden>→</span>
        </a>
        <a href="#mstart" style={{
          background: 'transparent', color: p.fg,
          padding: '16px 18px', borderRadius: 2,
          fontFamily: FONTS.mono,
          fontSize: 12, letterSpacing: '0.08em',
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

function MMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{
      borderTop: `1px solid ${p.rule}`,
      borderBottom: `1px solid ${p.rule}`,
      padding: '12px 0',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', gap: 28, whiteSpace: 'nowrap',
        width: 'max-content',
        animation: `tfsm-marquee ${MOTION.marquee.mobile} linear infinite`,
        fontFamily: FONTS.mono,
        fontSize: 11, letterSpacing: '0.12em',
        color: p.fgDim,
      }}>
        {items.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 28 }}>
            {w}
            <span style={{ width: 4, height: 4, background: p.accent, display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function MWork() {
  return (
    <section id="work" style={{ padding: '56px 20px 24px' }}>
      <div data-mreveal style={{
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em', color: p.fgDim,
        marginBottom: 16,
      }}>/SECTION 01 — WORK</div>
      <h2 data-mreveal data-mreveal-delay="60" style={{
        fontFamily: FONTS.serif, fontWeight: 300,
        fontSize: 40, lineHeight: 0.98, letterSpacing: '-0.02em',
        margin: '0 0 40px', color: p.fg,
      }}>
        Eight projects.<br />
        <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>One studio.</em><br />
        <span style={{ color: p.fgDim }}>Built to last.</span>
      </h2>

      <div style={{ display: 'grid', gap: 56 }}>
        {PROJECTS.map((proj, i) => (
          <a key={proj.n} href="#" data-mreveal data-mreveal-delay={i * 50}
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <MVisual proj={proj} ratio={i % 3 === 0 ? '4 / 5' : '4 / 3'} />
            <div style={{ marginTop: 14 }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontFamily: FONTS.mono,
                fontSize: 10, letterSpacing: '0.08em',
                color: p.fgDim, marginBottom: 6,
              }}>
                <span>/{proj.n}</span>
                <span>{proj.tags.slice(0, 2).map((t) => `/${t}`).join(' ')}</span>
              </div>
              <h3 style={{
                fontFamily: FONTS.serif, fontWeight: 400,
                fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.012em',
                margin: 0, color: p.fg,
              }}>{proj.title}</h3>
              <p style={{
                fontFamily: FONTS.sans,
                fontSize: 13, lineHeight: 1.55,
                color: p.fgDim, margin: '8px 0 0',
              }}>{proj.blurb}</p>
            </div>
          </a>
        ))}
      </div>

      <a href="#" style={{
        marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 0',
        borderTop: `1px solid ${p.rule}`,
        borderBottom: `1px solid ${p.rule}`,
        fontFamily: FONTS.mono,
        fontSize: 12, letterSpacing: '0.08em',
        color: p.fg, textDecoration: 'none',
      }}>
        <span>VIEW THE FULL INDEX</span><span aria-hidden>→</span>
      </a>
    </section>
  );
}

function MStudio() {
  const caps = [
    { l: 'BUILD', items: 'Next.js · TypeScript · Sanity · Shopify · Postgres' },
    { l: 'PAY', items: 'Pesapal · MTN MoMo · Airtel Money · Stripe' },
    { l: 'DESIGN', items: 'Brand systems · Editorial type · Motion · UX' },
    { l: 'GROW', items: 'SEO (PR 95+) · Analytics · Email · WhatsApp' },
  ];
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

      {caps.map((c, i) => (
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

function MStart() {
  const [stage, setStage] = useState(0);
  const [data, setData] = useState({ scope: [], budget: '' });

  return (
    <section id="mstart" style={{
      background: p.fg, color: p.bg,
      padding: '64px 20px 56px', marginTop: 24,
    }}>
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em',
        color: `${p.bg}88`, marginBottom: 14,
      }}>/SECTION 03 — START</div>

      <h2 style={{
        fontFamily: FONTS.serif, fontWeight: 300,
        fontSize: 42, lineHeight: 0.96, letterSpacing: '-0.025em',
        margin: '0 0 36px', color: p.bg,
      }}>
        Tell us what<br />
        you&rsquo;re<br />
        <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>building.</em>
      </h2>

      <div style={{
        display: 'flex', gap: 14, marginBottom: 24,
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em',
      }}>
        {['SCOPE', 'BUDGET', 'WHEN'].map((s, i) => (
          <button key={s} onClick={() => setStage(i)} style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            color: i === stage ? p.accent2 : `${p.bg}66`,
            fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
          }}>/{(i + 1).toString().padStart(2, '0')} {s}</button>
        ))}
      </div>

      {stage === 0 && (
        <div>
          <label style={{
            fontFamily: FONTS.mono,
            fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99`,
          }}>WHAT KIND OF PROJECT</label>
          <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['E-commerce', 'Brand site', 'Web app', 'Booking', 'CMS', 'Brand', 'Other'].map((s) => {
              const on = data.scope.includes(s);
              return (
                <button key={s} onClick={() => setData((d) => ({
                  ...d, scope: on ? d.scope.filter((x) => x !== s) : [...d.scope, s],
                }))} style={{
                  padding: '10px 14px', borderRadius: 2,
                  border: `1px solid ${on ? p.accent2 : p.bg + '44'}`,
                  background: on ? p.accent2 : 'transparent',
                  color: on ? p.fg : p.bg,
                  fontFamily: FONTS.mono,
                  fontSize: 11, letterSpacing: '0.06em',
                  cursor: 'pointer',
                }}>{s}</button>
              );
            })}
          </div>
        </div>
      )}

      {stage === 1 && (
        <div>
          <label style={{
            fontFamily: FONTS.mono,
            fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99`,
          }}>RANGE (USD)</label>
          {['Under 10k', '10k — 25k', '25k — 60k', '60k +', "Let's discuss"].map((b) => {
            const on = data.budget === b;
            return (
              <button key={b} onClick={() => setData((d) => ({ ...d, budget: b }))} style={{
                width: '100%', textAlign: 'left',
                padding: '16px 0',
                background: 'none', border: 'none',
                borderBottom: `1px solid ${p.bg}22`,
                color: on ? p.accent2 : p.bg,
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 22, letterSpacing: '-0.01em',
                cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>{b}</span>
                <span style={{
                  fontFamily: FONTS.mono,
                  fontSize: 11, color: on ? p.accent2 : `${p.bg}66`,
                }}>{on ? '◉' : '○'}</span>
              </button>
            );
          })}
        </div>
      )}

      {stage === 2 && (
        <div>
          <label style={{
            fontFamily: FONTS.mono,
            fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99`,
          }}>EMAIL</label>
          <input style={{
            width: '100%', background: 'transparent', border: 'none',
            borderBottom: `1px solid ${p.bg}55`, color: p.bg,
            padding: '12px 0',
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 22, letterSpacing: '-0.01em', outline: 'none',
            boxSizing: 'border-box',
          }} placeholder="hello@studio.com" />
          <label style={{
            fontFamily: FONTS.mono,
            fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99`,
            display: 'block', marginTop: 28,
          }}>ROUGH BRIEF</label>
          <textarea style={{
            width: '100%', background: 'transparent', border: 'none',
            borderBottom: `1px solid ${p.bg}55`, color: p.bg,
            padding: '12px 0', resize: 'none', minHeight: 80,
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 18, letterSpacing: '-0.01em', outline: 'none',
            boxSizing: 'border-box',
          }} placeholder="A url, a sentence, or a paragraph." />
        </div>
      )}

      <div style={{
        marginTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <button onClick={() => setStage((s) => Math.max(0, s - 1))} style={{
          background: 'none', border: 'none', padding: 0,
          cursor: stage === 0 ? 'default' : 'pointer',
          color: stage === 0 ? `${p.bg}33` : p.bg,
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
        }}>← BACK</button>
        <button onClick={() => stage < 2 ? setStage(stage + 1) : null} style={{
          background: p.accent2, color: p.fg,
          padding: '14px 22px', borderRadius: 2,
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
          border: 'none', cursor: 'pointer',
        }}>{stage < 2 ? 'CONTINUE →' : 'SEND BRIEF →'}</button>
      </div>
    </section>
  );
}

function MFooter() {
  return (
    <footer style={{ padding: '48px 20px 28px' }}>
      <div style={{ fontSize: 48, lineHeight: 1, marginBottom: 14 }}>
        <PixelMark color={p.accent} sessionKey="tfs-mboot-foot" />
      </div>
      <div style={{
        fontFamily: FONTS.sans,
        fontSize: 13, color: p.fgDim, marginBottom: 32,
      }}>twofivesix studio · Kampala, Uganda</div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
        fontFamily: FONTS.mono,
        fontSize: 11, letterSpacing: '0.06em', color: p.fgDim,
        paddingTop: 24, borderTop: `1px solid ${p.rule}`,
      }}>
        <div>
          <div style={{ color: p.fg, marginBottom: 10 }}>/SITE</div>
          <div style={{ display: 'grid', gap: 6 }}>
            <span>Work</span><span>Studio</span><span>Journal</span><span>Contact</span>
          </div>
        </div>
        <div>
          <div style={{ color: p.fg, marginBottom: 10 }}>/ELSEWHERE</div>
          <div style={{ display: 'grid', gap: 6 }}>
            <span>Are.na</span><span>Read.cv</span><span>Github</span><span>Instagram</span>
          </div>
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <div style={{ color: p.fg, marginBottom: 10 }}>/CONTACT</div>
          <div style={{ display: 'grid', gap: 6 }}>
            <span>hello@twofivesix.ug</span>
            <span>+256 ··· ····</span>
            <span>Plot 7, Kampala</span>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 32, paddingTop: 16, borderTop: `1px solid ${p.rule}`,
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.06em', color: p.fgDim,
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>© 2026</span>
        <span>Built in Kampala</span>
      </div>
    </footer>
  );
}

export default function MobileHome() {
  const [open, setOpen] = useState(false);
  useMReveal();
  return (
    <div style={{
      position: 'relative',
      background: p.bg, color: p.fg,
      minHeight: '100vh',
      fontFamily: FONTS.sans,
      backgroundImage: `radial-gradient(${p.grid} 1px, transparent 1px)`,
      backgroundSize: '8px 8px',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <MTopbar onMenu={() => setOpen(true)} />
      <MHero />
      <MMarquee />
      <MWork />
      <MStudio />
      <MStart />
      <MFooter />
      <MDrawer open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
