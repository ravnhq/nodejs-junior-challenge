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

function processNextPerson(people) {
  let i = 0;
  let tallerPerson = null;
  let youngerPerson = null;
  let ageSum = 0;
  let heightSum = 0;

  function processPerson(person) {
    let personToProcess = { ...person };
    const { age, height } = person;

    if (tallerPerson.height < height || !tallerPerson)
      tallerPerson = personToProcess;
    if (youngerPerson.age > age || !youngerPerson)
      youngerPerson = personToProcess;

    ageSum += age;
    heightSum += height;
  }

  function calculate() {
    let person = people[i];
    processPerson(person);
    i++;
    return {
      ageSum,
      heightSum,
      tallerPerson,
      youngerPerson,
    };
  }

  return calculate;
}

const foo = processNextPerson(people);

function peopleInformation(people) {
  let i = 0;
  let res = {};

  while (i < people.length) {
    res = foo();
    i++;
  }

  return {
    ageProm: res.ageSum / i,
    heightProm: res.heightSum / i,
    youngerPerson: res.youngerPerson,
    tallerPerson: res.tallerPerson,
  };
}

module.exports = peopleInformation;
