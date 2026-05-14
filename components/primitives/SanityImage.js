import { PALETTE, FONTS } from '../../data/tokens';
import { urlForImage } from '../../lib/sanityImage';

const p = PALETTE;
const STRIPES = `repeating-linear-gradient(135deg, rgba(26,26,26,0.045) 0 12px, rgba(26,26,26,0.015) 12px 24px)`;

export default function SanityImage({
  source,
  alt = '',
  ratio,
  width,
  height,
  caption,
  placeholderLabel,
  style,
  imgStyle,
}) {
  const isObj = source && typeof source === 'object';
  const isPlaceholder = !source || (isObj && source.placeholder) || (isObj && !source.url && !source.asset);
  let url = null;
  if (!isPlaceholder) {
    try {
      url = typeof source === 'string'
        ? source
        : source.url
          ? source.url
          : urlForImage(source, {width: width || 1600});
    } catch (e) {
      url = null;
    }
  }
  const lqip = isObj && source.lqip ? source.lqip : null;

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: ratio,
      background: isPlaceholder ? STRIPES : p.bg,
      overflow: 'hidden',
      ...style,
    }}>
      {url && (
        <img
          src={url}
          alt={alt}
          loading="lazy"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            ...(lqip ? {backgroundImage: `url(${lqip})`, backgroundSize: 'cover'} : null),
            ...imgStyle,
          }}
        />
      )}
      {!url && (placeholderLabel || caption) && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: FONTS.mono, fontSize: 11, color: p.fgDim, letterSpacing: '0.06em',
        }}>
          {placeholderLabel || caption}
        </div>
      )}
    </div>
  );
}
