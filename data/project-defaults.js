function block(text) {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2),
    style: 'normal',
    children: [{_type: 'span', text, marks: []}],
    markDefs: [],
  };
}

export const PROJECT_DEFAULTS = {
  brief:
    'The client needed a site that could compete with international work while operating in the Ugandan market. ' +
    'Clear information architecture, fast load times, and payment rails that actually work locally.',
  approach: [
    block(
      'We started with the user journey — specifically how a Ugandan customer moves from discovery to checkout. ' +
      'Most templates assume Western infrastructure. This site was built from first principles.',
    ),
    block(
      'The design direction was editorial: generous whitespace, a restrained type palette, and deliberate ' +
      'scale shifts between display and body type. No decoration for its own sake.',
    ),
    block(
      'Every technical decision was made to serve the user first, the brand second, and the developer last. ' +
      'The stack is boring on purpose — stable, fast, and maintainable.',
    ),
  ],
  buildDetails: [
    {key: 'Framework', value: 'Next.js'},
    {key: 'CMS', value: 'Sanity'},
    {key: 'Payments', value: 'Pesapal'},
    {key: 'Hosting', value: 'Vercel'},
    {key: 'Images', value: 'Cloudinary'},
    {key: 'Analytics', value: 'Vercel Analytics'},
  ],
  metrics: [
    {label: 'Lighthouse', value: '95+'},
    {label: 'LCP', value: '< 1.4s'},
    {label: 'Mobile-first', value: '100%'},
  ],
  gallery: [
    {caption: 'desktop — full', placeholder: true, span: 'wide'},
    {caption: 'mobile', placeholder: true},
    {caption: 'detail', placeholder: true},
    {caption: 'context', placeholder: true},
  ],
};

export function buildDetailsForTags(tags = []) {
  const base = [...PROJECT_DEFAULTS.buildDetails];
  const paymentsIdx = base.findIndex((d) => d.key === 'Payments');
  if (paymentsIdx >= 0) {
    base[paymentsIdx] = {
      key: 'Payments',
      value: tags.includes('PESAPAL')
        ? 'Pesapal + MTN MoMo'
        : tags.includes('SHOPIFY')
          ? 'Shopify + Pesapal'
          : 'Pesapal',
    };
  }
  return base;
}
