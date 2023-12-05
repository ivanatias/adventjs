import { checkJump } from './index'

describe('challenge #10 tests', () => {
  test('checkJump function should return a boolean', () => {
    expect(typeof checkJump([1, 3, 8, 5, 2])).toBe('boolean')
  })

  test('checkJump function should return true given [1, 2, 1] as argument', () => {
    expect(checkJump([1, 2, 1])).toBe(true)
  })

  test('checkJump function should return true given [1, 3, 8, 5, 2] as argument', () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
  })

  test('checkJump function should return false given [1, 7, 3, 5] as argument', () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false)
  })

  test('checkJump function should return true given [1, 2, 3, 2, 1] as argument', () => {
    expect(checkJump([1, 2, 3, 2, 1])).toBe(true)
  })

  test('checkJump function should return true given [1, 2, 2, 2, 1] as argument', () => {
    expect(checkJump([1, 2, 2, 2, 1])).toBe(true)
  })

  test('checkJump function should return true given [0, 1, 0] as argument', () => {
    expect(checkJump([0, 1, 0])).toBe(true)
  })

  test('checkJump function should return false given [2, 2, 2, 2] as argument', () => {
    expect(checkJump([2, 2, 2, 2])).toBe(false)
  })

  test('checkJump function should return false given [1, 2, 3] as argument', () => {
    expect(checkJump([1, 2, 3])).toBe(false)
  })

  test('checkJump function should return false given [1, 2, 3, 2, 1, 2, 3] as argument', () => {
    expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
  })

  test('checkJump function should return true given [1, 1000, 900, 800] as argument', () => {
    expect(checkJump([1, 1000, 900, 800])).toBe(true)
  })

  test('checkJump function should return false given [1, 1000, 100, 800] as argument', () => {
    expect(checkJump([1, 1000, 100, 800])).toBe(false)
  })

  test('checkJump function should return true given [1, 1, 1, 1, 1, 1, 1, 1, 2, 1] as argument', () => {
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true)
  })

  test('checkJump function should return false given [1, 2, 3, 1, 3, 1] as argument', () => {
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
  })

  test('checkJump function should return false given [1, 3, 2, 5, 4, 3, 2, 1] as argument', () => {
    expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBe(false)
  })
})
