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

    const feeMinutes = 3;
    const fee = {
        International: [7.56, 3.03],
        National: [1.20, 0.48],
        Local: [0.2, 0.2]
    };

    const [totalCalls, totalCost, callsDetails] = calls.reduce(
        (callsData, call) => {
            if (fee[call.type]) {

                callsData[0] += 1;

                const additionalMinutes = Math.max(call.duration - feeMinutes, 0);
                const callCost = Math.min(call.duration, feeMinutes) * fee[call.type][0] + additionalMinutes * fee[call.type][1];
                callsData[1] += callCost;

                callsData[2].push({
                    identifier: call.identifier,
                    type: call.type,
                    duration: call.duration,
                    callCost: parseFloat(callCost.toFixed(2))
                })
            }
            return callsData;
        },
        [0, 0, []]
    );

    const response = {
        totalCalls,
        total: parseFloat(totalCost.toFixed(2)),
        callsDetails
    }
    return response;
}

module.exports = callsCost;
