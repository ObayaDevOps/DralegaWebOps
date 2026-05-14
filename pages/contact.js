import Head from 'next/head';
import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { PALETTE, FONTS } from '../data/tokens';
import SectionLabel from '../components/primitives/SectionLabel';
import Button from '../components/primitives/Button';
import Input from '../components/form/Input';
import Label from '../components/form/Label';
import { client } from '../lib/sanityClient';
import { contactPageQuery } from '../lib/queries/contact';
import { CONTACT_PAGE } from '../data/contact-page';
import { mergeObj } from '../lib/cms/merge';
import { mergeLayoutProps } from '../lib/cms/withLayoutProps';

const p = PALETTE;

export async function getStaticProps() {
  let cms = null;
  try {
    cms = await client.fetch(contactPageQuery);
  } catch (e) {
    cms = null;
  }
  const data = mergeObj(cms, CONTACT_PAGE);
  return mergeLayoutProps({props: {data}, revalidate: 300});
}

function CtaLink({ cta, variant = 'desktop' }) {
  if (!cta?.href) return null;
  const isMobile = variant === 'mobile';
  if (cta.filled) {
    return (
      <Button
        href={cta.href}
        target={cta.href.startsWith('http') ? '_blank' : undefined}
        rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        bg={p.accent}
        color="#FAFAF7"
        style={isMobile ? {fontSize: 12} : undefined}
      >{cta.label} →</Button>
    );
  }
  return (
    <Button
      href={cta.href}
      target={cta.href.startsWith('http') ? '_blank' : undefined}
      rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      color={p.fg}
      border={`${p.fg}44`}
      style={isMobile ? {fontSize: 12} : undefined}
    >{cta.label} →</Button>
  );
}

export default function Contact({ data, siteSettings, navLinks }) {
  const [formData, setFormData] = useState({ name: '', business: '', building: '', budget: '', timeline: '' });
  const [sent, setSent] = useState(false);
  const brief = data.briefSection;
  const budgetOptions = brief.budgetOptions || CONTACT_PAGE.briefSection.budgetOptions;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {}
    setSent(true);
  }

  return (
    <>
      <Head>
        <title>Contact — twofivesix studio</title>
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
                <em style={{ fontStyle: 'normal', fontWeight: 300 }}>{data.headingEmphasis}</em>
              </h1>
              <p style={{
                fontFamily: FONTS.sans, fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>{data.subheading}</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '0 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${(data.methods || []).length || 1}, 1fr)`, gap: 1, border: `1px solid ${p.rule}` }}>
            {(data.methods || []).map((m, i) => (
              <div
                key={m.label || m.number || i}
                data-reveal
                data-reveal-delay={i * 80}
                style={{
                  padding: '40px 32px',
                  borderRight: i < (data.methods.length - 1) ? `1px solid ${p.rule}` : 'none',
                }}
              >
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>{m.number}</div>
                <h2 style={{
                  fontFamily: FONTS.serif, fontWeight: 300,
                  fontSize: 'clamp(24px, 2.4vw, 34px)', letterSpacing: '-0.02em',
                  margin: '0 0 16px', color: p.fg,
                }}>{m.title}</h2>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: '0 0 32px' }}>{m.body}</p>
                <CtaLink cta={m.cta} />
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: '80px 32px 120px', background: p.fg }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}88`, paddingTop: 12 }} data-reveal>
              {brief.eyebrow}
            </div>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h2 style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.96,
                letterSpacing: '-0.025em', margin: '0 0 56px', color: p.bg,
              }}>
                {brief.heading}<br />
                <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>{brief.headingEmphasis}</em>
              </h2>

              {sent ? (
                <div style={{
                  padding: '40px 0', borderTop: `1px solid ${p.bg}22`,
                  fontFamily: FONTS.serif, fontWeight: 300,
                  fontSize: 'clamp(24px, 2.4vw, 32px)', color: p.bg, letterSpacing: '-0.012em',
                }}>{brief.successMessage}</div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                    <div>
                      <Label inverted>YOUR NAME</Label>
                      <Input required inverted placeholder="Amara Nakato"
                        value={formData.name} onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))} />
                    </div>
                    <div>
                      <Label inverted>BUSINESS NAME</Label>
                      <Input inverted placeholder="Nakato & Co."
                        value={formData.business} onChange={(e) => setFormData((d) => ({ ...d, business: e.target.value }))} />
                    </div>
                  </div>

                  <div>
                    <Label inverted>WHAT ARE YOU BUILDING?</Label>
                    <Input
                      as="textarea" required inverted
                      style={{ resize: 'none', minHeight: 80 }}
                      placeholder="A restaurant booking site. An online store. A rebrand. A URL and a rough idea is fine."
                      value={formData.building}
                      onChange={(e) => setFormData((d) => ({ ...d, building: e.target.value }))}
                    />
                  </div>

                  <div>
                    <Label inverted>BUDGET RANGE (USD)</Label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                      {budgetOptions.map((b) => {
                        const on = formData.budget === b;
                        return (
                          <button key={b} type="button"
                            onClick={() => setFormData((d) => ({ ...d, budget: b }))}
                            style={{
                              padding: '10px 16px', borderRadius: 2, cursor: 'pointer',
                              border: `1px solid ${on ? p.accent2 : p.bg + '33'}`,
                              background: on ? p.accent2 : 'transparent',
                              color: on ? p.fg : p.bg,
                              fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.06em',
                              transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                            }}>{b}</button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <Label inverted>WHEN DO YOU WANT TO LAUNCH?</Label>
                    <Input inverted placeholder="e.g. Before end of Q3 2026"
                      value={formData.timeline} onChange={(e) => setFormData((d) => ({ ...d, timeline: e.target.value }))} />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button as="button" type="submit" bg={p.accent2} color={p.fg} padding="16px 28px">{brief.submitLabel} →</Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </>} mobile={<>
          <section style={{ padding: '48px 20px 36px' }}>
            <SectionLabel variant="mobile">{data.eyebrow}</SectionLabel>
            <h1 data-mreveal data-mreveal-delay="60" style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(40px, 12vw, 56px)', lineHeight: 0.96,
              letterSpacing: '-0.025em', margin: 0, color: p.fg,
            }}>
              {data.heading}<br />
              <em style={{ fontStyle: 'normal', fontWeight: 300 }}>{data.headingEmphasis}</em>
            </h1>
            <p data-mreveal data-mreveal-delay="120" style={{
              fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 300,
              fontSize: 17, lineHeight: 1.4, color: p.fgDim, margin: '20px 0 0',
            }}>{data.subheading}</p>
          </section>

          <section style={{ padding: '0 20px 48px' }}>
            {(data.methods || []).map((method, i) => (
              <div key={method.number || i} data-mreveal data-mreveal-delay={i * 60} style={{ padding: '28px 0', borderBottom: `1px solid ${p.rule}` }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 12 }}>{method.number}</div>
                <h2 style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '0 0 12px', color: p.fg }}>{method.title}</h2>
                <p style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: '0 0 20px' }}>{method.body}</p>
                {method.cta?.href && (
                  <a
                    href={method.cta.href}
                    target={method.cta.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '14px 18px', borderRadius: 2,
                      background: method.cta.filled ? p.accent : 'transparent',
                      color: method.cta.filled ? '#FAFAF7' : p.fg,
                      border: `1px solid ${method.cta.filled ? p.accent : p.fg + '44'}`,
                      fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none',
                    }}
                  >
                    <span>{method.cta.label}</span><span aria-hidden>→</span>
                  </a>
                )}
              </div>
            ))}
          </section>

          <section style={{ padding: '56px 20px 72px', background: p.fg }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}88`, marginBottom: 14 }}>{brief.eyebrow}</div>
            <h2 style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 40, lineHeight: 0.96, letterSpacing: '-0.025em', margin: '0 0 40px', color: p.bg }}>
              {brief.heading}<br />
              <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>{brief.headingEmphasis}</em>
            </h2>
            {sent ? (
              <div style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 22, color: p.bg, letterSpacing: '-0.012em' }}>{brief.successMessage}</div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                <div>
                  <Label variant="mobile">YOUR NAME</Label>
                  <Input variant="mobile" required placeholder="Amara Nakato" value={formData.name} onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))} />
                </div>
                <div>
                  <Label variant="mobile">BUSINESS NAME</Label>
                  <Input variant="mobile" placeholder="Nakato & Co." value={formData.business} onChange={(e) => setFormData((d) => ({ ...d, business: e.target.value }))} />
                </div>
                <div>
                  <Label variant="mobile">WHAT ARE YOU BUILDING?</Label>
                  <Input as="textarea" variant="mobile" required style={{ resize: 'none', minHeight: 80, fontSize: 18 }} placeholder="A restaurant booking site. An online store. A rebrand." value={formData.building} onChange={(e) => setFormData((d) => ({ ...d, building: e.target.value }))} />
                </div>
                <div>
                  <Label variant="mobile" style={{ marginBottom: 10 }}>BUDGET RANGE (USD)</Label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {budgetOptions.map((b) => {
                      const on = formData.budget === b;
                      return (
                        <button key={b} type="button" onClick={() => setFormData((d) => ({ ...d, budget: b }))} style={{
                          padding: '10px 14px', borderRadius: 2, cursor: 'pointer',
                          border: `1px solid ${on ? p.accent2 : p.bg + '33'}`,
                          background: on ? p.accent2 : 'transparent',
                          color: on ? p.fg : p.bg,
                          fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.06em',
                        }}>{b}</button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <Label variant="mobile">WHEN DO YOU WANT TO LAUNCH?</Label>
                  <Input variant="mobile" placeholder="e.g. Before end of Q3 2026" value={formData.timeline} onChange={(e) => setFormData((d) => ({ ...d, timeline: e.target.value }))} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button as="button" type="submit" bg={p.accent2} color={p.fg} style={{ fontSize: 11 }}>{brief.submitLabel} →</Button>
                </div>
              </form>
            )}
          </section>
      </>} />
    </>
  );
}

Contact.noLayout = true;
