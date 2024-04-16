/** 
 * Write a program that automatically converts english text to morse code and vice versa, 
 * consider only use upper case letters when converting
 * 
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/

const morse = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    ",": "--..--",
    "?": "..--..",
    "*": "",
    " ": " ",
    "@": ".--.-.",
    "/": "-..-.",
    "+": ".-.-.",
    "-": "-....-",
    "0": '-----',
    "1": '.----', 
    "2": '..---', 
    "3": '...--',
    "4": '....-', 
    "5": '.....', 
    "6": '-....', 
    "7": '--...', 
    "8": '---..', 
    "9": '----.'
}
const english = Object.fromEntries(Object.entries(morse).map(([letter, code]) => [code, letter]));

function convertToMorse(message) {
    return message.split('').map(letter => morse[letter.toUpperCase()] || '').join(' ');
}

function convertToEnglish(message) {
    return message.split(' ').map(code => english[code] || '').join('').replaceAll('**', ' ');
}

function morseCode(message, convertTo) {
    if (convertTo === 'morse') {
        return convertToMorse(message);
    } else if (convertTo === 'english') {
        return convertToEnglish(message);
    } else {
        throw new Error(`Invalid conversion type: ${convertTo}`);
    }
}

module.exports = morseCode;
