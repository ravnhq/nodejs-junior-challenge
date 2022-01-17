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
    let avrAge = 0;
    let avrHeight = 0;
    const len = people.length;
    people.forEach(val => {
        avrAge += val.age
        avrHeight += val.height
        //Gets the average height and average age from people
    });
    let minAge = Math.min(...people.map(val => val.age))//gets minimun age from people
    let minAgePerson = people.find(min => min.age === minAge)//gets the object with the youngest person in people
    let maxHeight = Math.max(...people.map(val => val.height))//gets max height from people
    let maxHeightPerson = people.find(max => max.height === maxHeight)//gets the object with the person data that is the tallest
    avrAge = Math.round(avrAge / len)
    avrHeight = Math.round(avrHeight / len)
    let ans = { 'ageProm': avrAge, 'heightProm': avrHeight, 'youngerPerson': minAgePerson, 'tallerPerson': maxHeightPerson }
    return ans
}

module.exports = peopleInformation;
