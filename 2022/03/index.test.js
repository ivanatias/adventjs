import { distributeGifts } from './index'

describe('challenge #3 tests', () => {
  test('distributeGifts function returns a number', () => {
    const packOfGifts = ['car', 'bike']
    const reindeers = ['rudolph']

    const returnedValue = distributeGifts(packOfGifts, reindeers)
    expect(typeof returnedValue).toBe('number')
  })

  test('distributeGifts function returns 2 pack of gifts', () => {
    const packOfGifts = ['book', 'doll', 'ball']
    const reindeers = ['dasher', 'dancer']

    const returnedValue = distributeGifts(packOfGifts, reindeers)
    expect(returnedValue).toBe(2)
  })

  test('distributeGifts function returns 1 pack of gifts', () => {
    const packOfGifts = ['a', 'b', 'c']
    const reindeers = ['d', 'e']

    const returnedValue = distributeGifts(packOfGifts, reindeers)
    expect(returnedValue).toBe(1)
  })

  test('distributeGifts function returns 0 if reindeers can not carry any pack', () => {
    const packOfGifts = ['videogames', 'console']
    const reindeers = ['midu']

    const returnedValue = distributeGifts(packOfGifts, reindeers)
    expect(returnedValue).toBe(0)
  })

  test('distributeGifts function returns 5 packs of gifts', () => {
    const packOfGifts = ['game', 'videoconsole', 'computer']
    const reindeers = [
      'midudev',
      'pheralb',
      'codingwithdani',
      'carlosble',
      'blasco',
      'facundocapua',
      'madeval',
      'memxd'
    ]

    const returnedValue = distributeGifts(packOfGifts, reindeers)
    expect(returnedValue).toBe(5)
  })

  test('distributeGifts function returns 26 packs of gifts', () => {
    const packOfGifts = ['music']
    const reindeers = [
      'midudev',
      'pheralb',
      'codingwithdani',
      'carlosble',
      'blasco',
      'facundocapua',
      'madeval',
      'memxd'
    ]

    const returnedValue = distributeGifts(packOfGifts, reindeers)
    expect(returnedValue).toBe(26)
  })
})
