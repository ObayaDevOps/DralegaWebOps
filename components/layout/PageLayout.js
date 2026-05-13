import { useReveal } from '../../lib/hooks/useReveal';
import TFSShell from './TFSShell';
import TFSMobileShell from './TFSMobileShell';

export default function PageLayout({ desktop, mobile, siteSettings, navLinks }) {
  useReveal();
  return (
    <>
      {desktop != null && (
        <div className="tfs-desktop-only">
          <TFSShell siteSettings={siteSettings} navLinks={navLinks}>{desktop}</TFSShell>
        </div>
      )}
      {mobile != null && (
        <div className="tfs-mobile-only">
          <TFSMobileShell siteSettings={siteSettings} navLinks={navLinks}>{mobile}</TFSMobileShell>
        </div>
      )}
    </>
  );
}
