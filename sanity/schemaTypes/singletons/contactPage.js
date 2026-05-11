import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({name: 'heading', type: 'string', title: 'Heading'}),
    defineField({name: 'subheading', type: 'string', title: 'Subheading'}),
    defineField({
      name: 'methods',
      type: 'array',
      title: 'Contact methods',
      of: [{
        type: 'object',
        fields: [
          {name: 'number', type: 'string', title: 'Number'},
          {name: 'label', type: 'string', title: 'Label'},
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'body', type: 'text', title: 'Body', rows: 3},
          {name: 'cta', type: 'ctaButton', title: 'CTA'},
        ],
        preview: {select: {title: 'label'}},
      }],
    }),
    defineField({
      name: 'briefSection',
      type: 'object',
      title: 'Brief form section',
      fields: [
        defineField({name: 'heading', type: 'string', title: 'Heading'}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Contact Page'})},
})
