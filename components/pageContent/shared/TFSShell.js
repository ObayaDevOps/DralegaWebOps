import Link from 'next/link';
import { useEffect, useState } from 'react';
import PixelMark from '../home/PixelMark';
import { FONTS, PALETTE, MOTION, REVEAL, GLASS } from '../home/data';

const p = PALETTE;

export function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach((it) => it.setAttribute('data-revealed', '1'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = parseInt(e.target.getAttribute('data-reveal-delay') || '0', 10);
            setTimeout(() => e.target.setAttribute('data-revealed', '1'), delay);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: REVEAL.threshold.desktop, rootMargin: REVEAL.rootMargin.desktop }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);
}

const NAV_LINKS = [
  { label: '/WORK', href: '/work' },
  { label: '/ABOUT', href: '/about' },
  { label: '/PRICING', href: '/pricing' },
  { label: '/JOURNAL', href: '/journal' },
  { label: '/CONTACT', href: '/contact' },
];

export function TFSNav() {
  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 32px',
      borderBottom: `1px solid ${p.rule}`,
      position: 'sticky', top: 0, zIndex: 100,
      background: `${p.bg}f0`,
      backdropFilter: GLASS.blur.desktop,
      WebkitBackdropFilter: GLASS.blur.desktop,
    }}>
      <Link href="/" passHref>
        <a style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <PixelMark color={p.markColor} sessionKey="tfs-nav" />
          <span style={{
            fontFamily: FONTS.mono,
            fontSize: 11, color: p.fgDim, letterSpacing: '0.08em',
            paddingLeft: 14, marginLeft: 6,
            borderLeft: `1px solid ${p.rule}`,
          }}>STUDIO · KAMPALA, UG</span>
        </a>
      </Link>
      <nav style={{ display: 'flex', gap: 28 }}>
        {NAV_LINKS.map((l) => (
          <Link key={l.href} href={l.href} passHref>
            <a style={{
              fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em',
              color: p.fg, textDecoration: 'none',
            }}>{l.label}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function TFSFooter() {
  return (
    <footer style={{ padding: '80px 32px 40px', borderTop: `1px solid ${p.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{ gridColumn: 'span 6' }}>
          <PixelMark color={p.markColor} sessionKey="tfs-foot" size={3} />
          <div style={{
            marginTop: 14,
            fontFamily: FONTS.sans,
            fontSize: 14, color: p.fgDim,
          }}>twofivesix studio · Kampala, Uganda</div>
        </div>
        <div style={{
          gridColumn: 'span 6',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
          fontFamily: FONTS.mono,
          fontSize: 12, letterSpacing: '0.06em', color: p.fgDim,
        }}>
          <div>
            <div style={{ color: p.fg, marginBottom: 14 }}>/SITEMAP</div>
            <div style={{ display: 'grid', gap: 8 }}>
              {[['Work', '/work'], ['About', '/about'], ['Pricing', '/pricing'], ['Journal', '/journal'], ['Contact', '/contact']].map(([label, href]) => (
                <Link key={href} href={href} passHref>
                  <a style={{ color: 'inherit', textDecoration: 'none' }}>{label}</a>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: p.fg, marginBottom: 14 }}>/CONNECT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href="mailto:hello@twofivesix.online" style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
              <a href="https://wa.me/256789062116" style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp</a>
              <a href="https://instagram.com/twofivesix" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
              <a href="https://linkedin.com/in/obaya-dralega" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>
          <div>
            <div style={{ color: p.fg, marginBottom: 14 }}>/CONTACT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <span>obaya@twofivesix.online</span>
              <span>+256 789 062 116 (WhatsApp Only)</span>
              <span>Kampala, Uganda</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 56, paddingTop: 20, borderTop: `1px solid ${p.rule}`,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: FONTS.mono,
        fontSize: 11, letterSpacing: '0.06em', color: p.fgDim,
      }}>
        <span>© 2026 twofivesix.online · Kampala · Built in-house</span>
        <span>Indexed for Earth</span>
      </div>
    </footer>
  );
}

export default function TFSShell({ children }) {
  return (
    <div style={{
      position: 'relative',
      background: p.bg,
      color: p.fg,
      minHeight: '100vh',
      fontFamily: FONTS.sans,
      backgroundImage: `radial-gradient(${p.grid} 1px, transparent 1px)`,
      backgroundSize: '8px 8px',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <TFSNav />
      <main>{children}</main>
      <TFSFooter />
    </div>
  );
}

function useMReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-mreveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach((it) => it.setAttribute('data-revealed', '1'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const d = parseInt(e.target.getAttribute('data-mreveal-delay') || '0', 10);
            setTimeout(() => e.target.setAttribute('data-revealed', '1'), d);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: REVEAL.threshold.mobile, rootMargin: REVEAL.rootMargin.mobile }
    );
    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);
}

export function TFSMobileShell({ children }) {
  const [open, setOpen] = useState(false);
  useMReveal();
  return (
    <div style={{
      position: 'relative',
      background: p.bg, color: p.fg,
      minHeight: '100vh',
      fontFamily: FONTS.sans,
      backgroundImage: `radial-gradient(${p.grid} 1px, transparent 1px)`,
      backgroundSize: '8px 8px',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased',
    }}>
      <div onClick={() => setOpen(false)} style={{
        position: 'fixed', inset: 0, background: '#1A1A1A',
        opacity: open ? 0.4 : 0,
        transition: `opacity ${MOTION.drawerOverlay} ${MOTION.ease}`,
        pointerEvents: open ? 'auto' : 'none', zIndex: 9,
      }} />
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: 'min(86%, 320px)', background: p.bg,
        borderLeft: `1px solid ${p.rule}`,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: `transform ${MOTION.drawerPanel} ${MOTION.ease}`,
        zIndex: 10, padding: '24px 24px 32px',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }}>/MENU</span>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', padding: 0, fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em', color: p.fg, cursor: 'pointer' }}>CLOSE ✕</button>
        </div>
        <nav style={{ display: 'grid', gap: 4, flex: 1 }}>
          {[
            ['/01', 'Work',    '/work'],
            ['/02', 'About',   '/about'],
            ['/03', 'Pricing', '/pricing'],
            ['/04', 'Journal', '/journal'],
            ['/05', 'Contact', '/contact'],
          ].map(([n, l, href]) => (
            <a key={l} href={href} onClick={() => setOpen(false)} style={{
              display: 'grid', gridTemplateColumns: '40px 1fr', alignItems: 'baseline', gap: 8,
              padding: '14px 0', borderBottom: `1px solid ${p.rule}`, textDecoration: 'none', color: p.fg,
            }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: p.fgDim, letterSpacing: '0.08em' }}>{n}</span>
              <span style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 36, letterSpacing: '-0.01em' }}>{l}</span>
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 28, fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, lineHeight: 1.6 }}>
          <div style={{ color: p.fg, marginBottom: 8 }}>/CONTACT</div>
          <div>obaya@twofivesix.online</div>
          <div style={{ marginTop: 14 }}>00°18′49″N · 32°34′52″E</div>
        </div>
      </aside>
      <header style={{
        position: 'sticky', top: 0, zIndex: 5,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 20px',
        background: `${p.bg}ee`,
        backdropFilter: GLASS.blur.mobile,
        WebkitBackdropFilter: GLASS.blur.mobile,
        borderBottom: `1px solid ${p.rule}`,
      }}>
        <Link href="/" passHref>
          <a style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <PixelMark color={p.accent} sessionKey="tfs-mnav" />
            {/* <span style={{ fontFamily: FONTS.sans, fontSize: 12, color: p.fgDim }}>twofivesix</span> */}
          </a>
        </Link>
        <button onClick={() => setOpen(true)} aria-label="Menu" style={{
          background: 'none', border: `1px solid ${p.rule}`,
          padding: '8px 12px', borderRadius: 2,
          fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em',
          color: p.fg, cursor: 'pointer',
        }}>MENU</button>
      </header>
      <main>{children}</main>
      <footer style={{ padding: '48px 20px 28px', borderTop: `1px solid ${p.rule}` }}>
        <div style={{ fontSize: 80, lineHeight: 1, marginBottom: 14 }}>
          <PixelMark color={p.accent} sessionKey="tfs-mfoot" />
        </div>
        <div style={{ fontFamily: FONTS.sans, fontSize: 13, color: p.fgDim, marginBottom: 32 }}>
          twofivesix studio · Kampala, Uganda
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.06em', color: p.fgDim,
          paddingTop: 24, borderTop: `1px solid ${p.rule}`,
        }}>
          <div>
            <div style={{ color: p.fg, marginBottom: 10 }}>/SITE</div>
            <div style={{ display: 'grid', gap: 8 }}>
              {[['Work', '/work'], ['About', '/about'], ['Pricing', '/pricing'], ['Journal', '/journal'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={h} href={h} passHref><a style={{ color: 'inherit', textDecoration: 'none' }}>{l}</a></Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: p.fg, marginBottom: 10 }}>/CONNECT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href="mailto:hello@twofivesix.online" style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
              <a href="https://wa.me/256789062116" style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp</a>
              <a href="https://instagram.com/twofivesix" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
              <a href="https://linkedin.com/in/obaya-dralega" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ color: p.fg, marginBottom: 10 }}>/CONTACT</div>
            <div style={{ display: 'grid', gap: 6 }}>
              <span>hello@twofivesix.online</span>
              <span>+256 789 062 116</span>
              <span>Kampala, Uganda</span>
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 32, paddingTop: 16, borderTop: `1px solid ${p.rule}`,
          fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.06em', color: p.fgDim,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>© 2026</span>
          <span>Built in Kampala</span>
        </div>
      </footer>
    </div>
  );
}
