import type { Call } from "../calls-cost.ts";

export const calls: Call[] = [
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
    type: "International",
    duration: 8,
  },
  {
    identifier: "LO-1",
    type: "Local",
    duration: 8,
  },
];
