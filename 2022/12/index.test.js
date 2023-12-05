import { selectSleigh } from './index'

describe('challenge #12 tests', () => {
  test('selectSleigh function should return a string', () => {
    const distance = 30
    const sleighs = [
      { name: 'Gorusuke', consumption: 0.3 },
      { name: 'Madeval', consumption: 0.5 },
      { name: 'Lolivier', consumption: 0.7 },
      { name: 'Hyuuh', consumption: 1 }
    ]

    expect(typeof selectSleigh(distance, sleighs)).toBe('string')
  })

  test('selectSleigh function should return "TMChein"', () => {
    const distance = 1
    const sleighs = [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe('TMChein')
  })

  test('selectSleigh function should return "Pedrosillano"', () => {
    const distance = 10
    const sleighs = [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe('Pedrosillano')
  })

  test('selectSleigh function should return "SamarJaffal"', () => {
    const distance = 10
    const sleighs = [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe('SamarJaffal')
  })

  test('selectSleigh function should return null', () => {
    const distance = 50
    const sleighs = [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe(null)
  })
})
