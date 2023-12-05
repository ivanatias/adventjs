import { getOptimalPath } from './index'

describe('challenge #14 tests', () => {
  test('getOptimalPath should return a number', () => {
    expect(typeof getOptimalPath([[0], [2, 3]])).toBe('number')
  })

  test('getOptimalPath should return 8', () => {
    expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toBe(8)
  })

  test('getOptimalPath should return 2', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
  })

  test('getOptimalPath should return 5', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
  })

  test('getOptimalPath should return 8', () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
  })

  test('getOptimalPath should return 7', () => {
    expect(
      getOptimalPath([
        [1],
        [1, 5],
        [7, 5, 8],
        [9, 4, 1, 3],
        [-1, -1, -1, -1, -1]
      ])
    ).toBe(7)
  })
})
