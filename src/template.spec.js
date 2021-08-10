const template = require("./template")

describe('template challenge', () => {
  it('should process template', () => {
    const processOne = template('(XXX)XXX-XXX-XX', 'X', '26365858364')
    const processTwo = template('(XXX)XXX-XXX-XX', 'X', '26365858')
    const processThree = template('(XXX)XXX-XXX-XX', 'X', '2636585836456')
    const processFour = template('(XXX)XXX-XXX-XY', 'X', '2636585836456')

    expect(processOne).toEqual('(263)658-583-64')
    expect(processTwo).toEqual('(263)658-58X-XX')
    expect(processThree).toEqual('(263)658-583-64')
    expect(processFour).toEqual('(263)658-583-6Y')
  })
  it('should return error message', () => {
    const processOne = template('(XXX)XXX-XXX-XX', 'Y', '26365858')
    const processTwo = template('(XXX)XXX-XXX-XX', 'X', '')

    expect(processOne).toEqual('Invalid parameters')
    expect(processTwo).toEqual('Invalid parameters')
  })
})
