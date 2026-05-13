export const JOURNAL_PAGE = {
  eyebrow: '/JOURNAL',
  heading: 'Notes from',
  headingEmphasis: 'the studio.',
  subheading:
    'On payments, engineering, design, and building for Uganda’s internet. ' +
    'Practical, specific, occasionally opinionated.',
};

export const JOURNAL_POSTS = [
  {
    number: '01',
    slug: 'ugandan-business-checkout',
    title: 'Why your Ugandan business shouldn’t use a US-built checkout.',
    date: '2026-04-12',
    tags: ['PAYMENTS', 'UX'],
    blurb: 'US-built checkouts assume postcodes, Stripe, and credit cards. Uganda has none of those as defaults. Here’s what breaks and how to build around it.',
    readTime: 6,
  },
  {
    number: '02',
    slug: 'mtn-momo-nextjs',
    title: 'How to integrate MTN Mobile Money into a Next.js site.',
    date: '2026-03-28',
    tags: ['ENGINEERING', 'PAYMENTS'],
    blurb: 'A practical walkthrough of the MTN MoMo API, from sandbox setup to production webhook handling. With real code.',
    readTime: 12,
  },
  {
    number: '03',
    slug: 'wordpress-ugandan-smes-2026',
    title: 'The case against WordPress for Ugandan SMEs in 2026.',
    date: '2026-03-14',
    tags: ['ENGINEERING', 'CMS'],
    blurb: 'WordPress still powers 40% of the web. It shouldn’t power your business. The maintenance burden, the security surface, and the performance ceiling — all of it.',
    readTime: 8,
  },
  {
    number: '04',
    slug: 'whatsapp-business-api',
    title: 'What WhatsApp Business API can actually do for your business.',
    date: '2026-02-20',
    tags: ['WHATSAPP', 'OPERATIONS'],
    blurb: 'Not the app. The API. Order notifications, two-way conversations, abandoned cart nudges — run from your phone, at scale.',
    readTime: 7,
  },
  {
    number: '05',
    slug: 'drop-pin-delivery-ux',
    title: 'Designing for the boda economy: drop-pin addresses and last-mile UX.',
    date: '2026-02-05',
    tags: ['UX', 'DESIGN'],
    blurb: 'Kampala’s streets don’t have postcodes. Western checkout forms break. Here’s how we solve it — and why it matters more than most developers realise.',
    readTime: 9,
  },
  {
    number: '06',
    slug: 'pesapal-vs-dpo',
    title: 'Pesapal vs DPO: which payment gateway for which Ugandan business?',
    date: '2026-01-22',
    tags: ['PAYMENTS'],
    blurb: 'Both work. Both have quirks. The answer depends on your volume, your customers, and whether you need MoMo.',
    readTime: 7,
  },
  {
    number: '07',
    slug: 'chatgpt-recommendations',
    title: 'How to make your business website show up in ChatGPT recommendations.',
    date: '2026-01-08',
    tags: ['GEO', 'SEO'],
    blurb: 'GEO — Generative Engine Optimisation. Your customers are asking AI assistants for recommendations. Here’s the technical and content work that gets you cited.',
    readTime: 10,
  },
  {
    number: '08',
    slug: 'art-and-commercial-design',
    title: 'Notes from the studio: what art practice teaches about commercial design.',
    date: '2025-12-18',
    tags: ['DESIGN', 'STUDIO'],
    blurb: 'Being a founding member of Afropocene while running a commercial web studio is a strange position. This is what the two practices teach each other.',
    readTime: 5,
  },
];

export function formatReadTime(rt) {
  if (rt == null) return null;
  if (typeof rt === 'string') return rt;
  return `${rt} min`;
}
