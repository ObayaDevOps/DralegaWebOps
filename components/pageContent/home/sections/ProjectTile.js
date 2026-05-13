import { useState, useEffect, useRef } from 'react';
import { FONTS, PALETTE, MOTION } from '../../../../data/tokens';

const p = PALETTE;
const STRIPES = `repeating-linear-gradient(135deg, rgba(26,26,26,0.045) 0 12px, rgba(26,26,26,0.015) 12px 24px)`;

function ProjectVisual({ proj, variant, ratioOverride }) {
  const [hovered, setHovered] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef(null);

  const rawImages = proj.tileImages && proj.tileImages.length
    ? proj.tileImages
    : (proj.images || []);
  const images = rawImages.map((img) => (typeof img === 'string' ? {url: img} : img))
    .filter((img) => img && img.url);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (hovered && hasMultiple) {
      timerRef.current = setInterval(() => {
        setActiveIdx(i => (i + 1) % images.length);
      }, 1600);
    } else {
      clearInterval(timerRef.current);
      if (!hovered) setActiveIdx(0);
    }
    return () => clearInterval(timerRef.current);
  }, [hovered, hasMultiple, images.length]);

  const ratio =
    ratioOverride
      ? ratioOverride
      : (proj.span === 'wide' ? '16 / 9' : proj.span === 'half' ? '4 / 3' : '3 / 4');
  const pad   = variant === 'mobile' ? '10px 12px' : '14px 16px';
  const fSize = variant === 'mobile' ? 10 : 11;

  return (
    <div
      className="tfs-visual"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: ratio,
        width: '100%',
        background: images.length === 0 ? STRIPES : p.bg,
        border: `1px solid ${p.rule}`,
        overflow: 'hidden',
        transition: variant === 'desktop'
          ? `transform 600ms ${MOTION.ease}, filter 600ms ${MOTION.ease}`
          : undefined,
      }}
    >
      {images.map((img, i) => (
        <img
          key={img.url}
          src={img.url}
          alt={img.alt || ''}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === activeIdx ? 1 : 0,
            transition: 'opacity 900ms ease',
            pointerEvents: 'none',
            ...(img.lqip ? {backgroundImage: `url(${img.lqip})`, backgroundSize: 'cover'} : null),
          }}
        />
      ))}

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        padding: pad,
        fontFamily: FONTS.mono,
        fontSize: fSize, color: images.length > 0 ? p.bg : p.fgDim, letterSpacing: '0.04em',
        zIndex: 1,
        textShadow: images.length > 0 ? '0 1px 3px rgba(0,0,0,0.6)' : 'none',
      }}>
        <span>/{proj.n}</span>
        <span>{proj.placeholder}</span>
      </div>
      <div style={{
        position: 'absolute',
        top: variant === 'mobile' ? 10 : 14,
        right: variant === 'mobile' ? 12 : 16,
        fontFamily: FONTS.mono,
        fontSize: fSize, color: images.length > 0 ? p.bg : p.fgDim, letterSpacing: '0.04em',
        zIndex: 1,
        textShadow: images.length > 0 ? '0 1px 3px rgba(0,0,0,0.6)' : 'none',
      }}>
        {proj.year}
      </div>
    </div>
  );
}

export default function ProjectTile({ proj, idx, variant = 'desktop' }) {
  if (variant === 'mobile') {
    return (
      <a href="#" data-mreveal data-mreveal-delay={idx * 50}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <ProjectVisual proj={proj} variant="mobile" ratioOverride={idx % 3 === 0 ? '4 / 5' : '4 / 3'} />
        <div style={{ marginTop: 14 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontFamily: FONTS.mono,
            fontSize: 10, letterSpacing: '0.08em',
            color: p.fgDim, marginBottom: 6,
          }}>
            <span>/{proj.n}</span>
            <span>{proj.tags.slice(0, 2).map((t) => `/${t}`).join(' ')}</span>
          </div>
          <h3 style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.012em',
            margin: 0, color: p.fg,
          }}>{proj.title}</h3>
          <p style={{
            fontFamily: FONTS.sans,
            fontSize: 13, lineHeight: 1.55,
            color: p.fgDim, margin: '8px 0 0',
          }}>{proj.blurb}</p>
        </div>
      </a>
    );
  }
  return (
    <a href="#" className="tfs-tile" data-reveal data-reveal-delay={idx * 60} style={{
      display: 'block', textDecoration: 'none', color: 'inherit',
      gridColumn: proj.span === 'wide' ? 'span 12'
        : proj.span === 'half' ? 'span 6'
          : 'span 4',
    }}>
      <ProjectVisual proj={proj} variant="desktop" />
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 24, marginTop: 18,
      }}>
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.08em',
            color: p.fgDim, marginBottom: 6,
          }}>/{proj.n}</div>
          <h3 className="tfs-tile-title" style={{
            fontFamily: FONTS.serif, fontWeight: 400,
            fontSize: 'clamp(22px, 2.4vw, 32px)',
            lineHeight: 1.05, margin: 0, letterSpacing: '-0.01em',
            display: 'inline-block',
            backgroundImage: `linear-gradient(${p.accent2}, ${p.accent2})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '0 100%',
            backgroundSize: '0% 2px',
            transition: `background-size 600ms ${MOTION.ease}`,
            paddingBottom: 2,
          }}>{proj.title}</h3>
          <p style={{
            fontFamily: FONTS.sans,
            fontSize: 14, lineHeight: 1.55,
            color: p.fgDim, margin: '8px 0 0',
            maxWidth: '52ch',
          }}>{proj.blurb}</p>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4,
          fontFamily: FONTS.mono,
          fontSize: 10, letterSpacing: '0.08em',
          color: p.fgDim, textAlign: 'right',
          flex: '0 0 auto',
        }}>
          {proj.tags.map((t) => <span key={t}>/{t}</span>)}
        </div>
      </div>
    </a>
  );
}
