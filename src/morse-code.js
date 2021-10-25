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
  if (convertTo !== 'morse' && convertTo !== 'english') {
    return null;
  }

  const MORSE_TO_ENGLISH = {
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
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    ',': '--..--',
    '?': '..--..',
    '@': '.--.-.',
    '+': '.-.-.',
    '-': '-....-',
    '/': '-..-.',
    ' ': ' ',
  };
  if (convertTo === 'morse') {
    return Array.from(message.toUpperCase()).map((element) => MORSE_TO_ENGLISH[element]).join(' ');
  }
  // converting morse to english
  
  // swap MORSE_TO_ENGLISH properties
  const ENGLISH_TO_MORSE = Object.fromEntries(Object.entries(MORSE_TO_ENGLISH).map(([k, v]) => [v, k]));

  return message.replaceAll('   ', '  ').split(' ')
    .map((element) => ((element === '') ? ' ' : ENGLISH_TO_MORSE[element])).join('');
}

module.exports = morseCode;
