import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'credentialCard',
  title: 'Credential',
  type: 'object',
  fields: [
    defineField({name: 'label', type: 'string', title: 'Label'}),
    defineField({name: 'body', type: 'text', title: 'Body', rows: 3}),
  ],
  preview: {select: {title: 'label'}},
})
