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
        'International': [7.56, 3.03],
        'National': [1.20, 0.48],
        'Local': [0.2, 0.2]
    };

    let totalCalls = 0;
    let total = 0;
    let callsDetails = [];

    calls.forEach(call => {

        if (fee[call.type]) {

            totalCalls += 1;

            const additionalMinutes = call.duration - feeMinutes;
            let callCost = 0;
            if (additionalMinutes > 0) {
                callCost += fee[call.type][0]*feeMinutes;
                callCost += fee[call.type][1]*additionalMinutes;
            } else {
                callCost += fee[call.type][0]*call.duration;
            }

            total += callCost;

            callsDetails.push({
                'identifier': call.identifier,
                'type': call.type,
                'duration': call.duration,
                'callCost': parseFloat(callCost.toFixed(2))
            })
        }
    })

    const response = {
        'totalCalls': totalCalls,
        'total': parseFloat(total.toFixed(2)),
        'callsDetails': callsDetails
    }
    return response
}

module.exports = callsCost;
