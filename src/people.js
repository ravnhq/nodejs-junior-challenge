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
  const count = people.length;
  let sumAge = 0;
  let sumHeight = 0;
  let youngerPerson = null;
  let tallerPerson = null;

  people.forEach((person) => {
    const { age, height } = person;

    if (!youngerPerson || youngerPerson.age > age) {
      youngerPerson = person;
    }

    if (!tallerPerson || tallerPerson.height < height) {
      tallerPerson = person;
    }

    sumAge += age;
    sumHeight += height;
  });

  return {
    tallerPerson,
    youngerPerson,
    heightProm: Math.round(sumHeight / count),
    ageProm: Math.round(sumAge / count),
  };
}

module.exports = peopleInformation;
