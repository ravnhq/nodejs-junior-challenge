const callsCost = require("./calls-cost")
const fibonacci = require("./fibonacci")
const { calls } = require("./mocks/challenges.mocks")
const { fibonacciSerie } = require("./mocks/tests.mocks")

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

describe('calls challenge', () => {
  it('should process calls array', () => {
    const callsOperation1 = callsCost(calls.slice(0, 5))
    const callsOperation2 = callsCost(calls)

    expect(callsOperation1).toHaveProperty('totalCalls', 5)
    expect(callsOperation1).toHaveProperty('callsDetails')
    expect(callsOperation1).toHaveProperty('total', 65.74)
    callsOperation1.callsDetails.forEach(
      call => {
        expect(call).toHaveProperty('identifier', 'type', 'duration', 'callCost')
      }
    )

    expect(callsOperation2).toHaveProperty('totalCalls', 6)
    expect(callsOperation2).toHaveProperty('callsDetails')
    expect(callsOperation2).toHaveProperty('total', 67.34)
    callsOperation2.callsDetails.forEach(
      call => {
        expect(call).toHaveProperty('identifier', 'type', 'duration', 'callCost')
      }
    )
  })
})