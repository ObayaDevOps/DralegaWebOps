import { FONTS, PALETTE, MOTION } from '../../../../data/tokens';
import { MARQUEE_ITEMS } from '../../../../data/projects';

const p = PALETTE;

const BY_VARIANT = {
  desktop: { padding: '14px 0', gap: 36, fontSize: 12, animationName: 'tfs-marquee', duration: MOTION.marquee.desktop },
  mobile:  { padding: '12px 0', gap: 28, fontSize: 11, animationName: 'tfsm-marquee', duration: MOTION.marquee.mobile },
};

export default function Marquee({ variant = 'desktop' }) {
  const v = BY_VARIANT[variant];
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
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
        {items.map((w, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: v.gap }}>
            {w}
            <span style={{
              display: 'inline-block', width: 4, height: 4,
              background: p.accent,
              ...(variant === 'desktop' ? { borderRadius: 0 } : null),
            }} />
          </span>
        ))}
      </div>
    </div>
  );
}
