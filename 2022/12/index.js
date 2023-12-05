export function selectSleigh(distance, sleighs) {
  const bestSleighs = sleighs.filter(
    sleigh => sleigh.consumption * distance <= 20
  )

  return bestSleighs.length > 0
    ? bestSleighs[bestSleighs.length - 1].name
    : null
}
