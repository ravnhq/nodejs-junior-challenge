import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import callsCost from "./calls-cost.ts";
import { calls } from "./mocks/calls-cost.mocks.ts";

describe("callsCost", () => {
  it("should process calls array", () => {
    const callsOperation1 = callsCost(calls.slice(0, 5));
    const callsOperation2 = callsCost(calls);

    expect(callsOperation1).toEqual({
      totalCalls: 5,
      callsDetails: expect.any(Array),
      total: 38.26,
    });
    callsOperation1.callsDetails.forEach((call) => {
      expect(call).toEqual({
        identifier: expect.any(String),
        type: expect.any(String),
        duration: expect.any(Number),
        callCost: expect.any(Number),
      });
    });

    expect(callsOperation2).toEqual({
      totalCalls: 7,
      callsDetails: expect.any(Array),
      total: 62.57,
    });
    callsOperation2.callsDetails.forEach((call) => {
      expect(call).toEqual({
        identifier: expect.any(String),
        type: expect.any(String),
        duration: expect.any(Number),
        callCost: expect.any(Number),
      });
    });
  });
});
