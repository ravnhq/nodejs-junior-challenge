/** 
 * Given a number, write a function that returns the "n" numbers of the fibonacci sequence
 *  
 * @param {number} limit - Number of fibonacci numbers to be generated
 * 
 * @returns {number[]}  - Fibonacci Serie
*/

function fibonacci(limit) {
    let fibArray=[0,1]
    for (fibArray, i=0,j=1,k=2;k<limit;k++){
        x=i+j;
        i=j;
        j=x;
        fibArray.push(x);
    }
    return fibArray;
 }

module.exports = fibonacci;
