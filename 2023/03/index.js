// 350 pts
export function findNaughtyStep(original, modified) {
  const toIterate = original.length >= modified.length ? original : modified
  const toCompare = toIterate === original ? modified : original

  for (let i = 0; i < toIterate.length; i++) {
    if (toIterate[i] !== toCompare[i]) return toIterate[i]
  }

  return ''
}
