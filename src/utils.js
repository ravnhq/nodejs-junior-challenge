// Calls Cost utils

const validCallTypes = ['National', 'International', 'Local'];

const filterByType = arrOfObjects => {
    const result = arrOfObjects.filter(object => validCallTypes.includes(object.type));
    return result;
}

const calculateCallCost = obj => {
    let totalCost = 0;
    let additionalMinutes = obj.duration - 3;
    if (obj.type === 'International') {
        if (obj.duration <= 3) {
            totalCost = 7.56 * obj.duration;
        } else {   
        totalCost = 22.68 + (additionalMinutes * 3.03);
        }
    } else if (obj.type === 'National') {
        if (obj.duration <= 3) {
            totalCost = 1.2 * obj.duration;
        } else {   
        totalCost = 3.6 + (additionalMinutes * 0.48);
        }
    } else {
        totalCost = obj.duration * 0.2;
    }
    return totalCost;
}

const calculateTotalCallsCost = arrOfObjects => {
    const initialValue = 0;
    return Number(arrOfObjects.reduce((previousValue, currentValue) => previousValue + currentValue.callCost,
    initialValue).toFixed(2));
}

// Morse code utils

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

// People utils

const getAgeAverage = arrOfObjects => { 
    let initialValue = 0;
    const sum = arrOfObjects.reduce((previousValue, currentValue) => previousValue + currentValue.age, initialValue);

    return Math.round(sum / arrOfObjects.length); 
}

const getHeightAverage = arrOfObjects => {
    let initialValue = 0;
    const sum = arrOfObjects.reduce((previousValue, currentValue) => previousValue + currentValue.height, initialValue);

    return Math.round(sum / arrOfObjects.length); 
}

const compareAge = (a, b) => a.age - b.age;

const findYoungestPerson = arrOfObjects => {
    const arrCopy = arrOfObjects.slice();
    
    return arrCopy.sort(compareAge).shift();
}

const compareHeight = (a, b) => a.height - b.height;

const findTallestPerson = arrOfObjects => {
    const arrCopy = arrOfObjects.slice();
    
    return arrCopy.sort(compareHeight).pop();
}

// Template utils

const convertToTemplate = (model, character, message) => {
    const messageAsArray = message.split('');
    const modelAsArray = model.split('');
    while (modelAsArray.includes(character) && messageAsArray.length >= 1) {
        modelAsArray.splice(modelAsArray.indexOf(character), 1, messageAsArray[0]);
        messageAsArray.shift();
    }
    return modelAsArray.join('');
}

module.exports = {
    filterByType,
    calculateCallCost,
    calculateTotalCallsCost,
    convertToMorse,
    convertToEnglish,
    getAgeAverage,
    getHeightAverage,
    findYoungestPerson,
    findTallestPerson,
    convertToTemplate,
};
