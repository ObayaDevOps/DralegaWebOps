import { FONTS, PALETTE } from '../../data/tokens';
import TFSNav from './TFSNav';
import TFSFooter from './TFSFooter';

const p = PALETTE;

const SHELL_STYLE = {
  position: 'relative',
  background: p.bg,
  color: p.fg,
  minHeight: '100vh',
  fontFamily: FONTS.sans,
  backgroundImage: `radial-gradient(${p.grid} 1px, transparent 1px)`,
  backgroundSize: '8px 8px',
  WebkitFontSmoothing: 'antialiased',
};

export default function TFSShell({ children }) {
  return (
    <div style={SHELL_STYLE}>
      <TFSNav />
      <main>{children}</main>
      <TFSFooter />
    </div>
  );
}
