export function createCube(size) {
  const topOpener = '/\\'
  const bottomOpener = '\\/'
  const topFiller = '_\\'
  const bottomFiller = '_/'
  const spacer = ' '

  const cubeTop = []
  const cubeBottom = []

  for (let i = 0; i < size; i++) {
    cubeTop.push(
      spacer.repeat(size - i - 1) +
        topOpener.repeat(i + 1) +
        topFiller.repeat(size)
    )
    cubeBottom.push(
      spacer.repeat(i) +
        bottomOpener.repeat(size - i) +
        bottomFiller.repeat(size)
    )
  }

  return cubeTop.concat(cubeBottom).join('\n')
}
