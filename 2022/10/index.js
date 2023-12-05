export function checkJump(heights) {
  const maxNumberIndex = heights.indexOf(Math.max(...heights))
  const leftHalf = heights.splice(0, maxNumberIndex)

  const leftCondition = leftHalf
    .slice(1)
    .every((e, index) => e >= leftHalf[index])
  const rightCondition = heights
    .slice(1)
    .every((e, index) => e <= heights[index])

  return (
    leftCondition &&
    rightCondition &&
    Boolean(leftHalf.length) &&
    heights.length > 1
  )
}
