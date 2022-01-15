/* eslint-disable */
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

  let listTotalAge = people.map((p) => p.age);
  let listTotalHeight = people.map((p) => p.height);

  console.log(listTotalAge);

  let averageAge = Math.round((listTotalAge.reduce((a, b) => a + b) / people.length), 0);
  let averageHeight = Math.round((listTotalHeight.reduce((a, b) => a + b) / people.length), 0);

  console.log(averageAge);

  let tallest = Math.max(...listTotalHeight);
  let youngest = Math.min(...listTotalAge);

  let tallestPersonIndex = listTotalHeight.indexOf(tallest);
  let youngestPersonIndex = listTotalAge.indexOf(youngest);

  return {
    ageProm: averageAge,
    heightProm: averageHeight,
    youngerPerson: people[youngestPersonIndex],
    tallerPerson: people[tallestPersonIndex]
  }
}

module.exports = peopleInformation;
