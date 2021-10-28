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
    if (people.length === 0) {
        return null
    }

    const [ageProm, heightProm] = calcAgeAndHeightAvg(people)
    const [youngerPerson, tallerPerson] = findYoungestAndTallest(people)

    return {
        ageProm: Math.round(ageProm),
        heightProm: Math.round(heightProm),
        youngerPerson: youngerPerson,
        tallerPerson: tallerPerson,
    }
}

/**
 * Calculates the age and height average
 * @param {Array<Person>} people People information to be processed
 * @returns {[number, number]} the age and height average
 */
function calcAgeAndHeightAvg(people) {
    const total = people.length
    const accProm = ([age, height], p) => {
        return [age + p.age / total, height + p.height / total]
    }

    return people.reduce(accProm, [0, 0])
}

/**
 * Finds the youngest and tallest person in {@link people}.
 * @param {Array<Person>} people People information to be processed
 * @returns {[Person, Person]} the youngest and tallets person.
 */
function findYoungestAndTallest(people) {
    let youngest = people[0]
    let tallest = people[0]

    for (const person of people) {
        if (person.age < youngest.age) {
            youngest = person
        }

        if (person.height > tallest.height) {
            tallest = person
        }
    }

    return [youngest, tallest]
}

module.exports = peopleInformation;
