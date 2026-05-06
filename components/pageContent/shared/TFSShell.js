import Link from 'next/link';
import { useEffect } from 'react';
import PixelMark from '../home/PixelMark';
import { PALETTE } from '../home/data';

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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
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

function TFSNav() {
  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '24px 32px',
      borderBottom: `1px solid ${p.rule}`,
      position: 'sticky', top: 0, zIndex: 100,
      background: `${p.bg}f0`,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <Link href="/" passHref>
        <a style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <PixelMark color={p.markColor} sessionKey="tfs-nav" />
          <span style={{
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: 13, color: p.fgDim, letterSpacing: '-0.005em',
          }}>twofivesix</span>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
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
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 12, letterSpacing: '0.08em',
              color: p.fg, textDecoration: 'none',
            }}>{l.label}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}

function TFSFooter() {
  return (
    <footer style={{ padding: '80px 32px 40px', borderTop: `1px solid ${p.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
        <div style={{ gridColumn: 'span 6' }}>
          <PixelMark color={p.markColor} sessionKey="tfs-foot" size={3} />
          <div style={{
            marginTop: 14,
            fontFamily: '"Inter", system-ui, sans-serif',
            fontSize: 14, color: p.fgDim,
          }}>twofivesix studio · Kampala, Uganda</div>
        </div>
        <div style={{
          gridColumn: 'span 6',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
          fontFamily: '"JetBrains Mono", monospace',
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
              <span>hello@twofivesix.online</span>
              <span>+256 789 062 116</span>
              <span>Kampala, Uganda</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 56, paddingTop: 20, borderTop: `1px solid ${p.rule}`,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: '"JetBrains Mono", monospace',
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
      fontFamily: '"Inter", system-ui, sans-serif',
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
