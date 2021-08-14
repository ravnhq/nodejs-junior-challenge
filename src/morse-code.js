/**
 * Write a program that automatically converts english text to morse code and vice versa, consider only use upper case letters
 * when converting
 *
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english)
 *
 * @returns {string}  - String converted to english or morse code
 */

const morse = {
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
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  '!': '-.-.--',
  '-': '-....-',
  '+': '.-.-.',
  '/': '-..-.',
  '@': '.--.-.',
  '(': '-.--.',
  ')': '-.--.-',
  ' ': ' ',
};

function morseCode(message, convertTo) {
  const words = message.split('   ');
  const trad = [];
  let separator = '';
  let glue = ' ';
  let code = Object.keys(morse);
  let decode = Object.values(morse);

  if (convertTo === 'english') {
    [code, decode] = [decode, code];
    separator = ' ';
    glue = '';
  }

  words.forEach((word) => {
    trad.push(...getDecode(word.split(separator), code, decode));
    trad.push(' ');
  });

  return trad.join(glue).trim();
}

function getDecode(arr, code, decode) {
  const arrDecode = [];
  arr.forEach((item) => {
    const index = code.indexOf(item.toUpperCase());
    arrDecode.push(decode[index]);
  });

  return arrDecode;
}


module.exports = morseCode;
