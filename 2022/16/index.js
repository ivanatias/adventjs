export function fixLetter(letter) {
  return letter
    .trim()
    .replace(/,\s{0,1}/g, ', ')
    .replace(/\s+/g, ' ')
    .replace(/\s{1}([,.?!])/g, '$1')
    .replace(/([a-z])$/gi, '$1.')
    .replace(/\?+/g, '?')
    .replace(/santa claus/gi, 'Santa Claus')
    .replace(/[?!.]+\s[a-z]|^[a-z]/gi, c => c.toUpperCase())
}
