/**
 * Write a program that automatically converts english text to morse
 * code and vice versa, consider only use upper case letters
 * when converting
 *
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english)
 *
 * @returns {string}  - String converted to english or morse code
*/

function morseCode(message, convertTo) {
  const convertedWord = [];
  const codes = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.--.-.': '@',
    '.-.-.': '+',
    '-....-': '-',
    '-..-.': '/',
  };

  const invertedCodes = Object.keys(codes).reduce((invertedAcc, key) => {
    const tempInverted = { ...invertedAcc };
    tempInverted[codes[key]] = key;
    return tempInverted;
  }, {});

  if (convertTo === 'english') {
    const words = message.split('   ');

    words.forEach((word) => {
      word.split(' ').forEach((letter) => {
        convertedWord.push(codes[letter]);
      });

      convertedWord.push(' ');
    });
  } else {
    const words = message.toUpperCase().split(' ');

    words.forEach((word) => {
      word.split('').forEach((letter) => {
        convertedWord.push(`${invertedCodes[letter]} `);
      });

      convertedWord.push('  ');
    });
  }

  return convertedWord.join('').trim();
}

module.exports = morseCode;
