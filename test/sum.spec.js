const { sum } = require('./sum.js')

describe('sum suite', () => {
  test('Should add 2 positive numbers together and return the result', () => {
    expect(sum(1,2)).toBe(3);
  })
})