import { FONTS, PALETTE, MOTION } from '../../../../data/tokens';
import { HOME } from '../../../../data/home';

const p = PALETTE;

const BY_VARIANT = {
  desktop: { padding: '14px 0', gap: 36, fontSize: 12, animationName: 'tfs-marquee', duration: MOTION.marquee.desktop },
  mobile:  { padding: '12px 0', gap: 28, fontSize: 11, animationName: 'tfsm-marquee', duration: MOTION.marquee.mobile },
};

export default function Marquee({ variant = 'desktop', items }) {
  const v = BY_VARIANT[variant];
  const source = items && items.length ? items : HOME.hero.marqueeItems;
  const doubled = [...source, ...source];
  return (
    <div style={{
      borderTop: `1px solid ${p.rule}`,
      borderBottom: `1px solid ${p.rule}`,
      padding: v.padding,
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex', gap: v.gap, whiteSpace: 'nowrap',
        width: 'max-content',
        animation: `${v.animationName} ${v.duration} linear infinite`,
        fontFamily: FONTS.mono,
        fontSize: v.fontSize, letterSpacing: '0.12em',
        color: p.fgDim,
      }}>
        {doubled.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: v.gap }}>
            {w}
            <span style={{
              display: 'inline-block', width: 4, height: 4,
              background: p.accent3,
              ...(variant === 'desktop' ? { borderRadius: 0 } : null),
            }} />
          </span>
        ))}
      </div>
    </div>
  );
}
