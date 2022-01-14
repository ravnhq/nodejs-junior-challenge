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
  let ageProm = 0;
  let heightProm = 0;
  let younger = people[0];
  let taller = people[0];
  people.forEach(
    (item) => {
      ageProm += item.age;
      heightProm += item.height;
      if (item.age < younger.age) {
        younger = item;
      }
      if (item.height > taller.height) {
        taller = item;
      }
    },
  );
  return {
    ageProm: Math.round(ageProm / people.length),
    heightProm: Math.round(heightProm / people.length),
    youngerPerson: younger,
    tallerPerson: taller,
  };
}

module.exports = peopleInformation;
