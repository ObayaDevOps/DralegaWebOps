import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'workPage',
  title: 'Work Index Page',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow (e.g. /WORK — INDEX)'}),
    defineField({name: 'heading', type: 'string', title: 'Heading'}),
    defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
    defineField({name: 'cta', type: 'ctaButton', title: 'Closing CTA'}),
    defineField({name: 'closingNote', type: 'text', title: 'Closing note', rows: 2}),
  ],
  preview: {prepare: () => ({title: 'Work Index Page'})},
})
