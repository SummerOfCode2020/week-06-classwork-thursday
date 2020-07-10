/**
Implement a filter() function. 
This function should take an array of items and a predicate function. 
A predicate function is one that returns true or false. 
The filter() function should return a new array that contains only the items from the original array for which the predicate function returns true. 
 */
function filter (items, predicate) {
    returnList = []
    
    items.forEach(element => {
        if(predicate(element)){
            returnList.push(element)
        }
    });

    return returnList
}

const ages = [12, 14, 19, 20, 21, 22, 25, 30, 40];
const result1 = filter(ages, function (age) {
    return age >= 21
})

//console.log({result1})

console.assert(result1.length === 5, "Expected 5 of the ages are legal drinking ages")
