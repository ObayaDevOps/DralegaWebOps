import {createImageUrlBuilder} from '@sanity/image-url'
import {client} from './sanityClient'

const builder = createImageUrlBuilder(client)

function isStringSource(source) {
  return typeof source === 'string' && (source.startsWith('/') || source.startsWith('http'))
}

export function urlFor(source) {
  if (!source) return null
  if (isStringSource(source)) return {url: () => source, width: () => ({url: () => source})}
  return builder.image(source)
}

export function urlForImage(source, opts = {}) {
  if (!source) return null
  if (isStringSource(source)) return source
  let b = builder.image(source).auto('format').fit(opts.fit || 'max').quality(opts.quality || 85)
  if (opts.width) b = b.width(opts.width)
  if (opts.height) b = b.height(opts.height)
  return b.url()
}
