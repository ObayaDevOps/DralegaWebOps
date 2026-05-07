import { labelStyle } from '../../lib/styles/forms';

export default function Label({
  variant = 'desktop',
  inverted = false,
  style,
  children,
  ...rest
}) {
  return (
    <label {...rest} style={{ ...labelStyle({ variant, inverted }), ...style }}>
      {children}
    </label>
  );
}
