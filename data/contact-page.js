export const CONTACT_PAGE = {
  eyebrow: '/CONTACT',
  heading: 'Let’s build',
  headingEmphasis: 'something.',
  subheading: 'Three ways to start. Pick whichever feels natural.',
  methods: [
    {
      number: '/01 — CALL',
      label: 'CALL',
      title: 'Book a 20-minute call',
      body:
        'One call. We figure out what you’re actually trying to do. No pitch, no deck, no pressure. ' +
        'Book a slot that works for you.',
      cta: {label: 'BOOK A SLOT', href: 'https://calendly.com/twofivesix/20min', filled: true},
    },
    {
      number: '/02 — WHATSAPP',
      label: 'WHATSAPP',
      title: 'Message on WhatsApp',
      body:
        'The fastest way to reach us. Drop a message and we’ll respond within a few hours. ' +
        'The conversation is already built into your workflow.',
      cta: {label: 'OPEN WHATSAPP', href: 'https://wa.me/256789062116?text=Hi+twofivesix%2C+I%27d+like+to+talk+about+a+project'},
    },
    {
      number: '/03 — EMAIL',
      label: 'EMAIL',
      title: 'Send an email',
      body: 'Prefer email? We read everything. Response within 24 hours on working days.',
      cta: {label: 'SEND EMAIL', href: 'mailto:hello@twofivesix.online'},
    },
  ],
  briefSection: {
    eyebrow: '/SEND A BRIEF',
    heading: 'Tell us what you’re',
    headingEmphasis: 'building.',
    budgetOptions: ['Under $1,500', '$1,500 — $3,500', '$3,500 — $7,500', '$7,500+', "Let's discuss"],
    submitLabel: 'SEND BRIEF',
    successMessage: 'Brief received. We’ll be in touch within 24 hours.',
  },
};
