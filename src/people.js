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
  let younger = null;
  let taller = null;
  let totalAge = 0;
  let totalHeight = 0;
    
  // get item  such that the value of 'property' matches callback(item1.property,item2.property)
  const getMatchProp = (item1, item2, callback, property) => (
    (item1 === null || callback(item2[property], item1[property]) === item2[property])
      ? item2 : item1);
  
  people.forEach((person) => {
    totalAge += person.age;
    totalHeight += person.height;
    younger = getMatchProp(younger, person, Math.min, 'age');
    taller = getMatchProp(taller, person, Math.max, 'height');
  });
  
  return {
    ageProm: Math.round(totalAge / people.length),
    heightProm: Math.round(totalHeight / people.length),
    youngerPerson: younger,
    tallerPerson: taller,
  };
}

module.exports = peopleInformation;
