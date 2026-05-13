import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';
import { PALETTE, FONTS } from '../../data/tokens';
import SectionLabel from '../../components/primitives/SectionLabel';
import Button from '../../components/primitives/Button';
import RichText from '../../components/primitives/RichText';
import SanityImage from '../../components/primitives/SanityImage';
import { client } from '../../lib/sanityClient';
import { aboutPageQuery } from '../../lib/queries/about';
import { ABOUT_PAGE } from '../../data/about-page';
import { mergeObj } from '../../lib/cms/merge';
import { mergeLayoutProps } from '../../lib/cms/withLayoutProps';

const p = PALETTE;

export async function getStaticProps() {
  let cms = null;
  try {
    cms = await client.fetch(aboutPageQuery);
  } catch (e) {
    cms = null;
  }
  const data = mergeObj(cms, ABOUT_PAGE);
  return mergeLayoutProps({props: {data}, revalidate: 300});
}

export default function About({ data, siteSettings, navLinks }) {
  const credentials = data.credentials || [];
  const stack = data.stack || [];
  const clients = data.clients || [];
  const cta = data.cta || {};
  return (
    <>
      <Head>
        <title>About — twofivesix studio</title>
        <meta name="description" content={data.intro} />
      </Head>
      <PageLayout siteSettings={siteSettings} navLinks={navLinks} desktop={<>
        <section style={{ padding: '80px 32px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 80 }}>
            <SectionLabel>{data.eyebrow}</SectionLabel>

            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                {data.heading}<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{data.headingEmphasis}</em>
              </h1>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 32px 120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 4' }} data-reveal>
              <SanityImage
                source={data.photo}
                ratio="3 / 4"
                placeholderLabel={data.photoCaption}
                alt={data.photoCaption}
              />
            </div>

            <div style={{ gridColumn: '6 / span 7', display: 'flex', flexDirection: 'column', gap: 32 }} data-reveal data-reveal-delay="100">
              <p style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(20px, 2vw, 27px)', lineHeight: 1.4,
                margin: 0, color: p.fg, letterSpacing: '-0.012em',
              }}>{data.intro}</p>

              <RichText
                value={data.body}
                style={{
                  fontFamily: FONTS.sans,
                  fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7,
                  color: p.fgDim, display: 'flex', flexDirection: 'column', gap: 24,
                }}
              />

              {data.closer && (
                <p style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 300,
                  fontSize: 'clamp(18px, 1.8vw, 23px)', lineHeight: 1.4,
                  margin: 0, color: p.fg, letterSpacing: '-0.01em',
                }}>{data.closer}</p>
              )}
            </div>
          </div>
        </section>

        {credentials.length > 0 && (
          <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 48 }}>
              <div style={{ gridColumn: 'span 2', fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/CREDENTIALS</div>
              <div style={{ gridColumn: 'span 10' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
                  {credentials.map((c, i) => (
                    <div key={c.label} data-reveal data-reveal-delay={i * 60} style={{
                      padding: '28px 0', borderTop: `1px solid ${p.rule}`,
                    }}>
                      <div style={{
                        fontFamily: FONTS.mono, fontSize: 11,
                        letterSpacing: '0.1em', color: p.accent, marginBottom: 12,
                      }}>/{c.label?.toUpperCase()}</div>
                      <p style={{
                        fontFamily: FONTS.sans,
                        fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: 0,
                      }}>{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {stack.length > 0 && (
          <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              <div style={{ gridColumn: 'span 2', fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/STACK</div>
              <div style={{ gridColumn: 'span 10' }}>
                {stack.map((s, i) => (
                  <div key={s.label} data-reveal data-reveal-delay={i * 60} style={{
                    display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24,
                    padding: '20px 0',
                    borderTop: i === 0 ? `1px solid ${p.rule}` : 'none',
                    borderBottom: `1px solid ${p.rule}`,
                    alignItems: 'baseline',
                  }}>
                    <div style={{ fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.1em', color: p.accent }}>/{s.label}</div>
                    <div style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 'clamp(18px, 1.5vw, 22px)', color: p.fg, lineHeight: 1.4, letterSpacing: '-0.005em' }}>
                      {(s.items || []).join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {clients.length > 0 && (
          <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              <div style={{ gridColumn: 'span 2', fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/CLIENTS</div>
              <div style={{ gridColumn: 'span 10' }} data-reveal data-reveal-delay="80">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px' }}>
                  {clients.map((c, i) => (
                    <span key={c} style={{
                      fontFamily: FONTS.serif, fontWeight: 300,
                      fontSize: 'clamp(16px, 1.4vw, 20px)', color: i % 3 === 0 ? p.fg : p.fgDim,
                      letterSpacing: '-0.01em',
                    }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section style={{ padding: '120px 32px', background: p.fg, color: p.bg }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: '3 / span 8', textAlign: 'center' }} data-reveal>
              <h2 style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.0,
                letterSpacing: '-0.025em', margin: '0 0 40px', color: p.bg,
              }}>{cta.heading}</h2>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                {cta.primary?.href && (
                  <Button href={cta.primary.href} bg={p.accent2} color={p.fg} border={p.accent2} padding="14px 24px">
                    {cta.primary.label} →
                  </Button>
                )}
                {cta.secondary?.href && (
                  <Button href={cta.secondary.href} color={p.bg} border={`${p.bg}44`} padding="14px 24px">
                    {cta.secondary.label} →
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </>} mobile={<>
          <section style={{ padding: '48px 20px 36px' }}>
            <SectionLabel variant="mobile">{data.eyebrow}</SectionLabel>
            <h1 data-mreveal data-mreveal-delay="60" style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(40px, 12vw, 56px)', lineHeight: 0.94,
              letterSpacing: '-0.025em', margin: 0, color: p.fg,
            }}>
              {data.heading}<br />
              <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{data.headingEmphasis}</em>
            </h1>
          </section>

          <section style={{ padding: '0 20px 48px' }}>
            <div data-mreveal style={{ marginBottom: 28 }}>
              <SanityImage
                source={data.photo}
                ratio="4 / 3"
                placeholderLabel={data.photoCaption}
                alt={data.photoCaption}
              />
            </div>
            <div data-mreveal data-mreveal-delay="60" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <p style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 20, lineHeight: 1.4, margin: 0, color: p.fg, letterSpacing: '-0.012em' }}>
                {data.intro}
              </p>
              <RichText
                value={data.body}
                style={{
                  fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.7, color: p.fgDim,
                  display: 'flex', flexDirection: 'column', gap: 16,
                }}
              />
            </div>
          </section>

          {credentials.length > 0 && (
            <section style={{ padding: '40px 20px', borderTop: `1px solid ${p.rule}` }}>
              <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/CREDENTIALS</div>
              {credentials.map((c, i) => (
                <div key={c.label} data-mreveal data-mreveal-delay={i * 50} style={{ padding: '16px 0', borderBottom: `1px solid ${p.rule}` }}>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.1em', color: p.accent, marginBottom: 8 }}>/{c.label?.toUpperCase()}</div>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: 0 }}>{c.body}</p>
                </div>
              ))}
            </section>
          )}

          {stack.length > 0 && (
            <section style={{ padding: '40px 20px', borderTop: `1px solid ${p.rule}` }}>
              <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/STACK</div>
              {stack.map((s, i) => (
                <div key={s.label} data-mreveal data-mreveal-delay={i * 50} style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr', gap: 16,
                  padding: '16px 0', borderBottom: `1px solid ${p.rule}`, alignItems: 'baseline',
                }}>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.1em', color: p.accent }}>/{s.label}</div>
                  <div style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 17, lineHeight: 1.4, letterSpacing: '-0.005em', color: p.fg }}>{(s.items || []).join(' · ')}</div>
                </div>
              ))}
            </section>
          )}

          {clients.length > 0 && (
            <section style={{ padding: '40px 20px', borderTop: `1px solid ${p.rule}` }}>
              <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 16 }}>/CLIENTS</div>
              <div data-mreveal data-mreveal-delay="60" style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 24px' }}>
                {clients.map((c, i) => (
                  <span key={c} style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 17, color: i % 3 === 0 ? p.fg : p.fgDim, letterSpacing: '-0.01em' }}>{c}</span>
                ))}
              </div>
            </section>
          )}

          <section style={{ padding: '56px 20px 64px', background: p.fg }}>
            <h2 data-mreveal style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 36, lineHeight: 1.0, letterSpacing: '-0.025em', margin: '0 0 32px', color: p.bg }}>
              {cta.heading}
            </h2>
            <div style={{ display: 'grid', gap: 10 }}>
              {cta.primary?.href && (
                <Link href={cta.primary.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px', borderRadius: 2, background: p.accent2, color: p.fg, fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none' }}>
                  <span>{cta.primary.label}</span><span aria-hidden>→</span>
                </Link>
              )}
              {cta.secondary?.href && (
                <Link href={cta.secondary.href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 18px', borderRadius: 2, background: 'transparent', color: p.bg, border: `1px solid ${p.bg}44`, fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none' }}>
                  <span>{cta.secondary.label}</span><span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </section>
      </>} />
    </>
  );
}

About.noLayout = true;
