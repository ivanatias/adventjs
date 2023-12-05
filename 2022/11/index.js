export function getCompleted(part, total) {
  const partToSeconds = part
    .split(':')
    .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)
  const totalToSeconds = total
    .split(':')
    .reduce((acc, curr, i) => acc + curr * 60 ** (2 - i), 0)

  let a = partToSeconds
  let b = totalToSeconds

  while (b) {
    const t = b
    b = a % b
    a = t
  }

  return `${partToSeconds / a}/${totalToSeconds / a}`
}
