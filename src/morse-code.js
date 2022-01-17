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
    const engToMorse = {
        'A': '.-',
        'B': '-...',
        'C': '-.-.',
        'D': '-..',
        'E': '.',
        'F': '..-.',
        'G': '--.',
        'H': '....',
        'I': '..',
        'J': '.---',
        'K': '-.-',
        'L': '.-..',
        'M': '--',
        'N': '-.',
        'O': '---',
        'P': '.--.',
        'Q': '--.-',
        'R': '.-.',
        'S': '...',
        'T': '-',
        'U': '..-',
        'V': '...-',
        'W': '.--',
        'X': '-..-',
        'Y': '-.--',
        'Z': '--..',
        ',': '--..--',
        '?': '..--..',
        '1': '.----', 
        '2': '..---', 
        '3': '...--', 
        '4': '....-',
        '5': '.....', 
        '6': '-....', 
        '7': '--...', 
        '8': '---..',
        '9': '----.', 
        '0': '-----',
        '@': '.--.-.',
        '+': '.-.-.',
        '-': '-....-',
        '/': '-..-.'

    }
    const morseToEng = {
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
        '--..--': ',',
        '..--..': '?',
        '.----' : '1', 
        '..---' : '2', 
        '...--' : '3', 
        '....-' : '4',
        '.....' : '5', 
        '-....' : '6', 
        '--...' : '7', 
        '---..' : '8',
        '----.' : '9', 
        '-----' : '0',
        '.--.-.' : '@',
        '.-.-.' : '+',
        '-....-' : '-',
        '-..-.' : '/'

    };
    if (convertTo === 'morse') {
        return message.toUpperCase().split('').map(m => {
            return engToMorse[m] ? engToMorse[m] : m;
        }).join(' '); //Capitalices the text, splits the the english text, then returns the morse code
    } else if (convertTo === 'english') {
        return message.split('   ').map(a => a.split(' ').map(b => morseToEng[b]).join('')).join(' ')
        //splits each morse code letters, then returns the english text
    } else {
        return 'Please specify'
    }
    //Used two different objects as reference to pass from english to morse and the other way around
}

module.exports = morseCode;
