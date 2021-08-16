/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
 */

function fibonacci(limit) {
  let numbersToGenerate = limit,
    prevNum = 0,
    currentNum = 1;

  const fibonacci = [];

  while (numbersToGenerate > 0) {
    fibonacci.push(prevNum);
    let temp = prevNum;
    prevNum = currentNum;
    currentNum = temp + prevNum;
    numbersToGenerate--;
  }

  return fibonacci;
}

fibonacci(5);

module.exports = fibonacci;
