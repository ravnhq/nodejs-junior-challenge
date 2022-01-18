/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) { 
  let fibonacciSerie = [0,1]
  for( let i= 2 ; limit>i; i++ ){
    fibonacciSerie.push(fibonacciSerie[i-1] + fibonacciSerie[i-2]);
  }
  return {'length': limit, "numbers": fibonacciSerie}
}

module.exports = fibonacci;
