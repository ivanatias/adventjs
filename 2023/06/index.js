/*
  260 pts 
  function maxDistance(movements) {
    const leftQty = movements.match(/</g)?.length ?? 0
    const rightQty = movements.match(/>/g)?.length ?? 0

    const valuesDic = {
      '<': -1,
      '>': 1,
      '*': leftQty > rightQty ? -1 : 1
    }

    return Math.abs(
      movements
        .split('')
        .map(c => valuesDic[c])
        .reduce((curr, acc) => (acc += curr), 0)
    )
} 
*/

// 380 pts
export function maxDistance(movements) {
  const leftQty = movements.match(/</g)?.length ?? 0
  const rightQty = movements.match(/>/g)?.length ?? 0

  const valuesDic = {
    '<': -1,
    '>': 1,
    '*': leftQty > rightQty ? -1 : 1
  }

  let result = 0

  for (const m of movements) {
    result += valuesDic[m]
  }

  return Math.abs(result)
}
