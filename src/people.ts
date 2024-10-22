interface Person {
  name: string;
  lastname: string;
  age: number;
  weight: number;
  height: number;
}

interface PeopleResponse {
  averageAge: number;
  averageHeight: number;
  youngerPerson: Person;
  tallerPerson: Person;
}

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
export default function peopleInformation(people: Person[]): PeopleResponse {
  throw new Error("Not implemented");
}
