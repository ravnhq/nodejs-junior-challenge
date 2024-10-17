const validDestinations = ["morse", "english"] as const;
type MessageDestination = (typeof validDestinations)[number];

/**
 * Write a program that automatically converts english text to morse code and vice versa,
 * consider only use upper case letters when converting
 *
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english)
 *
 * @returns {string}  - String converted to english or morse code
 */
export default function morseCode(
  message: string,
  convertTo: MessageDestination,
): string {
  throw new Error("Not implemented");
}
