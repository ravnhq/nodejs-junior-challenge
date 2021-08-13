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
  const morse = {
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
    ' ': ' ',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '!': '-.-.--',
    '@': '.--.-.',
    '+': '.-.-.',
    '-': '-....-',
    '/': '-..-.',
  };

  function toMorse(phrase) {
    const newMessage = phrase.toUpperCase();
    let result = '';

    for (let i = 0; i < newMessage.length; i += 1) {
      result += `${morse[newMessage[i]]} `;
    }

    return result.trim();
  }

  function toEnglish(phrase) {
    let result = '';

    phrase
      .split('   ')
      .map((word) => word.split(' '))
      .forEach((codeWord) => {
        codeWord.forEach((codeChar) => {
          result += Object.keys(morse).find((key) => morse[key] === codeChar);
        });
        result += ' ';
      });

    return result.trim();
  }

  if (convertTo === 'morse') {
    return toMorse(message);
  }
  if (convertTo === 'english') {
    return toEnglish(message);
  }

  throw new Error('Option not recognized');
}

morseCode('.... . .-.. .-.. --- --..--', 'english');

module.exports = morseCode;
