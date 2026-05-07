import { useReveal } from '../../lib/hooks/useReveal';
import TFSShell from './TFSShell';
import TFSMobileShell from './TFSMobileShell';

export default function PageLayout({ desktop, mobile }) {
  useReveal();
  return (
    <>
      {desktop != null && (
        <div className="tfs-desktop-only">
          <TFSShell>{desktop}</TFSShell>
        </div>
      )}
      {mobile != null && (
        <div className="tfs-mobile-only">
          <TFSMobileShell>{mobile}</TFSMobileShell>
        </div>
      )}
    </>
  );
}
