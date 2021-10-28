/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
    const numbers = []

    let a = 0
    let b = 1
    let t = 1

    while (numbers.length !== limit) {
        numbers.push(a)
        t = a + b
        a = b
        b = t
    }

    return numbers
}

module.exports = fibonacci;
