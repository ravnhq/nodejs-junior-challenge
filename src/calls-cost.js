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

function callsCost(calls) {
  const callsDetails = [];
  let total = 0;
  let totalCalls = 0;

  calls.forEach((call) => {
    const { duration, type, identifier } = call;
    const costType = COSTS[type.toLowerCase()];
    let callCost = 0;

    if (!costType) return;

    if (duration < costType.limit) {
      callCost = costType.cost * duration;
    } else {
      const baseCost = costType.cost * costType.limit;
      callCost = baseCost + (duration - costType.limit) * costType.addPerMin;
    }

    total += callCost;
    totalCalls += 1;
    callsDetails.push({
      identifier,
      type,
      duration,
      callCost,
    });
  });

  total = Number(total.toFixed(2));

  return {
    total,
    totalCalls,
    callsDetails,
  };
}

module.exports = callsCost;
