export const SERVICES_PAGE = {
  eyebrow: '/SERVICES',
  heading: 'What we',
  headingEmphasis: 'actually do.',
  subheading: 'Eight service areas. All available individually. All work better together.',
  services: [
    {
      number: '01',
      title: 'Bespoke Design',
      tagline: 'No templates. No clones.',
      body:
        'Every site is drawn from scratch. We start with your brand, your customers, and the specific job the site needs to do. Then we design for that — not for a dropdown menu of styles someone else picked.\n\n' +
        'The design process runs through Figma. You see work-in-progress files, give feedback, and sign off before a line of code is written.',
      details: ['Brand systems', 'Editorial typography', 'Motion design', 'Art direction', 'Figma-to-code'],
    },
    {
      number: '02',
      title: 'Engineering',
      tagline: 'Next.js. Built to last.',
      body:
        'We build on Next.js and deploy to Vercel. Fast, reliable, and maintainable — boring in exactly the right ways.\n\n' +
        'Mobile-first by default. Performance-tuned for slow networks. Lighthouse 95+ is the floor, not the ceiling. Code is typed, tested, and structured so a developer who didn’t write it can understand it.',
      details: ['Next.js', 'TypeScript', 'React', 'Postgres', 'API integration', 'Performance optimisation'],
    },
    {
      number: '03',
      title: 'Payments',
      tagline: 'Local rails and global rails on the same checkout.',
      body:
        'Pesapal and DPO for card payments. MTN Mobile Money and Airtel Money for everyone with a phone. Shopify for global storefronts. PayPal where it makes sense. Crypto rails for businesses building what’s next.\n\n' +
        'We’ve built this before. We handle the integration, the reconciliation, and the edge cases — like the fact that Pesapal still asks for a postcode on a country where postcodes don’t exist.',
      details: ['Pesapal', 'DPO', 'MTN MoMo', 'Airtel Money', 'Shopify', 'PayPal', 'Crypto rails'],
    },
    {
      number: '04',
      title: 'WhatsApp Business API',
      tagline: 'Run your business from your phone.',
      body:
        'Order notifications. Two-way customer replies. Receipts, shipping updates, abandoned cart nudges. All delivered to the app your customers already check.\n\n' +
        'The WhatsApp Business API requires setup and a verified business account. We handle the technical integration end to end.',
      details: ['WhatsApp Business API', 'Order notifications', 'Customer messaging', 'Automation'],
    },
    {
      number: '05',
      title: 'Discoverability',
      tagline: 'Found on Google. Cited by AI.',
      body:
        'Your customers aren’t only Googling anymore — they’re asking ChatGPT, Claude, and Gemini. We build sites that rank on traditional search AND get cited by language models.\n\n' +
        'Semantic HTML, structured data, llms.txt, clean heading hierarchies, JSON-LD on every relevant page. The technical work most agencies skip. Med-Optics ranks 95+ on Google PageRank.',
      details: ['SEO', 'GEO / LLM indexing', 'Structured data', 'JSON-LD', 'Sitemap', 'Performance'],
    },
    {
      number: '06',
      title: 'Sanity CMS',
      tagline: 'Edit it yourself.',
      body:
        'Sanity is a headless CMS that gives you full control over your content without calling a developer. Change the menu, the hours, the prices, the photos — from any device.\n\n' +
        'We set it up, structure it to match your business, and train you on launch day. Cloud-hosted, version-controlled, backed up.',
      details: ['Sanity Studio', 'Custom schemas', 'Content modelling', 'Training', 'Version control'],
    },
    {
      number: '07',
      title: 'Adapted for Uganda',
      tagline: 'Built for how Uganda actually works.',
      body:
        'Drop-pin addressing for delivery — because Ugandan addresses don’t fit Western postcode logic. Low-bandwidth optimisation — most visitors arrive on phones over patchy data. Local + global payment rails on the same checkout.\n\n' +
        'These aren’t edge cases we work around. They’re the first thing we think about.',
      details: ['Drop-pin delivery', 'Low-bandwidth', 'Mobile-first', 'Local payment rails', 'Offline-tolerant UX'],
    },
    {
      number: '08',
      title: 'Aftercare',
      tagline: 'Three months included. More available.',
      body:
        'Three months of support is included in every project. Bug fixes, minor updates, CMS questions — handled.\n\n' +
        'For ongoing work, a monthly retainer covers feature development, content updates, performance monitoring, and priority support.',
      details: ['Bug fixes', 'Content updates', 'Performance monitoring', 'CMS training', 'Retainer available'],
    },
  ],
  cta: {
    heading: 'Ready to build something your competitors can’t copy?',
    primary: {label: 'START A PROJECT', href: '/contact'},
    secondary: {label: 'SEE PRICING', href: '/pricing'},
  },
};
