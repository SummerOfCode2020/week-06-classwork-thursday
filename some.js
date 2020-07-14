/**
Implement a some() function which takes an array of items and 
returns true if any item in the array is true
 */
function some (items) {
    let containsTrue = false;
    // [false, false, false, false]   //

    items.forEach(element => {
        if (element === true) {
            containsTrue = true;
        };
    });

    return containsTrue 
}



/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
 const result1 = some([false, false, false, false])
 console.assert(result1 === false, "Expected false")

 const result2 = some([false, false, false, true])
 console.assert(result2 === true, "Expected true")
