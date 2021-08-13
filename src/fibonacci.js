/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) { 
    let fibonacciPrevious = 1;
    let fibonacciSerie = [0]

    for (let num = 0; num < limit - 1; num++) {
        fibonacciSerie.push(fibonacciPrevious + fibonacciSerie[num]);
        fibonacciPrevious = fibonacciSerie[num]
    }

    return fibonacciSerie
}


module.exports = fibonacci