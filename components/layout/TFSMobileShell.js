import Link from 'next/link';
import { useState } from 'react';
import PixelMark from '../pageContent/home/PixelMark';
import { FONTS, PALETTE, MOTION, GLASS } from '../../data/tokens';
import { NAV_LINKS } from '../../data/navigation';
import { CONTACT } from '../../data/contact';
import { useReveal } from '../../lib/hooks/useReveal';

const p = PALETTE;

const SHELL_STYLE = {
  position: 'relative',
  background: p.bg, color: p.fg,
  minHeight: '100vh',
  fontFamily: FONTS.sans,
  backgroundImage: `radial-gradient(${p.grid} 1px, transparent 1px)`,
  backgroundSize: '8px 8px',
  overflowX: 'hidden',
  WebkitFontSmoothing: 'antialiased',
};

export default function TFSMobileShell({ children, siteSettings, navLinks }) {
  const [open, setOpen] = useState(false);
  useReveal({ variant: 'mobile' });
  const s = siteSettings || {};
  const links = navLinks && navLinks.length ? navLinks : NAV_LINKS;
  const studioLabel = s.studioLabel || CONTACT.studioLabel;
  const emailHref = s.email ? `mailto:${s.email}` : CONTACT.emailHref;
  const whatsappHref = s.whatsappLink || CONTACT.whatsappHref;
  const instagramHref = s.instagramLink || CONTACT.instagramHref;
  const linkedinHref = s.linkedinLink || CONTACT.linkedinHref;
  const altEmail = s.altEmail || CONTACT.altEmail;
  const email = s.email || CONTACT.email;
  const location = s.location || CONTACT.location;
  const coords = s.coords || CONTACT.coords;

  return (
    <div style={SHELL_STYLE}>
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
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'grid', gridTemplateColumns: '40px 1fr', alignItems: 'baseline', gap: 8,
              padding: '14px 0', borderBottom: `1px solid ${p.rule}`, textDecoration: 'none', color: p.fg,
            }}>
              <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: p.fgDim, letterSpacing: '0.08em' }}>{`/0${i + 1}`}</span>
              <span style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 36, letterSpacing: '-0.01em' }}>{l.name}</span>
            </a>
          ))}
        </nav>
        <div style={{ marginTop: 28, fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, lineHeight: 1.6 }}>
          <div style={{ color: p.fg, marginBottom: 8 }}>/CONTACT</div>
          <div>{altEmail}</div>
          <div style={{ marginTop: 14 }}>{coords}</div>
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <PixelMark color={p.accent} sessionKey="tfs-mnav" />
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
          {studioLabel}
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24,
          fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.06em', color: p.fgDim,
          paddingTop: 24, borderTop: `1px solid ${p.rule}`,
        }}>
          <div>
            <div style={{ color: p.fg, marginBottom: 10 }}>/SITE</div>
            <div style={{ display: 'grid', gap: 8 }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'inherit', textDecoration: 'none' }}>{l.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: p.fg, marginBottom: 10 }}>/CONNECT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href={emailHref} style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
              <a href={whatsappHref} style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp</a>
              <a href={instagramHref} style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
              <a href={linkedinHref} style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ color: p.fg, marginBottom: 10 }}>/CONTACT</div>
            <div style={{ display: 'grid', gap: 6 }}>
              <span>{email}</span>
              <span>+256 789 062 116</span>
              <span>{location}</span>
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
