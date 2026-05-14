import Link from 'next/link';
import PixelMark from '../pageContent/home/PixelMark';
import { FONTS, PALETTE } from '../../data/tokens';
import { NAV_LINKS } from '../../data/navigation';
import { CONTACT } from '../../data/contact';
import { grid12 } from '../../lib/styles/layout';

const p = PALETTE;

export default function TFSFooter({ siteSettings, navLinks }) {
  const s = siteSettings || {};
  const links = navLinks && navLinks.length ? navLinks : NAV_LINKS;
  const studioLabel = s.studioLabel || CONTACT.studioLabel;
  const emailHref = s.email ? `mailto:${s.email}` : CONTACT.emailHref;
  const whatsappHref = s.whatsappLink || CONTACT.whatsappHref;
  const instagramHref = s.instagramLink || CONTACT.instagramHref;
  const linkedinHref = s.linkedinLink || CONTACT.linkedinHref;
  const altEmail = s.altEmail || CONTACT.altEmail;
  const location = s.location || CONTACT.location;
  const copyright = s.copyright || CONTACT.copyright;

  return (
    <footer style={{ padding: '200px 32px 80px', background: '#1a1a1a', backgroundImage: 'none', borderTop: '1px solid #000' }}>
      <style>{`
        @media (max-width: 960px) {
          .tfs-footer-grid { grid-template-columns: 1fr !important; }
          .tfs-footer-mark { grid-column: span 1 !important; order: 2; }
          .tfs-footer-links { grid-column: span 1 !important; order: 1; }
        }
      `}</style>
      <div style={grid12()} className="tfs-footer-grid">
        <div style={{ gridColumn: 'span 6' }} className="tfs-footer-mark">
          <PixelMark color={p.accent2} sessionKey="tfs-foot" size={10} />
          <div style={{
            marginTop: 14,
            fontFamily: FONTS.sans,
            fontSize: 14, color: p.accent2,
          }}>{studioLabel}</div>
        </div>
        <div className="tfs-footer-links" style={{
          gridColumn: 'span 6',
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
          fontFamily: FONTS.mono,
          fontSize: 12, letterSpacing: '0.06em', color: p.accent2,
        }}>
          <div>
            <div style={{ color: p.accent2, marginBottom: 14 }}>/SITEMAP</div>
            <div style={{ display: 'grid', gap: 8 }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'inherit', textDecoration: 'none' }}>{l.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: p.accent2, marginBottom: 14 }}>/CONNECT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href={emailHref} style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
              <a href={whatsappHref} style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp</a>
              <a href={instagramHref} style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
              <a href={linkedinHref} style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>
          <div>
            <div style={{ color: p.accent2, marginBottom: 14 }}>/CONTACT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <span>{altEmail}</span>
              <span>+256 789 062 116 (WhatsApp Only)</span>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 56, paddingTop: 20, borderTop: `1px solid ${p.accent2}`,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: FONTS.mono,
        fontSize: 11, letterSpacing: '0.06em', color: p.accent2,
      }}>
        <span>{copyright}</span>
        <span>Indexed for Earth</span>
      </div>
    </footer>
  );
}
