export function decorateTree(base) {
  const result = [base.split(' ')]
  const baseCopyMinusOne = base.split(' ').slice(0, -1)

  const formula = {
    BP: 'R',
    PB: 'R',
    RP: 'B',
    PR: 'B',
    BR: 'P',
    RB: 'P',
    BB: 'B',
    PP: 'P',
    RR: 'R'
  }

  baseCopyMinusOne.forEach((_, i) => {
    const temp = []
    result[i].forEach((_, j) => {
      result[i][j + 1] !== undefined &&
        temp.push(formula[result[i][j] + result[i][j + 1]])
    })

    result.push(temp)
  })

  return result.reverse().map(e => e.join(' '))
}
