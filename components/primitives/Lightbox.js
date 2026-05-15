import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FONTS, MOTION } from '../../data/tokens';

const EASE = MOTION.ease;
const DUR_OVERLAY = MOTION.drawerOverlay;   // 240ms
const DUR_PANEL   = MOTION.drawerPanel;     // 360ms
const SWIPE_THRESHOLD = 50;

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const [mounted,  setMounted]  = useState(false);
  const [show,     setShow]     = useState(false);
  const [opaque,   setOpaque]   = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => setMounted(true), []);

  const isOpen = mounted && index !== null && index >= 0;

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      const raf = requestAnimationFrame(() => setOpaque(true));
      return () => cancelAnimationFrame(raf);
    } else {
      setOpaque(false);
      const t = setTimeout(() => setShow(false), 240);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   onPrev();
      if (e.key === 'ArrowRight')  onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!mounted || !show) return null;

  const item    = items[index] || {};
  const imgSrc  = item.url ? `${item.url}?w=2400&fit=max&auto=format` : '';
  const lqip    = item.lqip || null;
  const caption = item.caption || item.alt || null;
  const hasPrev = index > 0;
  const hasNext = index < items.length - 1;

  const stopProp = (e) => e.stopPropagation();

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (dx > SWIPE_THRESHOLD && hasPrev) onPrev();
    if (dx < -SWIPE_THRESHOLD && hasNext) onNext();
  };

  const btnBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: isMobile ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.12)',
    border: isMobile ? '1.5px solid rgba(255,255,255,0.9)' : '1px solid rgba(255,255,255,0.6)',
    padding: isMobile ? '10px 14px' : '16px 22px',
    fontFamily: FONTS.mono,
    fontSize: isMobile ? 20 : 18,
    letterSpacing: '0.08em',
    color: '#FFFFFF',
    cursor: 'pointer',
    zIndex: 102,
    lineHeight: 1,
  };

  return createPortal(
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#1A1A1A',
          opacity: opaque ? 0.92 : 0,
          transition: `opacity ${DUR_OVERLAY} ${EASE}`,
          zIndex: 100,
        }}
      />

      {/* panel */}
      <div
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: opaque ? 1 : 0,
          transform: opaque ? 'scale(1)' : 'scale(0.97)',
          transition: `opacity ${DUR_OVERLAY} ${EASE}, transform ${DUR_PANEL} ${EASE}`,
          zIndex: 101,
          pointerEvents: opaque ? 'auto' : 'none',
        }}
      >
        {/* close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            background: 'none',
            border: 'none',
            padding: 0,
            fontFamily: FONTS.mono,
            fontSize: 14,
            letterSpacing: '0.08em',
            color: '#FFFFFF',
            cursor: 'pointer',
            zIndex: 102,
            opacity: 1,
          }}
        >CLOSE ✕</button>

        {/* counter */}
        <div style={{
          position: 'absolute',
          top: 28,
          left: 32,
          fontFamily: FONTS.mono,
          fontSize: 14,
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.9)',
          zIndex: 102,
        }}>
          {index + 1} / {items.length}
        </div>

        {/* prev */}
        {hasPrev && (
          <button onClick={(e) => { stopProp(e); onPrev(); }} style={{ ...btnBase, left: isMobile ? 12 : 24 }}>←</button>
        )}

        {/* image + caption */}
        <div onClick={stopProp} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          maxWidth: '90vw',
          maxHeight: '85vh',
        }}>
          <img
            src={imgSrc}
            alt={item.alt || ''}
            style={{
              display: 'block',
              maxWidth: '90vw',
              maxHeight: '80vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              backgroundImage: lqip ? `url(${lqip})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {caption && (
            <div style={{
              fontFamily: FONTS.mono,
              fontSize: isMobile ? 16 : 18,
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.5)',
              textAlign: 'center',
            }}>{caption}</div>
          )}
        </div>

        {/* next */}
        {hasNext && (
          <button onClick={(e) => { stopProp(e); onNext(); }} style={{ ...btnBase, right: isMobile ? 12 : 24 }}>→</button>
        )}
      </div>
    </>,
    document.body
  );
}
