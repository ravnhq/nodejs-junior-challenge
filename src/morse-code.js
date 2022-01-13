/** 
 * Write a program that automatically converts english text to morse code and vice versa, 
 * consider only use upper case letters when converting
 * 
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/
const ENG_MOR = new Map([
  ['A', '.-'], ['B', '-...'], ['C', '-.-.'], ['D', '-..'], ['E', '.'], ['F', '..-.'], ['G', '--.'],
  ['H', '....'], ['I', '..'], ['J', '.---'], ['K', '-.-'], ['L', '.-..'], ['M', '--'], ['N', '-.'], 
  ['O', '---'], ['P', '.--.'], ['Q', '--.-'], ['R', '.-.'], ['S', '...'], ['T', '-'], ['U', '..-'], 
  ['V', '...-'], ['W', '.--'], ['X', '-..-'], ['Y', '-.--'], ['Z', '--..'], [',', '--..--'], 
  ['0', '-----'], ['1', '.----'], ['2', '..---'], ['3', '...--'], ['4', '....-'], ['5', '.....'], 
  ['6', '-....'], ['7', '--...'], ['8', '---..'], ['9', '----.'], ['?', '..--..'], ['@', '.--.-.'], 
  ['+', '.-.-.'], ['-', '-....-'], ['/', '-..-.'], [' ', ' '],

]);
const MOR_ENG = new Map([...ENG_MOR.entries()].map(([key, value]) => [value, key]));

function morseCode(message, convertTo) {
  let result = '';
  let msgUp = [];
  let words = [];
  switch (convertTo) {
    case 'morse':
      msgUp = [...message.toUpperCase()];
      result = msgUp.map((item) => ENG_MOR.get(item)).join(' ');
      break;

    case 'english':
      words = message.split(/\s{3}/);
      result = words.map((word) => {
        const oldChar = word.split(' ');
        const newChar = oldChar.map((c) => MOR_ENG.get(c));
        return newChar.join('');
      }).join(' ');
      break;
    default:
      break;
  }
  return result;
}

module.exports = morseCode;
