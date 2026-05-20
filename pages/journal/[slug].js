import Head from 'next/head';
import Link from 'next/link';
import PageLayout from '../../components/layout/PageLayout';
import { PALETTE, FONTS } from '../../data/tokens';
import RichText from '../../components/primitives/RichText';
import { client } from '../../lib/sanityClient';
import { journalPostBySlugQuery, journalPostSlugsQuery } from '../../lib/queries/journal';
import { JOURNAL_POSTS, formatReadTime } from '../../data/journal';
import { mergeObj } from '../../lib/cms/merge';
import { mergeLayoutProps } from '../../lib/cms/withLayoutProps';
import { urlForImage } from '../../lib/sanityImage';

const p = PALETTE;

export async function getStaticPaths() {
  let cmsSlugs = [];
  try {
    cmsSlugs = (await client.fetch(journalPostSlugsQuery)) || [];
  } catch (e) {
    cmsSlugs = [];
  }
  const all = new Set([
    ...cmsSlugs.map((s) => s.slug).filter(Boolean),
    ...JOURNAL_POSTS.map((post) => post.slug),
  ]);
  return {
    paths: [...all].map((slug) => ({params: {slug}})),
    fallback: 'blocking',
  };
}

export async function getStaticProps({params}) {
  let cms = null;
  try {
    cms = await client.fetch(journalPostBySlugQuery, {slug: params.slug});
  } catch (e) {
    cms = null;
  }
  const staticMatch = JOURNAL_POSTS.find((post) => post.slug === params.slug);
  if (!cms && !staticMatch) return {notFound: true};
  const post = mergeObj(cms, staticMatch || {});
  return mergeLayoutProps({props: {post}, revalidate: 60});
}

export default function JournalPost({ post, siteSettings, navLinks }) {
  return (
    <>
      <Head>
        <title>{`${post.title} — twofivesix journal`}</title>
        <meta name="description" content={post.blurb} />
        <meta property="og:site_name" content="twofivesix" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} — twofivesix journal`} />
        <meta property="og:description" content={post.blurb} />
        <meta property="og:url" content={`https://twofivesix.online/journal/${post.slug?.current || post.slug}`} />
        <meta property="og:image" content={urlForImage(post.coverImage || post.image, {width: 1200}) || 'https://twofivesix.online/og-image.png'} />
      </Head>
      <PageLayout siteSettings={siteSettings} navLinks={navLinks} desktop={<>
        <article style={{ padding: '80px 32px 120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 48 }}>
            <div style={{
              gridColumn: 'span 2',
              fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em',
              color: p.fgDim, paddingTop: 12,
            }}>
              <div>/{post.number}</div>
              <div style={{ marginTop: 6 }}>{post.date}</div>
              {post.readTime != null && <div style={{ marginTop: 6 }}>{formatReadTime(post.readTime)} read</div>}
            </div>
            <div style={{ gridColumn: 'span 8' }} data-reveal>
              <div style={{
                fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.1em',
                color: p.fgDim, marginBottom: 20,
              }}>{(post.tags || []).map((t) => `/${t}`).join(' · ')}</div>
              <h1 style={{
                fontFamily: FONTS.serif, fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.0,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>{post.title}</h1>
              {post.blurb && (
                <p style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 300,
                  fontSize: 'clamp(18px, 1.8vw, 24px)', lineHeight: 1.4,
                  color: p.fgDim, margin: '24px 0 0', maxWidth: '60ch',
                }}>{post.blurb}</p>
              )}
            </div>
          </div>

          {post.body && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
              <div style={{ gridColumn: '3 / span 8' }}>
                <RichText
                  value={post.body}
                  style={{
                    fontFamily: FONTS.sans,
                    fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.75,
                    color: p.fg, display: 'flex', flexDirection: 'column', gap: 20,
                  }}
                />
              </div>
            </div>
          )}

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: `1px solid ${p.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/journal" style={{
              fontFamily: FONTS.mono, fontSize: 12, letterSpacing: '0.08em',
              color: p.fgDim, textDecoration: 'none',
            }}>← ALL JOURNAL</Link>
            <Link href="/contact" style={{
              background: p.accent, color: p.accent3, padding: '12px 18px',
              borderRadius: 2, fontFamily: FONTS.mono,
              fontSize: 12, letterSpacing: '0.08em', textDecoration: 'none',
            }}>START A PROJECT →</Link>
          </div>
        </article>
      </>} mobile={<>
          <article style={{ padding: '48px 20px 64px' }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 14 }}>
              /{post.number} · {post.date}
            </div>
            <h1 data-mreveal style={{
              fontFamily: FONTS.serif, fontWeight: 300,
              fontSize: 32, lineHeight: 1.05,
              letterSpacing: '-0.02em', margin: '0 0 16px', color: p.fg,
            }}>{post.title}</h1>
            {post.blurb && (
              <p data-mreveal data-mreveal-delay="60" style={{
                fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 300,
                fontSize: 17, lineHeight: 1.4, color: p.fgDim, margin: '0 0 20px',
              }}>{post.blurb}</p>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 0', borderTop: `1px solid ${p.rule}`, borderBottom: `1px solid ${p.rule}`, fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, marginBottom: 28 }}>
              <span>{(post.tags || []).map((t) => `/${t}`).join(' ')}</span>
              {post.readTime != null && <span>{formatReadTime(post.readTime)} read</span>}
            </div>
            {post.body && (
              <RichText
                value={post.body}
                style={{
                  fontFamily: FONTS.sans, fontSize: 15, lineHeight: 1.7,
                  color: p.fg, display: 'flex', flexDirection: 'column', gap: 16,
                }}
              />
            )}
            <div style={{ marginTop: 40, paddingTop: 24, borderTop: `1px solid ${p.rule}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link href="/journal" style={{
                fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em',
                color: p.fgDim, textDecoration: 'none',
              }}>← ALL JOURNAL</Link>
              <Link href="/contact" style={{
                background: p.accent, color: p.accent3, padding: '10px 16px',
                borderRadius: 2, fontFamily: FONTS.mono,
                fontSize: 11, letterSpacing: '0.08em', textDecoration: 'none',
              }}>START A PROJECT →</Link>
            </div>
          </article>
      </>} />
    </>
  );
}

JournalPost.noLayout = true;
