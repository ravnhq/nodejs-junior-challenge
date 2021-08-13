/** 
 * Write a program that automatically converts english text to morse code and vice versa, consider only use upper case letters 
 * when converting
 * 
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/

const morseCod = {
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
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    '!': '-.-.--',
    '@': '.--.-.',
    '+': '.-.-.',
    '-': '-....-',
    '/': '-..-.',
    ' ': ' '
  };

function morseCode(message, convertTo) {
  const morse = (msg) => {
    const msgArray = msg.split('');
    return msgArray.map((letter) => morseCod[letter]).join(' ');
  }

  const english = (msg) => {
    let msgTrim =  msg.split('  ')
    let msgArray = msgTrim.join(' ').split(' ')
    msgArray.forEach((element, index) => {
        if (element === '') msgArray[index] = ' '
    });
    return englishArray = msgArray.map((morse) => Object.keys(morseCod).find((key) => morseCod[key] === morse)).join('')
  }

  const converted = convertTo == 'morse' ? morse : english

  return converted(message.toUpperCase())
}

console.log(morseCode('.-. .- -. -.. --- --   ... - .-. .. -. --.   .---- ..--- ....- ----. .--.-. .-.-. -....- -..-.', 'english'))

module.exports = morseCode