/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
  let serieFibonacci = [0, 1];
  for (let i = 2; i < limit; i++) {
    serieFibonacci[i] = serieFibonacci[i - 2] + serieFibonacci[i - 1];
  }
  return serieFibonacci;
}

module.exports = fibonacci;
