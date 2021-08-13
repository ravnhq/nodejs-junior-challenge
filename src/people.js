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
  const peopleResponse = {
    youngerPerson: people[0],
    tallerPerson: people[0],
    ageProm: 0,
    heightProm: 0,
  };
  let count = 0;
  let sumAge = 0;
  let sumHeight = 0;

  people.forEach((person) => {
    // who's younger
    if (peopleResponse.youngerPerson.age > person.age) {
      peopleResponse.youngerPerson = person;
    }

    // who's taller
    if (peopleResponse.tallerPerson.height < person.height) {
      peopleResponse.tallerPerson = person;
    }

    sumAge += person.age;
    sumHeight += person.height;
    count += 1;
  });

  peopleResponse.ageProm = Math.round(sumAge / count);
  peopleResponse.heightProm = Math.round(sumHeight / count);

  return peopleResponse;
}

module.exports = peopleInformation;
