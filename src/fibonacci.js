/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {

  let fibonacci = [];
  let prevNum = 0;
  let currentNum = 1;

  while (limit > 0){
    fibonacci.push(prevNum);
    let aux = prevNum;
    prevNum = currentNum;
    currentNum = aux + prevNum;
    limit--;
  }

  return fibonacci;
 }

module.exports = fibonacci