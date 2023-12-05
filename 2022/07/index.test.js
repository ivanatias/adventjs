import { getGiftsToRefill } from './index'

describe('challenge #7 tests', () => {
  test('getGiftsToRefill function returns an array', () => {
    expect(Array.isArray(getGiftsToRefill([], [], []))).toBe(true)
  })

  test('getGiftsToRefill function returns ["doll", "pc"]', () => {
    const a1 = ['bike', 'car', 'bike', 'bike']
    const a2 = ['car', 'bike', 'doll', 'car']
    const a3 = ['bike', 'pc', 'pc']

    const expectedOutput = ['doll', 'pc']

    expect(getGiftsToRefill(a1, a2, a3)).toEqual(expectedOutput)
  })

  test('getGiftsToRefill function returns [] when given empty arrays as arguments', () => {
    expect(getGiftsToRefill([], [], [])).toEqual([])
  })

  test('getGiftsToRefill function returns [] when given ["a", "a"], ["a", "a"], ["a", "a"] as arguments', () => {
    const a1 = ['a', 'a']
    const a2 = ['a', 'a']
    const a3 = ['a', 'a']

    expect(getGiftsToRefill(a1, a2, a3)).toEqual([])
  })

  test('getGiftsToRefill function returns ["a", "b", "c"] when given ["a", "a"], ["b", "b"], ["c", "c"] as arguments', () => {
    const a1 = ['a', 'a']
    const a2 = ['b', 'b']
    const a3 = ['c', 'c']

    const expectedOutput = ['a', 'b', 'c']

    expect(getGiftsToRefill(a1, a2, a3)).toEqual(expectedOutput)
  })

  test('getGiftsToRefill function returns ["a", "b", "c", "d", "e", "f"] when given ["a", "b"], ["c", "d"], ["e", "f"] as arguments', () => {
    const a1 = ['a', 'b']
    const a2 = ['c', 'd']
    const a3 = ['e', 'f']

    const expectedOutput = ['a', 'b', 'c', 'd', 'e', 'f']

    expect(getGiftsToRefill(a1, a2, a3)).toEqual(expectedOutput)
  })
})
