import { FONTS, PALETTE } from '../../data/tokens';

const BY_VARIANT = {
  desktop: {
    style: { gridColumn: 'span 2', fontSize: 11, paddingTop: 12 },
    revealAttr: 'data-reveal',
  },
  mobile: {
    style: { fontSize: 10, marginBottom: 20 },
    revealAttr: 'data-mreveal',
  },
};

export default function SectionLabel({
  variant = 'desktop',
  reveal = true,
  delay,
  style,
  children,
  ...rest
}) {
  const v = BY_VARIANT[variant];
  const revealProps = reveal ? { [v.revealAttr]: true } : {};
  if (reveal && delay != null) revealProps[`${v.revealAttr}-delay`] = String(delay);
  return (
    <div
      {...rest}
      {...revealProps}
      style={{
        fontFamily: FONTS.mono,
        letterSpacing: '0.08em',
        color: PALETTE.fgDim,
        ...v.style,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
