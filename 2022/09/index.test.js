import { countTime } from './index'

describe('challenge #9 tests', () => {
  test('countTime function should return a number', () => {
    expect(typeof countTime([0, 1, 0])).toBe('number')
  })

  test('countTime function should return 7 given [0, 1, 1, 0, 1] as argument', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
  })

  test('countTime function should return 21 given [0, 0, 0, 1] as argument', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21)
  })

  test('countTime function should return 28 given [0, 0, 1, 0, 0] as argument', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
  })

  test('countTime function should return 14 given [1, 0, 0, 1, 0, 0] as argument', () => {
    expect(countTime([1, 0, 0, 1, 0, 0])).toBe(14)
  })

  test('countTime function should return 28 given [1, 1, 0, 0, 0, 0] as argument', () => {
    expect(countTime([1, 1, 0, 0, 0, 0])).toBe(28)
  })

  test('countTime function should return 0 given [1, 1, 1] as argument', () => {
    expect(countTime([1, 1, 1])).toBe(0)
  })
})
