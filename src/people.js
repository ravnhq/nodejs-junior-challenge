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

//const { people } = require('../mocks/people.mocks');
class Person {
  constructor({ name, lastname, age, weight, height }) {
    this.name = name;
    this.lastname = lastname;
    this.weight = weight;
    this.height = height;
    this.age = age;
  }

  getTaller(person) {
    if (person !== null && this.height < person.height) return person;
    return this;
  }

  getYounger(person) {
    if (person !== null && this.age > person.age) return person;
    return this;
  }
}

class PeopleResponse {
  constructor() {
    this.youngerPerson = null;
    this.tallerPerson = null;
    this.ageSum = 0;
    this.heightProm = 0;
    this.ageProm = 0;
    this.heightSum = 0;
    this.count = 0;
  }

  addCount({ age, height }) {
    this.ageSum += age;
    this.heightSum += height;
    this.count += 1;
  }

  calcProms() {
    this.ageProm = prom(this.ageSum, this.count);
    this.heightProm = prom(this.heightSum, this.count);

    function prom(total, n) {
      return Math.round(total / n);
    }
  }
}

function peopleInformation(people) {
  const peopleRes = new PeopleResponse();

  people.forEach((item) => {
    const person = new Person(item);

    peopleRes.addCount(person);

    peopleRes.tallerPerson = person.getTaller(peopleRes.tallerPerson);
    peopleRes.youngerPerson = person.getYounger(peopleRes.youngerPerson);
  });

  peopleRes.calcProms();

  return peopleRes;
}

module.exports = peopleInformation;
