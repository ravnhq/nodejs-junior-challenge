const peopleInformation = require("./people")
const { people } = require("./mocks/people.mocks")

describe('people challenge', () => {
  it('should process people information', () => {
    const result = peopleInformation(people)

    expect(result).toHaveProperty('ageProm', 50)
    expect(result).toHaveProperty('heightProm', 176)
    expect(result.youngerPerson).toHaveProperty('name', 'lastname', 'age', 'weight', 'height')
    expect(result.tallerPerson).toHaveProperty('name', 'lastname', 'age', 'weight', 'height')

    expect(result.tallerPerson).toMatchObject(people[8])
    expect(result.youngerPerson).toMatchObject(people[2])
  })
})
