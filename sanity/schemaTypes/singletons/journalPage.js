import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'journalPage',
  title: 'Journal Index Page',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow'}),
    defineField({name: 'heading', type: 'string', title: 'Heading line 1'}),
    defineField({name: 'headingEmphasis', type: 'string', title: 'Heading emphasis (italicised)'}),
    defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
  ],
  preview: {prepare: () => ({title: 'Journal Index Page'})},
})
