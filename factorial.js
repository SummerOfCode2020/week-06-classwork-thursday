/**
Implement a recursive factorial() function which will take a number and compute its factorial value. For example, factorial(5) would return 120 because 5 * 4 * 3 * 2* 1 is 120.
 */
var factorial = function factorial (number) {
    if (number > 0 && number <= 1) {
        return 1;
    } else {
        return number * factorial(number - 1)
    }
}

/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
 console.assert(factorial(5) === 120, "Expected 120")
 console.log(factorial(5))
