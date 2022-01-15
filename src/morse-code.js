/**
 * Write a program that automatically converts english text to morse code and vice versa,
 * consider only use upper case letters when converting
 *
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english)
 *
 * @returns {string}  - String converted to english or morse code
 */

const dictionary = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".--.-.": "@",
  ".-.-.": "+",
  "-....-": "-",
  "-..-.": "/",
  "..--..": "?",
  "--..--": ",",
};

let from = Object.keys(dictionary);
let to = Object.values(dictionary);

function morseCode(message, convertTo) {
  const arr = message.split("   ");
  let separator = " ";
  let compactor = "";
  let result = [];

  if (convertTo == "morse") {
    [from, to] = [to, from];
    separator = "";
    compactor = " ";
  }

  arr.forEach((word) => {
    result.push(...translate(word.split(separator), from, to));
    result.push(" ");
  });
  return result.join(compactor).trim();
}

function translate(arr, from, to) {
  return arr.map((element) => {
    const i = from.indexOf(element.toUpperCase());
    return to[i];
  });
}

module.exports = morseCode;
