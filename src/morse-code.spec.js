const { equivalency } = require("./mocks/morse-code.mock")
const morseCode = require("./morse-code")

describe('morse code challenge', () => {
  it('should process string', () => {
    const processOne = morseCode('hello, how are you?', 'morse')
    const processTwo = morseCode('.... . .-.. .-.. --- --..--   .... --- .--   .- .-. .   -.-- --- ..- ..--..', 'english')
    const processThree = morseCode('This is the NodeJs challenge for Junior Devs', 'morse')
    const processFour = morseCode('.-. .- -. -.. --- --   ... - .-. .. -. --.   .---- ..--- ....- ----. .--.-. .-.-. -....- -..-.', 'english')

    expect(processOne).toEqual(equivalency["HELLO, HOW ARE YOU?"])
    expect(processTwo).toEqual(equivalency[".... . .-.. .-.. --- --..--   .... --- .--   .- .-. .   -.-- --- ..- ..--.."])
    expect(processThree).toEqual(equivalency["THIS IS THE NODEJS CHALLENGE FOR JUNIOR DEVS"])
    expect(processFour).toEqual(equivalency[".-. .- -. -.. --- --   ... - .-. .. -. --.   .---- ..--- ....- ----. .--.-. .-.-. -....- -..-."])
  })
})
