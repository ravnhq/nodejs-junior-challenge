/* eslint-disable */
/** 
 * Write a program that automatically converts english text to morse code and vice versa, 
 * consider only use upper case letters when converting
 * 
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/

function morseCode(message, convertTo) {
  let morse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    ',': '--..--',
    '?': '..--..',
    '@': '.--.-.',
    '+': '.-.-.',
    '-': '-....-',
    '/': '-..-.',
    ' ': '  '
  }

  let translatedToMorse = '';
  let translatedToEnglish = '';
  let messageTranslated = '';

  if (convertTo === 'morse') {
    for (let i = 0; i < message.length; i++) {

      let morseValue = morse[`${message[i].toUpperCase()}`];

      if (morseValue != undefined) {
        translatedToMorse += `${morseValue}`;

        if (message[i] !== ' ' && i !== message.length - 1) {
          translatedToMorse += ' ';
        }
      }
    }

    messageTranslated = translatedToMorse;
  }

  if (convertTo === 'english') {

    let keys = Object.keys(morse);
    let values = Object.values(morse);
    let messageSplitted = message.split(' ');

    for (let i = 0; i < message.length; i++) {
      if (values.includes(messageSplitted[i])) {
        translatedToEnglish += keys[values.indexOf(messageSplitted[i])];
      }
    }

    messageTranslated = translatedToEnglish;
  }

  return messageTranslated;
}

module.exports = morseCode;
