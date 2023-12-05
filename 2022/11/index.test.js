import { getCompleted } from './index'

describe('challenge #11 tests', () => {
  test('getCompleted function should return a string', () => {
    expect(typeof getCompleted('01:00:00', '03:00:00')).toBe('string')
  })

  test('getCompleted function should return 1/3', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3')
  })

  test('getCompleted function should return 1/2', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2')
  })

  test('getCompleted function should return 1/1', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1')
  })

  test('getCompleted function should return 1/3', () => {
    expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3')
  })

  test('getCompleted function should return 2/3', () => {
    expect(getCompleted('02:20:20', '03:30:30')).toBe('2/3')
  })

  test('getCompleted function should return 3/5', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5')
  })
})
