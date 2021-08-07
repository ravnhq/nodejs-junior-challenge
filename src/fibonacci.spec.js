const fibonacci = require("./fibonacci")
const { fibonacciSerie } = require("./mocks/fibonacci.mocks")

describe('fibonacci challenge', () => {
  it('should return 10 fibonacci numbers', () => {
    const fibonacciNumbers = fibonacci(10)
    expect(fibonacciNumbers).toHaveProperty('length', 10)
    expect(fibonacciNumbers).toEqual(fibonacciSerie.slice(0, 10))
  })
  it('should return 20 fibonacci numbers', () => {
    const fibonacciNumbers = fibonacci(20)
    expect(fibonacciNumbers).toHaveProperty('length', 20)
    expect(fibonacciNumbers).toEqual(fibonacciSerie.slice(0, 20))
  })
  it('should return 30 fibonacci numbers', () => {
    const fibonacciNumbers = fibonacci(30)
    expect(fibonacciNumbers).toHaveProperty('length', 30)
    expect(fibonacciNumbers).toEqual(fibonacciSerie.slice(0, 30))
  })
})
