import { wrapping } from './index'

describe('challenge #1 tests', () => {
  test('wrapping function returns an array', () => {
    const returnedValue = wrapping([])
    expect(Array.isArray(returnedValue)).toBe(true)
  })

  test('wrapping function returns valid output given an array of 3 strings as argument', () => {
    const gifts = ['cat', 'game', 'socks']

    const expectedOutput = [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ]

    expect(wrapping(gifts)).toEqual(expectedOutput)
  })

  test('wrapping function returns valid output given an array of 1 string as argument', () => {
    const gift = ['midu']

    const expectedOutput = ['******\n*midu*\n******']

    expect(wrapping(gift)).toEqual(expectedOutput)
  })

  test('wrapping function returns valid output given an array of 1 string with 1 character as argument', () => {
    const gift = ['a']

    const expectedOutput = ['***\n*a*\n***']

    expect(wrapping(gift)).toEqual(expectedOutput)
  })

  test('wrapping function returns empty array given an empty array as argument', () => {
    expect(wrapping([])).toEqual([])
  })
})
