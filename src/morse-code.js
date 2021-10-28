const ENGLISH_MORSE = {
    ' ': ' ',
    '@': '.--.-.',
    '+': '.-.-.',
    '-': '-....-',
    '/': '-..-.',
    '?': '..--..',
    ',': '--..--',
    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
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
}

const MORSE_ENGLISH = {
    '': ' ',
    ...Object.fromEntries(Object.entries(ENGLISH_MORSE).map(([k, v]) => [v, k]))
}

/** 
 * Write a program that automatically converts english text to morse code and vice versa, 
 * consider only use upper case letters when converting
 * 
 * @param {string} message - String to be converted
 * @param {('morse' | 'english')} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/
function morseCode(message, convertTo) {
    if (convertTo === 'morse') {
        return convertToMorse(message)
    } else if (convertTo === 'english') {
        return convertToEnglish(message)
    } else {
        return null
    }
}

/**
 * @param {string} message The english message to be converted into morse
 * @returns {string} The message in morse code
 */
function convertToMorse(message) {
    return message
        .toUpperCase()
        .split('') // separate into letters and spaces 
        .map((c) => ENGLISH_MORSE[c])
        .join(' ')
}

/**
 * @param {string} message The morse message to be converted into english
 * @returns {string} The message in english
 */
function convertToEnglish(message) {
    const wordToEnglish = (word) => {
        return word
            .trim()
            .split(' ') // letters are separated by ' ' (single space)
            .map((c) => MORSE_ENGLISH[c])
            .join('')
    }

    return message
        .split('  ') // words are separated by '  ' (double space)
        .map(wordToEnglish)
        .join(' ')
}

module.exports = morseCode;
