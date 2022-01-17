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
  let sumAge = 0;
  let sumHeight = 0;
  let ageProm = 0;
  let heightProm = 0;
  let minAge = people[0].age;
  let maxHeight = people[0].height;
  let youngerPerson = {};
  let tallerPerson = {};
  let result = {};

  for (let i = 0; i < people.length; i++) {
    sumAge += people[i].age
    sumHeight += people[i].height

    if (people[i].age < minAge) {
      minAge = people[i].age
      youngerPerson = people[i]
    }

    if (people[i].height > maxHeight) {
      maxHeight = people[i].height
      tallerPerson = people[i]
    }
  };

  ageProm = Math.round(sumAge / people.length);
  heightProm = Math.round(sumHeight / people.length);
  result = {
    ageProm: ageProm,
    heightProm: heightProm,
    youngerPerson: youngerPerson,
    tallerPerson: tallerPerson,
  };

  return result;
}

module.exports = peopleInformation;
