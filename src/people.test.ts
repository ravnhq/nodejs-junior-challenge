import { describe, it } from "@std/testing/bdd";
import { people } from "./mocks/people.mocks.ts";
import peopleInformation from "./people.ts";
import { expect } from "@std/expect";

describe("people challenge", () => {
  it("should process people information", () => {
    const result = peopleInformation(people);

    expect(result).toMatchObject({
      averageAge: 50,
      averageHeight: 176,
      youngerPerson: people[2],
      tallerPerson: people[8],
    });
  });
});
