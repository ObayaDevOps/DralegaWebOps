import Head from 'next/head';
import PageLayout from '../components/layout/PageLayout';
import { PALETTE } from '../data/tokens';
import SectionLabel from '../components/primitives/SectionLabel';
import Button from '../components/primitives/Button';
import { client } from '../lib/sanityClient';
import { servicesPageQuery } from '../lib/queries/services';
import { SERVICES_PAGE } from '../data/services-page';
import { mergeObj } from '../lib/cms/merge';
import { mergeLayoutProps } from '../lib/cms/withLayoutProps';

const p = PALETTE;

export async function getStaticProps() {
  let cms = null;
  try {
    cms = await client.fetch(servicesPageQuery);
  } catch (e) {
    cms = null;
  }
  const data = mergeObj(cms, SERVICES_PAGE);
  return mergeLayoutProps({props: {data}, revalidate: 300});
}

export default function Services({ data, siteSettings, navLinks }) {
  const services = data.services || [];
  const cta = data.cta || {};
  return (
    <>
      <Head>
        <title>Services — twofivesix studio</title>
        <meta name="description" content={data.subheading} />
      </Head>
      <PageLayout siteSettings={siteSettings} navLinks={navLinks} desktop={<>
        <section style={{ padding: '80px 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <SectionLabel>{data.eyebrow}</SectionLabel>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                {data.heading}<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{data.headingEmphasis}</em>
              </h1>
              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif', fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>{data.subheading}</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 32px 120px' }}>
          {services.map((svc, i) => {
            const detailsList = Array.isArray(svc.details)
              ? svc.details
              : (svc.detail ? svc.detail.split(' · ') : []);
            const paragraphs = (svc.body || '').split('\n\n');
            const number = svc.number || svc.n;
            return (
              <div
                key={number || i}
                data-reveal
                data-reveal-delay={Math.min(i * 40, 200)}
                style={{
                  display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
                  padding: '64px 0',
                  borderTop: `1px solid ${p.rule}`,
                }}
              >
                <div style={{ gridColumn: 'span 1', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 6 }}>/{number}</div>
                <div style={{ gridColumn: 'span 4' }}>
                  <h2 style={{
                    fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                    fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.0,
                    letterSpacing: '-0.02em', margin: 0, color: p.fg,
                  }}>{svc.title}</h2>
                  <p style={{
                    fontFamily: '"Red Hat Display", sans-serif', fontStyle: 'italic',
                    fontWeight: 300, fontSize: 'clamp(15px, 1.3vw, 18px)',
                    lineHeight: 1.4, color: p.fgDim, margin: '8px 0 0',
                  }}>{svc.tagline || svc.sub}</p>
                </div>
                <div style={{ gridColumn: 'span 5' }}>
                  {paragraphs.map((para, j) => (
                    <p key={j} style={{
                      fontFamily: '"Inter", system-ui, sans-serif',
                      fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7,
                      color: p.fgDim, margin: j > 0 ? '20px 0 0' : 0,
                    }}>{para}</p>
                  ))}
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <div style={{
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
                    letterSpacing: '0.06em', color: p.fgDim, lineHeight: 1.8,
                  }}>
                    {detailsList.map((d) => (
                      <div key={d} style={{ color: p.accent2 }}>› {d}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <section style={{ padding: '120px 32px', background: p.fg }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: '3 / span 8', textAlign: 'center' }} data-reveal>
              <h2 style={{
                fontFamily: '"Red Hat Display", sans-serif', fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.0,
                letterSpacing: '-0.025em', margin: '0 0 40px', color: p.bg,
              }}>{cta.heading}</h2>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                {cta.primary?.href && (
                  <Button href={cta.primary.href} bg={p.accent2} color={p.fg} padding="14px 24px">
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
      </>} />
    </>
  );
}

Services.noLayout = true;
