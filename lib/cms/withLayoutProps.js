import {getLayoutProps} from './getLayoutProps'

export async function mergeLayoutProps(pageResult) {
  if (!pageResult) return {props: await getLayoutProps()}
  if (pageResult.notFound || pageResult.redirect) return pageResult
  const layout = await getLayoutProps()
  return {
    ...pageResult,
    props: {
      ...layout,
      ...(pageResult.props || {}),
    },
  }
}
