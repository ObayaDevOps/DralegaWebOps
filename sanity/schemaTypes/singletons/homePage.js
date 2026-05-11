import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      type: 'object',
      title: 'Hero',
      fields: [
        defineField({name: 'heading', type: 'string', title: 'Heading'}),
        defineField({name: 'headingEmphasis', type: 'string', title: 'Heading emphasis word (italicised)'}),
        defineField({name: 'tagline', type: 'string', title: 'Tagline'}),
        defineField({name: 'credential1', type: 'string', title: 'Credential line 1'}),
        defineField({name: 'credential2', type: 'string', title: 'Credential line 2'}),
        defineField({name: 'statusLine1', type: 'string', title: 'Status line 1 (e.g. NOW — Booking Q3 2026)'}),
        defineField({name: 'statusLine2', type: 'string', title: 'Status line 2 (e.g. STATUS — 2 slots open)'}),
        defineField({name: 'statusLine3', type: 'string', title: 'Status line 3 (e.g. NEXT — project ships date)'}),
        defineField({name: 'ctaPrimary', type: 'ctaButton', title: 'Primary CTA'}),
        defineField({name: 'ctaSecondary', type: 'ctaButton', title: 'Secondary CTA'}),
        defineField({name: 'marqueeItems', type: 'array', title: 'Marquee items', of: [{type: 'string'}]}),
      ],
    }),
    defineField({
      name: 'workSection',
      type: 'object',
      title: 'Work Section',
      fields: [
        defineField({name: 'heading', type: 'string', title: 'Heading'}),
      ],
    }),
    defineField({
      name: 'studioSection',
      type: 'object',
      title: 'Studio Section',
      fields: [
        defineField({name: 'body', type: 'text', title: 'Body copy', rows: 4}),
        defineField({
          name: 'stats',
          type: 'array',
          title: 'Stats',
          of: [{type: 'object', fields: [
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'value', type: 'string', title: 'Value'},
          ]}],
        }),
        defineField({
          name: 'capabilities',
          type: 'array',
          title: 'Capabilities',
          of: [{type: 'stackCategory'}],
        }),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Home Page'})},
})
