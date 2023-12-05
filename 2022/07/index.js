export function getGiftsToRefill(a1, a2, a3) {
  return [...new Set(a1), ...new Set(a2), ...new Set(a3)].filter(
    (_, index, array) => {
      const arrayCopy = [...array]
      const [removedElement] = arrayCopy.splice(index, 1)
      return !arrayCopy.includes(removedElement)
    }
  )
}
