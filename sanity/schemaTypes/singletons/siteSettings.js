import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'studioName', type: 'string', title: 'Studio name'}),
    defineField({name: 'tagline', type: 'string', title: 'Tagline'}),
    defineField({name: 'metaDescription', type: 'text', title: 'Default meta description', rows: 2}),
    defineField({name: 'email', type: 'string', title: 'Contact email'}),
    defineField({name: 'whatsappLink', type: 'string', title: 'WhatsApp link'}),
    defineField({name: 'calendlyLink', type: 'string', title: 'Calendly booking link'}),
  ],
  preview: {select: {title: 'studioName'}},
})
