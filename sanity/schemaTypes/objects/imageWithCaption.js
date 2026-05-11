import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'imageWithCaption',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({name: 'image', type: 'image', title: 'Image', options: {hotspot: true}}),
    defineField({name: 'alt', type: 'string', title: 'Alt text'}),
    defineField({name: 'caption', type: 'string', title: 'Caption'}),
  ],
  preview: {select: {title: 'alt', media: 'image'}},
})
