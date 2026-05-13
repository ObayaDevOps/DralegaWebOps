import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'buildDetail',
  title: 'Build Detail',
  type: 'object',
  fields: [
    defineField({name: 'key', type: 'string', title: 'Key', description: 'e.g. Framework, CMS'}),
    defineField({name: 'value', type: 'string', title: 'Value'}),
  ],
  preview: {select: {title: 'key', subtitle: 'value'}},
})
