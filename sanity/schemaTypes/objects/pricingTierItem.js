import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pricingTierItem',
  title: 'Pricing Tier',
  type: 'object',
  fields: [
    defineField({name: 'number', type: 'string', title: 'Number'}),
    defineField({name: 'name', type: 'string', title: 'Tier name'}),
    defineField({name: 'price', type: 'string', title: 'Price', description: 'e.g. $1,500'}),
    defineField({name: 'priceSuffix', type: 'string', title: 'Price suffix', description: 'e.g. — starting from'}),
    defineField({name: 'bestFor', type: 'string', title: 'Best for'}),
    defineField({name: 'featured', type: 'boolean', title: 'Featured (Most Popular)'}),
    defineField({name: 'includes', type: 'array', title: 'Includes', of: [{type: 'string'}]}),
    defineField({name: 'excludes', type: 'array', title: 'Excludes', of: [{type: 'string'}]}),
    defineField({name: 'cta', type: 'ctaButton', title: 'CTA'}),
  ],
  preview: {select: {title: 'name', subtitle: 'price'}},
})
