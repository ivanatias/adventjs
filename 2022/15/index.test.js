import { decorateTree } from './index'

describe('challenge #15 tests', () => {
  test('decorateTree should return an array', () => {
    expect(Array.isArray(decorateTree('B P R P'))).toBe(true)
  })

  test('decorateTree should return expected outputs', () => {
    const firstResult = ['R', 'P B', 'R B B', 'B P R P']

    const secondResult = ['B', 'B B']

    const thirdResult = [
      'B',
      'R P',
      'B P P',
      'P R B R',
      'P P B B P',
      'B R B B B R',
      'B B P R P R R'
    ]

    const fourthResult = ['R', 'R R', 'P B P', 'R B B R', 'R R P R R']

    const arrayToAssert = [
      { functionCall: decorateTree('B P R P'), expectedResult: firstResult },
      { functionCall: decorateTree('B B'), expectedResult: secondResult },
      {
        functionCall: decorateTree('B B P R P R R'),
        expectedResult: thirdResult
      },
      { functionCall: decorateTree('R R P R R'), expectedResult: fourthResult }
    ]

    arrayToAssert.forEach(({ functionCall, expectedResult }) => {
      expect(functionCall).toEqual(expectedResult)
    })
  })
})
