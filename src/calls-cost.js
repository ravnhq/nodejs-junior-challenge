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

    totalCalls = 0;

    const callCosts = {
        'International': duration => duration > 3 ? 22.68 + (duration - 3) * 3.03 : duration * 7.56,
        'National': duration => duration > 3 ? 3.6 + (duration - 3) * 0.48 : duration * 1.20,
        'Local': duration => duration * 0.2
    };

    const ProcessedCall = calls
        .filter(call => call.type in callCosts)
        .map(call => {
            const calculateCost = callCosts[call.type];
            const callCost = calculateCost(call.duration);
            return {
                ...call,
                callCost
            };
    });

    const total = parseFloat(ProcessedCall.reduce((sum, call) => sum + call.callCost, 0).toFixed(2));

    const callsResponse = {
        totalCalls: ProcessedCall.length,
        total: total,
        callsDetails: ProcessedCall
    };

    return callsResponse;
}

module.exports = callsCost;
