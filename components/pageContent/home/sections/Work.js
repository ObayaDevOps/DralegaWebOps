import { FONTS, PALETTE } from '../../../../data/tokens';
import { PROJECTS } from '../../../../data/projects';
import { HOME } from '../../../../data/home';
import ProjectTile from './ProjectTile';

const p = PALETTE;

function DesktopWork({ workSection, projects }) {
  return (
    <section id="work" style={{ padding: '120px 32px 80px' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
        marginBottom: 56,
      }}>
        <div style={{
          gridColumn: 'span 2',
          fontFamily: FONTS.mono,
          fontSize: 11, letterSpacing: '0.08em',
          color: p.fgDim, paddingTop: 14,
        }} data-reveal>{workSection.eyebrow}</div>
        <h2 style={{
          gridColumn: '4 / span 8',
          fontFamily: FONTS.serif, fontWeight: 300,
          fontSize: 'clamp(36px, 5vw, 72px)',
          lineHeight: 1, letterSpacing: '-0.02em',
          margin: 0, color: p.fg,
        }} data-reveal data-reveal-delay="80">
          {workSection.heading}<br />
          <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{workSection.headingEmphasis}</em>
          <span style={{ color: p.fgDim }}>&nbsp;&nbsp;{workSection.headingTail}</span>
        </h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        columnGap: 24, rowGap: 180,
      }}>
        {projects.map((proj, i) => (
          <ProjectTile key={proj._id || proj.n} proj={proj} idx={i} variant="desktop" />
        ))}
      </div>
    </section>
  );
}

function MobileWork({ workSection, projects }) {
  return (
    <section id="work" style={{ padding: '56px 20px 24px' }}>
      <div data-mreveal style={{
        fontFamily: FONTS.mono,
        fontSize: 10, letterSpacing: '0.08em', color: p.fgDim,
        marginBottom: 16,
      }}>{workSection.eyebrow}</div>
      <h2 data-mreveal data-mreveal-delay="60" style={{
        fontFamily: FONTS.serif, fontWeight: 300,
        fontSize: 40, lineHeight: 0.98, letterSpacing: '-0.02em',
        margin: '0 0 40px', color: p.fg,
      }}>
        {workSection.heading}<br />
        <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{workSection.headingEmphasis}</em><br />
        <span style={{ color: p.fgDim }}>{workSection.headingTail}</span>
      </h2>

      <div style={{ display: 'grid', gap: 56 }}>
        {projects.map((proj, i) => (
          <ProjectTile key={proj._id || proj.n} proj={proj} idx={i} variant="mobile" />
        ))}
      </div>

      <a href={workSection.indexLink?.href || '/work'} style={{
        marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '18px 0',
        borderTop: `1px solid ${p.rule}`,
        borderBottom: `1px solid ${p.rule}`,
        fontFamily: FONTS.mono,
        fontSize: 12, letterSpacing: '0.08em',
        color: p.fg, textDecoration: 'none',
      }}>
        <span>{workSection.indexLink?.label || 'VIEW THE FULL INDEX'}</span><span aria-hidden>→</span>
      </a>
    </section>
  );
}

export default function Work({
  variant = 'desktop',
  workSection = HOME.workSection,
  projects = PROJECTS,
}) {
  const Inner = variant === 'mobile' ? MobileWork : DesktopWork;
  return <Inner workSection={workSection} projects={projects} />;
}
