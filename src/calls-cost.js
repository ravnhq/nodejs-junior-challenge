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

function callsCost(calls) {
  const details = {
    International: {
      firstCost: 7.56,
      addCost: 3.03,
      firstMin: 3,
    },
    National: {
      firstCost: 1.2,
      addCost: 0.48,
      firstMin: 3,
    },
    Local: {
      firstCost: 0,
      addCost: 0.2,
      firstMin: 0,
    },
  };

  const calcCost = (type, duration) => {
    let firstMinutes = 0;
    let addMinutes = 0;
    let cost = 0;

    if (duration <= details[type].firstMin) {
      firstMinutes = duration;
      addMinutes = 0;
    }
    else {
      firstMinutes = details[type].firstMin;
      addMinutes = duration - details[type].firstMin;
    }
    cost = firstMinutes * details[type].firstCost + addMinutes * details[type].addCost;

    return Math.round(cost * 100) / 100;
  };

  const callsDetails = [];
  let totalCalls = 0;
  let total = 0;
  calls.forEach((call) => {
    if (details.hasOwnProperty(call.type)) {
      const cost = calcCost(call.type, call.duration);
      call.cost = cost;
      callsDetails.push(call);

      totalCalls += 1;
      total += cost;
    }
    else {
      console.log(`Invalid Type: ${call.type}`);
    }
  });

  const callsResponse = {
    callsDetails,
    totalCalls,
    total: Math.round(total * 100) / 100,
  };

  return callsResponse;
}

module.exports = callsCost;
