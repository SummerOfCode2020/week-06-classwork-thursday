/**
 Write a function called contains that searches for a value in a nested object. 
 It returns true if the object contains that value.

 An idea for the solution:

 We can use JavaScript's for...in syntax to loop through the keys in the object. 
 At each key we can check to see if the value of that key is itself an object such as the key stuff in our example, its value is an object, we can use recursion to dig deeper into these objects until we find keys whose values are not nested objects.

 When the value of the key is not an object we can check to see if it is equal to the value provided. 
 If it is we can immediately return true since we found the value. If we loop through all the keys and do not find a match we return false.

 MDN for...in Documentation
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

*/
//  NOT Working . . .
// what code there is, is for debugging
function contains (item, value) {
    let tmp = []
    for (const property in item ) {
        console.log(`${property}: ${item[property]}`);
        console.log(`${property}`);
        console.log(`${item[property]}`);
 //       console.log(typeof ${item[property]} );   // does not work
        console.log('marker one')
    }
}

const nestedObject = {
    stuff: {
        moreStuff: {
            magicNumber: 44,
            something: 'other'
        }
    }
};

const testObj = { a: 1, b: 2, c: 3 }  // my test array

// contains(testObj,'123'); // my test case

contains(nestedObject, 'foo'); // false
/*
 Learn something new!

 `console.assert(condition, message)`

 https://developer.mozilla.org/en-US/docs/Web/API/console/assert
*/
const result1 = contains(nestedObject, 44)
console.assert(result1 === true, "Expected true")

const result2 = contains(nestedObject, 'foo')
console.assert(result2 === false, "Expected false")
