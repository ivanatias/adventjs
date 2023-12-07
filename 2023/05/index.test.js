import { cyberReindeer } from './index'

describe('challenge #5 tests', () => {
  test('should return an array', () => {
    expect(Array.isArray(cyberReindeer('', 0))).toBe(true)
  })

  test('should return expected results', () => {
    const inputs = [
      {
        road: 'S.|.',
        time: 4,
        result: ['S.|.', '.S|.', '.S|.', '.S|.']
      },
      {
        road: 'S..|...|..',
        time: 10,
        result: [
          'S..|...|..',
          '.S.|...|..',
          '..S|...|..',
          '..S|...|..',
          '..S|...|..',
          '...S...*..',
          '...*S..*..',
          '...*.S.*..',
          '...*..S*..',
          '...*...S..'
        ]
      },
      {
        road: 'S.|.|.',
        time: 7,
        result: [
          'S.|.|.',
          '.S|.|.',
          '.S|.|.',
          '.S|.|.',
          '.S|.|.',
          '..S.*.',
          '..*S*.'
        ]
      },
      {
        road: 'S.|..',
        time: 6,
        result: ['S.|..', '.S|..', '.S|..', '.S|..', '.S|..', '..S..']
      },
      {
        road: 'S.|.|.|......|.||.........',
        time: 8,
        result: [
          'S.|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '.S|.|.|......|.||.........',
          '..S.*.*......*.**.........',
          '..*S*.*......*.**.........',
          '..*.S.*......*.**.........'
        ]
      }
    ]

    inputs.forEach(({ road, time, result }) => {
      expect(cyberReindeer(road, time)).toEqual(result)
    })
  })
})
