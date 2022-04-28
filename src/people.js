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

    const {ageSum, heightSum, youngerPerson, tallerPerson} = people.reduce(

        (measures, person) => {
            measures.ageSum += person.age;
            measures.heightSum += person.height;
            if (person.age < measures.youngerPerson.age) {
                measures.youngerPerson = person;
            }
            if (person.height > measures.tallerPerson.height) {
                measures.tallerPerson = person;
            }
            return measures;
        },
        {ageSum: 0, heightSum: 0, youngerPerson: people[0], tallerPerson: people[0]}
        
    );
    
    const peopleResponse = {
        ageProm: parseFloat((ageSum/people.length).toFixed(0)),
        heightProm: parseFloat((heightSum/people.length).toFixed(0)),
        youngerPerson,
        tallerPerson
    }
    return peopleResponse;
}

module.exports = peopleInformation;
