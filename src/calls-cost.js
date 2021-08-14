/**
 * @typedef {Object} Call
 * @property {string} identifier - Call's identifier
 * @property {string} type - Call's type
 * @property {number} duration - Call's duration
 */

/**
 * @typedef {Object} ProcessedCall
 * @property {string} identifier - Call's identifier
 * @property {string} type - Call's type
 * @property {number} duration - Call's duration
 * @property {number} callCost - Call's cost
 */

/**
 * @typedef {Object} CallsResponse
 * @property {number} totalCalls - Number of processed calls
 * @property {number} total - Total to pay including all the processed calls
 * @property {ProcessedCall[]} callsDetails - Processed information about calls
 */

/**
 * Design a solution to calculate what to pay for a set of phone calls. The function must receive an array of objects that will contain
 * the identifier, type and duration attributes. For the type attribute, the only valid values are: National, International and Local
 *
 * The criteria for calculating the cost of each call is as follows:
 *
 * International: first 3 minutes $ 7.56 -> $ 3.03 for each additional minute
 * National: first 3 minutes $ 1.20 -> $ 0.48 per additional minute
 * Local: $ 0.2 per minute.
 *
 * The function must return the total calls, the details of each call (the detail received + the cost of the call) and the total to pay
 * taking into account all calls
 *
 * @param {Call[]} calls - Call's information to be processed
 *
 * @returns {CallsResponse}  - Processed information
 */

const COSTS = {
  international: {
    cost: 7.56,
    limit: 3,
    addPerMin: 3.03,
  },
  national: {
    cost: 1.2,
    limit: 3,
    addPerMin: 0.48,
  },
  local: {
    cost: 0.2,
    limit: 1,
    addPerMin: 0.2,
  },
};

class CallsResponse {
  constructor() {
    this.callsDetails = [];
    this.total = 0;
    this.totalCalls = 0;
  }

  addCall(processedCall) {
    this.callsDetails.push(processedCall);

    this.total += processedCall.callCost;
    this.totalCalls += 1;
  }

  fixedTotal() {
    this.total = Number(this.total.toFixed(2));
  }
}

class ProcessedCall {
  constructor(identifier, type, duration) {
    this.identifier = identifier;
    this.type = type;
    this.duration = duration;

    this.callCost = (function () {
      const costType = COSTS[type.toLowerCase()];
      let total = 0;

      if (costType === undefined) return 0;
      if (duration < costType.limit) {
        total = costType.cost * duration;
        return total;
      }

      total = costType.cost * costType.limit;
      total += (duration - costType.limit) * costType.addPerMin;

      return total;
    })();
  }
}

function callsCost(calls) {
  const callsResponse = new CallsResponse();

  calls.forEach((call) => {
    const processedCall = new ProcessedCall(
      call.identifier,
      call.type,
      call.duration
    );
    if (processedCall.callCost !== 0) {
      callsResponse.addCall(processedCall);
    }
  });

  callsResponse.fixedTotal();

  return callsResponse;
}

module.exports = callsCost;
