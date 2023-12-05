import { findNaughtyStep } from './index'

describe('challenge #3 tests', () => {
  test('should return a string', () => {
    expect(typeof findNaughtyStep('hello', 'hola')).toBe('string')
  })

  test('should return e letter', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
    expect(findNaughtyStep('abcde', 'abcd')).toBe('e')
  })

  test('should return o letter', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toBe('o')
  })

  test('should return f letter', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
  })

  test('should return empty string', () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toBe('')
  })
})
