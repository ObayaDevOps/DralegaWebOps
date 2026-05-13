import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({name: 'number', type: 'string', title: 'Number', description: 'e.g. 01'}),
    defineField({name: 'year', type: 'string', title: 'Year'}),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
    }),
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'blurb', type: 'text', title: 'Blurb', rows: 2}),
    defineField({name: 'placeholder', type: 'string', title: 'Placeholder caption (used when no image present)'}),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'span',
      type: 'string',
      title: 'Grid span',
      options: {list: ['wide', 'half', 'third']},
    }),
    defineField({name: 'heroImage', type: 'image', title: 'Hero image', options: {hotspot: true}}),
    defineField({
      name: 'tileImages',
      type: 'array',
      title: 'Tile images',
      description: 'Images that cycle on hover in the work grid. First image shows by default.',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({name: 'brief', type: 'text', title: 'The Brief', rows: 4}),
    defineField({
      name: 'approach',
      type: 'array',
      title: 'The Approach',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'buildDetails',
      type: 'array',
      title: 'The Build',
      of: [{type: 'buildDetail'}],
    }),
    defineField({
      name: 'metrics',
      type: 'array',
      title: 'The Outcome',
      of: [{type: 'metric'}],
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{type: 'imageWithCaption'}],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'year', media: 'heroImage'},
  },
  orderings: [{
    title: 'Project number',
    name: 'numberAsc',
    by: [{field: 'number', direction: 'asc'}],
  }],
})
