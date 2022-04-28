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

    const firstMinutes = 3;
    const minutesFee = {
        International: {first: 7.56, additional: 3.03},
        National: {first: 1.20, additional: 0.48},
        Local: {first: 0.2, additional: 0.2}
    };

    const {totalCalls, totalCost, callsDetails} = calls.reduce(

        (callsData, call) => {
            if (minutesFee[call.type]) {
                callsData.totalCalls += 1;

                const additionalMinutes = Math.max(call.duration - firstMinutes, 0);

                callsData.totalCost += 
                    Math.min(call.duration, firstMinutes) * minutesFee[call.type].first + additionalMinutes * minutesFee[call.type].additional;

                callsData.callsDetails.push({
                    identifier: call.identifier,
                    type: call.type,
                    duration: call.duration,
                    callCost: parseFloat(callsData.totalCost.toFixed(2))
                })
            }
            return callsData;
        },
        {totalCalls: 0, totalCost: 0, callsDetails: []}
        
    );

    const response = {
        totalCalls,
        total: parseFloat(totalCost.toFixed(2)),
        callsDetails
    }
    return response;
}

module.exports = callsCost;
