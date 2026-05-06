import Head from 'next/head';
import TFSShell, { useReveal } from '../components/pageContent/shared/TFSShell';
import { PALETTE } from '../components/pageContent/home/data';

const p = PALETTE;

const SERVICES = [
  {
    n: '01',
    title: 'Bespoke Design',
    sub: 'No templates. No clones.',
    body: `Every site is drawn from scratch. We start with your brand, your customers, and the specific job the site needs to do. Then we design for that — not for a dropdown menu of styles someone else picked.\n\nThe design process runs through Figma. You see work-in-progress files, give feedback, and sign off before a line of code is written.`,
    detail: 'Brand systems · Editorial typography · Motion design · Art direction · Figma-to-code',
  },
  {
    n: '02',
    title: 'Engineering',
    sub: 'Next.js. Built to last.',
    body: `We build on Next.js and deploy to Vercel. Fast, reliable, and maintainable — boring in exactly the right ways.\n\nMobile-first by default. Performance-tuned for slow networks. Lighthouse 95+ is the floor, not the ceiling. Code is typed, tested, and structured so a developer who didn't write it can understand it.`,
    detail: 'Next.js · TypeScript · React · Postgres · API integration · Performance optimisation',
  },
  {
    n: '03',
    title: 'Payments',
    sub: 'Local rails and global rails on the same checkout.',
    body: `Pesapal and DPO for card payments. MTN Mobile Money and Airtel Money for everyone with a phone. Shopify for global storefronts. PayPal where it makes sense. Crypto rails for businesses building what's next.\n\nWe've built this before. We handle the integration, the reconciliation, and the edge cases — like the fact that Pesapal still asks for a postcode on a country where postcodes don't exist.`,
    detail: 'Pesapal · DPO · MTN MoMo · Airtel Money · Shopify · PayPal · Crypto rails',
  },
  {
    n: '04',
    title: 'WhatsApp Business API',
    sub: 'Run your business from your phone.',
    body: `Order notifications. Two-way customer replies. Receipts, shipping updates, abandoned cart nudges. All delivered to the app your customers already check.\n\nThe WhatsApp Business API requires setup and a verified business account. We handle the technical integration end to end.`,
    detail: 'WhatsApp Business API · Order notifications · Customer messaging · Automation',
  },
  {
    n: '05',
    title: 'Discoverability',
    sub: 'Found on Google. Cited by AI.',
    body: `Your customers aren't only Googling anymore — they're asking ChatGPT, Claude, and Gemini. We build sites that rank on traditional search AND get cited by language models.\n\nSemantic HTML, structured data, llms.txt, clean heading hierarchies, JSON-LD on every relevant page. The technical work most agencies skip. Med-Optics ranks 95+ on Google PageRank.`,
    detail: 'SEO · GEO / LLM indexing · Structured data · JSON-LD · Sitemap · Performance',
  },
  {
    n: '06',
    title: 'Sanity CMS',
    sub: 'Edit it yourself.',
    body: `Sanity is a headless CMS that gives you full control over your content without calling a developer. Change the menu, the hours, the prices, the photos — from any device.\n\nWe set it up, structure it to match your business, and train you on launch day. Cloud-hosted, version-controlled, backed up.`,
    detail: 'Sanity Studio · Custom schemas · Content modelling · Training · Version control',
  },
  {
    n: '07',
    title: 'Adapted for Uganda',
    sub: 'Built for how Uganda actually works.',
    body: `Drop-pin addressing for delivery — because Ugandan addresses don't fit Western postcode logic. Low-bandwidth optimisation — most visitors arrive on phones over patchy data. Local + global payment rails on the same checkout.\n\nThese aren't edge cases we work around. They're the first thing we think about.`,
    detail: 'Drop-pin delivery · Low-bandwidth · Mobile-first · Local payment rails · Offline-tolerant UX',
  },
  {
    n: '08',
    title: 'Aftercare',
    sub: 'Three months included. More available.',
    body: `Three months of support is included in every project. Bug fixes, minor updates, CMS questions — handled.\n\nFor ongoing work, a monthly retainer covers feature development, content updates, performance monitoring, and priority support.`,
    detail: 'Bug fixes · Content updates · Performance monitoring · CMS training · Retainer available',
  },
];

export default function Services() {
  useReveal();

  return (
    <>
      <Head>
        <title>Services — twofivesix studio</title>
        <meta name="description" content="Bespoke design, Next.js engineering, payment integration, WhatsApp API, SEO/GEO, and Sanity CMS — for Uganda's most ambitious businesses." />
      </Head>
      <TFSShell>
        {/* Header */}
        <section style={{ padding: '80px 32px 64px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: 'span 2', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 12 }} data-reveal>/SERVICES</div>
            <div style={{ gridColumn: 'span 8' }} data-reveal data-reveal-delay="80">
              <h1 style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 104px)', lineHeight: 0.94,
                letterSpacing: '-0.025em', margin: 0, color: p.fg,
              }}>
                What we<br />
                <em style={{ color: p.accent, fontStyle: 'italic', fontWeight: 300 }}>actually do.</em>
              </h1>
              <p style={{
                fontFamily: '"Inter", system-ui, sans-serif', fontSize: 'clamp(16px, 1.4vw, 19px)',
                lineHeight: 1.6, color: p.fgDim, margin: '28px 0 0', maxWidth: '52ch',
              }}>
                Eight service areas. All available individually. All work better together.
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section style={{ padding: '0 32px 120px' }}>
          {SERVICES.map((svc, i) => (
            <div
              key={svc.n}
              data-reveal
              data-reveal-delay={Math.min(i * 40, 200)}
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24,
                padding: '64px 0',
                borderTop: `1px solid ${p.rule}`,
              }}
            >
              <div style={{ gridColumn: 'span 1', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: '0.08em', color: p.fgDim, paddingTop: 6 }}>/{svc.n}</div>
              <div style={{ gridColumn: 'span 4' }}>
                <h2 style={{
                  fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                  fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.0,
                  letterSpacing: '-0.02em', margin: 0, color: p.fg,
                }}>{svc.title}</h2>
                <p style={{
                  fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
                  fontWeight: 300, fontSize: 'clamp(15px, 1.3vw, 18px)',
                  lineHeight: 1.4, color: p.fgDim, margin: '8px 0 0',
                }}>{svc.sub}</p>
              </div>
              <div style={{ gridColumn: 'span 5' }}>
                {svc.body.split('\n\n').map((para, j) => (
                  <p key={j} style={{
                    fontFamily: '"Inter", system-ui, sans-serif',
                    fontSize: 'clamp(15px, 1.3vw, 17px)', lineHeight: 1.7,
                    color: p.fgDim, margin: j > 0 ? '20px 0 0' : 0,
                  }}>{para}</p>
                ))}
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
                  letterSpacing: '0.06em', color: p.fgDim, lineHeight: 1.8,
                }}>
                  {svc.detail.split(' · ').map((d) => (
                    <div key={d} style={{ color: p.accent2 }}>› {d}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ padding: '120px 32px', background: p.fg }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            <div style={{ gridColumn: '3 / span 8', textAlign: 'center' }} data-reveal>
              <h2 style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.0,
                letterSpacing: '-0.025em', margin: '0 0 40px', color: p.bg,
              }}>
                Ready to build something<br />
                <em style={{ color: p.accent2, fontStyle: 'italic' }}>your competitors can&rsquo;t copy?</em>
              </h2>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                <a href="/contact" className="tfs-btn" style={{
                  background: p.accent2, color: p.fg, padding: '14px 24px', borderRadius: 2,
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
                }}>START A PROJECT →</a>
                <a href="/pricing" className="tfs-btn" style={{
                  background: 'transparent', color: p.bg, padding: '14px 24px', borderRadius: 2,
                  fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: '0.08em',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
                  border: `1px solid ${p.bg}44`,
                }}>SEE PRICING →</a>
              </div>
            </div>
          </div>
        </section>
      </TFSShell>
    </>
  );
}

Services.noLayout = true;
