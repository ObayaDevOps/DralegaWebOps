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
    defineField({name: 'altEmail', type: 'string', title: 'Alternate email'}),
    defineField({name: 'whatsappLink', type: 'string', title: 'WhatsApp link'}),
    defineField({name: 'whatsappProjectLink', type: 'string', title: 'WhatsApp project enquiry link'}),
    defineField({name: 'calendlyLink', type: 'string', title: 'Calendly booking link'}),
    defineField({name: 'instagramLink', type: 'string', title: 'Instagram link'}),
    defineField({name: 'linkedinLink', type: 'string', title: 'LinkedIn link'}),
    defineField({name: 'location', type: 'string', title: 'Location (long form, e.g. Kampala, Uganda)'}),
    defineField({name: 'city', type: 'string', title: 'City'}),
    defineField({name: 'coords', type: 'string', title: 'Coordinates label (e.g. 00°18′49″N · 32°34′52″E)'}),
    defineField({name: 'navLocation', type: 'string', title: 'Nav location label (e.g. STUDIO · KAMPALA, UG)'}),
    defineField({name: 'studioLabel', type: 'string', title: 'Studio label (footer, e.g. twofivesix studio · Kampala, Uganda)'}),
    defineField({name: 'copyright', type: 'string', title: 'Copyright line'}),
  ],
  preview: {select: {title: 'studioName'}},
})
