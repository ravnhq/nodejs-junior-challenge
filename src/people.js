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


// function calculateAgeProm(people) {
//     const totalAge = people.reduce((sum, person) => sum + person.age, 0);
//     return Math.round(totalAge / people.length);
// }

// function calculateHeightProm(people) {
//     const totalHeight = people.reduce((sum,person) => sum + person.height, 0);
//     return Math.round(totalHeight / people.length);
// }

// function findYoungerPerson(people) {
//     return people.reduce((youngest, person) => person.age < youngest.age ? person : youngest, people[0]);
// }

// function findTallerPerson(people) {
//     return people.reduce((tallest, person) => person.height > tallest.height ? person : tallest, people[0]);
// }

// function peopleInformation(people) { 

//     PeopleResponse = {
//         "ageProm" : calculateAgeProm(people),
//         "heightProm" : calculateHeightProm(people),
//         "youngerPerson" : findYoungerPerson(people),
//         "tallerPerson" : findTallerPerson(people)
//     }

//     return PeopleResponse;
    
// }

function peopleInformation(people) { 

    const init = {
        totalAge: 0,
        totalHeight: 0,
        youngerPerson: people[0],
        tallerPerson: people[0]
    };

    const metrics = people.reduce((acc, person) => {

        //Total Edades
        acc.totalAge += person.age;

        //Total Alturas
        acc.totalHeight += person.height;

        //Calculo persona mas joven
        if (person.age < acc.youngerPerson.age) {
            acc.youngerPerson = person;
        }

        //Calculo persona mas alta
        if (person.height > acc.tallerPerson.height) {
            acc.tallerPerson = person;
        }

        return acc;
    }, init);

    const PeopleResponse = {
        "ageProm" : Math.round(metrics.totalAge / people.length),
        "heightProm" : Math.round(metrics.totalHeight / people.length),
        "youngerPerson" : metrics.youngerPerson,
        "tallerPerson" : metrics.tallerPerson,
    }
    return PeopleResponse;
}

module.exports = peopleInformation;
