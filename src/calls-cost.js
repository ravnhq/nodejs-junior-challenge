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
/* eslint no-param-reassign: ["error", { "props": false }] */
function callsCost(calls) {
  const objAux = calls.slice();
  const processedCall = [];
  const minIntExt = 3.03;
  const minNatExt = 0.48;
  const minuteLocal = 0.2;
  const callInter = 7.56;
  const callNat = 1.20;
  let total = 0;
  objAux.forEach(
    (item) => {
      if (item.type === 'International') {
        item.callCost = item.duration < 3 ? item.duration * callInter : callInter * 3 + (item.duration - 3) * minIntExt;
        total += item.callCost;
        processedCall.push(item);
      } else if (item.type === 'National') {
        item.callCost = item.duration < 3 ? item.duration * callNat : callNat * 3 + (item.duration - 3) * minNatExt;
        total += item.callCost;
        processedCall.push(item);
      } else if (item.type === 'Local') {
        item.callCost = item.duration * minuteLocal;
        total += item.callCost;
        processedCall.push(item);
      }
    },
  );

  return {
    totalCalls: processedCall.length,
    total: parseFloat(total.toFixed(2)),
    callsDetails: processedCall.slice(),
  };
}

module.exports = callsCost;
