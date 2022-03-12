/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
    const Fibonacci = [];
    let initial = 0;
    let final = 1;
    let sum = 0;

    for (let i = 0; i < limit; i++) {
        Fibonacci.push(initial)
        sum = initial + final;
        initial = final;
        final = sum;
    }

    return Fibonacci;
}

module.exports = fibonacci;
