const callsCost = require("./calls-cost")
const { calls } = require("./mocks/calls-cost.mocks")

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