import { manufacture } from './index'

describe('challenge #2 tests', () => {
  test('should return an array', () => {
    expect(Array.isArray(manufacture([], ''))).toBe(true)
  })

  test('should return expected result', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa')).toEqual([
      'tren',
      'oso'
    ])
  })

  test('should return an empty array if there are no materials for gifts', () => {
    expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toEqual([])
    expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toEqual([])
  })

  test('should return an empty array if gifts is an empty string', () => {
    expect(manufacture([], 'letras')).toEqual([])
  })
})
