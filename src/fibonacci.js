/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
 */

function fibonacci(limit) {
  let prevNum = 0,
    currentNum = 1,
    fibonacci = [];

  while (limit > 0) {
    fibonacci.push(prevNum);
    let temp = prevNum;
    prevNum = currentNum;
    currentNum = temp + prevNum;
    limit--;
  }

  return fibonacci;
}

fibonacci(5);

module.exports = fibonacci;
