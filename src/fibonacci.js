/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
 */

function* nextFibo() {
  let firstNumber = 0;
  let secondNumber = 1;

  while (true) {
    let current = firstNumber;
    firstNumber = secondNumber;
    secondNumber = firstNumber + current;
    yield current;
  }
}

const genFibo = nextFibo();

function fibonacci(limit) {
  let i = 0;
  let fibonacciNumbers = [];

  while (i < limit) {
    fibonacciNumbers.push(genFibo.next().value);
    i++;
  }

  return fibonacciNumbers;
}

console.log(fibonacci(20))

module.exports = fibonacci;
