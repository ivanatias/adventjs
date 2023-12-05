import { findFirstRepeated } from './index'

describe('challenge #1 tests', () => {
  test('should return a number', () => {
    expect(typeof findFirstRepeated([])).toBe('number')
  })

  test('should return 3', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
  })

  test('should return 2', () => {
    expect(findFirstRepeated([2, 2])).toBe(2)
  })

  test('should return -1 if there is no repeated number', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toBe(-1)
  })

  test('should return 1', () => {
    expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toBe(1)
  })

  test('should return -1 if array is empty', () => {
    expect(findFirstRepeated([])).toBe(-1)
  })

  test('should return -1', () => {
    expect(findFirstRepeated([10, 20, 30])).toBe(-1)
  })

  test('should return 2', () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toBe(2)
  })

  test('should return 10', () => {
    expect(findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7])).toBe(10)
  })
})
