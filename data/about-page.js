function block(text) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2),
    style: 'normal',
    children: [{_type: 'span', text, marks: []}],
    markDefs: [],
  };
}

export const ABOUT_PAGE = {
  eyebrow: '/ABOUT',
  heading: 'One studio.',
  headingEmphasis: 'Two practices.',
  photoCaption: 'Obaya Dralega · Kampala',
  intro: 'twofivesix is a one-person studio in Kampala, run by Obaya Dralega.',
  body: [
    block(
      'The studio sits at an unusual intersection. Obaya is a founding member of Afropocene StudioLab, Uganda’s leading ' +
      'contemporary artists collective, supported by the United Nations Development Programme. He is also a former ' +
      'Assistant Vice President, Software Developer at a global bank managing over $7 trillion in assets.',
    ),
    block(
      'Most studios pick a side — design or engineering, art or industry. twofivesix doesn’t. The bank job taught ' +
      'discipline: software at scale isn’t about clever code, it’s about reliability, security, and the boring details ' +
      'customers never see but always feel. The artist’s practice teaches the opposite lesson: the things customers do see — ' +
      'the typography, the rhythm, the colour, the restraint — are not decoration. They are the product.',
    ),
    block(
      'twofivesix brings both standards to Ugandan businesses. Every checkout is treated like it’s moving real money, ' +
      'because it is. Every page is treated like it’s an exhibition, because it should be.',
    ),
  ],
  closer:
    'We work with a small number of clients each year. We don’t take on work we can’t do well.',
  credentials: [
    {label: 'Engineer', body: 'Former AVP Software Developer, global bank — $7T in assets under management. Electronic bond trading, real-time FX risk, equity derivatives pricing.'},
    {label: 'Artist', body: 'Founding member of Afropocene StudioLab — Uganda’s leading contemporary artists collective. Supported by the United Nations Development Programme.'},
    {label: 'Builder', body: 'Over 40 projects shipped since 2021. E-commerce, hospitality, healthcare, finance, arts. All built to last.'},
    {label: 'Educator', body: 'Trained clients on Sanity CMS, payment integrations, and SEO fundamentals. The work doesn’t end at launch.'},
  ],
  stack: [
    {label: 'BUILD', items: ['Next.js', 'TypeScript', 'React', 'Postgres', 'Headless CMS', 'Sanity']},
    {label: 'PAYMENTS', items: ['Pesapal', 'DPO', 'MTN MoMo', 'Airtel Money', 'Shopify', 'PayPal']},
    {label: 'DESIGN', items: ['Brand systems', 'Editorial type', 'Motion', 'Art direction', 'Figma']},
    {label: 'GROW', items: ['SEO (PR 95+)', 'GEO / LLM indexing', 'Analytics', 'WhatsApp', 'Performance']},
  ],
  clients: [
    'Med-Optics Vision Centre', 'Afropocene StudioLab', 'Yujo Izakaya', 'Little Kobe Japanese Market',
    'Great Outdoors Resort', 'Nekosero', 'Ashton & Carrington', 'Tax Edge', 'People & Potential', 'Humble Beeing Honey',
  ],
  cta: {
    heading: 'Ready to build something worth remembering?',
    primary: {label: 'START A PROJECT', href: '/contact'},
    secondary: {label: 'SEE THE WORK', href: '/work'},
  },
};
