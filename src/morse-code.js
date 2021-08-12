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
    const englishToMorse = new Map([
        ['A', '.-'], ['B', '-...'], ['C', '-.-.'], ['D', '-..'],
        ['E', '.'], ['F', '..-.'], ['G', '--.'], ['H', '....'],
        ['I', '..'], ['J', '.---'], ['K', '-.-'], ['L', '.-..'],
        ['M', '--'], ['N', '-.'], ['O', '---'], ['P', '.--.'],
        ['Q', '--.-'], ['R', '.-.'], ['S', '...'], ['T', '-'],
        ['U', '..-'], ['V', '...-'], ['W', '.--'], ['X', '-..-'],
        ['Y', '-.--'], ['Z', '--..'], ['0', '-----'], ['1', '.----'],
        ['2', '..---'], ['3', '...--'], ['4', '....-'], ['5', '.....'],
        ['6', '-....'], ['7', '--...'], ['8', '---..'], ['9', '----.'],
        [':', '---...'], [',', '--..--'], ['-', '-....-'], ['(', '-.--.-'],
        ['.', '.-.-.-'], ['?', '..--..'], [';', '-.-.-.'], ['/', '-..-.'],
        ['_', '..--.-'], [')', '---..'], ['=', '-...-'], ['@', '.--.-.'],
        ['+', '.-.-.'], [' ', ' ']
    ]);
    const morseToEnglish = new Map([...englishToMorse.entries()].map(([key, value]) => ([value, key])));
    let output = [];
    let tmp;

    if (convertTo === 'morse') {
        for (char of message) {
            output.push(englishToMorse.get(char.toUpperCase()));
        }
    }

    if (convertTo === 'english') {
        for (word of message.split('   ')) {
            tmp = '';
            for (code of word.split(' ')) {
                tmp += morseToEnglish.get(code);
            }
            output.push(tmp);
        }
    }

    return output.join(' ');
}

module.exports = morseCode