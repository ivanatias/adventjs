import { maxDistance } from './index'

describe('challenge #6 tests', () => {
  test('should return a number', () => {
    expect(typeof maxDistance('')).toBe('number')
  })

  test('should return 2', () => {
    expect(maxDistance('>>*<')).toBe(2)
    expect(maxDistance('<<**>>')).toBe(2)
  })

  test('should return 5', () => {
    expect(maxDistance('<<<<<')).toBe(5)
    expect(maxDistance('>***>')).toBe(5)
  })

  test('should return 10', () => {
    expect(maxDistance('**********')).toBe(10)
  })
})
