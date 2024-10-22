import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import closestTemperature from "./temperatures.ts";
import { temperaturesInputs } from "./mocks/temperatures.mock.ts";

describe("temperatures", () => {
  temperaturesInputs.forEach(({ input, output }) => {
    it(`should return ${output} for [${input}]`, () => {
      expect(closestTemperature(input)).toEqual(output);
    });
  });
});
