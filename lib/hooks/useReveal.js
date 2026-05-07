import { useEffect } from 'react';
import { REVEAL } from '../../data/tokens';

const SELECTORS = {
  desktop: { item: '[data-reveal]',  delay: 'data-reveal-delay'  },
  mobile:  { item: '[data-mreveal]', delay: 'data-mreveal-delay' },
};

export function useReveal({ variant = 'desktop' } = {}) {
  useEffect(() => {
    const sel = SELECTORS[variant];
    const items = document.querySelectorAll(sel.item);
    if (!('IntersectionObserver' in window)) {
      items.forEach((it) => it.setAttribute('data-revealed', '1'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.getAttribute(sel.delay) || '0', 10);
            setTimeout(() => e.target.setAttribute('data-revealed', '1'), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: REVEAL.threshold[variant], rootMargin: REVEAL.rootMargin[variant] }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, [variant]);
}
