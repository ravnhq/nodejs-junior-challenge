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
  let results = {
    ageProm: 0,
    heightProm: 0,
    youngerPerson: people[0],
    tallerPerson: people[0]
  }

  people.forEach( person => {
    person.age < results.youngerPerson.age && (results.youngerPerson = person)
    person.height > results.tallerPerson.height && (results.tallerPerson = person)

    results.ageProm += person.age/people.length
    results.heightProm += person.height/people.length
  })

  return {
    ageProm: Math.round(results.ageProm),
    heightProm: Math.round(results.heightProm),
    youngerPerson: results.youngerPerson,
    tallerPerson: results.tallerPerson
  }

}

module.exports = peopleInformation;
