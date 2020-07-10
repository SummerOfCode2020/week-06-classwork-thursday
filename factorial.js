/**
Implement a recursive factorial() function which will take a number and compute its factorial value. For example, factorial(5) would return 120 because 5 * 4 * 3 * 2* 1 is 120.
 */
function factorial (number) {
    if(number === 0){
        return 1
    }

    return number * factorial(number-1)
}

const result1 = factorial(5)

/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/

 console.assert(result1 === 120, "Expected 120")
