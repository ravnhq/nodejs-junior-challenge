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
 *
 */
const calls = [
  {
    identifier: "NT-1",
    type: "National",
    duration: 3,
  },
  {
    identifier: "NT-2",
    type: "National",
    duration: 5,
  },
  {
    identifier: "INT-1",
    type: "International",
    duration: 2,
  },
  {
    identifier: "INT-2",
    type: "International",
    duration: 9,
  },
  {
    identifier: "LO-1",
    type: "Local",
    duration: 8,
  },
  {
    identifier: "IN-1",
    type: "Intern",
    duration: 8,
  },
  {
    identifier: "LO-1",
    type: "Local",
    duration: 8,
  },
];

const callType = {
  International: {
    max: 7.56,
    min: 3.03,
  },
  National: {
    max: 1.2,
    min: 0.48,
  },
  Local: {
    max: 0.2,
    min: 0.2,
  },
};

function processNextCall(calls) {
  let i = 0;

  function calculateCost(call) {
    let callToProcess = { ...call };
    const { duration } = call;

    if (!callType[call.type]) return callToProcess;

    callToProcess['cost'] =
      duration <= 3
        ? duration * callType[call.type].max
        : duration * callType[call.type].max +
          (duration - 3 * callType[call.type].min);

    return callToProcess;
  }

  function calculate() {
    let call = calls[i];
    const processed = calculateCost(call);
    i++;
    return processed;
  }

  return calculate;
}

const nextCall = processNextCall(calls);

function callsCost(calls) {

  let i = 0;
  while(i < calls.length){
    const processedCall = nextCall()
    console.log('processedCall :>> ', processedCall);
    i++
  }
}

callsCost(calls)


module.exports = callsCost;
