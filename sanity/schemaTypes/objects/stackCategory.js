import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'stackCategory',
  title: 'Stack Category',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', title: 'Label', description: 'e.g. BUILD, PAYMENTS'}),
    defineField({name: 'items', type: 'array', title: 'Items', of: [{type: 'string'}]}),
  ],
  preview: {select: {title: 'label'}},
})
