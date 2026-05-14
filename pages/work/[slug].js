import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';
import { PALETTE, FONTS } from '../../data/tokens';
import { PROJECTS } from '../../data/projects';
import { PROJECT_DEFAULTS, buildDetailsForTags } from '../../data/project-defaults';
import Button from '../../components/primitives/Button';
import RichText from '../../components/primitives/RichText';
import SanityImage from '../../components/primitives/SanityImage';
import { client } from '../../lib/sanityClient';
import { projectBySlugQuery, projectSlugsQuery } from '../../lib/queries/project';
import { mergeObj } from '../../lib/cms/merge';
import { mergeLayoutProps } from '../../lib/cms/withLayoutProps';

const p = PALETTE;

export async function getStaticPaths() {
  let cmsSlugs = [];
  try {
    cmsSlugs = (await client.fetch(projectSlugsQuery)) || [];
  } catch (e) {
    cmsSlugs = [];
  }
  const all = new Set([
    ...cmsSlugs.map((s) => s.slug).filter(Boolean),
    ...PROJECTS.map((proj) => proj.slug),
  ]);
  return {
    paths: [...all].map((slug) => ({params: {slug}})),
    fallback: 'blocking',
  };
}

export async function getStaticProps({params}) {
  let cms = null;
  try {
    cms = await client.fetch(projectBySlugQuery, {slug: params.slug});
  } catch (e) {
    cms = null;
  }
  const staticMatch = PROJECTS.find((proj) => proj.slug === params.slug);
  if (!cms && !staticMatch) return {notFound: true};

  const staticDefaults = staticMatch
    ? {
        n: staticMatch.n,
        number: staticMatch.n,
        year: staticMatch.year,
        title: staticMatch.title,
        blurb: staticMatch.blurb,
        tags: staticMatch.tags,
        span: staticMatch.span,
        placeholder: staticMatch.placeholder,
        slug: staticMatch.slug,
        liveUrl: staticMatch.liveUrl || null,
        heroImage: staticMatch.images?.[0] ? {url: staticMatch.images[0]} : null,
        tileImages: (staticMatch.images || []).map((url) => ({url})),
        brief: PROJECT_DEFAULTS.brief,
        approach: PROJECT_DEFAULTS.approach,
        buildDetails: buildDetailsForTags(staticMatch.tags),
        metrics: PROJECT_DEFAULTS.metrics,
        gallery: PROJECT_DEFAULTS.gallery,
      }
    : {
        brief: PROJECT_DEFAULTS.brief,
        approach: PROJECT_DEFAULTS.approach,
        buildDetails: PROJECT_DEFAULTS.buildDetails,
        metrics: PROJECT_DEFAULTS.metrics,
        gallery: PROJECT_DEFAULTS.gallery,
      };

  const proj = mergeObj(cms, staticDefaults);
  if (!proj.number && proj.n) proj.number = proj.n;
  return mergeLayoutProps({props: {proj}, revalidate: 60});
}

function Section({ label, children }) {
  return (
    <div data-reveal style={{ paddingTop: 64, borderTop: `1px solid ${p.rule}` }}>
      <div style={{
        fontFamily: FONTS.mono,
        fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 24,
      }}>{label}</div>
      {children}
    </div>
  );
}

function BuildGrid({ details, variant }) {
  const fontSize = variant === 'mobile' ? 14 : 12;
  const pad = variant === 'mobile' ? '14px 16px' : '16px 20px';
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: variant === 'mobile' ? '1fr' : '1fr 1fr',
      gap: variant === 'mobile' ? 0 : 1,
      border: `1px solid ${p.rule}`,
    }}>
      {details.map((d, i) => (
        <div key={`${d.key}-${i}`} style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
          padding: pad, borderBottom: `1px solid ${p.rule}`,
          fontFamily: FONTS.mono, fontSize, letterSpacing: '0.04em',
        }}>
          <span style={{ color: p.fgDim }}>{d.key}</span>
          <span style={{ color: p.fg }}>{d.value}</span>
        </div>
      ))}
    </div>
  );
}

function Metrics({ metrics, variant }) {
  if (variant === 'mobile') {
    return (
      <>
        {metrics.map((m) => (
          <div key={m.label} style={{ padding: '20px 0', borderTop: `2px solid ${p.accent}` }}>
            <div style={{
              fontFamily: FONTS.serif, fontWeight: 300,
              fontSize: 44, lineHeight: 1, color: p.fg, letterSpacing: '-0.02em',
            }}>{m.value}</div>
            <div style={{
              fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginTop: 6,
            }}>{m.label}</div>
          </div>
        ))}
      </>
    );
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${metrics.length || 1}, 1fr)`, gap: 24 }}>
      {metrics.map((m) => (
        <div key={m.label} style={{ padding: '24px 0', borderTop: `2px solid ${p.accent}` }}>
          <div style={{
            fontFamily: FONTS.serif, fontWeight: 300,
            fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1, color: p.fg, letterSpacing: '-0.02em',
          }}>{m.value}</div>
          <div style={{
            fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginTop: 8,
          }}>{m.label}</div>
        </div>
      ))}
    </div>
  );
}

function Gallery({ gallery, variant }) {
  if (variant === 'mobile') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {gallery.map((g, i) => (
          <SanityImage
            key={i}
            source={g}
            ratio={i === 0 ? '16 / 9' : '4 / 3'}
            placeholderLabel={g.caption}
            caption={g.caption}
            style={{ border: 'none' }}
          />
        ))}
      </div>
    );
  }
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
      {gallery.map((g, i) => (
        <div key={i} style={{
          gridColumn: g.span === 'wide' || i === 0 ? 'span 2' : 'span 1',
        }}>
          <SanityImage
            source={g}
            ratio={g.span === 'wide' || i === 0 ? '16 / 9' : '4 / 3'}
            placeholderLabel={g.caption}
            caption={g.caption}
            style={{ border: 'none' }}
          />
        </div>
      ))}
    </div>
  );
}

export default function CaseStudy({ proj, siteSettings, navLinks }) {
  const number = proj.number || proj.n;
  const buildDetails = proj.buildDetails && proj.buildDetails.length ? proj.buildDetails : PROJECT_DEFAULTS.buildDetails;
  const metrics = proj.metrics && proj.metrics.length ? proj.metrics : PROJECT_DEFAULTS.metrics;
  const gallery = proj.gallery && proj.gallery.length ? proj.gallery : PROJECT_DEFAULTS.gallery;
  const approach = proj.approach && proj.approach.length ? proj.approach : PROJECT_DEFAULTS.approach;
  const briefText = proj.brief || PROJECT_DEFAULTS.brief;

  return (
    <>
      <Head>
        <title>{`${proj.title} — twofivesix studio`}</title>
        <meta name="description" content={proj.blurb} />
      </Head>
      <PageLayout siteSettings={siteSettings} navLinks={navLinks} desktop={<>
          <article>
            <section style={{ padding: '80px 32px 64px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
                <div style={{
                  gridColumn: 'span 2',
                  fontFamily: FONTS.mono,
                  fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 12,
                }} data-reveal>
                  <div>/{number}</div>
                  <div style={{ marginTop: 6 }}>{proj.year}</div>
                </div>
                <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
                  <h1 style={{
                    fontFamily: FONTS.serif, fontWeight: 300,
                    fontSize: 'clamp(40px, 6vw, 96px)', lineHeight: 0.96,
                    letterSpacing: '-0.025em', margin: 0, color: p.fg,
                  }}>{proj.title}</h1>
                  <p style={{
                    fontFamily: FONTS.sans2, fontStyle: 'italic',
                    fontWeight: 300, fontSize: 'clamp(18px, 1.8vw, 24px)',
                    lineHeight: 1.4, color: p.fgDim, margin: '24px 0 0', maxWidth: '52ch',
                  }}>{proj.blurb}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 28, alignItems: 'center' }}>
                    {(proj.tags || []).map((t) => (
                      <span key={t} style={{
                        fontFamily: FONTS.mono,
                        fontSize: 10, letterSpacing: '0.1em', color: p.fgDim,
                        border: `1px solid ${p.rule}`, padding: '5px 10px',
                      }}>/{t}</span>
                    ))}
                  </div>
                  {proj.liveUrl && (
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 24,
                      fontFamily: FONTS.mono, fontSize: 13, letterSpacing: '0.1em',
                      color: '#000000', textDecoration: 'underline',
                    }}>
                      VISIT SITE
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </section>

            <div style={{ margin: '0 32px', marginBottom: 80 }}>
              <SanityImage
                source={proj.heroImage}
                ratio="16 / 9"
                placeholderLabel={proj.placeholder}
                alt={proj.title}
                style={{ border: 'none' }}
              />
            </div>

            <div style={{
              padding: '0 32px 120px',
              display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
            }}>
              <div style={{ gridColumn: '3 / span 8', display: 'flex', flexDirection: 'column', gap: 64 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  <Section label="/01 — THE BRIEF">
                    <p style={{
                      fontFamily: FONTS.serif, fontWeight: 300,
                      fontSize: 'clamp(37px, 3.3vw, 50px)', lineHeight: 1.4,
                      margin: 0, color: p.fg, letterSpacing: '-0.012em',
                    }}>{briefText}</p>
                  </Section>

                  <Section label="/02 — THE APPROACH">
                    <RichText
                      value={approach}
                      style={{
                        fontFamily: FONTS.sans,
                        fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7,
                        color: '#000000', display: 'flex', flexDirection: 'column', gap: 4,
                      }}
                    />
                  </Section>
                </div>

                <Section label="/03 — GALLERY">
                  <Gallery gallery={gallery} variant="desktop" />
                </Section>

                <Section label="/04 — THE BUILD">
                  <BuildGrid details={buildDetails} variant="desktop" />
                </Section>

                <Section label="/05 — THE OUTCOME">
                  <Metrics metrics={metrics} variant="desktop" />
                </Section>
              </div>
            </div>

            <div style={{ padding: '0 32px 80px' }}>
              <div style={{ borderTop: `1px solid ${p.rule}`, paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button as={Link} href="/work" bg={p.accent} color={p.accent3}>← ALL WORK</Button>
              </div>
            </div>
          </article>
      </>} mobile={<>
          <section style={{ padding: '48px 20px 36px' }}>
            <div data-mreveal style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 20 }}>
              /{number} · {proj.year}
            </div>
            <h1 data-mreveal data-mreveal-delay="60" style={{
              fontFamily: FONTS.serif, fontWeight: 300,
              fontSize: 'clamp(42px, 11.7vw, 62px)', lineHeight: 0.96,
              letterSpacing: '-0.025em', margin: '0 0 16px', color: p.fg,
            }}>{proj.title}</h1>
            <p data-mreveal data-mreveal-delay="100" style={{
              fontFamily: FONTS.sans2, fontStyle: 'italic', fontWeight: 300,
              fontSize: 17, lineHeight: 1.5, color: p.fgDim, margin: '0 0 20px',
            }}>{proj.blurb}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              {(proj.tags || []).map((t) => (
                <span key={t} style={{
                  fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.1em', color: p.fgDim,
                  border: `1px solid ${p.rule}`, padding: '5px 10px',
                }}>/{t}</span>
              ))}
            </div>
            {proj.liveUrl && (
              <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 24,
                fontFamily: FONTS.mono, fontSize: 13, letterSpacing: '0.1em',
                color: '#000000', textDecoration: 'underline',
              }}>
                VISIT SITE
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </section>

          <div style={{ margin: '0 20px 40px' }}>
            <SanityImage
              source={proj.heroImage}
              ratio="16 / 9"
              placeholderLabel={proj.placeholder}
              alt={proj.title}
              style={{ border: 'none' }}
            />
          </div>

          <div style={{ padding: '0 20px 48px' }}>
            <div data-mreveal style={{ paddingTop: 40, borderTop: `1px solid ${p.rule}`, marginBottom: 40 }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 16 }}>/01 — THE BRIEF</div>
              <p style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 33, lineHeight: 1.4,
                margin: 0, color: p.fg, letterSpacing: '-0.012em',
              }}>{briefText}</p>
            </div>

            <div data-mreveal style={{ paddingTop: 40, borderTop: `1px solid ${p.rule}`, marginBottom: 40 }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 16 }}>/02 — THE APPROACH</div>
              <RichText
                value={approach}
                style={{
                  fontFamily: FONTS.sans, fontSize: 20, lineHeight: 1.7,
                  color: '#000000', display: 'flex', flexDirection: 'column', gap: 4,
                }}
              />
            </div>

            <div data-mreveal style={{ paddingTop: 40, borderTop: `1px solid ${p.rule}`, marginBottom: 40 }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 16 }}>/03 — THE BUILD</div>
              <BuildGrid details={buildDetails} variant="mobile" />
            </div>

            <div data-mreveal style={{ paddingTop: 40, borderTop: `1px solid ${p.rule}`, marginBottom: 40 }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 16 }}>/04 — THE OUTCOME</div>
              <Metrics metrics={metrics} variant="mobile" />
            </div>

            <div data-mreveal style={{ paddingTop: 40, borderTop: `1px solid ${p.rule}` }}>
              <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 16 }}>/05 — GALLERY</div>
              <Gallery gallery={gallery} variant="mobile" />
            </div>
          </div>

          <div style={{ padding: '24px 20px 64px', borderTop: `1px solid ${p.rule}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link href="/work" style={{
                background: p.accent, color: p.accent3, padding: '12px 18px',
                borderRadius: 2, fontFamily: FONTS.mono,
                fontSize: 11, letterSpacing: '0.08em', textDecoration: 'none',
              }}>← ALL WORK</Link>
            </div>
          </div>
      </>} />
    </>
  );
}

CaseStudy.noLayout = true;
