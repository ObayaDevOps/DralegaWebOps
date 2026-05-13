import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ctaButton',
  title: 'CTA Button',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', title: 'Label'}),
    defineField({name: 'href', type: 'string', title: 'URL'}),
  ],
  preview: {select: {title: 'label', subtitle: 'href'}},
})
