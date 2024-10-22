type CallType = "Local" | "National" | "International";

export interface Call {
  identifier: string;
  type: CallType;
  duration: number;
}

interface ProcessedCall extends Call {
  callCost: number;
}

interface CallsResponse {
  /** Number of processed calls */
  totalCalls: number;
  /** Total to pay including all the processed calls */
  total: number;
  /** Processed information about calls */
  callsDetails: ProcessedCall[];
}

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
export default function callsCost(calls: Call[]): CallsResponse {
  throw new Error("Not implemented");
}
