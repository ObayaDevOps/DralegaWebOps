import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'workPage',
  title: 'Work Index Page',
  type: 'document',
  fields: [
    defineField({name: 'heading', type: 'string', title: 'Heading'}),
    defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
  ],
  preview: {prepare: () => ({title: 'Work Index Page'})},
})
