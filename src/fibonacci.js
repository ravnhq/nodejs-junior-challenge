/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function* fibonacciNumbers() {
  yield 0;
  yield 1; 
  let n0 = 0;
  let n1 = 1;
  let n2;
  while (true) {
    yield (n2 = n0 + n1);
    n0 = n1;
    n1 = n2;
  }
}

function fibonacci(limit) {
  const it = fibonacciNumbers();
  return Array.from({ length: limit }, () => it.next().value);
}

module.exports = fibonacci;
