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
const people = [
  {
    name: "Julio",
    lastname: "Cesar",
    age: 36,
    weight: 163,
    height: 190,
  },
  {
    name: "Charlie",
    lastname: "Snox",
    age: 84,
    weight: 200,
    height: 190,
  },
  {
    name: "John",
    lastname: "Doe",
    age: 15,
    weight: 159,
    height: 170,
  },
  {
    name: "Petter",
    lastname: "Parker",
    age: 29,
    weight: 150,
    height: 150,
  },
  {
    name: "Gary",
    lastname: "Nodal",
    age: 54,
    weight: 165,
    height: 175,
  },
  {
    name: "Julius",
    lastname: "Martir",
    age: 67,
    weight: 159,
    height: 180,
  },
  {
    name: "Salma",
    lastname: "Smith",
    age: 33,
    weight: 170,
    height: 171,
  },
  {
    name: "Tatiana",
    lastname: "Soliban",
    age: 59,
    weight: 179,
    height: 170,
  },
  {
    name: "Michael",
    lastname: "Salvador",
    age: 65,
    weight: 183,
    height: 191,
  },
  {
    name: "Katia",
    lastname: "Moran",
    age: 41,
    weight: 120,
    height: 160,
  },
  {
    name: "Patty",
    lastname: "Lue",
    age: 66,
    weight: 133,
    height: 187,
  },
];

function processNextPerson(people) {
  let i = 0;
  let tallerPerson = {};
  let youngerPerson = {};
  let ageSum = 0;
  let heightSum = 0;

  function processPerson(person) {
    let personToProcess = { ...person };
    const { age, height } = person;

    if (i == 0) {
      tallerPerson = personToProcess;
      youngerPerson = personToProcess;
    }

    if (tallerPerson.height < height) tallerPerson = personToProcess;
    if (youngerPerson.age > age) youngerPerson = personToProcess;

    ageSum += age;
    heightSum += height;

    return {
      ageSum: ageSum,
      heightSum: heightSum,
      tallest: tallerPerson,
      youngest: youngerPerson,
    };
  }

  function calculate() {
    let person = people[i];
    const processed = processPerson(person);
    i++;
    return processed;
  }

  return calculate;
}

const foo = processNextPerson(people);

function peopleInformation(people) {
  let i = 0;
  let peopleResponse = {};
  let processedPerson = {};

  while (i < people.length) {
    processedPerson = foo();
  }

  const { ageSum, heightSum, tallest, youngest } = processedPerson;

  peopleResponse["ageProm"] = ageSum / people.length;
  peopleResponse["heightProm"] = heightSum / people.length;
  peopleResponse["tallerPerson"] = tallest;
  peopleResponse["youngerPerson"] = youngest;

  return peopleResponse;
}

peopleInformation(people);

module.exports = peopleInformation;
