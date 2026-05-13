import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';
import { PALETTE, FONTS } from '../../data/tokens';
import SectionLabel from '../../components/primitives/SectionLabel';
import Button from '../../components/primitives/Button';
import { client } from '../../lib/sanityClient';
import { pricingPageQuery } from '../../lib/queries/pricing';
import { PRICING_PAGE } from '../../data/pricing-page';
import { mergeObj } from '../../lib/cms/merge';
import { mergeLayoutProps } from '../../lib/cms/withLayoutProps';

const p = PALETTE;

export async function getStaticProps() {
  let cms = null;
  try {
    cms = await client.fetch(pricingPageQuery);
  } catch (e) {
    cms = null;
  }
  const data = mergeObj(cms, PRICING_PAGE);
  return mergeLayoutProps({props: {data}, revalidate: 300});
}

export default function Pricing({ data, siteSettings, navLinks }) {
  const tiers = data.tiers || [];
  const allTiersInclude = data.allTiersInclude || [];
  const cta = data.cta || {};
  return (
    <>
      <Head>
        <title>Pricing — twofivesix studio</title>
        <meta name="description" content={data.subheading} />
      </Head>
      <PageLayout siteSettings={siteSettings} navLinks={navLinks} desktop={<>
        <section style={{ padding: '80px 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
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
              <p style={{
                fontFamily: FONTS.sans, fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>{data.subheading}</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, border: `1px solid ${p.rule}` }}>
            {tiers.map((tier, i) => (
              <div
                key={tier.number || tier.name}
                data-reveal data-reveal-delay={i * 80}
                style={{
                  padding: '40px 36px',
                  borderRight: i % 2 === 0 ? `1px solid ${p.rule}` : 'none',
                  borderBottom: i < 2 ? `1px solid ${p.rule}` : 'none',
                  background: tier.featured ? p.fg : 'transparent',
                  position: 'relative',
                }}
              >
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: 20, right: 20,
                    fontFamily: FONTS.mono, fontSize: 10,
                    letterSpacing: '0.1em', color: p.accent2,
                    border: `1px solid ${p.accent2}`, padding: '3px 8px',
                  }}>MOST POPULAR</div>
                )}
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: tier.featured ? `${p.bg}88` : p.fgDim, marginBottom: 16 }}>/{tier.number}</div>
                <div style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.02em', color: tier.featured ? p.bg : p.fg, marginBottom: 4 }}>{tier.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', color: tier.featured ? p.accent2 : p.accent }}>{tier.price}</span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.06em', color: tier.featured ? `${p.bg}88` : p.fgDim }}>{tier.priceSuffix}</span>
                </div>
                <div style={{ fontFamily: FONTS.sans, fontSize: 14, lineHeight: 1.5, color: tier.featured ? `${p.bg}99` : p.fgDim, marginBottom: 32 }}>{tier.bestFor}</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {(tier.includes || []).map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: p.accent2, fontFamily: FONTS.mono, fontSize: 12, marginTop: 1, flexShrink: 0 }}>›</span>
                      <span style={{ fontFamily: FONTS.sans, fontSize: 14, lineHeight: 1.5, color: tier.featured ? p.bg : p.fg }}>{item}</span>
                    </div>
                  ))}
                </div>

                {(tier.excludes || []).length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {tier.excludes.map((item) => (
                      <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: tier.featured ? `${p.bg}44` : p.rule, fontFamily: FONTS.mono, fontSize: 12, marginTop: 1, flexShrink: 0 }}>×</span>
                        <span style={{ fontFamily: FONTS.sans, fontSize: 14, lineHeight: 1.5, color: tier.featured ? `${p.bg}55` : p.fgFaint }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  href={tier.cta?.href || '/contact'}
                  bg={tier.featured ? p.accent2 : 'transparent'}
                  color={p.fg}
                  border={tier.featured ? p.accent2 : `${p.fg}44`}
                  padding="12px 20px"
                  style={{ marginTop: 32 }}
                >{tier.cta?.label || 'START HERE'} →</Button>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/ALL TIERS INCLUDE</div>
            <div style={{ gridColumn: 'span 10' }} data-reveal data-reveal-delay="80">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 40px' }}>
                {allTiersInclude.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px 0', borderBottom: `1px solid ${p.rule}` }}>
                    <span style={{ color: p.accent, fontFamily: FONTS.mono, fontSize: 14, flexShrink: 0, marginTop: 1 }}>›</span>
                    <span style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.55, color: p.fg }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {data.studentNote && (
          <section style={{ padding: '40px 32px 80px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              <div style={{ gridColumn: '3 / span 8' }} data-reveal>
                <div style={{
                  padding: '28px 32px', border: `1px solid ${p.rule}`,
                  fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.04em',
                  color: p.fgDim, lineHeight: 1.7,
                }}>
                  <div style={{ color: p.fg, marginBottom: 8 }}>/NOTE — STUDENTS &amp; UNIVERSITIES</div>
                  {data.studentNote}
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
                letterSpacing: '-0.025em', margin: '0 0 16px', color: p.bg,
              }}>{cta.heading}</h2>
              {cta.subheading && (
                <p style={{ fontFamily: FONTS.sans, fontSize: 17, lineHeight: 1.6, color: `${p.bg}99`, margin: '0 0 40px' }}>
                  {cta.subheading}
                </p>
              )}
              {cta.primary?.href && (
                <Button href={cta.primary.href} bg={p.accent2} color={p.fg} padding="16px 28px">
                  {cta.primary.label} →
                </Button>
              )}
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
            <p data-mreveal data-mreveal-delay="120" style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.6, color: p.fgDim, margin: '20px 0 0' }}>
              {data.subheading}
            </p>
          </section>

          <section style={{ padding: '0 20px 48px' }}>
            {tiers.map((tier, i) => (
              <div key={tier.number || i} data-mreveal data-mreveal-delay={i * 60} style={{
                padding: '36px 24px',
                border: `1px solid ${tier.featured ? p.fg : p.rule}`,
                marginBottom: 1,
                background: tier.featured ? p.fg : 'transparent',
                position: 'relative',
              }}>
                {tier.featured && (
                  <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.1em', color: p.accent2, border: `1px solid ${p.accent2}`, padding: '3px 8px' }}>MOST POPULAR</div>
                )}
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: tier.featured ? `${p.bg}88` : p.fgDim, marginBottom: 12 }}>/{tier.number}</div>
                <div style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 32, letterSpacing: '-0.02em', color: tier.featured ? p.bg : p.fg, marginBottom: 4 }}>{tier.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 44, letterSpacing: '-0.03em', color: tier.featured ? p.accent2 : p.accent }}>{tier.price}</span>
                  <span style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.06em', color: tier.featured ? `${p.bg}88` : p.fgDim }}>{tier.priceSuffix}</span>
                </div>
                <div style={{ fontFamily: FONTS.sans, fontSize: 13, lineHeight: 1.5, color: tier.featured ? `${p.bg}99` : p.fgDim, marginBottom: 24 }}>{tier.bestFor}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                  {(tier.includes || []).map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: p.accent2, fontFamily: FONTS.mono, fontSize: 12, marginTop: 1, flexShrink: 0 }}>›</span>
                      <span style={{ fontFamily: FONTS.sans, fontSize: 14, lineHeight: 1.5, color: tier.featured ? p.bg : p.fg }}>{item}</span>
                    </div>
                  ))}
                </div>
                {(tier.excludes || []).length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                    {tier.excludes.map((item) => (
                      <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: tier.featured ? `${p.bg}44` : p.rule, fontFamily: FONTS.mono, fontSize: 12, marginTop: 1, flexShrink: 0 }}>×</span>
                        <span style={{ fontFamily: FONTS.sans, fontSize: 14, lineHeight: 1.5, color: tier.featured ? `${p.bg}55` : p.fgDim }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Link href={tier.cta?.href || '/contact'} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px', borderRadius: 2, marginTop: 8,
                  background: tier.featured ? p.accent2 : 'transparent',
                  color: p.fg,
                  border: `1px solid ${tier.featured ? p.accent2 : p.fg + '44'}`,
                  fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none',
                }}>
                  <span>{tier.cta?.label || 'START HERE'}</span><span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </section>

          <section style={{ padding: '40px 20px', borderTop: `1px solid ${p.rule}` }}>
            <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/ALL TIERS INCLUDE</div>
            <div data-mreveal data-mreveal-delay="60" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 24px' }}>
              {allTiersInclude.map((item) => (
                <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '12px 0', borderBottom: `1px solid ${p.rule}` }}>
                  <span style={{ color: p.accent, fontFamily: FONTS.mono, fontSize: 12, flexShrink: 0, marginTop: 1 }}>›</span>
                  <span style={{ fontFamily: FONTS.sans, fontSize: 13, lineHeight: 1.5, color: p.fg }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {data.studentNote && (
            <section style={{ padding: '0 20px 40px' }}>
              <div data-mreveal style={{ padding: '20px', border: `1px solid ${p.rule}`, fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.04em', color: p.fgDim, lineHeight: 1.7 }}>
                <div style={{ color: p.fg, marginBottom: 8 }}>/NOTE — STUDENTS &amp; UNIVERSITIES</div>
                {data.studentNote}
              </div>
            </section>
          )}

          <section style={{ padding: '56px 20px 72px', background: p.fg }}>
            <h2 data-mreveal style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 36, lineHeight: 1.0, letterSpacing: '-0.025em', margin: '0 0 16px', color: p.bg }}>
              {cta.heading}
            </h2>
            {cta.subheading && (
              <p data-mreveal data-mreveal-delay="60" style={{ fontFamily: FONTS.sans, fontSize: 16, lineHeight: 1.6, color: `${p.bg}99`, margin: '0 0 32px' }}>
                {cta.subheading}
              </p>
            )}
            {cta.primary?.href && (
              <Link href={cta.primary.href} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '16px 18px', borderRadius: 2,
                background: p.accent2, color: p.fg,
                fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none',
              }}>
                <span>{cta.primary.label}</span><span aria-hidden>→</span>
              </Link>
            )}
          </section>
      </>} />
    </>
  );
}

Pricing.noLayout = true;
