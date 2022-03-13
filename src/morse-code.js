const utilityFunctions = require('./utils');

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
    
    if (convertTo === 'morse') {
        return utilityFunctions.convertToMorse(message);
    } else {
        return utilityFunctions.convertToEnglish(message)
    }
    
}

module.exports = morseCode;
