type TestCase = { input: number[]; output: number };

export const temperaturesInputs: TestCase[] = [
  { input: [], output: 0 },
  { input: [-2, -4, -5], output: -2 },
  { input: [42, -5, 12, 21, 5, 24], output: 5 },
  { input: [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5], output: 2 },
  { input: [-5, -4, -2, 12, -40, -1, 2, 18, 11, 5], output: -1 },
];
