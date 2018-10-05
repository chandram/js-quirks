
// Higher Order Functions
// https://medium.com/functional-javascript/higher-order-functions-78084829fff4
// A function that accepts another function as a parameter, or returns another function.

// Example: AddBy2
const add = x => y => x + y;
add(2)(3);

var add2 = add(2);
add2(6);

// Example: Map Consecutive number's
var letters = ['a','b','c','d','e','f','g'];
//result [[a,b],[b,c],[c,d]...]

function consecutive (arr, fn) {
    var result = [];
    for(let i=0; i < arr.length - 1; i++) {
        result.push(fn(arr[i], arr[i+1]));
    }
    return result;
}

let result = consecutive(letters, (x,y) => [x,y]);
console.log(result);
// [[a,b], [b,c], [c,d], [d,e], [e,f], [f,g]]
