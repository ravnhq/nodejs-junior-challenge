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
  const heightProm = Math.floor(
    people.reduce((acc, person) => acc + person.height, 0) / people.length,
  );
  const ageProm = Math.floor(
    people.reduce((acc, person) => acc + person.age, 0) / people.length,
  );

  const tallerPerson = people.filter(
    (person) => person.height > people[0].height,
  )[0];
  const youngerPerson = people.filter(
    (person) => person.age < people[0].age,
  )[0];

  return {
    tallerPerson: tallerPerson,
    youngerPerson: youngerPerson,
    ageProm,
    heightProm,
  };
}

module.exports = peopleInformation;
