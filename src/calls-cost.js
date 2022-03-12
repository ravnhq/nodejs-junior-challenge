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
    const CallsResponse = {};

    const validCallTypes = ['National', 'International', 'Local'];
    function filterByType(arrOfObjects) {
        const result = arrOfObjects.filter(object => validCallTypes.includes(object.type));
        return result;
    }

    const ProcessedCall = filterByType(calls); //arr of objects
   
    for (const call of ProcessedCall) {
        call.callCost = calculateCallCost(call);
    }

    function calculateTotalCallsCost(arrOfObjects) {
        const initialValue = 0;
        return ProcessedCall.reduce((previousValue, currentValue) => previousValue + currentValue.callCost,
        initialValue).toFixed(2);
    }

    function calculateCallCost(obj) {
        let totalCost = 0;
        let additionalMinutes = obj.duration - 3;
        if (obj.type === 'International') {
            if (obj.duration <= 3) {
                totalCost = 7.56 * obj.duration;
            } else {   
            totalCost = 22.68 + (additionalMinutes * 3.03);
            }
        } else if (obj.type === 'National') {
            if (obj.duration <= 3) {
                totalCost = 1.2 * obj.duration;
            } else {   
            totalCost = 3.6 + (additionalMinutes * 0.48);
            }
        } else {
            totalCost = obj.duration * 0.2;
        }
        return totalCost;
    }

    CallsResponse.totalCalls = ProcessedCall.length;
    CallsResponse.total = Number(calculateTotalCallsCost(calls));
    CallsResponse.callsDetails = ProcessedCall;
    
    return CallsResponse;  
}

module.exports = callsCost;
