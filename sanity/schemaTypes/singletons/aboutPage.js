import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow'}),
    defineField({name: 'heading', type: 'string', title: 'Heading line 1'}),
    defineField({name: 'headingEmphasis', type: 'string', title: 'Heading emphasis (italicised)'}),
    defineField({name: 'photo', type: 'image', title: 'Photo', options: {hotspot: true}}),
    defineField({name: 'photoCaption', type: 'string', title: 'Photo caption'}),
    defineField({name: 'intro', type: 'text', title: 'Intro (large opening line)', rows: 2}),
    defineField({name: 'body', type: 'array', title: 'Body copy', of: [{type: 'block'}]}),
    defineField({name: 'closer', type: 'string', title: 'Closer line (italic)'}),
    defineField({
      name: 'credentials',
      type: 'array',
      title: 'Credentials',
      of: [{type: 'credentialCard'}],
    }),
    defineField({
      name: 'stack',
      type: 'array',
      title: 'Stack categories',
      of: [{type: 'stackCategory'}],
    }),
    defineField({
      name: 'clients',
      type: 'array',
      title: 'Clients list',
      of: [{type: 'string'}],
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
  preview: {prepare: () => ({title: 'About Page'})},
})
