import { FONTS, PALETTE } from '../../../../data/tokens';
import { HOME } from '../../../../data/home';
import SanityImage from '../../../primitives/SanityImage';

const p = PALETTE;

const imageRevealCSS = `
  .tfs-feat-img[data-reveal] {
    opacity: 0;
    transform: translateY(52px);
    transition: opacity 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: opacity, transform;
  }
  .tfs-feat-img[data-reveal][data-revealed="1"] {
    opacity: 1;
    transform: translateY(0);
  }
  .tfs-feat-img[data-mreveal] {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: opacity, transform;
  }
  .tfs-feat-img[data-mreveal][data-revealed="1"] {
    opacity: 1;
    transform: translateY(0);
  }
`;

function PhonePlaceholder({ caption, size = 220 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: '100%',
        maxWidth: size,
        aspectRatio: '9 / 19.5',
        background: `${p.bg}08`,
        border: `1px solid ${p.bg}22`,
        borderRadius: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
      }}>
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 9,
          letterSpacing: '0.1em',
          color: `${p.bg}35`,
          textAlign: 'center',
          lineHeight: 1.8,
        }}>
          SCREENSHOT<br />PLACEHOLDER
        </div>
      </div>
      {caption && (
        <div style={{
          fontFamily: FONTS.mono,
          fontSize: 10,
          letterSpacing: '0.07em',
          color: `${p.bg}45`,
          marginTop: 14,
          textAlign: 'center',
        }}>{caption}</div>
      )}
    </div>
  );
}

function FeatureImage({ layer, variant }) {
  const isMobile = variant === 'mobile';
  const size = isMobile ? 160 : 220;
  const hasImage = layer.image?.url;

  if (hasImage) {
    return (
      <div style={{ maxWidth: size, margin: '0 auto' }}>
        <SanityImage
          source={layer.image}
          alt={layer.imageAlt || layer.imageCaption || ''}
          imgStyle={{ borderRadius: 24 }}
        />
        {layer.imageCaption && (
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: isMobile ? 9 : 10,
            letterSpacing: '0.07em',
            color: `${p.bg}45`,
            marginTop: 14,
            textAlign: 'center',
          }}>{layer.imageCaption}</div>
        )}
      </div>
    );
  }

  return <PhonePlaceholder caption={layer.imageCaption} size={size} />;
}

function DesktopLayer({ layer, i }) {
  const reversed = i % 2 === 1;
  const imgCol = reversed ? '7 / span 5' : '1 / span 5';
  const txtCol = reversed ? '1 / span 5' : '7 / span 5';
  const baseDelay = i * 100;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 24,
      paddingTop: 72,
      paddingBottom: 72,
      borderBottom: `1px solid ${p.bg}18`,
      alignItems: 'center',
    }}>
      {/* Image */}
      <div
        className="tfs-feat-img"
        data-reveal
        data-reveal-delay={baseDelay}
        style={{ gridColumn: imgCol, gridRow: 1, display: 'flex', justifyContent: 'center' }}
      >
        <FeatureImage layer={layer} variant="desktop" />
      </div>

      {/* Text */}
      <div style={{
        gridColumn: txtCol,
        gridRow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: reversed ? 0 : 24,
        paddingRight: reversed ? 24 : 0,
      }}>
        <div data-reveal data-reveal-delay={baseDelay + 80} style={{
          fontFamily: FONTS.mono,
          fontSize: 11,
          letterSpacing: '0.1em',
          color: p.accent,
          marginBottom: 16,
        }}>/{layer.label}</div>

        <h3 data-reveal data-reveal-delay={baseDelay + 160} style={{
          fontFamily: FONTS.serif,
          fontWeight: 300,
          fontSize: 'clamp(42.9px, 3.9vw, 58.5px)',
          lineHeight: 1.2,
          letterSpacing: '-0.012em',
          color: p.bg,
          margin: '0 0 20px',
        }}>{layer.heading}</h3>

        <p data-reveal data-reveal-delay={baseDelay + 240} style={{
          fontFamily: FONTS.serif,
          fontWeight: 300,
          fontSize: 'clamp(18px, 1.5vw, 22px)',
          lineHeight: 1.5,
          letterSpacing: '-0.005em',
          color: `${p.bg}bb`,
          margin: '0 0 4px',
        }}>{layer.subheading}</p>

        {(layer.bullets || []).map((b, j) => (
          <div key={j} data-reveal data-reveal-delay={baseDelay + 320 + j * 60} style={{
            fontFamily: FONTS.serif,
            fontSize: 20,
            letterSpacing: '0.005em',
            color: `${p.bg}66`,
            lineHeight: 1.6,
          }}>{b}</div>
        ))}
      </div>
    </div>
  );
}

function MobileLayer({ layer, i }) {
  const baseDelay = i * 80;

  return (
    <div style={{
      paddingTop: 48,
      paddingBottom: 48,
      borderBottom: `1px solid ${p.bg}18`,
    }}>
      <div data-mreveal data-mreveal-delay={baseDelay} style={{
        fontFamily: FONTS.mono,
        fontSize: 10,
        letterSpacing: '0.1em',
        color: p.accent,
        marginBottom: 12,
      }}>/{layer.label}</div>

      <h3 data-mreveal data-mreveal-delay={baseDelay + 80} style={{
        fontFamily: FONTS.serif,
        fontWeight: 300,
        fontSize: 33.8,
        lineHeight: 1.2,
        letterSpacing: '-0.012em',
        color: p.bg,
        margin: '0 0 16px',
      }}>{layer.heading}</h3>

      <p data-mreveal data-mreveal-delay={baseDelay + 160} style={{
        fontFamily: FONTS.serif,
        fontWeight: 300,
        fontSize: 22,
        lineHeight: 1.5,
        letterSpacing: '-0.005em',
        color: `${p.bg}bb`,
        margin: '0 0 2px',
      }}>{layer.subheading}</p>

      {(layer.bullets || []).map((b, j) => (
        <div key={j} data-mreveal data-mreveal-delay={baseDelay + 240 + j * 50} style={{
          fontFamily: FONTS.serif,
          fontSize: 18,
          letterSpacing: '0.005em',
          color: `${p.bg}bb`,
          lineHeight: 1.6,
          marginBottom: 8,
        }}>{b}</div>
      ))}

      <div
        className="tfs-feat-img"
        data-mreveal
        data-mreveal-delay={baseDelay + 320}
        style={{ marginTop: 32 }}
      >
        <FeatureImage layer={layer} variant="mobile" />
      </div>
    </div>
  );
}

function DesktopFeatures({ data }) {
  const layers = data.layers || [];
  return (
    <section style={{
      background: p.fg,
      padding: '0 32px 80px',
      boxSizing: 'border-box',
    }}>
      <style>{imageRevealCSS}</style>

      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 14,
        letterSpacing: '0.08em',
        color: `${p.bg}55`,
        paddingTop: 48,
        paddingBottom: 0,
      }} data-reveal>{data.eyebrow}</div>

      {layers.map((layer, i) => (
        <DesktopLayer key={layer.label} layer={layer} i={i} />
      ))}
    </section>
  );
}

function MobileFeatures({ data }) {
  const layers = data.layers || [];
  return (
    <section style={{
      background: p.fg,
      padding: '0 20px 60px',
      boxSizing: 'border-box',
    }}>
      <style>{imageRevealCSS}</style>

      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 13,
        letterSpacing: '0.08em',
        color: `${p.bg}55`,
        paddingTop: 32,
        paddingBottom: 0,
      }} data-mreveal>{data.eyebrow}</div>

      {layers.map((layer, i) => (
        <MobileLayer key={layer.label} layer={layer} i={i} />
      ))}
    </section>
  );
}

export default function Features({ variant = 'desktop', featuresSection = HOME.featuresSection }) {
  const Inner = variant === 'mobile' ? MobileFeatures : DesktopFeatures;
  return <Inner data={featuresSection} />;
}
