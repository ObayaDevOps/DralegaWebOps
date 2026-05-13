import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow'}),
    defineField({name: 'heading', type: 'string', title: 'Heading line 1'}),
    defineField({name: 'headingEmphasis', type: 'string', title: 'Heading emphasis (italicised line 2)'}),
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
        defineField({name: 'eyebrow', type: 'string', title: 'Eyebrow'}),
        defineField({name: 'heading', type: 'string', title: 'Heading line 1'}),
        defineField({name: 'headingEmphasis', type: 'string', title: 'Heading emphasis (italicised)'}),
        defineField({name: 'budgetOptions', type: 'array', title: 'Budget options', of: [{type: 'string'}]}),
        defineField({name: 'submitLabel', type: 'string', title: 'Submit button label'}),
        defineField({name: 'successMessage', type: 'text', title: 'Success message', rows: 2}),
      ],
    }),
  ],
  preview: {prepare: () => ({title: 'Contact Page'})},
})
