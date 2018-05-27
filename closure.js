/**
 * Closure (https://medium.com/functional-javascript/higher-order-functions-78084829fff4)
 * A functions closure is a pointer, that the function carries with it. 
 * It points to a table of all the variables in the scope where the function was created.
 * 
 * A closure is created every time a function returns another function defined within it.
 */

 // Function Factory
function add(x) {
    return function(y) {
      return x + y
    }
  }
var add2 = add(2)
var add3 = add(3)
add2(4) //==>> 6
add3(6) //==>> 9

// We will look at some of the common functions that are written using the function factory pattern.

function get(prop) {
    return function(obj) {
        return obj[prop]
    }
}

var getName = get("name");
var book = {
    name: "FP JS"
  }

getName(book) // returns "FP JS"

//Similarlly same function can be used as 
get(1)([1, 2, 3]) //==>> 2 returns the value of index 1

// map function
function map(fn) {
    return function(arr) {
      return Array.prototype.map.call(arr, fn)
    }
  }
map(function(x) {return x * x}) ([1, 2, 3]) //==>> [ 1, 4, 9 ]

var people = [ {name:"John", email:"john.doe@example.com"}, {name:"Jane", email:"jane.doe@example.com"} ];
map(get("email")) (people) //===>> [ "john.doe@example.com", "jane.doe@example.com" ]