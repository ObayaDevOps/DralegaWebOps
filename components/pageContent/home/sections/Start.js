import { useState } from 'react';
import { FONTS, PALETTE, MOTION } from '../../../../data/tokens';
import { HOME } from '../../../../data/home';

const p = PALETTE;

const SCOPE_OPTIONS_MOBILE  = ['E-commerce', 'Brand site', 'Web app', 'Booking', 'CMS', 'Brand', 'Other'];

function DesktopStart({ startSection }) {
  const SCOPE_OPTIONS_DESKTOP = startSection.scopeOptions;
  const BUDGET_OPTIONS = startSection.budgetOptions;
  const [stage, setStage] = useState(0);
  const [data, setData] = useState({ scope: [], budget: '', when: '' });
  const stages = ['scope', 'budget', 'when'];

  const inputStyle = {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: `1px solid #F4F1EC55`, color: '#F4F1EC',
    padding: '14px 0',
    fontFamily: FONTS.serif, fontSize: 'clamp(20px, 2.2vw, 28px)',
    fontWeight: 300, outline: 'none',
    letterSpacing: '-0.01em', boxSizing: 'border-box',
  };

  return (
    <section id="start" style={{ padding: '140px 32px', background: p.fg, color: p.bg }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
          color: `${p.bg}aa`,
        }} data-reveal>{startSection.eyebrow}</div>
        <div style={{ gridColumn: 'span 10' }} data-reveal data-reveal-delay="80">
          <h2 style={{
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 'clamp(48px, 7vw, 104px)',
            lineHeight: 0.96, letterSpacing: '-0.025em',
            margin: 0, color: p.bg,
          }}>
            {startSection.heading}<br />
            <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>{startSection.headingEmphasis}</em>
          </h2>
        </div>
      </div>

      <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{ gridColumn: '3 / span 8' }}>
          <div style={{
            display: 'flex', gap: 24, marginBottom: 32,
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.08em',
            color: `${p.bg}88`,
          }}>
            {stages.map((s, i) => (
              <button key={s} onClick={() => setStage(i)} style={{
                background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                color: i === stage ? p.accent2 : `${p.bg}88`,
                fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
              }}>
                /{(i + 1).toString().padStart(2, '0')} {s.toUpperCase()}
              </button>
            ))}
          </div>

          {stage === 0 && (
            <div>
              <label style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}aa` }}>WHAT KIND OF PROJECT</label>
              <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {SCOPE_OPTIONS_DESKTOP.map((s) => {
                  const on = data.scope.includes(s);
                  return (
                    <button key={s}
                      onClick={() => setData((d) => ({
                        ...d,
                        scope: on ? d.scope.filter((x) => x !== s) : [...d.scope, s],
                      }))}
                      style={{
                        padding: '12px 18px', borderRadius: 2,
                        border: `1px solid ${on ? p.accent2 : p.bg + '44'}`,
                        background: on ? p.accent2 : 'transparent',
                        color: on ? p.fg : p.bg,
                        fontFamily: FONTS.mono,
                        fontSize: 12, letterSpacing: '0.06em',
                        cursor: 'pointer',
                        transition: `all 200ms ${MOTION.ease}`,
                      }}>{s}</button>
                  );
                })}
              </div>
            </div>
          )}

          {stage === 1 && (
            <div>
              <label style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}aa` }}>RANGE (USD)</label>
              <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {BUDGET_OPTIONS.map((b) => {
                  const on = data.budget === b;
                  return (
                    <button key={b}
                      onClick={() => setData((d) => ({ ...d, budget: b }))}
                      style={{
                        textAlign: 'left', padding: '20px 0',
                        background: 'none', border: 'none',
                        borderBottom: `1px solid ${p.bg}22`,
                        color: on ? p.accent2 : p.bg,
                        fontFamily: FONTS.serif, fontWeight: 300,
                        fontSize: 'clamp(20px, 2.2vw, 28px)',
                        cursor: 'pointer', letterSpacing: '-0.01em',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      }}>
                      <span>{b}</span>
                      <span style={{
                        fontFamily: FONTS.mono,
                        fontSize: 11, letterSpacing: '0.08em',
                        color: on ? p.accent2 : `${p.bg}66`,
                      }}>{on ? '◉' : '○'}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {stage === 2 && (
            <div>
              <label style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: `${p.bg}aa` }}>EMAIL</label>
              <input style={inputStyle} placeholder="hello@studio.com" />
              <label style={{
                fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em',
                color: `${p.bg}aa`, display: 'block', marginTop: 40,
              }}>A LINK OR ROUGH BRIEF</label>
              <textarea style={{ ...inputStyle, resize: 'none', minHeight: 100 }}
                placeholder="A url, a sentence, or a paragraph. Whatever's true." />
            </div>
          )}

          <div style={{
            marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <button onClick={() => setStage((s) => Math.max(0, s - 1))} style={{
              background: 'none', border: 'none', padding: 0,
              cursor: stage === 0 ? 'default' : 'pointer',
              color: stage === 0 ? `${p.bg}33` : p.bg,
              fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em',
            }}>← BACK</button>
            <button onClick={() => stage < 2 ? setStage(stage + 1) : null} style={{
              background: p.accent2, color: p.fg,
              padding: '16px 28px', borderRadius: 2,
              fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em',
              border: 'none', cursor: 'pointer',
            }}>{stage < 2 ? 'CONTINUE →' : 'SEND BRIEF →'}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileStart({ startSection }) {
  const BUDGET_OPTIONS = startSection.budgetOptions;
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
      }}>{startSection.eyebrow}</div>

      <h2 style={{
        fontFamily: FONTS.serif, fontWeight: 300,
        fontSize: 42, lineHeight: 0.96, letterSpacing: '-0.025em',
        margin: '0 0 36px', color: p.bg,
      }}>
        {startSection.heading}<br />
        <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>{startSection.headingEmphasis}</em>
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
          <label style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99` }}>WHAT KIND OF PROJECT</label>
          <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {SCOPE_OPTIONS_MOBILE.map((s) => {
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
          <label style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99` }}>RANGE (USD)</label>
          {BUDGET_OPTIONS.map((b) => {
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
          <label style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: `${p.bg}99` }}>EMAIL</label>
          <input style={{
            width: '100%', background: 'transparent', border: 'none',
            borderBottom: `1px solid ${p.bg}55`, color: p.bg,
            padding: '12px 0',
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 22, letterSpacing: '-0.01em', outline: 'none',
            boxSizing: 'border-box',
          }} placeholder="hello@studio.com" />
          <label style={{
            fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em',
            color: `${p.bg}99`, display: 'block', marginTop: 28,
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

export default function Start({ variant = 'desktop', startSection = HOME.startSection }) {
  return variant === 'mobile'
    ? <MobileStart startSection={startSection} />
    : <DesktopStart startSection={startSection} />;
}
