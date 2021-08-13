/**
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *
 * @param {number} limit - Number of fibonacci numbers to be generated
 *
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
  const fib = [0, 1];
  let i = 2;

  while (i < limit) {
    fib[i] = fib[i - 2] + fib[i - 1];
    i += 1;
  }

  return fib;
}

module.exports = fibonacci;
