import Head from 'next/head';
import TFSShell, { useReveal } from '../../components/pageContent/shared/TFSShell';
import { PALETTE } from '../../components/pageContent/home/data';

const p = PALETTE;

const POSTS = [
  {
    n: '01',
    slug: 'ugandan-business-checkout',
    title: 'Why your Ugandan business shouldn\'t use a US-built checkout.',
    date: '2026-04-12',
    tags: ['PAYMENTS', 'UX'],
    blurb: 'US-built checkouts assume postcodes, Stripe, and credit cards. Uganda has none of those as defaults. Here\'s what breaks and how to build around it.',
    readTime: '6 min',
  },
  {
    n: '02',
    slug: 'mtn-momo-nextjs',
    title: 'How to integrate MTN Mobile Money into a Next.js site.',
    date: '2026-03-28',
    tags: ['ENGINEERING', 'PAYMENTS'],
    blurb: 'A practical walkthrough of the MTN MoMo API, from sandbox setup to production webhook handling. With real code.',
    readTime: '12 min',
  },
  {
    n: '03',
    slug: 'wordpress-ugandan-smes-2026',
    title: 'The case against WordPress for Ugandan SMEs in 2026.',
    date: '2026-03-14',
    tags: ['ENGINEERING', 'CMS'],
    blurb: 'WordPress still powers 40% of the web. It shouldn\'t power your business. The maintenance burden, the security surface, and the performance ceiling — all of it.',
    readTime: '8 min',
  },
  {
    n: '04',
    slug: 'whatsapp-business-api',
    title: 'What WhatsApp Business API can actually do for your business.',
    date: '2026-02-20',
    tags: ['WHATSAPP', 'OPERATIONS'],
    blurb: 'Not the app. The API. Order notifications, two-way conversations, abandoned cart nudges — run from your phone, at scale.',
    readTime: '7 min',
  },
  {
    n: '05',
    slug: 'drop-pin-delivery-ux',
    title: 'Designing for the boda economy: drop-pin addresses and last-mile UX.',
    date: '2026-02-05',
    tags: ['UX', 'DESIGN'],
    blurb: 'Kampala\'s streets don\'t have postcodes. Western checkout forms break. Here\'s how we solve it — and why it matters more than most developers realise.',
    readTime: '9 min',
  },
  {
    n: '06',
    slug: 'pesapal-vs-dpo',
    title: 'Pesapal vs DPO: which payment gateway for which Ugandan business?',
    date: '2026-01-22',
    tags: ['PAYMENTS'],
    blurb: 'Both work. Both have quirks. The answer depends on your volume, your customers, and whether you need MoMo.',
    readTime: '7 min',
  },
  {
    n: '07',
    slug: 'chatgpt-recommendations',
    title: 'How to make your business website show up in ChatGPT recommendations.',
    date: '2026-01-08',
    tags: ['GEO', 'SEO'],
    blurb: 'GEO — Generative Engine Optimisation. Your customers are asking AI assistants for recommendations. Here\'s the technical and content work that gets you cited.',
    readTime: '10 min',
  },
  {
    n: '08',
    slug: 'art-and-commercial-design',
    title: 'Notes from the studio: what art practice teaches about commercial design.',
    date: '2025-12-18',
    tags: ['DESIGN', 'STUDIO'],
    blurb: 'Being a founding member of Afropocene while running a commercial web studio is a strange position. This is what the two practices teach each other.',
    readTime: '5 min',
  },
];

export default function Journal() {
  useReveal();

  return (
    <>
      <Head>
        <title>Journal — twofivesix studio</title>
        <meta name="description" content="Notes from twofivesix — on payments, engineering, design, and building for Uganda's internet." />
      </Head>
      <TFSShell>
        {/* Header */}
        <section style={{ padding: '80px 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 12 }} data-reveal>/JOURNAL</div>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                Notes from<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>the studio.</em>
              </h1>
              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif', fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>
                On payments, engineering, design, and building for Uganda&rsquo;s internet.
                Practical, specific, occasionally opinionated.
              </p>
            </div>
          </div>
        </section>

        {/* Featured post */}
        <section style={{ padding: '0 32px 80px' }}>
          <a
            href={`/journal/${POSTS[0].slug}`}
            data-reveal
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
              padding: '48px 0', borderTop: `1px solid ${p.rule}`, borderBottom: `1px solid ${p.rule}`,
              textDecoration: 'none', color: 'inherit',
            }}
          >
            <div style={{ gridColumn: 'span 2' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }}>
                <div>/{POSTS[0].n}</div>
                <div style={{ marginTop: 6 }}>{POSTS[0].date}</div>
                <div style={{ marginTop: 6 }}>{POSTS[0].readTime} read</div>
              </div>
            </div>
            <div style={{ gridColumn: 'span 7' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.1em', color: p.fgDim, marginBottom: 16 }}>
                {POSTS[0].tags.map((t) => `/${t}`).join(' · ')}
              </div>
              <h2
                className="tfs-tile-title"
                style={{
                  fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                  fontSize: 'clamp(28px, 3.2vw, 48px)', lineHeight: 1.05,
                  letterSpacing: '-0.02em', margin: 0,
                  display: 'inline-block',
                  backgroundImage: `linear-gradient(${p.accent2}, ${p.accent2})`,
                  backgroundRepeat: 'no-repeat', backgroundPosition: '0 100%',
                  backgroundSize: '0% 2px', paddingBottom: 2,
                  transition: 'background-size 600ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >{POSTS[0].title}</h2>
              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif',
                fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.65,
                color: p.fgDim, margin: '16px 0 0', maxWidth: '60ch',
              }}>{POSTS[0].blurb}</p>
            </div>
            <div style={{ gridColumn: '11 / span 2', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
              <span style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 12,
                letterSpacing: '0.08em', color: p.accent,
              }}>READ →</span>
            </div>
          </a>
        </section>

        {/* Post list */}
        <section style={{ padding: '0 32px 120px' }}>
          {POSTS.slice(1).map((post, i) => (
            <a
              key={post.n}
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
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim }}>
                  <div>/{post.n}</div>
                  <div style={{ marginTop: 4, fontSize: 10 }}>{post.date}</div>
                </div>
              </div>
              <div style={{ gridColumn: 'span 7' }}>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.1em', color: p.fgDim, marginBottom: 10 }}>
                  {post.tags.map((t) => `/${t}`).join(' · ')}
                </div>
                <h2
                  className="tfs-tile-title"
                  style={{
                    fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
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
                <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.06em', color: p.fgDim }}>{post.readTime} read</span>
              </div>
            </a>
          ))}
        </section>
      </TFSShell>
    </>
  );
}

Journal.noLayout = true;
