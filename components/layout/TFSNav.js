import Link from 'next/link';
import PixelMark from '../pageContent/home/PixelMark';
import { FONTS, PALETTE, GLASS } from '../../data/tokens';
import { NAV_LINKS } from '../../data/navigation';
import { CONTACT } from '../../data/contact';

const p = PALETTE;

export default function TFSNav() {
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
          }}>{CONTACT.navLocation}</span>
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
