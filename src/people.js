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
  let ageAvg = 0;
  let heightSum = 0;
  let heightAvg = 0;
  let tallerPerson = 0;
  let youngerPerson = 99;
  let tallerPersonInfo = {};
  let youngerPersonInfo = {};

  for (let info of people){
    ageSum += info.age;
    ageAvg = Math.round(ageSum / people.length);
    heightSum += info.height;
    heightAvg = Math.round(heightSum / people.length);
    info.age > youngerPerson ? info.age : youngerPerson = info.age;
    info.height < tallerPerson ? info.height : tallerPerson = info.height;
    info.age == youngerPerson ? youngerPersonInfo = info : youngerPerson;
    info.height == tallerPerson ? tallerPersonInfo = info : tallerPerson;
  };

  return {
    ageProm : ageAvg,
    heightProm : heightAvg,
    youngerPerson : youngerPersonInfo,
    tallerPerson : tallerPersonInfo
  }
}

module.exports = peopleInformation