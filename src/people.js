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

    const totalAge = people.reduce((sum,person) => sum + person.age, 0);
    const totalHeight = people.reduce((sum,person) => sum + person.height, 0);

    const ageProm = Math.round(totalAge / people.length);
    const heightProm = Math.round(totalHeight / people.length);

    const youngerPerson = people.reduce((youngest,person) => person.age < youngest.age ? person : youngest, people[0]);
    const tallerPerson = people.reduce((tallest,person) => person.height > tallest.height ? person : tallest, people[0]);

    return {
        ageProm,
        heightProm,
        youngerPerson,
        tallerPerson
    };
    
}

module.exports = peopleInformation;
