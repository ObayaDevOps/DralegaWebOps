import Head from 'next/head';
import Link from 'next/link';
import TFSShell, { useReveal } from '../../components/pageContent/shared/TFSShell';
import { PALETTE, PROJECTS } from '../../components/pageContent/home/data';

const p = PALETTE;

function toSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export async function getStaticPaths() {
  return {
    paths: PROJECTS.map((proj) => ({ params: { slug: toSlug(proj.title) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const proj = PROJECTS.find((p) => toSlug(p.title) === params.slug) || null;
  return proj ? { props: { proj } } : { notFound: true };
}

function Section({ label, children }) {
  return (
    <div data-reveal style={{ paddingTop: 64, borderTop: `1px solid ${p.rule}` }}>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 24,
      }}>{label}</div>
      {children}
    </div>
  );
}

export default function CaseStudy({ proj }) {
  useReveal();
  const stripe = 'rgba(26,26,26,0.045)';
  const stripe2 = 'rgba(26,26,26,0.015)';

  return (
    <>
      <Head>
        <title>{proj.title} — twofivesix studio</title>
        <meta name="description" content={proj.blurb} />
      </Head>
      <TFSShell>
        <article>
          {/* Hero */}
          <section style={{ padding: '80px 32px 64px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              <div style={{
                gridColumn: 'span 2',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 12,
              }} data-reveal>
                <div>/{proj.n}</div>
                <div style={{ marginTop: 6 }}>{proj.year}</div>
              </div>
              <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
                <h1 style={{
                  fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                  fontSize: 'clamp(40px, 6vw, 96px)', lineHeight: 0.96,
                  letterSpacing: '-0.025em', margin: 0, color: p.fg,
                }}>{proj.title}</h1>
                <p style={{
                  fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
                  fontWeight: 300, fontSize: 'clamp(18px, 1.8vw, 24px)',
                  lineHeight: 1.4, color: p.fgDim, margin: '24px 0 0', maxWidth: '52ch',
                }}>{proj.blurb}</p>
                <div style={{
                  display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28,
                }}>
                  {proj.tags.map((t) => (
                    <span key={t} style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 10, letterSpacing: '0.1em', color: p.fgDim,
                      border: `1px solid ${p.rule}`, padding: '5px 10px',
                    }}>/{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Hero image placeholder */}
          <div style={{ margin: '0 32px', marginBottom: 80 }}>
            <div style={{
              width: '100%', aspectRatio: '16 / 9',
              background: `repeating-linear-gradient(135deg, ${stripe} 0 12px, ${stripe2} 12px 24px)`,
              border: `1px solid ${p.rule}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11, letterSpacing: '0.08em', color: p.fgDim,
            }}>
              {proj.placeholder}
            </div>
          </div>

          {/* Content */}
          <div style={{
            padding: '0 32px 120px',
            display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
          }}>
            <div style={{ gridColumn: '3 / span 8', display: 'flex', flexDirection: 'column', gap: 64 }}>

              <Section label="/01 — THE BRIEF">
                <p style={{
                  fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                  fontSize: 'clamp(20px, 2vw, 28px)', lineHeight: 1.4,
                  margin: 0, color: p.fg, letterSpacing: '-0.012em',
                }}>
                  The client needed a site that could compete with international work while operating in the Ugandan market.
                  Clear information architecture, fast load times, and payment rails that actually work locally.
                </p>
              </Section>

              <Section label="/02 — THE APPROACH">
                <div style={{
                  fontFamily: '"Inter", system-ui, sans-serif',
                  fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7,
                  color: p.fgDim, display: 'flex', flexDirection: 'column', gap: 20,
                }}>
                  <p style={{ margin: 0 }}>
                    We started with the user journey — specifically how a Ugandan customer moves from discovery to checkout.
                    Most templates assume Western infrastructure. This site was built from first principles.
                  </p>
                  <p style={{ margin: 0 }}>
                    The design direction was editorial: generous whitespace, a restrained type palette, and deliberate
                    scale shifts between display and body type. No decoration for its own sake.
                  </p>
                  <p style={{ margin: 0 }}>
                    Every technical decision was made to serve the user first, the brand second, and the developer last.
                    The stack is boring on purpose — stable, fast, and maintainable.
                  </p>
                </div>
              </Section>

              <Section label="/03 — THE BUILD">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, border: `1px solid ${p.rule}` }}>
                  {[
                    ['Framework', 'Next.js'],
                    ['CMS', 'Sanity'],
                    ['Payments', proj.tags.includes('PESAPAL') ? 'Pesapal + MTN MoMo' : proj.tags.includes('SHOPIFY') ? 'Shopify + Pesapal' : 'Pesapal'],
                    ['Hosting', 'Vercel'],
                    ['Images', 'Cloudinary'],
                    ['Analytics', 'Vercel Analytics'],
                  ].map(([k, v]) => (
                    <div key={k} style={{
                      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
                      padding: '16px 20px', borderBottom: `1px solid ${p.rule}`,
                      fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.04em',
                    }}>
                      <span style={{ color: p.fgDim }}>{k}</span>
                      <span style={{ color: p.fg }}>{v}</span>
                    </div>
                  ))}
                </div>
              </Section>

              <Section label="/04 — THE OUTCOME">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                  {[
                    ['Lighthouse', '95+'],
                    ['LCP', '< 1.4s'],
                    ['Mobile-first', '100%'],
                  ].map(([label, val]) => (
                    <div key={label} style={{ padding: '24px 0', borderTop: `2px solid ${p.accent}` }}>
                      <div style={{
                        fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                        fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1, color: p.fg,
                        letterSpacing: '-0.02em',
                      }}>{val}</div>
                      <div style={{
                        fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
                        letterSpacing: '0.08em', color: p.fgDim, marginTop: 8,
                      }}>{label}</div>
                    </div>
                  ))}
                </div>
              </Section>

              {/* Gallery placeholder */}
              <Section label="/05 — GALLERY">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} style={{
                      aspectRatio: i === 0 ? '16 / 9' : '4 / 3',
                      gridColumn: i === 0 ? 'span 2' : 'span 1',
                      background: `repeating-linear-gradient(135deg, ${stripe} 0 12px, ${stripe2} 12px 24px)`,
                      border: `1px solid ${p.rule}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 11, color: p.fgDim, letterSpacing: '0.06em',
                    }}>
                      {i === 0 ? 'desktop — full' : i === 1 ? 'mobile' : i === 2 ? 'detail' : 'context'}
                    </div>
                  ))}
                </div>
              </Section>
            </div>
          </div>

          {/* Next project */}
          <div style={{ padding: '0 32px 80px' }}>
            <div style={{ borderTop: `1px solid ${p.rule}`, paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link href="/work" passHref>
                <a style={{
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                  color: p.fgDim, textDecoration: 'none',
                }}>← ALL WORK</a>
              </Link>
              <Link href="/work" passHref>
                <a className="tfs-btn" style={{
                  background: p.accent, color: '#FAFAF7', padding: '14px 22px',
                  borderRadius: 2, fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                }}>NEXT PROJECT →</a>
              </Link>
            </div>
          </div>
        </article>
      </TFSShell>
    </>
  );
}

CaseStudy.noLayout = true;
