/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
  let aux1 = 0;
  let aux2 = 1;
  const serie = [aux1];
  for (let i = 2; i <= limit; i += 1) {
    serie.push(aux2);
    aux2 = aux1 + aux2;
    aux1 = aux2 - aux1;
  }
  return serie;
}

module.exports = fibonacci;
