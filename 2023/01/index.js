// 360 pts
export function findFirstRepeated(gifts) {
  const setArr = [...new Set(gifts)]
  const index = gifts.findIndex((gift, i) => gift !== setArr[i])
  return gifts[index] ?? -1
}
