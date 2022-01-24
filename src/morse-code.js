/** 
 * Write a program that automatically converts english text to morse code and vice versa, 
 * consider only use upper case letters when converting
 * 
 * @param {string} message - String to be converted
 * @param {string} convertTo - (morse | english) 
 * 
 * @returns {string}  - String converted to english or morse code
*/

// Object.entries(obj).forEach(([key, value]) => {
      //   console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
      // });

function morseCode(message, convertTo) {

  let resultMessage = []

  const MorseLetters = { 'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.',
                         'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.',
                         'O': '---',  'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-',
                         'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----',
                         '2': '..---','3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
                         '9': '----.', ' ': ' ', '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--',
                         '@': '.--.-.', '+': '.-.-.', '-': '-....-', '/': '-..-.',
                        };
  const messageLetters = convertTo === 'morse' ? message.toUpperCase().split(''):message.split('   ').map(word => ( word.split(' ')))
  
  switch (convertTo) {
    case 'morse':
      resultMessage = messageLetters.map( letter => {
          return MorseLetters[letter]
         })
      break;
  
    default:
      messageLetters.forEach(word => {
          let wordEnglish = word.map(letter => {
                              let wordLetters = ''
                              Object.entries(MorseLetters).forEach(([key, value]) => {
                                if( letter === value){
                                  wordLetters = key
                                }
                              });
                              return wordLetters
                            })
          resultMessage.push(wordEnglish.join(''))
      })
      break;
  }

  return resultMessage.join(' ')

 }

module.exports = morseCode;
