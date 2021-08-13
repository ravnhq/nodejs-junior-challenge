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
 * Design a solution to calculate what to pay for a set of phone calls.
 * The function must receive an array of objects that will contain
 * the identifier, type and duration attributes. For the type attribute,
 * the only valid values are: National, International and Local
 *
 * The criteria for calculating the cost of each call is as follows:
 *
 * International: first 3 minutes $ 7.56 -> $ 3.03 for each additional minute
 * National: first 3 minutes $ 1.20 -> $ 0.48 per additional minute
 * Local: $ 0.2 per minute.
 *
 * The function must return the total calls, the details of each call
 * (the detail received + the cost of the call) and the total to pay
 * taking into account all calls
 *
 * @param {Call[]} calls - Call's information to be processed
 *
 * @returns {CallsResponse}  - Processed information
*/

function calculateCallCost(duration, firstMinutesCost, additionalMinutesCost = firstMinutesCost) {
  let callCost = 0;
  let remainingMinutes = 0;

  if (duration > 3) {
    callCost += 3 * firstMinutesCost;
    remainingMinutes = duration - 3;
  } else {
    callCost += duration * firstMinutesCost;
  }
  callCost += remainingMinutes * additionalMinutesCost;

  return Math.round(callCost * 100) / 100;
}

function callsCost(calls) {
  let totalCalls = 0;
  let total = 0;
  const callsDetails = [];
  calls.forEach((call) => {
    const processedCall = {
      ...call,
      callCost: 0,
    };
    switch (call.type) {
      case 'International': {
        processedCall.callCost = calculateCallCost(call.duration, 7.56, 3.03);
        break;
      }
      case 'National': {
        processedCall.callCost = calculateCallCost(call.duration, 1.20, 0.48);
        break;
      }
      case 'Local': {
        processedCall.callCost = calculateCallCost(call.duration, 0.2);
        break;
      }
      default: {
        return;
      }
    }
    total += processedCall.callCost;
    totalCalls += 1;
    callsDetails.push(processedCall);
  });
  const callsResponse = {
    totalCalls,
    total: Math.round(total * 100) / 100,
    callsDetails,
  };

  return callsResponse;
}

module.exports = callsCost;
