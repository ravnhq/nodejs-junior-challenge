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

    const msg = message.toUpperCase();

    const toMorse = {
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
        ':': '---...',
        ';': '-.-.-.',
        '.': '.-.-.-',
        '"': '.-..-.',
        '(': '-----.',
        ')': '.-----',
        "'": '-.--.-',
        '1': '.----',
        '2': '..---',
        '3': '...-- ',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        '0': '-----',
        '?': '..--..',
        '@': '.--.-.',
        '/': '-..-.',
        '+': '.-.-.',
        '-': '-....-',
        ' ': ' '
    }
    
    const toEnglish = {};
    Object.keys(toMorse).forEach( key => {
        toEnglish[toMorse[key]] = key;
    });

    const converted = [];

    if (convertTo === 'morse') {

        for (const char of msg) {
            converted.push(toMorse[char]);
            converted.push(' ');
        }
        converted.pop();

    } else {

        let morseLetter = [];
        let skipBlankSpace = false;
        for (const char of msg) {
            if (char !== ' '){
                morseLetter.push(char);
            } else {
                if (morseLetter.join('') === '' && !skipBlankSpace) {
                    converted.push(' ');
                    skipBlankSpace = true;
                } else {
                    converted.push(toEnglish[morseLetter.join('')]);
                    skipBlankSpace = false;
                }
                morseLetter = [];
            }
        }
        converted.push(toEnglish[morseLetter.join('')]);        
    }
    
    return converted.join('');
}

module.exports = morseCode;
