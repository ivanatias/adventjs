import { fitsInOneBox } from './index'

describe('challenge #4 tests', () => {
  test('fitsInOneBox function returns a boolean', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ]

    const returnedValue = fitsInOneBox(boxes)
    expect(typeof returnedValue).toBe('boolean')
  })

  test('fitsInOneBox function returns false', () => {
    const firstBoxesGroup = [
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 }
    ]

    const secondBoxesGroup = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ]

    const thirdBoxesGroup = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 }
    ]

    expect(fitsInOneBox(firstBoxesGroup)).toBe(false)
    expect(fitsInOneBox(secondBoxesGroup)).toBe(false)
    expect(fitsInOneBox(thirdBoxesGroup)).toBe(false)
  })

  test('fitsInOneBox function returns true', () => {
    const firstBoxesGroup = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ]

    const secondBoxesGroup = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ]

    expect(fitsInOneBox(firstBoxesGroup)).toBe(true)
    expect(fitsInOneBox(secondBoxesGroup)).toBe(true)
  })
})
