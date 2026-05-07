import { FONTS, PALETTE } from '../../data/tokens';

const p = PALETTE;

export function inputStyle({ variant = 'desktop', inverted = false } = {}) {
  if (variant === 'mobile') {
    return {
      width: '100%', background: 'transparent', border: 'none',
      borderBottom: `1px solid ${p.bg}55`,
      color: p.bg,
      padding: '12px 0',
      fontFamily: FONTS.serif, fontWeight: 300,
      fontSize: 22, letterSpacing: '-0.01em',
      outline: 'none', boxSizing: 'border-box',
    };
  }
  return {
    width: '100%', background: 'transparent', border: 'none',
    borderBottom: `1px solid ${inverted ? '#FFFFFF33' : p.rule}`,
    color: inverted ? '#FAFAF7' : p.fg,
    padding: '14px 0',
    fontFamily: FONTS.serif, fontWeight: 300,
    fontSize: 'clamp(18px, 1.8vw, 22px)', letterSpacing: '-0.01em',
    outline: 'none', boxSizing: 'border-box',
  };
}

export function labelStyle({ variant = 'desktop', inverted = false } = {}) {
  if (variant === 'mobile') {
    return {
      fontFamily: FONTS.mono, fontSize: 10,
      letterSpacing: '0.08em', color: `${p.bg}88`,
      display: 'block', marginBottom: 4,
    };
  }
  return {
    fontFamily: FONTS.mono, fontSize: 11,
    letterSpacing: '0.08em', color: inverted ? '#FFFFFF88' : p.fgDim,
    display: 'block', marginBottom: 4,
  };
}
