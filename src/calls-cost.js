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
 * Design a solution to calculate what to pay for a set of phone calls. The function must receive an 
 * array of objects that will contain the identifier, type and duration attributes. For the type attribute, 
 * the only valid values are: National, International and Local
 * 
 * The criteria for calculating the cost of each call is as follows:
 * 
 * International: first 3 minutes $ 7.56 -> $ 3.03 for each additional minute
 * National: first 3 minutes $ 1.20 -> $ 0.48 per additional minute
 * Local: $ 0.2 per minute.
 * 
 * The function must return the total calls, the details of each call (the detail received + the cost of the call) 
 * and the total to pay taking into account all calls
 * 
 * @param {Call[]} calls - Call's information to be processed
 * 
 * @returns {CallsResponse}  - Processed information
*/

function callsCost(calls) {
  const internationalCostOne = 7.56;
  const internationalCostTwo = 3.03;
  const nationalCostOne = 1.20;
  const nationalCostTwo = 0.48;
  const localCost = 0.2;
  let totalCost = 0;
  let callsDetails = calls;
  let callCost = 0;
  let totalCalls = 0;
  let answer = {};

  function calculateCallCost(oneCost, twoCost, callDuration) {
    let costPerCall = 0;

    for (let i = 1; i <= callDuration; i++) {
      if (i <= 3) {
        costPerCall += oneCost;
      } else {
        costPerCall += twoCost;
      }
    }
    return costPerCall;
  }

  for (let i = 0; i < calls.length; i++) {
    if (calls[i].type === 'International') {
      callCost = calls[i].duration > 0 ? calculateCallCost(internationalCostOne, internationalCostTwo, calls[i].duration) : 0;

      callsDetails[i].callCost = callCost;
      totalCost += callCost;
      totalCalls++;
    }

    else if (calls[i].type === 'National') {
      callCost = calls[i].duration > 0 ? calculateCallCost(nationalCostOne, nationalCostTwo, calls[i].duration) : 0;

      callsDetails[i].callCost = callCost;
      totalCost += callCost;
      totalCalls++;
    }

    else if (calls[i].type === 'Local') {
      callCost = calls[i].duration > 0 ? calls[i].duration * localCost : 0;

      callsDetails[i].callCost = callCost;
      totalCost += callCost;
      totalCalls++;
    }
  }

  totalCost = totalCost.toFixed(2)
  answer = {
    totalCalls: totalCalls,
    callsDetails: callsDetails,
    total: +totalCost,
  }

  return answer
}

module.exports = callsCost;
