/**
 * @typedef {Object} Person
 * @property {string} name - Person's name
 * @property {string} lastname - Person's lastname
 * @property {number} age - Person's age
 * @property {number} weight - Person's weight
 * @property {number} height - Person's height
 */

/**
 * @typedef {Object} PeopleResponse
 * @property {number} ageProm - People average age
 * @property {number} heightProm - People average height
 * @property {Person} youngerPerson - Younger person information
 * @property {Person} tallerPerson - Taller person information
 */

/** 
 * The height in cm of several people was taken, in addition, the age of each person and 
 * extra information are also known. An algorithm is required to calculate average age and 
 * average height. In addition, we need to know the information of the tallest person, and 
 * the information of the youngest person.
 * 
 * @param {Person[]} people - People information to be processed
 * 
 * @returns {PeopleResponse}  - Processed information
*/

const getAgeAverage = arrOfObjects => { 
    const initialValue = 0;
    const sum = arrOfObjects.reduce((previousValue, currentValue) => previousValue + currentValue.age, initialValue);

    return Math.round(sum / arrOfObjects.length); 
}

const getHeightAverage = arrOfObjects => {
    const initialValue = 0;
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

function peopleInformation(people) {
    const peopleResponse = {};

    peopleResponse.ageProm = getAgeAverage(people);
    peopleResponse.heightProm = getHeightAverage(people);
    peopleResponse.youngerPerson = findYoungestPerson(people);
    peopleResponse.tallerPerson = findTallestPerson(people);

    return peopleResponse;
}

module.exports = peopleInformation;
