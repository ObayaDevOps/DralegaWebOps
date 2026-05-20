import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';
import { PALETTE, FONTS } from '../../data/tokens';
import SectionLabel from '../../components/primitives/SectionLabel';
import { client } from '../../lib/sanityClient';
import { journalPageQuery, journalPostsQuery } from '../../lib/queries/journal';
import { JOURNAL_PAGE, JOURNAL_POSTS, formatReadTime } from '../../data/journal';
import { mergeObj } from '../../lib/cms/merge';
import { mergeLayoutProps } from '../../lib/cms/withLayoutProps';

const p = PALETTE;

export async function getStaticProps() {
  let cmsPage = null;
  let cmsPosts = null;
  try {
    [cmsPage, cmsPosts] = await Promise.all([
      client.fetch(journalPageQuery),
      client.fetch(journalPostsQuery),
    ]);
  } catch (e) {
    cmsPage = null;
    cmsPosts = null;
  }
  const page = mergeObj(cmsPage, JOURNAL_PAGE);
  const posts = (cmsPosts && cmsPosts.length ? cmsPosts : JOURNAL_POSTS).map((post, i) => ({
    ...post,
    number: post.number || String(i + 1).padStart(2, '0'),
  }));
  return mergeLayoutProps({props: {page, posts}, revalidate: 60});
}

export default function Journal({ page, posts, siteSettings, navLinks }) {
  const [featured, ...rest] = posts;
  return (
    <>
      <Head>
        <title>Journal — twofivesix studio</title>
        <meta name="description" content={page.subheading} />
        <meta property="og:site_name" content="twofivesix" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Journal — twofivesix studio" />
        <meta property="og:description" content={page.subheading} />
        <meta property="og:url" content="https://twofivesix.online/journal" />
        <meta property="og:image" content="https://twofivesix.online/og-image.png" />
      </Head>
      <PageLayout siteSettings={siteSettings} navLinks={navLinks} desktop={<>
        <section style={{ padding: '80px 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <SectionLabel>{page.eyebrow}</SectionLabel>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                {page.heading}<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{page.headingEmphasis}</em>
              </h1>
              <p style={{
                fontFamily: FONTS.sans, fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>{page.subheading}</p>
            </div>
          </div>
        </section>

        {featured && (
          <section style={{ padding: '0 32px 80px' }}>
            <Link
              href={`/journal/${featured.slug}`}
              data-reveal
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
                padding: '48px 0', borderTop: `1px solid ${p.rule}`, borderBottom: `1px solid ${p.rule}`,
                textDecoration: 'none', color: 'inherit',
              }}
            >
              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }}>
                  <div>/{featured.number}</div>
                  <div style={{ marginTop: 6 }}>{featured.date}</div>
                  {featured.readTime != null && <div style={{ marginTop: 6 }}>{formatReadTime(featured.readTime)} read</div>}
                </div>
              </div>
              <div style={{ gridColumn: 'span 7' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.1em', color: p.fgDim, marginBottom: 16 }}>
                  {(featured.tags || []).map((t) => `/${t}`).join(' · ')}
                </div>
                <h2
                  className="tfs-tile-title"
                  style={{
                    fontFamily: FONTS.serif, fontWeight: 300,
                    fontSize: 'clamp(28px, 3.2vw, 48px)', lineHeight: 1.05,
                    letterSpacing: '-0.02em', margin: 0,
                    display: 'inline-block',
                    backgroundImage: `linear-gradient(${p.accent2}, ${p.accent2})`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%',
                    backgroundSize: '0% 2px', paddingBottom: 2,
                    transition: 'background-size 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >{featured.title}</h2>
                <p style={{
                  fontFamily: FONTS.sans,
                  fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.65,
                  color: p.fgDim, margin: '16px 0 0', maxWidth: '60ch',
                }}>{featured.blurb}</p>
              </div>
              <div style={{ gridColumn: '11 / span 2', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <span style={{
                  fontFamily: FONTS.mono, fontSize: 12,
                  letterSpacing: '0.08em', color: p.accent,
                }}>READ →</span>
              </div>
            </Link>
          </section>
        )}

        <section style={{ padding: '0 32px 120px' }}>
          {rest.map((post, i) => (
            <Link
              key={post._id || post.slug}
              href={`/journal/${post.slug}`}
              data-reveal
              data-reveal-delay={i * 50}
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
                padding: '32px 0', borderBottom: `1px solid ${p.rule}`,
                textDecoration: 'none', color: 'inherit',
              }}
            >
              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }}>
                  <div>/{post.number}</div>
                  <div style={{ marginTop: 4, fontSize: 10 }}>{post.date}</div>
                </div>
              </div>
              <div style={{ gridColumn: 'span 7' }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.1em', color: p.fgDim, marginBottom: 10 }}>
                  {(post.tags || []).map((t) => `/${t}`).join(' · ')}
                </div>
                <h2
                  className="tfs-tile-title"
                  style={{
                    fontFamily: FONTS.serif, fontWeight: 300,
                    fontSize: 'clamp(20px, 2.2vw, 30px)', lineHeight: 1.1,
                    letterSpacing: '-0.015em', margin: 0,
                    display: 'inline-block',
                    backgroundImage: `linear-gradient(${p.accent2}, ${p.accent2})`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%',
                    backgroundSize: '0% 2px', paddingBottom: 2,
                    transition: 'background-size 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >{post.title}</h2>
              </div>
              <div style={{ gridColumn: 'span 3', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                {post.readTime != null && (
                  <span style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.06em', color: p.fgDim }}>{formatReadTime(post.readTime)} read</span>
                )}
              </div>
            </Link>
          ))}
        </section>
      </>} mobile={<>
          <section style={{ padding: '48px 20px 36px' }}>
            <SectionLabel variant="mobile">{page.eyebrow}</SectionLabel>
            <h1 data-mreveal data-mreveal-delay="60" style={{
              fontFamily: FONTS.serif, fontWeight: 400,
              fontSize: 'clamp(36px, 11vw, 52px)', lineHeight: 0.96,
              letterSpacing: '-0.025em', margin: 0, color: p.fg,
            }}>
              {page.heading}<br />
              <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>{page.headingEmphasis}</em>
            </h1>
            <p data-mreveal data-mreveal-delay="120" style={{ fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.6, color: p.fgDim, margin: '20px 0 0' }}>
              {page.subheading}
            </p>
          </section>

          {featured && (
            <section style={{ padding: '0 20px 8px' }}>
              <Link href={`/journal/${featured.slug}`} data-mreveal style={{
                display: 'block', textDecoration: 'none', color: 'inherit',
                borderTop: `1px solid ${p.rule}`, paddingTop: 28,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 14 }}>
                  <span>/{featured.number} · {featured.date}</span>
                  <span>{(featured.tags || []).map((t) => `/${t}`).join(' ')}</span>
                </div>
                <div style={{
                  width: '100%', aspectRatio: '16 / 9',
                  background: 'repeating-linear-gradient(135deg, rgba(26,26,26,0.045) 0 12px, rgba(26,26,26,0.015) 12px 24px)',
                  border: `1px solid ${p.rule}`, marginBottom: 16,
                }} />
                <h2 style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.015em', margin: '0 0 10px', color: p.fg }}>{featured.title}</h2>
                <p style={{ fontFamily: FONTS.sans, fontSize: 14, lineHeight: 1.65, color: p.fgDim, margin: '0 0 20px' }}>{featured.blurb}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderTop: `1px solid ${p.rule}`, borderBottom: `1px solid ${p.rule}`, fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em' }}>
                  <span style={{ color: p.fgDim }}>{formatReadTime(featured.readTime)} read</span>
                  <span style={{ color: p.accent }}>READ →</span>
                </div>
              </Link>
            </section>
          )}

          <section style={{ padding: '8px 20px 64px' }}>
            {rest.map((post, i) => (
              <Link key={post._id || post.slug} href={`/journal/${post.slug}`} data-mreveal data-mreveal-delay={i * 50} style={{
                display: 'block', padding: '24px 0', borderBottom: `1px solid ${p.rule}`,
                textDecoration: 'none', color: 'inherit',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 10 }}>
                  <span>{post.date}</span>
                  <span>{(post.tags || []).map((t) => `/${t}`).join(' ')}</span>
                </div>
                <h2 style={{ fontFamily: FONTS.serif, fontWeight: 300, fontSize: 22, lineHeight: 1.1, letterSpacing: '-0.012em', margin: '0 0 8px', color: p.fg }}>{post.title}</h2>
                <p style={{ fontFamily: FONTS.sans, fontSize: 13, lineHeight: 1.55, color: p.fgDim, margin: 0 }}>{post.blurb}</p>
              </Link>
            ))}
          </section>
      </>} />
    </>
  );
}

Journal.noLayout = true;
