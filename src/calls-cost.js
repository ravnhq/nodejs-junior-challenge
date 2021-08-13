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
    const typeCalls = [
        {type: 'International', hasFirst: true, first: 7.56, regular: 3.03}
        ,{type: 'National', hasFirst: true, first: 1.20, regular: 0.48}
        ,{type: 'Local', hasFirst: false, first: null, regular: 0.20}
    ];
    
    const callFilters = calls.filter((call) => typeCalls.some((typeCall) => typeCall.type == call.type))
    const calculateCallCost = (call, typeCall) => {
        const firstMinutes = 3;
        let processedCall = {...call, callCost: 0};

        if (!typeCall.hasFirst) {
            processedCall.callCost = processedCall.duration * typeCall.regular;
        } else if (call.duration > firstMinutes) {
            processedCall.callCost = typeCall.first * firstMinutes + (processedCall.duration - firstMinutes) * typeCall.regular;
        } else {
            processedCall.callCost = typeCall.first * call.duration;
        }

        return processedCall;
    }

    const totalCalls = callFilters.length;
    const processedCalls = callFilters.map((call) => {
            const typeCall = typeCalls.find((typeCall) => typeCall.type === call.type)
            return calculateCallCost(call, typeCall);
        })
    const totalWithoutTruncate = processedCalls.reduce((total, processedCall) => total + processedCall.callCost,0);
    const totalTruncate = parseFloat(totalWithoutTruncate.toFixed(2));

    return {totalCalls: totalCalls, total: totalTruncate, callsDetails: processedCalls}
}

module.exports = callsCost