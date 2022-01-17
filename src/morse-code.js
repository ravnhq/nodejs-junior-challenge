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
  const morseCode = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.',
    'd': '-..',
    'e': '.',
    'f': '..-.',
    'g': '--.',
    'h': '....',
    'i': '..',
    'j': '.---',
    'k': '-.-',
    'l': '.-..',
    'm': '--',
    'n': '-.',
    'o': '---',
    'p': '.--.',
    'q': '--.-',
    'r': '.-.',
    's': '...',
    't': '-',
    'u': '..-',
    'v': '...-',
    'w': '.--',
    'x': '-..-',
    'y': '-.--',
    'z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    '_': '..--.-',
    '"': '.-..-.',
    '$': '...-..-',
    '@': '.--.-.',
    ' ': ' '
  };

  let morseDecode = {};
  let ouputText = "";

  Object.keys(morseCode).forEach(key => {
    morseDecode[morseCode[key]] = key;
  });
  
  if (convertTo === "morse") {
    ouputText = message
      .split(' ')
      .map(
        i => i
          .split('')
          .map(
            j => morseCode[j.toLowerCase()]
          ).join(' ')
      ).join('   ')
  } else if (convertTo === "english") {
    ouputText = message
      .split('   ')
      .map(
        a => a
          .split(' ')
          .map(
            b => morseDecode[b]
          ).join('')
      ).join(' ').toUpperCase();
  }
  return ouputText;
}

module.exports = morseCode;
