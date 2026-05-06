import Head from 'next/head';
import { useState } from 'react';
import TFSShell, { useReveal } from '../components/pageContent/shared/TFSShell';
import { PALETTE } from '../components/pageContent/home/data';

const p = PALETTE;

const BUDGET_OPTIONS = ['Under $1,500', '$1,500 — $3,500', '$3,500 — $7,500', '$7,500+', "Let's discuss"];
const SCOPE_OPTIONS = ['E-commerce', 'Brand site', 'Web app', 'Booking system', 'CMS rebuild', 'Brand system', 'Other'];

function inputStyle(inverted) {
  return {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: `1px solid ${inverted ? '#FFFFFF33' : p.rule}`,
    color: inverted ? '#FAFAF7' : p.fg,
    padding: '14px 0', fontFamily: '"Fraunces", Georgia, serif',
    fontSize: 'clamp(18px, 1.8vw, 22px)', fontWeight: 300, outline: 'none',
    letterSpacing: '-0.01em', boxSizing: 'border-box',
  };
}

function labelStyle(inverted) {
  return {
    fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
    letterSpacing: '0.08em', color: inverted ? '#FFFFFF88' : p.fgDim,
    display: 'block', marginBottom: 4,
  };
}

export default function Contact() {
  useReveal();
  const [formData, setFormData] = useState({ name: '', business: '', building: '', budget: '', timeline: '' });
  const [sent, setSent] = useState(false);

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
        <meta name="description" content="Start a project with twofivesix. Book a 20-minute call, message on WhatsApp, or send a brief." />
      </Head>
      <TFSShell>
        {/* Header */}
        <section style={{ padding: '80px 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 12 }} data-reveal>/CONTACT</div>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                Let&rsquo;s build<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>something.</em>
              </h1>
              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif', fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>
                Three ways to start. Pick whichever feels natural.
              </p>
            </div>
          </div>
        </section>

        {/* Three contact methods */}
        <section style={{ padding: '0 32px 80px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, border: `1px solid ${p.rule}` }}>
            {/* Book a call */}
            <div data-reveal style={{ padding: '40px 32px', borderRight: `1px solid ${p.rule}` }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/01 — CALL</div>
              <h2 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(24px, 2.4vw, 34px)', letterSpacing: '-0.02em', margin: '0 0 16px', color: p.fg }}>
                Book a 20-minute call
              </h2>
              <p style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: '0 0 32px' }}>
                One call. We figure out what you&rsquo;re actually trying to do. No pitch, no deck, no pressure.
                Book a slot that works for you.
              </p>
              <a
                href="https://calendly.com/twofivesix/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="tfs-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '14px 22px', borderRadius: 2, background: p.accent, color: '#FAFAF7',
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                  textDecoration: 'none',
                }}
              >BOOK A SLOT →</a>
            </div>

            {/* WhatsApp */}
            <div data-reveal data-reveal-delay="80" style={{ padding: '40px 32px', borderRight: `1px solid ${p.rule}` }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/02 — WHATSAPP</div>
              <h2 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(24px, 2.4vw, 34px)', letterSpacing: '-0.02em', margin: '0 0 16px', color: p.fg }}>
                Message on WhatsApp
              </h2>
              <p style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: '0 0 32px' }}>
                The fastest way to reach us. Drop a message and we&rsquo;ll respond within a few hours.
                The conversation is already built into your workflow.
              </p>
              <a
                href="https://wa.me/256789062116?text=Hi+twofivesix%2C+I%27d+like+to+talk+about+a+project"
                target="_blank"
                rel="noopener noreferrer"
                className="tfs-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '14px 22px', borderRadius: 2, background: 'transparent', color: p.fg,
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                  textDecoration: 'none', border: `1px solid ${p.fg}44`,
                }}
              >OPEN WHATSAPP →</a>
            </div>

            {/* Email */}
            <div data-reveal data-reveal-delay="160" style={{ padding: '40px 32px' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>/03 — EMAIL</div>
              <h2 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(24px, 2.4vw, 34px)', letterSpacing: '-0.02em', margin: '0 0 16px', color: p.fg }}>
                Send an email
              </h2>
              <p style={{ fontFamily: '"Inter", system-ui, sans-serif', fontSize: 15, lineHeight: 1.65, color: p.fgDim, margin: '0 0 32px' }}>
                Prefer email? We read everything. Response within 24 hours on working days.
              </p>
              <a
                href="mailto:hello@twofivesix.online"
                className="tfs-btn"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  padding: '14px 22px', borderRadius: 2, background: 'transparent', color: p.fg,
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                  textDecoration: 'none', border: `1px solid ${p.fg}44`,
                }}
              >SEND EMAIL →</a>
            </div>
          </div>
        </section>

        {/* Brief form */}
        <section style={{ padding: '80px 32px 120px', background: p.fg }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}88`, paddingTop: 12 }} data-reveal>
              /SEND A BRIEF
            </div>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h2 style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 0.96,
                letterSpacing: '-0.025em', margin: '0 0 56px', color: p.bg,
              }}>
                Tell us what you&rsquo;re<br />
                <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>building.</em>
              </h2>

              {sent ? (
                <div style={{
                  padding: '40px 0', borderTop: `1px solid ${p.bg}22`,
                  fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                  fontSize: 'clamp(24px, 2.4vw, 32px)', color: p.bg, letterSpacing: '-0.012em',
                }}>
                  Brief received. We&rsquo;ll be in touch within 24 hours.
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                    <div>
                      <label style={labelStyle(true)}>YOUR NAME</label>
                      <input
                        required style={inputStyle(true)} placeholder="Amara Nakato"
                        value={formData.name} onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label style={labelStyle(true)}>BUSINESS NAME</label>
                      <input
                        style={inputStyle(true)} placeholder="Nakato & Co."
                        value={formData.business} onChange={(e) => setFormData((d) => ({ ...d, business: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle(true)}>WHAT ARE YOU BUILDING?</label>
                    <textarea
                      required
                      style={{ ...inputStyle(true), resize: 'none', minHeight: 80 }}
                      placeholder="A restaurant booking site. An online store. A rebrand. A URL and a rough idea is fine."
                      value={formData.building}
                      onChange={(e) => setFormData((d) => ({ ...d, building: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label style={labelStyle(true)}>BUDGET RANGE (USD)</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                      {BUDGET_OPTIONS.map((b) => {
                        const on = formData.budget === b;
                        return (
                          <button key={b} type="button"
                            onClick={() => setFormData((d) => ({ ...d, budget: b }))}
                            style={{
                              padding: '10px 16px', borderRadius: 2, cursor: 'pointer',
                              border: `1px solid ${on ? p.accent2 : p.bg + '33'}`,
                              background: on ? p.accent2 : 'transparent',
                              color: on ? p.fg : p.bg,
                              fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.06em',
                              transition: 'all 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                            }}>{b}</button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle(true)}>WHEN DO YOU WANT TO LAUNCH?</label>
                    <input
                      style={inputStyle(true)} placeholder="e.g. Before end of Q3 2026"
                      value={formData.timeline} onChange={(e) => setFormData((d) => ({ ...d, timeline: e.target.value }))}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className="tfs-btn" style={{
                      background: p.accent2, color: p.fg, padding: '16px 28px', borderRadius: 2,
                      fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                      border: 'none', cursor: 'pointer',
                    }}>SEND BRIEF →</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </TFSShell>
    </>
  );
}

Contact.noLayout = true;
