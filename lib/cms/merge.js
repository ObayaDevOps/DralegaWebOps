export function present(v) {
  if (v === undefined || v === null) return false
  if (typeof v === 'string') return v.length > 0
  if (Array.isArray(v)) return v.length > 0
  if (typeof v === 'object') return Object.keys(v).length > 0
  return true
}

export function pick(sanity, fallback) {
  const v = present(sanity) ? sanity : fallback
  return v === undefined ? null : v
}

function isPlainObject(v) {
  return v !== null && typeof v === 'object' && !Array.isArray(v)
}

export function mergeObj(sanity, fallback) {
  if (!isPlainObject(fallback)) return pick(sanity, fallback)
  if (!isPlainObject(sanity)) {
    if (present(sanity)) return sanity
    return fallback === undefined ? null : fallback
  }

  const out = {}
  const keys = new Set([...Object.keys(fallback), ...Object.keys(sanity)])
  for (const k of keys) {
    const s = sanity[k]
    const f = fallback[k]
    let v
    if (isPlainObject(f) || isPlainObject(s)) {
      v = mergeObj(s, f)
    } else {
      v = pick(s, f)
    }
    if (v === undefined) v = null
    out[k] = v
  }
  return out
}
