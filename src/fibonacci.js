/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
    if (limit<1)
        return [];

    if (limit==1)
        return [0];

    let serie = [0,1]
    for (let i=2; i<limit; i++) {
        serie.push(serie[i-1] + serie[i-2]);
    }

    return serie;
}

module.exports = fibonacci;
