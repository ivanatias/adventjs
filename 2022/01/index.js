export function wrapping(gifts) {
  const wrapGift = gift => {
    const wrapSymbols = '*'.repeat(gift.length + 2)

    return [wrapSymbols, `*${gift}*`, wrapSymbols].join('\n')
  }

  return gifts.map(wrapGift)
}
