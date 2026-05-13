import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow'}),
    defineField({name: 'heading', type: 'string', title: 'Heading line 1'}),
    defineField({name: 'headingEmphasis', type: 'string', title: 'Heading emphasis (italicised)'}),
    defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{type: 'serviceItem'}],
    }),
    defineField({
      name: 'cta',
      type: 'object',
      title: 'CTA section',
      fields: [
        defineField({name: 'heading', type: 'string', title: 'Heading'}),
        defineField({name: 'primary', type: 'ctaButton', title: 'Primary CTA'}),
        defineField({name: 'secondary', type: 'ctaButton', title: 'Secondary CTA'}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Services Page'})},
})
