import { FONTS } from '../../data/tokens';

const BASE = {
  borderRadius: 2,
  fontFamily: FONTS.mono,
  fontSize: 10,
  letterSpacing: '0.08em',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
};

export default function Button({
  as = 'a',
  bg = 'transparent',
  color,
  border,
  padding = '11px 18px',
  className,
  style,
  children,
  ...rest
}) {
  const Tag = as;
  const composed = {
    ...BASE,
    background: bg,
    color,
    padding,
    border: border ? `1px solid ${border}` : 'none',
    cursor: 'pointer',
    ...style,
  };
  return (
    <Tag {...rest} className={`tfs-btn${className ? ` ${className}` : ''}`} style={composed}>
      {children}
    </Tag>
  );
}
