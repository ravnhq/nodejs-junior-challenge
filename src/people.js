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
  // const listAge = people.map((person) => person.age);
  // const listHeight = people.map((person) => person.height);
  // const ageProm = listAge.reduce((a, b) => a + b) / people.length;
  // const heightProm = listHeight.reduce((a, b) => a + b) / people.length;
  // const younger = listAge.indexOf(Math.min(...listAge));
  // const taller = listHeight.indexOf(Math.max(...listHeight));
  // return {
  //   ageProm: Math.round(ageProm),
  //   heightProm: Math.round(heightProm),
  //   youngerPerson: people[younger],
  //   tallerPerson: people[taller],
  // };
  if (!people.length) return null;
  let counter = 0;
  const age = [people[0].age, 0];
  const height = [people[0].height, 0];
  const total = people.reduce((personOne, personTwo) => {
    if (age[0] > personTwo.age) { age[1] = counter + 1; }
    if (height[0] < personTwo.height) { height[1] = counter + 1; }
    counter += 1;
    return {
      age: personOne.age + personTwo.age,
      height: personOne.height + personTwo.height,
      
    };
  });
  return {
    ageProm: total.age / (counter + 1),
    heightProm: total.height / (counter + 1),
    youngerPerson: people[age[1]],
    tallerPerson: people[height[1]],
  };
}

module.exports = peopleInformation;
