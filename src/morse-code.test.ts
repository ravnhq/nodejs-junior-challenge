import { expect } from "@std/expect";
import { describe, it } from "@std/testing/bdd";
import { equivalency } from "./mocks/morse-code.mock.ts";
import morseCode from "./morse-code.ts";

describe("morse code challenge", () => {
  it("should process string", () => {
    const processOne = morseCode("hello, how are you?", "morse");
    const processTwo = morseCode(
      ".... . .-.. .-.. --- --..--   .... --- .--   .- .-. .   -.-- --- ..- ..--..",
      "english",
    );
    const processThree = morseCode(
      "This is the NodeJs challenge for Junior Devs",
      "morse",
    );
    const processFour = morseCode(
      ".-. .- -. -.. --- --   ... - .-. .. -. --.   .---- ..--- ....- ----. .--.-. .-.-. -....- -..-.",
      "english",
    );

    expect(processOne).toEqual(equivalency["HELLO, HOW ARE YOU?"]);
    expect(processTwo).toEqual(
      equivalency[
        ".... . .-.. .-.. --- --..--   .... --- .--   .- .-. .   -.-- --- ..- ..--.."
      ],
    );
    expect(processThree).toEqual(
      equivalency["THIS IS THE NODEJS CHALLENGE FOR JUNIOR DEVS"],
    );
    expect(processFour).toEqual(
      equivalency[
        ".-. .- -. -.. --- --   ... - .-. .. -. --.   .---- ..--- ....- ----. .--.-. .-.-. -....- -..-."
      ],
    );
  });

  it("should throw error message", () => {
    // deno-lint-ignore no-explicit-any
    expect(() => morseCode("hello, how are you?", "spanish" as any)).toThrow(
      "Invalid parameters",
    );
  });
});
