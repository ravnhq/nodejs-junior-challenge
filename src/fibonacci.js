/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {

  //Check if limit is greater than 0
  if (limit > 0) {
    //fibonacci numbers
    let fibonacciNumbers = [0, 1];
    let numberSequence = 0;
    let previousNumber1 = 1;
    let previousNumber2 = 0;

    let index = 1;
    let change = 0;

    //Find fibonacci numbers
    while (change == 0) {
      index++;

      numberSequence = previousNumber1 + previousNumber2;
      previousNumber2 = previousNumber1;
      previousNumber1 = numberSequence;
      fibonacciNumbers.push(numberSequence);

      if (index == limit - 1) {
        change = 1;
      }
    }

    return fibonacciNumbers;
  }

  return "The number of limit must be greater than 0";
}

module.exports = fibonacci;
