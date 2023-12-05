import { getFilesToBackup } from './index'

describe('challenge #13 tests', () => {
  test('getFilesToBackup function should return an array', () => {
    const lastBackup = 1546300800

    const changes = [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000]
    ]

    expect(Array.isArray(getFilesToBackup(lastBackup, changes))).toBe(true)
  })

  test('getFilesToBackup function should return [1, 3]', () => {
    const lastBackup = 1546300800

    const changes = [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000]
    ]

    expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 3])
  })

  test('getFilesToBackup function should return [1, 2, 3]', () => {
    const lastBackup = 1546300600

    const changes = [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ]
    expect(getFilesToBackup(lastBackup, changes)).toEqual([1, 2, 3])
  })

  test('getFilesToBackup function should return []', () => {
    const lastBackup = 1556300600

    const changes = [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ]

    expect(getFilesToBackup(lastBackup, changes)).toEqual([])
  })

  test('getFilesToBackup function should return []', () => {
    const lastBackup = 1556300600

    const changes = []

    expect(getFilesToBackup(lastBackup, changes)).toEqual([])
  })
})
