/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
  if (limit < -1) {
    throw new Error(`Invalid Input Negative Number: ${n}`);
  }
  const arr = [];
  arr.push(0);
  if (limit === 0) {
    return arr;   
  }
  arr.push(1);
  if (limit === 1) {
    return arr;   
  }
  let result = 0;
  for (let count = 2; count < limit; count += 1) {
    result = arr[count - 1] + arr[count - 2];
    arr.push(result);
  }
    
  return arr;
}

module.exports = fibonacci;
