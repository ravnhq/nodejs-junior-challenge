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
  let processedCalls = [];
  const lCallCost = 0.2;
  const nCallCost = 1.20;
  const iCallCost = 7.56;
  let totalCalls = 0;
  let totalCost = 0;
  let tempCost = 0
  let callCost = 0
  calls.forEach(val => {
    if (val.type === 'Local' || val.type === 'National' || val.type === 'International') {
      for (let i = 1; i < val.duration + 1; i++) {
        if (val.type === 'Local') {
          totalCost += lCallCost;
        }
        if (val.type === 'National') {
          if (i <= 3) {
            totalCost += nCallCost
          }
          if (i > 3) {
            totalCost += 0.48;
          }
        }
        if (val.type === 'International') {
          if (i <= 3) {
            totalCost += iCallCost
          }
          if (i > 3) {
            totalCost += 3.03
          }
        }
      }
      tempCost = totalCost - tempCost
      totalCost = tempCost
      callCost += totalCost
      val.callCost = totalCost
      processedCalls.push(val)
      totalCalls += 1
    }
  })
  let ans = {
    'totalCalls': totalCalls,
    'total': parseFloat(callCost.toFixed(2)),
    'callsDetails': processedCalls
  }
  return ans
}

module.exports = callsCost;
