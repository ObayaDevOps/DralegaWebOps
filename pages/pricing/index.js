import Head from 'next/head';
import TFSShell, { useReveal } from '../../components/pageContent/shared/TFSShell';
import { PALETTE } from '../../components/pageContent/home/data';

const p = PALETTE;

const TIERS = [
  {
    n: '01',
    name: 'Foundation',
    price: '$1,500',
    suffix: '— starting from',
    best: 'Service businesses, professional sites, brochure-style',
    includes: [
      'Bespoke design (no templates)',
      'Up to 8 pages',
      'Sanity CMS setup + training',
      'SEO fundamentals + GEO readiness',
      'Mobile-first, performance optimised',
      'WhatsApp Business integration',
      '3 months aftercare',
    ],
    excludes: ['Payment integration', 'E-commerce', 'Custom web app logic'],
  },
  {
    n: '02',
    name: 'Commerce',
    price: '$3,500',
    suffix: '— starting from',
    best: 'Online stores, bookings, payment integration',
    includes: [
      'Everything in Foundation',
      'Pesapal, DPO, MTN MoMo, Airtel Money',
      'Shopify storefront option',
      'Booking and reservation system',
      'Drop-pin delivery addressing',
      'WhatsApp order notifications',
      'Custom checkout UX',
    ],
    excludes: ['Web3 / blockchain features', 'Complex custom web apps'],
    featured: true,
  },
  {
    n: '03',
    name: 'Bespoke',
    price: '$7,500',
    suffix: '— starting from',
    best: 'Full custom builds, Web3, complex integrations',
    includes: [
      'Everything in Commerce',
      'Full custom web application',
      'Web3 / crypto rails',
      'Multi-currency, multi-region',
      'Custom CMS schemas',
      'API integrations (any)',
      'Extended aftercare (6 months)',
    ],
    excludes: [],
  },
  {
    n: '04',
    name: 'Retainer',
    price: '$800',
    suffix: '/month — from',
    best: 'Ongoing development, content, support',
    includes: [
      'Dedicated monthly hours',
      'Feature development',
      'Content updates',
      'Performance monitoring',
      'Priority support',
      'Monthly reporting',
    ],
    excludes: [],
  },
];

const ALL_INCLUDES = [
  'Bespoke design — no templates, no clones',
  'Sanity CMS setup and training',
  'Payment rails integration',
  'WhatsApp Business API integration',
  'Discoverability — SEO + GEO + structured data',
  '3 months aftercare',
  'CMS training on launch day',
];

export default function Pricing() {
  useReveal();

  return (
    <>
      <Head>
        <title>Pricing — twofivesix studio</title>
        <meta name="description" content="Transparent pricing for bespoke website builds in Uganda. Foundation from $1,500. Commerce from $3,500. Bespoke from $7,500." />
      </Head>
      <TFSShell>
        {/* Header */}
        <section style={{ padding: '80px 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 12 }} data-reveal>/PRICING</div>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                Honest prices.<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>No surprises.</em>
              </h1>
              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif', fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>
                Prices in USD. Payment plans available for Ugandan clients — 50% upfront, 50% on launch.
                All prices are starting points; the final number depends on scope.
              </p>
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section style={{ padding: '0 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, border: `1px solid ${p.rule}` }}>
            {TIERS.map((tier, i) => (
              <div
                key={tier.n}
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
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                    letterSpacing: '0.1em', color: p.accent2,
                    border: `1px solid ${p.accent2}`, padding: '3px 8px',
                  }}>MOST POPULAR</div>
                )}
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: tier.featured ? `${p.bg}88` : p.fgDim, marginBottom: 16 }}>/{tier.n}</div>
                <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(28px, 3vw, 42px)', letterSpacing: '-0.02em', color: tier.featured ? p.bg : p.fg, marginBottom: 4 }}>{tier.name}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(36px, 4vw, 56px)', letterSpacing: '-0.03em', color: tier.featured ? p.accent2 : p.accent }}>{tier.price}</span>
                  <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.06em', color: tier.featured ? `${p.bg}88` : p.fgDim }}>{tier.suffix}</span>
                </div>
                <div style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 14, lineHeight: 1.5, color: tier.featured ? `${p.bg}99` : p.fgDim, marginBottom: 32 }}>{tier.best}</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {tier.includes.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ color: p.accent2, fontFamily: '"JetBrains Mono", monospace', fontSize: 12, marginTop: 1, flexShrink: 0 }}>›</span>
                      <span style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 14, lineHeight: 1.5, color: tier.featured ? p.bg : p.fg }}>{item}</span>
                    </div>
                  ))}
                </div>

                {tier.excludes.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {tier.excludes.map((item) => (
                      <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: tier.featured ? `${p.bg}44` : p.rule, fontFamily: '"JetBrains Mono", monospace', fontSize: 12, marginTop: 1, flexShrink: 0 }}>×</span>
                        <span style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 14, lineHeight: 1.5, color: tier.featured ? `${p.bg}55` : p.fgFaint }}>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <a href="/contact" className="tfs-btn" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  marginTop: 32, padding: '12px 20px', borderRadius: 2,
                  background: tier.featured ? p.accent2 : 'transparent',
                  color: tier.featured ? p.fg : p.fg,
                  border: `1px solid ${tier.featured ? p.accent2 : p.fg + '44'}`,
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                  textDecoration: 'none',
                }}>START HERE →</a>
              </div>
            ))}
          </div>
        </section>

        {/* All tiers include */}
        <section style={{ padding: '80px 32px', borderTop: `1px solid ${p.rule}` }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }} data-reveal>/ALL TIERS INCLUDE</div>
            <div style={{ gridColumn: 'span 10' }} data-reveal data-reveal-delay="80">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px 40px' }}>
                {ALL_INCLUDES.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '16px 0', borderBottom: `1px solid ${p.rule}` }}>
                    <span style={{ color: p.accent, fontFamily: '"JetBrains Mono", monospace', fontSize: 14, flexShrink: 0, marginTop: 1 }}>›</span>
                    <span style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 15, lineHeight: 1.55, color: p.fg }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Note */}
        <section style={{ padding: '40px 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: '3 / span 8' }} data-reveal>
              <div style={{
                padding: '28px 32px', border: `1px solid ${p.rule}`,
                fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.04em',
                color: p.fgDim, lineHeight: 1.7,
              }}>
                <div style={{ color: p.fg, marginBottom: 8 }}>/NOTE — STUDENTS &amp; UNIVERSITIES</div>
                A reduced rate is available for student projects and university departments. Reach out directly to discuss.
                Final year project or thesis site: from $500.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '120px 32px', background: p.fg, color: p.bg }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: '3 / span 8', textAlign: 'center' }} data-reveal>
              <h2 style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.0,
                letterSpacing: '-0.025em', margin: '0 0 16px', color: p.bg,
              }}>
                Not sure which tier fits?
              </h2>
              <p style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 17, lineHeight: 1.6, color: `${p.bg}99`, margin: '0 0 40px' }}>
                Book a 20-minute call. We&rsquo;ll figure it out together.
              </p>
              <a href="/contact" className="tfs-btn" style={{
                background: p.accent2, color: p.fg, padding: '16px 28px', borderRadius: 2,
                fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
              }}>BOOK A FREE CALL →</a>
            </div>
          </div>
        </section>
      </TFSShell>
    </>
  );
}

Pricing.noLayout = true;
