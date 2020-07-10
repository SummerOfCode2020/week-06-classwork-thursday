/**
Implement a recursive factorial() function which will take a number and compute its factorial value. For example, factorial(5) would return 120 because 5 * 4 * 3 * 2* 1 is 120.
 */
function factorial(num) {
    // if num is less than zero, return 0
    if (num < 0) {
        return 0;
    } else {
        //if num is equal to 0, return 1 and end recursion
        if (num == 0) {
            return 1;
        } else 
        /* if num does not meet the previous 2 conditions
           it must be greater than 0, so will be passed 
           through the factorial function again*/
            return (num * factorial(num - 1));
            // (5*factorial(5-1))
            // (4*factorial(4-1))
            // ...
            // (1*factorial(1-1))
            // on the last one num = 0
            // 0 returns 1 and ends the recursion
        }
}


const result1 = factorial(5)

/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
console.assert(result1 === 120, "Expected 120")
// boooooo!!... I don't like this assert business