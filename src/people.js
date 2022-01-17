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

function peopleInformation(people) {
    if(people.length > 0) {

    let youngerPerson = null;
    let tallerPerson = null;

    let sumAges = 0;
    let sumHeights = 0;
    let indexYoungerPerson = people[0].age;
    let indexTallerPerson = people[0].height;

    //Find people and add ages and heights
    people.forEach(person => {
        sumAges += person.age;
        sumHeights += person.height;

        if(indexYoungerPerson > person.age) {
            indexYoungerPerson = person.age;
            youngerPerson = person;
        }
        if(indexTallerPerson < person.height) {
            indexTallerPerson = person.height;
            tallerPerson = person;
        }
    })

    return {
        ageProm: average(sumAges, people.length),
        heightProm: average(sumHeights, people.length),
        youngerPerson: youngerPerson,
        tallerPerson: tallerPerson
    }

    }

    return "There are no people";
}

const average = (sum, total) => {
    return Math.round(sum / total);
}

module.exports = peopleInformation;
