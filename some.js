/**
Implement a some() function which takes an array of items and returns true if any item in the array is true
 */
function some (items) {
    let returnValue = false
    items.forEach (function (item) {
        if ( item ) {
            returnValue = true
        }
    }
    )
    return returnValue;
}

 const result1 = some([false, false, false, false])

/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
 console.assert(result1 === false, "Expected false")

 const result2 = some([false, false, false, true])
 console.assert(result2 === true, "Expected true")
