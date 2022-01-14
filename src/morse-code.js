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
  const alphabet = {
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
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '/': ' ',
    '-.-.--': '!',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.-.-.': '+',
    '-....-': '-',
    '-..-.': '/',
    '.--.-.': '@',
  };
  const messageConvArray = [];
  let messageConverted = '';
  if (convertTo === 'english') {
    message.split('   ').forEach((word) => {
      word.split(' ').forEach((letter) => {
        messageConvArray.push(alphabet[letter].toUpperCase());
      });
      messageConvArray.push(' ');
    });
    messageConvArray.pop();
    messageConverted = messageConvArray.join('').toString();
  } else if (convertTo === 'morse') {
    message.toLowerCase().split(' ').forEach((word) => {
      word.split('').forEach((letter) => {
        messageConvArray.push(Object.keys(alphabet).find((letterConverted) => alphabet[letterConverted] === letter)); 
      });
      messageConvArray.push(' ');
    });
    messageConvArray.pop();
    messageConverted = messageConvArray.join(' ').toString();
  }
  return messageConverted;
}

module.exports = morseCode;
