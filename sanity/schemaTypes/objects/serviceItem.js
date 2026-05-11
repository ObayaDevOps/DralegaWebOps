import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'serviceItem',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({name: 'number', type: 'string', title: 'Number', description: 'e.g. 01'}),
    defineField({name: 'title', type: 'string', title: 'Title'}),
    defineField({name: 'tagline', type: 'string', title: 'Tagline'}),
    defineField({name: 'body', type: 'text', title: 'Body', rows: 6}),
    defineField({name: 'details', type: 'array', title: 'Details', of: [{type: 'string'}]}),
  ],
  preview: {select: {title: 'title', subtitle: 'tagline'}},
})
