import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';
import { PALETTE, FONTS } from '../../data/tokens';
import SectionLabel from '../../components/primitives/SectionLabel';
import Button from '../../components/primitives/Button';

const p = PALETTE;

const STACK = [
  { l: 'BUILD', items: ['Next.js', 'TypeScript', 'React', 'Postgres', 'Headless CMS', 'Sanity'] },
  { l: 'PAYMENTS', items: ['Pesapal', 'DPO', 'MTN MoMo', 'Airtel Money', 'Shopify', 'PayPal'] },
  { l: 'DESIGN', items: ['Brand systems', 'Editorial type', 'Motion', 'Art direction', 'Figma'] },
  { l: 'GROW', items: ['SEO (PR 95+)', 'GEO / LLM indexing', 'Analytics', 'WhatsApp', 'Performance'] },
];

const CLIENTS = [
  'Med-Optics Vision Centre', 'Afropocene StudioLab', 'Yujo Izakaya', 'Little Kobe Japanese Market',
  'Great Outdoors Resort', 'Nekosero', 'Ashton & Carrington', 'Tax Edge', 'People & Potential', 'Humble Beeing Honey',
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — twofivesix studio</title>
        <meta name="description" content="twofivesix is a one-person studio in Kampala run by Obaya Dralega — a former bank engineer and founding member of Afropocene StudioLab." />
      </Head>
      <PageLayout desktop={<>
        {/* Intro */}
        <section style={{ padding: '80px 32px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 80 }}>
            <SectionLabel>/ABOUT</SectionLabel>

            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                One studio.<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>Two practices.</em>
              </h1>
            </div>
          </div>
        </section>

        {/* Main copy */}
        <section style={{ padding: '0 32px 120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            {/* Photo placeholder */}
            <div style={{ gridColumn: 'span 4' }} data-reveal>
              <div style={{
                width: '100%', aspectRatio: '3 / 4',
                background: 'repeating-linear-gradient(135deg, rgba(26,26,26,0.045) 0 12px, rgba(26,26,26,0.015) 12px 24px)',
                border: `1px solid ${p.rule}`,
                display: 'flex', alignItems: 'flex-end', padding: 16,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11, color: p.fgDim, letterSpacing: '0.06em',
              }}>
                Obaya Dralega · Kampala
              </div>
            </div>

            <div style={{ gridColumn: '6 / span 7', display: 'flex', flexDirection: 'column', gap: 32 }} data-reveal data-reveal-delay="100">
              <p style={{
                fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                fontSize: 'clamp(20px, 2vw, 27px)', lineHeight: 1.4,
                margin: 0, color: p.fg, letterSpacing: '-0.012em',
              }}>
                twofivesix is a one-person studio in Kampala, run by Obaya Dralega.
              </p>

              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, color: p.fgDim, margin: 0,
              }}>
                The studio sits at an unusual intersection. Obaya is a founding member of{' '}
                <strong style={{ color: p.fg, fontWeight: 500 }}>Afropocene StudioLab</strong>, Uganda&rsquo;s leading
                contemporary artists collective, supported by the United Nations Development Programme. He is also a
                former <strong style={{ color: p.fg, fontWeight: 500 }}>Assistant Vice President, Software Developer</strong> at
                a global bank managing over $7 trillion in assets.
              </p>

              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, color: p.fgDim, margin: 0,
              }}>
                Most studios pick a side — design or engineering, art or industry. twofivesix doesn&rsquo;t.
                The bank job taught discipline: software at scale isn&rsquo;t about clever code, it&rsquo;s about
                reliability, security, and the boring details customers never see but always feel. The
                artist&rsquo;s practice teaches the opposite lesson: the things customers <em style={{ color: p.fg }}>do</em> see
                — the typography, the rhythm, the colour, the restraint — are not decoration. They are the product.
              </p>

              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7, color: p.fgDim, margin: 0,
              }}>
                twofivesix brings both standards to Ugandan businesses. Every checkout is treated like it&rsquo;s
                moving real money, because it is. Every page is treated like it&rsquo;s an exhibition, because it should be.
              </p>

              <p style={{
                fontFamily: '"Red Hat Display", sans-serif', fontStyle: 'italic', fontWeight: 300,
                fontSize: 'clamp(18px, 1.8vw, 23px)', lineHeight: 1.4,
                margin: 0, color: p.fg, letterSpacing: '-0.01em',
              }}>
                We work with a small number of clients each year. We don&rsquo;t take on work we can&rsquo;t do well.
              </p>
            </div>
          </div>
        </section>

        {/* Credentials strip */}
        <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 48 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/CREDENTIALS</div>
            <div style={{ gridColumn: 'span 10' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                {[
                  ['Engineer', 'Former AVP Software Developer, global bank — $7T in assets under management. Electronic bond trading, real-time FX risk, equity derivatives pricing.'],
                  ['Artist', 'Founding member of Afropocene StudioLab — Uganda\'s leading contemporary artists collective. Supported by the United Nations Development Programme.'],
                  ['Builder', 'Over 40 projects shipped since 2021. E-commerce, hospitality, healthcare, finance, arts. All built to last.'],
                  ['Educator', 'Trained clients on Sanity CMS, payment integrations, and SEO fundamentals. The work doesn\'t end at launch.'],
                ].map(([title, desc], i) => (
                  <div key={title} data-reveal data-reveal-delay={i * 60} style={{
                    padding: '28px 0', borderTop: `1px solid ${p.rule}`,
                  }}>
                    <div style={{
                      fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
                      letterSpacing: '0.1em', color: p.accent, marginBottom: 12,
                    }}>/{title.toUpperCase()}</div>
                    <p style={{
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: 0,
                    }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stack */}
        <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/STACK</div>
            <div style={{ gridColumn: 'span 10' }}>
              {STACK.map((s, i) => (
                <div key={s.l} data-reveal data-reveal-delay={i * 60} style={{
                  display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24,
                  padding: '20px 0',
                  borderTop: i === 0 ? `1px solid ${p.rule}` : 'none',
                  borderBottom: `1px solid ${p.rule}`,
                  alignItems: 'baseline',
                }}>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.1em', color: p.accent }}>/{s.l}</div>
                  <div style={{ fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300, fontSize: 'clamp(18px, 1.5vw, 22px)', color: p.fg, lineHeight: 1.4, letterSpacing: '-0.005em' }}>
                    {s.items.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/CLIENTS</div>
            <div style={{ gridColumn: 'span 10' }} data-reveal data-reveal-delay="80">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px' }}>
                {CLIENTS.map((c, i) => (
                  <span key={c} style={{
                    fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                    fontSize: 'clamp(16px, 1.4vw, 20px)', color: i % 3 === 0 ? p.fg : p.fgDim,
                    letterSpacing: '-0.01em',
                  }}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '120px 32px', background: p.fg, color: p.bg }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: '3 / span 8', textAlign: 'center' }} data-reveal>
              <h2 style={{
                fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.0,
                letterSpacing: '-0.025em', margin: '0 0 40px', color: p.bg,
              }}>
                Ready to build something<br />
                <em style={{ color: p.accent2, fontStyle: 'italic' }}>worth remembering?</em>
              </h2>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <Button href="/contact" bg={p.accent2} color={p.fg} border={p.accent2} padding="14px 24px">START A PROJECT →</Button>
                <Button href="/work" color={p.bg} border={`${p.bg}44`} padding="14px 24px">SEE THE WORK →</Button>
              </div>
            </div>
          </div>
        </section>
      </>} mobile={<>
          <section style={{ padding: '48px 20px 36px' }}>
            <SectionLabel variant="mobile">/ABOUT</SectionLabel>
            <h1 data-mreveal data-mreveal-delay="60" style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(40px, 12vw, 56px)', lineHeight: 0.94,
              letterSpacing: '-0.025em', margin: 0, color: p.fg,
            }}>
              One studio.<br />
              <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>Two practices.</em>
            </h1>
          </section>

          <section style={{ padding: '0 20px 48px' }}>
            <div data-mreveal style={{
              width: '100%', aspectRatio: '4 / 3',
              background: 'repeating-linear-gradient(135deg, rgba(26,26,26,0.045) 0 12px, rgba(26,26,26,0.015) 12px 24px)',
              border: `1px solid ${p.rule}`,
              display: 'flex', alignItems: 'flex-end', padding: 14,
              fontFamily: FONTS.mono, fontSize: 10, color: p.fgDim, letterSpacing: '0.06em',
              marginBottom: 28,
            }}>
              Obaya Dralega · Kampala
            </div>
            <div data-mreveal data-mreveal-delay="60" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.4, margin: 0, color: p.fg, letterSpacing: '-0.012em' }}>
                twofivesix is a one-person studio in Kampala, run by Obaya Dralega.
              </p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.7, color: p.fgDim, margin: 0 }}>
                The studio sits at an unusual intersection. Obaya is a founding member of{' '}
                <strong style={{ color: p.fg, fontWeight: 500 }}>Afropocene StudioLab</strong>, Uganda&rsquo;s leading
                contemporary artists collective. He is also a former{' '}
                <strong style={{ color: p.fg, fontWeight: 500 }}>Assistant Vice President, Software Developer</strong> at
                a global bank managing over $7 trillion in assets.
              </p>
              <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.7, color: p.fgDim, margin: 0 }}>
                Most studios pick a side. twofivesix doesn&rsquo;t. Bank discipline meets artist sensibility —
                the result is websites that are both technically rigorous and genuinely beautiful.
              </p>
              <div style={{
                marginTop: 8, paddingTop: 16, borderTop: `1px solid ${p.rule}`,
                fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.02em',
                color: p.fgDim, lineHeight: 1.55,
                display: 'grid', gridTemplateColumns: '12px 1fr', columnGap: 12, rowGap: 6,
              }}>
                <span style={{ color: p.accent2 }}>›</span>
                <span style={{ color: p.fg }}>Bank-grade engineering. Founding member of Afropocene.</span>
                <span style={{ color: p.accent2 }}>›</span>
                <span>40+ projects shipped since 2021.</span>
              </div>
            </div>
          </section>

          <section style={{ padding: '40px 20px', borderTop: `1px solid ${p.rule}` }}>
            <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/CREDENTIALS</div>
            {[
              ['ENGINEER', 'Former AVP Software Developer, global bank — $7T in assets. Electronic bond trading, real-time FX risk, equity derivatives pricing.'],
              ['ARTIST', "Founding member of Afropocene StudioLab — Uganda's leading contemporary artists collective. Supported by the UNDP."],
              ['BUILDER', 'Over 40 projects shipped since 2021. E-commerce, hospitality, healthcare, finance, arts.'],
              ['EDUCATOR', "Trained clients on Sanity CMS, payment integrations, and SEO. The work doesn't end at launch."],
            ].map(([title, desc], i) => (
              <div key={title} data-mreveal data-mreveal-delay={i * 50} style={{ padding: '16px 0', borderBottom: `1px solid ${p.rule}` }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.1em', color: p.accent, marginBottom: 8 }}>/{title}</div>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </section>

          <section style={{ padding: '40px 20px', borderTop: `1px solid ${p.rule}` }}>
            <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/STACK</div>
            {STACK.map((s, i) => (
              <div key={s.l} data-mreveal data-mreveal-delay={i * 50} style={{
                display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16,
                padding: '16px 0', borderBottom: `1px solid ${p.rule}`, alignItems: 'baseline',
              }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.1em', color: p.accent }}>/{s.l}</div>
                <div style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 17, lineHeight: 1.4, letterSpacing: '-0.005em', color: p.fg }}>{s.items.join(' · ')}</div>
              </div>
            ))}
          </section>

          <section style={{ padding: '40px 20px', borderTop: `1px solid ${p.rule}` }}>
            <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 16 }}>/CLIENTS</div>
            <div data-mreveal data-mreveal-delay="60" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 24px' }}>
              {CLIENTS.map((c, i) => (
                <span key={c} style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 17, color: i % 3 === 0 ? p.fg : p.fgDim, letterSpacing: '-0.01em' }}>{c}</span>
              ))}
            </div>
          </section>

          <section style={{ padding: '56px 20px 64px', background: p.fg }}>
            <h2 data-mreveal style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 36, lineHeight: 1.0, letterSpacing: '-0.025em', margin: '0 0 32px', color: p.bg }}>
              Ready to build something<br />
              <em style={{ color: p.accent2, fontStyle: 'italic' }}>worth remembering?</em>
            </h2>
            <div style={{ display: 'grid', gap: 10 }}>
              <Link href="/contact" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px', borderRadius: 2, background: p.accent2, color: p.fg, fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none' }}>
                <span>START A PROJECT</span><span aria-hidden>→</span>
              </Link>
              <Link href="/work" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px', borderRadius: 2, background: 'transparent', color: p.bg, border: `1px solid ${p.bg}44`, fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none' }}>
                <span>SEE THE WORK</span><span aria-hidden>→</span>
              </Link>
            </div>
          </section>
      </>} />
    </>
  );
}

About.noLayout = true;
