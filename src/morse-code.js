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

  const morseCode = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    '?': '..--..',
    ',': '--..--',
    ' ': ' ',
  };

  const english = {
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
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '..--..': '?',
    '--..--': ',',
    '.--.-.': '@',
    '.-.-.': '+',
    '-..-.': '/',
    '-....-': '-',
  };

  let result = '';

  if (convertTo.toUpperCase() === 'MORSE') {
    const splittedMsg = message.split('');
    const converTedMsg = splittedMsg.map((letter) => {
      return morseCode[letter.toUpperCase()];
    });
    result = converTedMsg.join(' ');
  }
  if (convertTo.toUpperCase() === 'ENGLISH') {
    const splittedMorsebyWord = message.split('  ');
    const convertedToEnglish = splittedMorsebyWord.map((word) => {
      const splittedWordByCode = word.split(' ');
      let tempWord = '';

      for (letter of splittedWordByCode) {
        let englishWord = english[letter] ? english[letter] : '';
        tempWord += englishWord;
      }

      return tempWord;
    });

    result = convertedToEnglish.join(' ');
  }
    return result;
}

module.exports = morseCode