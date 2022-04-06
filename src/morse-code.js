/** 
 * Write a program that automatically converts english text to morse code and vice versa, 
 * consider only use upper case letters when converting
 * 
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/

// TODO: I used a placeholder value which is not oficially morse code. must refactor!
const morseCodeAlphabet = {
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
    "*": " ",
    " ": "*",
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

const convertToMorse = message => {
    let convertedMessage = '';
    let messageAsArray = message.toUpperCase()
                                .replaceAll(' ', '*')
                                .split('');
    for (const letter of messageAsArray) {
        convertedMessage += morseCodeAlphabet[letter] + ' ';
    }
    return convertedMessage.trim();
}

const convertToEnglish = message => {
    let convertedMessage = '';
    const objectKeys = Object.keys(morseCodeAlphabet);
    const objectValues = Object.values(morseCodeAlphabet);
    const messageAsArray2 = message.replaceAll('   ', ' * ')
                                   .split(' ');
    for (const element of messageAsArray2) { 
        for (const i in objectValues) {
            if (element === objectValues[i]) {
                convertedMessage += objectKeys[i];
            }
        }
    }
    return convertedMessage;
}

function morseCode(message, convertTo) {
    
    if (convertTo === 'morse') {
        return convertToMorse(message);
    } else {
        return convertToEnglish(message)
    }
    
}

module.exports = morseCode;
