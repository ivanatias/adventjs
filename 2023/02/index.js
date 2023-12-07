// 270 pts
/* function manufacture(gifts, materials) {
  return gifts.filter(gift =>
    gift.split('').every(el => materials.includes(el))
  )
} */

// 390 pts
export function manufacture(gifts, materials) {
  const regex = new RegExp(`^[${materials}]+${'$'}`)
  return gifts.filter(regex.test.bind(regex))
}
