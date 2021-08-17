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
 * The height in cm of several people was taken, in addition, the age of each person and extra information are also known.
 * An algorithm is required to calculate average age and average height. In addition, we need to know the information of the
 * tallest person, and the information of the youngest person.
 *
 * @param {Person[]} people - People information to be processed
 *
 * @returns {PeopleResponse}  - Processed information
 */

function peopleInformation(people) {
  let ageSum = 0;
  let sumPerson = 0;
  let heightSum = 0;
  let youngerPerson = people[0];
  let tallerPerson = people[0];
  let PeopleResponse = {};

  people.forEach((person) => {
    if (person.age < youngerPerson.age) {
      youngerPerson = person;
    }
    if (person.height > tallerPerson.height) {
      tallerPerson = person;
    }
    ageSum += person.age;
    heightSum += person.height;
    sumPerson += 1;
  });

  ageSum = Math.round(ageSum / sumPerson);
  heightSum = Math.round(heightSum / sumPerson);
  PeopleResponse.ageProm = ageSum;
  PeopleResponse.heightProm = heightSum;
  PeopleResponse.youngerPerson = youngerPerson;
  PeopleResponse.tallerPerson = tallerPerson;

  return PeopleResponse;
}

module.exports = peopleInformation;
