import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'metric',
  title: 'Metric',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', title: 'Label', description: 'e.g. Lighthouse'}),
    defineField({name: 'value', type: 'string', title: 'Value', description: 'e.g. 95+'}),
  ],
  preview: {select: {title: 'label', subtitle: 'value'}},
})
