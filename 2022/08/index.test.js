import { checkPart } from './index'

describe('challenge #8 tests', () => {
  test('checkPart function returns a boolean', () => {
    expect(typeof checkPart('part')).toBe('boolean')
  })

  test('checkPart function returns true given "uwu" as argument', () => {
    const part = 'uwu'
    expect(checkPart(part)).toBe(true)
  })

  test('checkPart function returns false given "midu" as argument', () => {
    const part = 'midu'
    expect(checkPart(part)).toBe(false)
  })

  test('checkPart function returns true given "lolol" as argument', () => {
    const part = 'lolol'
    expect(checkPart(part)).toBe(true)
  })

  test('checkPart function returns true given "yolooloy" as argument', () => {
    const part = 'yolooloy'
    expect(checkPart(part)).toBe(true)
  })

  test('checkPart function returns true given "zzzoonzzz" as argument', () => {
    const part = 'zzzoonzzz'
    expect(checkPart(part)).toBe(true)
  })
})
