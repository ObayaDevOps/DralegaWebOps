import { PortableText } from '@portabletext/react';

export default function RichText({ value, components, style }) {
  if (!value) return null;
  return (
    <div style={style}>
      <PortableText value={value} components={components} />
    </div>
  );
}
