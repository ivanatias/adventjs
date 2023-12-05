export function countTime(leds) {
  return (
    leds
      .join('')
      .repeat(2)
      .split('1')
      .sort((a, b) => b.length - a.length)[0].length * 7
  )
}
