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
  const youngerPerson = people[0];
  const tallerPerson = people[0];
  const peopleResponse = {
    ageProm: 0,
    heightProm: 0,
    youngerPerson: youngerPerson,
    tallerPerson: tallerPerson,
  };

  people.forEach((person) => {
    if (peopleResponse.youngerPerson.age > person.age) {
      peopleResponse.youngerPerson = person;
    }
    if (peopleResponse.tallerPerson.height < person.height) {
      peopleResponse.tallerPerson = person;
    }
    peopleResponse.ageProm += person.age;
    peopleResponse.heightProm += person.height;
  });

  peopleResponse.ageProm = Math.round(peopleResponse.ageProm / people.length);
  peopleResponse.heightProm = Math.round(
    peopleResponse.heightProm / people.length
  );

  return peopleResponse;
}

module.exports = peopleInformation;
