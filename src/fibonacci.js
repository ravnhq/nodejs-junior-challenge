/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) { 
    if (limit < 1) return [];
    if (limit === 1) return [0];
    if (limit === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

module.exports = fibonacci;
