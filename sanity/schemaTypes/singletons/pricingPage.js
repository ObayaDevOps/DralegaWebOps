import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingPage',
  title: 'Pricing Page',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow'}),
    defineField({name: 'heading', type: 'string', title: 'Heading line 1'}),
    defineField({name: 'headingEmphasis', type: 'string', title: 'Heading emphasis (italicised)'}),
    defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
    defineField({
      name: 'tiers',
      type: 'array',
      title: 'Pricing tiers',
      of: [{type: 'pricingTierItem'}],
    }),
    defineField({
      name: 'allTiersInclude',
      type: 'array',
      title: 'All tiers include',
      of: [{type: 'string'}],
    }),
    defineField({name: 'studentNote', type: 'text', title: 'Student/university note', rows: 2}),
    defineField({
      name: 'cta',
      type: 'object',
      title: 'CTA section',
      fields: [
        defineField({name: 'heading', type: 'string', title: 'Heading'}),
        defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
        defineField({name: 'primary', type: 'ctaButton', title: 'CTA'}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Pricing Page'})},
})
