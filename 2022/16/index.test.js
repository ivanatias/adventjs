import { fixLetter } from './index'

describe('challenge #16 tests', () => {
  test('fixLetter should return a string', () => {
    expect(
      typeof fixLetter(
        ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
      )
    ).toBe('string')
  })

  test('fixLetter should return correct results', () => {
    const firstResult =
      'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
    const secondResult =
      "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
    const thirdResult = 'Hi Santa Claus.'
    const fourthResult = 'Hi Santa Claus. Santa Claus is the best.'
    const fifthResult = 'Hi, Santa Claus. Are you there?'
    const sixthResult = 'Hey Santa Claus. I want a bike. I want a videogame!'

    const arrayToAssert = [
      {
        functionCall: fixLetter(
          ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
        ),
        expectedResult: firstResult
      },
      {
        functionCall: fixLetter(
          "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
        ),
        expectedResult: secondResult
      },
      {
        functionCall: fixLetter('  hi    santa    claus '),
        expectedResult: thirdResult
      },
      {
        functionCall: fixLetter(
          '  hi    santa    claus . santa claus is the best  '
        ),
        expectedResult: fourthResult
      },
      {
        functionCall: fixLetter('  hi,santa claus. are you there ?   '),
        expectedResult: fifthResult
      },
      {
        functionCall: fixLetter(
          'Hey santa Claus .  I want a bike.   I want a videogame! '
        ),
        expectedResult: sixthResult
      }
    ]

    arrayToAssert.forEach(({ functionCall, expectedResult }) => {
      expect(functionCall).toEqual(expectedResult)
    })
  })
})
