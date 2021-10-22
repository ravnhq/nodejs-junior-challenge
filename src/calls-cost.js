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
    const callsDetails = [];
    let totalCost = 0;

    for (const call of calls) {
        const processedCall = processCall(call)
        if (processedCall === null) continue

        totalCost += processedCall.callCost
        callsDetails.push(processedCall)
    }

    return {
        totalCalls: callsDetails.length,
        total: roundDecimal(totalCost, 2),
        callsDetails: callsDetails,
    }
}

const INTERNATIONAL_INITIAL_COST = 7.56
const INTERNATIONAL_ADDITIONAL_COST = 3.03
const INTERNATIONAL_THRESHOLD = 3

const NATIONAL_INITIAL_COST = 1.20
const NATIONAL_ADDITIONAL_COST = 0.48
const NATIONAL_THRESHOLD = 3

const LOCAL_COST = 0.2

/**
 * Processes a call cost based on its type. 
 * @param {Call} call the call to be processed
 * @returns {ProcessedCall?} `null` if call couldn't be processed 
 */
function processCall(call) {
    let callCost;

    if (call.type === 'International') {
        callCost = compoundCost(
            INTERNATIONAL_INITIAL_COST,
            INTERNATIONAL_ADDITIONAL_COST,
            INTERNATIONAL_THRESHOLD,
            call.duration,
        )
    } else if (call.type === 'National') {
        callCost = compoundCost(
            NATIONAL_INITIAL_COST,
            NATIONAL_ADDITIONAL_COST,
            NATIONAL_THRESHOLD,
            call.duration,
        )
    } else if (call.type === 'Local') {
        callCost = compoundCost(
            LOCAL_COST,
            LOCAL_COST, // cost is the same as initial
            call.duration, // doesn't have a threshold
            call.duration,
        )
    } else {
        return null
    }

    return { callCost: roundDecimal(callCost, 2), ...call }
}

/**
 * @param {number} initial The initial cost before surpassing the threshold
 * @param {number} additional The additional cost after surpassing the threshold
 * @param {number} threshold The threshold after which additional will be used
 * @param {number} total The total duration to calculate
 * @returns {number} The total calculated cost
 */
function compoundCost(initial, additional, threshold, total) {
    const difference = Math.max(0, total - threshold);
    return Math.min(total, threshold) * initial + difference * additional
}

/**
 * Round a number n decimal places. 
 * @param {number} num The number that will be rounded n places
 * @param {number} places The amount of decimal places the resulting number should have 
 * @returns {number} The number rounded
 */
function roundDecimal(num, places) {
    return Math.round(num * (10 ** places) + Number.EPSILON) / (10 ** places)
}

module.exports = callsCost;
