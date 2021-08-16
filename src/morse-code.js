/**
 * Write a program that automatically converts english text to morse code and vice versa, consider only use upper case letters
 * when converting
 *
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english)
 *
 * @returns {string}  - String converted to english or morse code
 */

function morseCode(message, convertTo) {
  let msgCopy = message.toUpperCase();
  let tempMorse = [];
  let newTempMorse = [];
  let newPhrase = '';
  const morseCodes = {
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

  if (convertTo === 'morse') {
    for (const i of msgCopy) {
      if (i === ' ') {
        newPhrase += '  ';
      }
      for (const key in morseCodes) {
        if (morseCodes[key] === i) {
          newPhrase = `${newPhrase}${key} `;
        }
      }
    }
    newTempMorse = [...newPhrase];
    newTempMorse.pop();
    newPhrase = newTempMorse.join('');
  }
  if (convertTo === 'english') {
    tempMorse = msgCopy.split(' ');
    tempMorse = tempMorse.map(function (item) {
      return item == '' ? ' ' : item;
    });
    for (const morseLetter of tempMorse) {
      for (const key in morseCodes) {
        if (key === morseLetter) {
          newPhrase = `${newPhrase}${morseCodes[key]}`;
        }
      }
      if (morseLetter === ' ') {
        newPhrase = `${newPhrase} `;
      }
    }
    newPhrase = newPhrase.split('  ').join(' ');
  }
  return newPhrase;
}

module.exports = morseCode;
