// 280 pts
export function decode(message) {
  const regex = /\(([^()]+)\)/
  const match = message.match(regex)

  if (!match) return message

  const reversed = match[1].split('').reverse().join('')
  const replaced = message.replace(regex, reversed)
  const result = decode(replaced)

  return result
}
