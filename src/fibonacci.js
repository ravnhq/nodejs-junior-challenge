/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
 */

function fibonacci(limit) {
  let first = 0;
  let second = 1;
  let current = 0;
  const maxLimit = limit;
  const fibo = [first, second];

  for (let i = 0; i < maxLimit - 2; i += 1) {
    current = first + second;
    first = second;
    second = current;

    fibo.push(current);
  }

  return fibo;
}

module.exports = fibonacci;
