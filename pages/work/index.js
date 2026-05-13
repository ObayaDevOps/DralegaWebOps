import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';
import { PALETTE, FONTS } from '../../data/tokens';
import { PROJECTS } from '../../data/projects';
import SectionLabel from '../../components/primitives/SectionLabel';
import SanityImage from '../../components/primitives/SanityImage';
import { client } from '../../lib/sanityClient';
import { workPageQuery, projectsQuery } from '../../lib/queries/work';
import { mergeObj } from '../../lib/cms/merge';
import { mergeLayoutProps } from '../../lib/cms/withLayoutProps';

const p = PALETTE;

const WORK_PAGE_DEFAULTS = {
  eyebrow: '/WORK — INDEX',
  heading: 'Eight projects.',
  headingEmphasis: 'One studio.',
  subheading:
    'E-commerce, hospitality, healthcare, finance, arts. All built from the ground up. ' +
    'No templates. No clones.',
};

export async function getStaticProps() {
  let cmsPage = null;
  let cmsProjects = null;
  try {
    [cmsPage, cmsProjects] = await Promise.all([
      client.fetch(workPageQuery),
      client.fetch(projectsQuery),
    ]);
  } catch (e) {
    cmsPage = null;
    cmsProjects = null;
  }
  const workPage = mergeObj(cmsPage, WORK_PAGE_DEFAULTS);
  const projects = cmsProjects && cmsProjects.length ? cmsProjects : PROJECTS;
  return mergeLayoutProps({props: {workPage, projects}, revalidate: 60});
}

function projectHref(proj) {
  return `/work/${proj.slug || proj.n}`;
}

function tileImage(proj) {
  if (proj.tileImages && proj.tileImages.length) return proj.tileImages[0];
  if (proj.heroUrl) return {url: proj.heroUrl};
  if (proj.images && proj.images.length) return {url: proj.images[0]};
  return null;
}

function WorkCard({ proj, idx }) {
  const ratio = proj.span === 'wide' ? '16 / 9' : proj.span === 'half' ? '4 / 3' : '3 / 4';
  const number = proj.number || proj.n;

  return (
    <Link
      href={projectHref(proj)}
      className="tfs-tile"
      data-reveal
      data-reveal-delay={idx * 60}
      style={{
        display: 'block', textDecoration: 'none', color: 'inherit',
        gridColumn: proj.span === 'wide' ? 'span 12' : proj.span === 'half' ? 'span 6' : 'span 4',
      }}
    >
      <div style={{
        position: 'relative',
        transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1), filter 600ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <SanityImage
          source={tileImage(proj)}
          ratio={ratio}
          placeholderLabel={proj.placeholder}
          alt={proj.title}
        />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          padding: '14px 16px', pointerEvents: 'none',
          fontFamily: FONTS.mono,
          fontSize: 11, color: p.fgDim, letterSpacing: '0.04em',
        }}>
          <span>/{number}</span>
          <span>{proj.placeholder}</span>
        </div>
        <div style={{
          position: 'absolute', top: 14, right: 16, pointerEvents: 'none',
          fontFamily: FONTS.mono,
          fontSize: 11, color: p.fgDim, letterSpacing: '0.04em',
        }}>{proj.year}</div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        gap: 24, marginTop: 18,
      }}>
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
          <div style={{
            fontFamily: FONTS.mono,
            fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 6,
          }}>/{number} · {proj.year}</div>
          <h2
            className="tfs-tile-title"
            style={{
              fontFamily: FONTS.serif, fontWeight: 300,
              fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.05,
              margin: 0, letterSpacing: '-0.01em', display: 'inline-block',
              backgroundImage: `linear-gradient(${p.accent2}, ${p.accent2})`,
              backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%',
              backgroundSize: '0% 2px',
              transition: 'background-size 600ms cubic-bezier(0.16, 1, 0.3, 1)',
              paddingBottom: 2,
            }}
          >{proj.title}</h2>
          <p style={{
            fontFamily: FONTS.sans,
            fontSize: 14, lineHeight: 1.55, color: p.fgDim, margin: '8px 0 0', maxWidth: '52ch',
          }}>{proj.blurb}</p>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4,
          fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em',
          color: p.fgDim, flex: '0 0 auto',
        }}>
          {(proj.tags || []).map((t) => <span key={t}>/{t}</span>)}
        </div>
      </div>
    </Link>
  );
}

export default function WorkIndex({ workPage, projects, siteSettings, navLinks }) {
  return (
    <>
      <Head>
        <title>Work — twofivesix studio</title>
        <meta name="description" content={workPage.subheading} />
      </Head>
      <PageLayout siteSettings={siteSettings} navLinks={navLinks} desktop={<>
          <section style={{ padding: '80px 32px 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 64 }}>
              <SectionLabel>{workPage.eyebrow}</SectionLabel>
              <div style={{ gridColumn: '4 / span 8' }} data-reveal data-reveal-delay="80">
                <h1 style={{
                  fontFamily: FONTS.serif, fontWeight: 300,
                  fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                  letterSpacing: '-0.025em', margin: 0, color: p.fg,
                }}>
                  {workPage.heading}<br />
                  <em style={{ color: p.accent2, fontStyle: 'italic', fontWeight: 300 }}>{workPage.headingEmphasis}</em>
                </h1>
                <p style={{
                  fontFamily: FONTS.sans,
                  fontSize: 'clamp(16px, 1.4vw, 19px)', lineHeight: 1.6,
                  color: p.fgDim, margin: '28px 0 0', maxWidth: '56ch',
                }}>{workPage.subheading}</p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              columnGap: 24, rowGap: 88,
            }}>
              {projects.map((proj, i) => (
                <WorkCard key={proj._id || proj.n} proj={proj} idx={i} />
              ))}
            </div>
          </section>
      </>} mobile={<>
          <section style={{ padding: '48px 20px 36px' }}>
            <SectionLabel variant="mobile">{workPage.eyebrow}</SectionLabel>
            <h1 data-mreveal data-mreveal-delay="60" style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(36px, 11vw, 52px)', lineHeight: 0.96,
              letterSpacing: '-0.025em', margin: 0, color: p.fg,
            }}>
              {workPage.heading}<br />
              <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{workPage.headingEmphasis}</em>
            </h1>
            <p data-mreveal data-mreveal-delay="120" style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.6, color: p.fgDim, margin: '20px 0 0' }}>
              {workPage.subheading}
            </p>
          </section>

          <section style={{ padding: '0 20px 64px' }}>
            {projects.map((proj, i) => {
              const number = proj.number || proj.n;
              return (
                <Link
                  key={proj._id || proj.n}
                  href={projectHref(proj)}
                  data-mreveal
                  data-mreveal-delay={i * 60}
                  style={{
                    display: 'block', textDecoration: 'none', color: 'inherit',
                    padding: '28px 0', borderBottom: `1px solid ${p.rule}`,
                  }}
                >
                  <div style={{ position: 'relative', marginBottom: 16 }}>
                    <SanityImage
                      source={tileImage(proj)}
                      ratio="4 / 3"
                      placeholderLabel={proj.placeholder}
                      alt={proj.title}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                      padding: '12px 14px', pointerEvents: 'none',
                      fontFamily: FONTS.mono, fontSize: 10, color: p.fgDim, letterSpacing: '0.04em',
                    }}>
                      <span>/{number}</span>
                      <span>{proj.placeholder}</span>
                    </div>
                    <div style={{
                      position: 'absolute', top: 12, right: 14, pointerEvents: 'none',
                      fontFamily: FONTS.mono, fontSize: 10, color: p.fgDim, letterSpacing: '0.04em',
                    }}>{proj.year}</div>
                  </div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 8 }}>
                    /{number} · {proj.year}
                  </div>
                  <h2 style={{
                    fontFamily: FONTS.serif, fontWeight: 300,
                    fontSize: 22, lineHeight: 1.1,
                    letterSpacing: '-0.012em', margin: '0 0 8px', color: p.fg,
                  }}>{proj.title}</h2>
                  <p style={{ fontFamily: FONTS.sans, fontSize: 13, lineHeight: 1.55, color: p.fgDim, margin: '0 0 12px' }}>{proj.blurb}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {(proj.tags || []).map((t) => (
                      <span key={t} style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim }}>/{t}</span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </section>
      </>} />
    </>
  );
}

WorkIndex.noLayout = true;
