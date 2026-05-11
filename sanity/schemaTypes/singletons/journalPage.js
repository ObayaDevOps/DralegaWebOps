import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'journalPage',
  title: 'Journal Index Page',
  type: 'document',
  fields: [
    defineField({name: 'heading', type: 'string', title: 'Heading'}),
    defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
  ],
  preview: {prepare: () => ({title: 'Journal Index Page'})},
})
