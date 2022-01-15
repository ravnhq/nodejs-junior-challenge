/* eslint-disable no-plusplus */

/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
  let fib;
  let temp = 0;
  let temp2 = 1;
  const fibonacciSeq = [0, 1];

  for (let i = 0; i < limit - 2; i++) {
    fib = temp + temp2;
    temp = temp2;
    temp2 = fib;

    fibonacciSeq.push(fib);
  }

  return fibonacciSeq;
}

module.exports = fibonacci;
