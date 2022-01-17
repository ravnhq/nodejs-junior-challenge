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

    /** @type {ProcessedCall[]} processedCall */
    let processedCall = [];

    let callCost = 0;
    let callCostTotal = 0;
    let callsTotal = 0;

    const conversionNumberLocal = 0.2;
    const conversionNumberNational1 = 1.20;
    const conversionNumberNational2 = 0.48;
    const conversionNumberInternational1 = 7.56;
    const conversionNumberInternational2 = 3.03;

    calls.forEach(call => {
      switch (call.type) {
        case 'Local':
          callCost = call.duration * conversionNumberLocal;
          break;
        case 'National':
          callCost = calculaterCost(call.duration, conversionNumberNational1, conversionNumberNational2);
          break;
        case 'International':
          callCost = calculaterCost(call.duration, conversionNumberInternational1, conversionNumberInternational2);
      }

      processedCall.push({...call, callCost});
      if(callCost > 0) {
        callsTotal++;
      }
      callCostTotal += callCost;
      callCost = 0;
    })

    return {
      totalCalls: callsTotal,
      total: Math.round(callCostTotal*100)/100,
      processedCall: processedCall
    };
}

const calculaterCost = (duration, conversionNumber1, conversionNumber2) => {
  if(duration < 4) {
    return conversionNumber1 * duration;
  }

  if(duration > 3) {
    return (conversionNumber1 * 3) + (conversionNumber2 * (duration - 3));
  }
}

module.exports = callsCost;
