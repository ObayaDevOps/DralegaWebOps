import Head from 'next/head';
import Link from 'next/link';
import TFSShell, { useReveal, TFSMobileShell } from '../../components/pageContent/shared/TFSShell';
import { PALETTE, FONTS, PROJECTS } from '../../components/pageContent/home/data';

const p = PALETTE;

const ALL_TAGS = ['All', 'E-COMMERCE', 'HOSPITALITY', 'WEB3', 'HEALTHCARE', 'FINANCE', 'FULLSTACK', 'CMS', 'BRAND', 'SOCIAL ENTERPRISE'];

function WorkCard({ proj, idx }) {
  const stripe = 'rgba(26,26,26,0.045)';
  const stripe2 = 'rgba(26,26,26,0.015)';
  const ratio = proj.span === 'wide' ? '16 / 9' : proj.span === 'half' ? '4 / 3' : '3 / 4';

  return (
    <Link href={`/work/${proj.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} passHref>
    <a
      className="tfs-tile"
      data-reveal
      data-reveal-delay={idx * 60}
      style={{
        display: 'block', textDecoration: 'none', color: 'inherit',
        gridColumn: proj.span === 'wide' ? 'span 12' : proj.span === 'half' ? 'span 6' : 'span 4',
      }}
    >
      <div className="tfs-visual" style={{
        position: 'relative', aspectRatio: ratio, width: '100%',
        background: `repeating-linear-gradient(135deg, ${stripe} 0 12px, ${stripe2} 12px 24px)`,
        border: `1px solid ${p.rule}`,
        overflow: 'hidden',
        transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), filter 600ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          padding: '14px 16px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11, color: p.fgDim, letterSpacing: '0.04em',
        }}>
          <span>/{proj.n}</span>
          <span>{proj.placeholder}</span>
        </div>
        <div style={{
          position: 'absolute', top: 14, right: 16,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11, color: p.fgDim, letterSpacing: '0.04em',
        }}>{proj.year}</div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 24, marginTop: 18,
      }}>
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 6,
          }}>/{proj.n} · {proj.year}</div>
          <h2
            className="tfs-tile-title"
            style={{
              fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
              fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.05,
              margin: 0, letterSpacing: '-0.01em', display: 'inline-block',
              backgroundImage: `linear-gradient(${p.accent2}, ${p.accent2})`,
              backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%',
              backgroundSize: '0% 2px',
              transition: 'background-size 600ms cubic-bezier(0.16, 1, 0.3, 1)',
              paddingBottom: 2,
            }}
          >{proj.title}</h2>
          <p style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: 14, lineHeight: 1.55, color: p.fgDim, margin: '8px 0 0', maxWidth: '52ch',
          }}>{proj.blurb}</p>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.08em',
          color: p.fgDim, flex: '0 0 auto',
        }}>
          {proj.tags.map((t) => <span key={t}>/{t}</span>)}
        </div>
      </div>
    </a>
    </Link>
  );
}

export default function WorkIndex() {
  useReveal();

  return (
    <>
      <Head>
        <title>Work — twofivesix studio</title>
        <meta name="description" content="Selected projects from twofivesix — bespoke websites built for Uganda's most ambitious businesses." />
      </Head>
      <div className="tfs-desktop-only">
        <TFSShell>
          <section style={{ padding: '80px 32px 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 64 }}>
              <div style={{
                gridColumn: 'span 2',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 12,
              }} data-reveal>/WORK — INDEX</div>
              <div style={{ gridColumn: '4 / span 8' }} data-reveal data-reveal-delay="80">
                <h1 style={{
                  fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                  fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                  letterSpacing: '-0.025em', margin: 0, color: p.fg,
                }}>
                  Eight projects.<br />
                  <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>One studio.</em>
                </h1>
                <p style={{
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.6,
                  color: p.fgDim, margin: '28px 0 0', maxWidth: '56ch',
                }}>
                  E-commerce, hospitality, healthcare, finance, arts. All built from the ground up.
                  No templates. No clones.
                </p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              columnGap: 24, rowGap: 88,
            }}>
              {PROJECTS.map((proj, i) => (
                <WorkCard key={proj.n} proj={proj} idx={i} />
              ))}
            </div>
          </section>
        </TFSShell>
      </div>

      <div className="tfs-mobile-only">
        <TFSMobileShell>
          <section style={{ padding: '48px 20px 36px' }}>
            <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/WORK — INDEX</div>
            <h1 data-mreveal data-mreveal-delay="60" style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(36px, 11vw, 52px)', lineHeight: 0.96,
              letterSpacing: '-0.025em', margin: 0, color: p.fg,
            }}>
              Eight projects.<br />
              <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>One studio.</em>
            </h1>
            <p data-mreveal data-mreveal-delay="120" style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.6, color: p.fgDim, margin: '20px 0 0' }}>
              E-commerce, hospitality, healthcare, finance, arts. All built from the ground up.
            </p>
          </section>

          <section style={{ padding: '0 20px 64px' }}>
            {PROJECTS.map((proj, i) => {
              const stripe = 'rgba(26,26,26,0.045)';
              const stripe2 = 'rgba(26,26,26,0.015)';
              return (
                <a
                  key={proj.n}
                  href={`/work/${proj.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  data-mreveal
                  data-mreveal-delay={i * 60}
                  style={{
                    display: 'block', textDecoration: 'none', color: 'inherit',
                    padding: '28px 0', borderBottom: `1px solid ${p.rule}`,
                  }}
                >
                  <div style={{
                    width: '100%', aspectRatio: '4 / 3',
                    background: `repeating-linear-gradient(135deg, ${stripe} 0 12px, ${stripe2} 12px 24px)`,
                    border: `1px solid ${p.rule}`,
                    position: 'relative', marginBottom: 16,
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                      padding: '12px 14px',
                      fontFamily: FONTS.mono, fontSize: 10, color: p.fgDim, letterSpacing: '0.04em',
                    }}>
                      <span>/{proj.n}</span>
                      <span>{proj.placeholder}</span>
                    </div>
                    <div style={{
                      position: 'absolute', top: 12, right: 14,
                      fontFamily: FONTS.mono, fontSize: 10, color: p.fgDim, letterSpacing: '0.04em',
                    }}>{proj.year}</div>
                  </div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 8 }}>
                    /{proj.n} · {proj.year}
                  </div>
                  <h2 style={{
                    fontFamily: FONTS.serif, fontWeight: 300,
                    fontSize: 22, lineHeight: 1.1,
                    letterSpacing: '-0.012em', margin: '0 0 8px', color: p.fg,
                  }}>{proj.title}</h2>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 13, lineHeight: 1.55, color: p.fgDim, margin: '0 0 12px' }}>{proj.blurb}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {proj.tags.map((t) => (
                      <span key={t} style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim }}>/{t}</span>
                    ))}
                  </div>
                </a>
              );
            })}
          </section>
        </TFSMobileShell>
      </div>
    </>
  );
}

WorkIndex.noLayout = true;
