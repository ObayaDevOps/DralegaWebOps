export const FONTS = {
  sans:  '"Inter", system-ui, sans-serif',
  serif: '"Red Hat Display", sans-serif',
  mono:  '"JetBrains Mono", monospace',
};

export const MOTION = {
  ease:          'cubic-bezier(0.16, 1, 0.3, 1)',
  marquee:       { desktop: '38s',             mobile: '28s' },
  drawerOverlay: '240ms',
  drawerPanel:   '360ms',
};

export const REVEAL = {
  threshold:  { desktop: 0.12,                  mobile: 0.1 },
  rootMargin: { desktop: '0px 0px -40px 0px',   mobile: '0px 0px -20px 0px' },
};

export const GLASS = {
  blur: { desktop: 'blur(12px)',                 mobile: 'blur(8px)' },
};

export const PALETTE = {
  id: 'warm',
  bg: '#FFFFFF',
  fg: '#1A1A1A',
  fgDim: '#1A1A1A99',
  fgFaint: '#1A1A1A66',
  rule: '#000000',
  accent: '#1E3A2F',
  accent2: '#D9572B',
  grid: 'rgba(26,26,26,0.035)',
  markColor: '#1E3A2F',
  invertHero: false,
};

export const PROJECTS = [
  {
    n: '01',
    title: 'Little Kobe Japanese Market',
    blurb: 'Custom e-commerce with a video-game soul.',
    tags: ['E-COMMERCE', 'PESAPAL', 'SHOPIFY'],
    span: 'wide',
    placeholder: 'shelves · katakana · CRT glow',
    year: '2025',
  },
  {
    n: '02',
    title: 'Yujo Izakaya',
    blurb: 'A Japanese kitchen and cocktail bar where every click counts.',
    tags: ['HOSPITALITY', 'MENU SYSTEM', 'BRAND'],
    span: 'half',
    placeholder: 'lantern light · menu still',
    year: '2025',
  },
  {
    n: '03',
    title: 'Afropocene StudioLab',
    blurb: 'UNDP-funded arts and tech lab. Built in-house, by a founding member.',
    tags: ['WEB3', 'CMS', 'AWARD-WINNING'],
    span: 'half',
    placeholder: 'studio still · artwork',
    year: '2024',
  },
  {
    n: '04',
    title: 'Great Outdoors Resort',
    blurb: 'Luxury resort booking and payments, end to end.',
    tags: ['BOOKINGS', 'PESAPAL', 'CMS'],
    span: 'wide',
    placeholder: 'lake · canvas tent · long lens',
    year: '2024',
  },
  {
    n: '05',
    title: 'Ashton & Carrington',
    blurb: 'Expert financial and tax advisory. A professional rebrand optimised to display dense information clearly.',
    tags: ['FULLSTACK', 'CMS', 'FINANCE'],
    span: 'third',
    placeholder: 'data tables · serif',
    year: '2024',
  },
  {
    n: '06',
    title: 'Med-Optics Vision Centre',
    blurb: 'Top-100 Ugandan company. Google PageRank 95+.',
    tags: ['HEALTHCARE', 'CMS', 'SEO'],
    span: 'third',
    placeholder: 'optical chart · clinic',
    year: '2023',
  },
  {
    n: '07',
    title: 'Nekosero',
    blurb: 'Creative shopping, dining, brewing, and arts space.',
    tags: ['EVENTS', 'CMS', 'HOSPITALITY'],
    span: 'third',
    placeholder: 'venue · neon',
    year: '2023',
  },
  {
    n: '08',
    title: 'Humble Beeing Honey',
    blurb: 'Proudly Ugandan social enterprise specialising in beekeeping. Polished, professional, mission-driven.',
    tags: ['FULLSTACK', 'BRAND', 'SOCIAL ENTERPRISE'],
    span: 'wide',
    placeholder: 'apiary · honeycomb',
    year: '2023',
  },
];

export const MARQUEE_ITEMS = [
  'PAYMENTS', 'WHATSAPP', 'DESIGN', 'NEXT.JS', 'SANITY',
  'PESAPAL', 'SHOPIFY', 'MTN MOMO', 'AIRTEL MONEY', 'CRYPTO',
  'HEADLESS CMS', 'TYPESCRIPT', 'POSTGRES', 'BRAND SYSTEMS', 'MOTION',
];
