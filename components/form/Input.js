import { inputStyle } from '../../lib/styles/forms';

export default function Input({
  as = 'input',
  variant = 'desktop',
  inverted = false,
  style,
  ...rest
}) {
  const Tag = as;
  return <Tag {...rest} style={{ ...inputStyle({ variant, inverted }), ...style }} />;
}
