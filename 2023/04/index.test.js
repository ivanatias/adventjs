import { decode } from './index'

describe('challenge #4 tests', () => {
  test('should return a string', () => {
    expect(typeof decode('')).toBe('string')
  })

  test('should return hola mundo', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
  })

  test('should return hello world!', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
  })

  test('should return santaclaus', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
  })

  test('should return santa', () => {
    expect(decode('((nta)(sa))')).toBe('santa')
  })
})
