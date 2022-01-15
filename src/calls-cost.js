/* eslint-disable */
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

  // calls : Array<Object>

  let processedCalls = [];
  let totalDuration = 0;
  let numberOfCalls = 0;
  let totalPay = 0;

  calls.forEach(call => {

    switch (call.type) {

      case 'International':

        let costInternational = 0;

        if (call.duration <= 3) {
          costInternational = call.duration * 7.56;
        } else {
          costInternational = 22.68 + (call.duration - 3) * 3.03;
        }

        processedCalls.push({
          identifier: call.identifier,
          type: 'International',
          duration: call.duration,
          callCost: costInternational
        });

        totalPay += costInternational;
        numberOfCalls++;
        break;

      case 'National':

        let costNational = 0;

        if (call.duration <= 3) {
          costNational = call.duration * 1.20;
        } else {
          costNational = 3.60 + (call.duration - 3) * 0.48;
        }

        processedCalls.push({
          identifier: call.identifier,
          type: 'National',
          duration: call.duration,
          callCost: costNational
        });

        totalPay += costNational;
        numberOfCalls++;
        break;

      case 'Local':

        let costLocal = call.duration * 0.2;

        processedCalls.push({
          identifier: call.identifier,
          type: 'Local',
          duration: call.duration,
          callCost: costLocal
        });

        totalPay += costLocal;
        numberOfCalls++;
        break;
    }

    totalDuration += call.duration;
  });

  return {
    totalCalls: numberOfCalls,
    total: parseFloat(totalPay.toFixed(2)),
    callsDetails: processedCalls
  };
}

module.exports = callsCost;
