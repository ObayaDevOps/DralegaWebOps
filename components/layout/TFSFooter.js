import Link from 'next/link';
import PixelMark from '../pageContent/home/PixelMark';
import { FONTS, PALETTE } from '../../data/tokens';
import { NAV_LINKS } from '../../data/navigation';
import { CONTACT } from '../../data/contact';
import { grid12 } from '../../lib/styles/layout';

const p = PALETTE;

export default function TFSFooter() {
  return (
    <footer style={{ padding: '80px 32px 40px', borderTop: `1px solid ${p.rule}` }}>
      <div style={grid12()}>
        <div style={{ gridColumn: 'span 6' }}>
          <PixelMark color={p.markColor} sessionKey="tfs-foot" size={3} />
          <div style={{
            marginTop: 14,
            fontFamily: FONTS.sans,
            fontSize: 14, color: p.fgDim,
          }}>{CONTACT.studioLabel}</div>
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
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} passHref>
                  <a style={{ color: 'inherit', textDecoration: 'none' }}>{l.name}</a>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: p.fg, marginBottom: 14 }}>/CONNECT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <a href={CONTACT.emailHref} style={{ color: 'inherit', textDecoration: 'none' }}>Email</a>
              <a href={CONTACT.whatsappHref} style={{ color: 'inherit', textDecoration: 'none' }}>WhatsApp</a>
              <a href={CONTACT.instagramHref} style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
              <a href={CONTACT.linkedinHref} style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </div>
          <div>
            <div style={{ color: p.fg, marginBottom: 14 }}>/CONTACT</div>
            <div style={{ display: 'grid', gap: 8 }}>
              <span>{CONTACT.altEmail}</span>
              <span>+256 789 062 116 (WhatsApp Only)</span>
              <span>{CONTACT.location}</span>
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
        <span>{CONTACT.copyright}</span>
        <span>Indexed for Earth</span>
      </div>
    </footer>
  );
}
