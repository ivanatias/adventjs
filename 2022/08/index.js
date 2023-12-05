export function checkPart(part) {
  const reverse = str => [...str].reverse().join('')

  if (reverse(part) === part) return true

  return [...part].some((_, index) => {
    const slicedPart = part.substring(0, index) + part.substring(index + 1)
    return slicedPart === reverse(slicedPart)
  })
}
