import { createCube } from './index'

describe('challenge #6 tests', () => {
  test('createCube function returns a string', () => {
    expect(typeof createCube(1)).toBe('string')
  })

  test('createCube function returns expected output with a size of 3 as input', () => {
    const expectedOut =
      '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/'

    expect(createCube(3)).toEqual(expectedOut)
  })

  test('createCube function returns expected output with a size of 1 as input', () => {
    const expectedOutput = '/\\_\\\n\\/_/'

    expect(createCube(1)).toEqual(expectedOutput)
  })

  test('createCube function returns expected output with a size of 2 as input', () => {
    const expectedOut = ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/'

    expect(createCube(2)).toEqual(expectedOut)
  })

  test('createCube function returns expected output with a size of 10 as input', () => {
    const expectedOut =
      '         /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n        /\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n       /\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n      /\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n     /\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n    /\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n   /\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n  /\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n /\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n \\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n  \\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n   \\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n    \\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n     \\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n      \\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n       \\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n        \\/\\/_/_/_/_/_/_/_/_/_/_/\n         \\/_/_/_/_/_/_/_/_/_/_/'

    expect(createCube(10)).toEqual(expectedOut)
  })
})
