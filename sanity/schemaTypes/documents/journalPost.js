import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'journalPost',
  title: 'Journal',
  type: 'document',
  fields: [
    defineField({name: 'number', type: 'string', title: 'Number'}),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
    }),
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'date', type: 'date', title: 'Date'}),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({name: 'blurb', type: 'text', title: 'Blurb', rows: 2}),
    defineField({name: 'readTime', type: 'number', title: 'Read time (minutes)'}),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'date'},
  },
  orderings: [{
    title: 'Newest first',
    name: 'dateDesc',
    by: [{field: 'date', direction: 'desc'}],
  }],
})
