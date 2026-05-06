import { useRef, useEffect } from 'react';

export default function PixelMark({ color = '#1E3A2F', sessionKey = 'tfs-bootv1', size = 1 }) {
  const ref = useRef(null);

  useEffect(() => {
    let alreadyBooted = false;
    try { alreadyBooted = sessionStorage.getItem(sessionKey) === '1'; } catch {}
    if (alreadyBooted) return;

    const el = ref.current;
    if (!el) return;
    const chars = el.querySelectorAll('[data-ch]');

    chars.forEach((c) => {
      c.style.opacity = '0';
      c.style.transform = 'translateY(2px)';
    });

    chars.forEach((c, i) => {
      setTimeout(() => {
        c.style.transition = 'opacity 80ms linear, transform 220ms cubic-bezier(0.16, 1, 0.3, 1)';
        c.style.opacity = '1';
        c.style.transform = 'translateY(0)';
        c.animate(
          [
            { filter: 'brightness(2.4) blur(1.5px)' },
            { filter: 'brightness(1) blur(0)' },
          ],
          { duration: 360, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' }
        );
      }, 90 + i * 110);
    });

    const t = setTimeout(() => {
      try { sessionStorage.setItem(sessionKey, '1'); } catch {}
    }, 90 + chars.length * 110 + 360);

    return () => clearTimeout(t);
  }, [sessionKey]);

  return (
    <span
      ref={ref}
      aria-label="256"
      style={{
        fontFamily: '"Tiny5", monospace',
        fontWeight: 400,
        color,
        fontSize: `${size}em`,
        letterSpacing: '0.04em',
        display: 'inline-flex',
        lineHeight: 1,
      }}
    >
      <span data-ch>2</span>
      <span data-ch>5</span>
      <span data-ch>6</span>
    </span>
  );
}
