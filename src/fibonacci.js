/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
 */

function fibonacci(limit) {
  let sum = 0;
  let fibArray = [0, 1];
  let index = 1;
  while (true) {
    if (fibArray.length == limit) {
      return fibArray;
    } else {
      sum = fibArray[index] + fibArray[index - 1];
      index += 1;
      fibArray.push(sum);
    }
  }
}

module.exports = fibonacci;
