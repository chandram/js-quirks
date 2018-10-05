// Higher Order function Custom Map on Array

// Approach - 1
Array.prototype.mymap = function (fn) {
  let context = this;
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(fn.call(null,this[i]));
  }
  return arr;
}
let arr = [3,5,6.7];
arr.mymap((v) => {console.log(v)})

// Approach - 2
function mymap1(fn) {
  return function(arr) {
    return Array.prototype.map.call(arr, fn)
  }
}

mymap1 ( v => console.log(v) ) (arr)


function forEach(fn) {
  return function(arr) {
    Array.prototype.forEach.call(arr, fn)
  }
}
var displayNone = forEach(function(elem) {
  elem.style.display = “none”
})
displayNone(document.querySelectorAll(“div”))



// take
// take takes a number n and returns a function, to which you must pass an array,
// to get the first n elements of the array.
let s = ["1", "2", "10", "21"];
function take(n) {
  return function(arr) {
    return arr.slice(0, n)
  }
}
take(3)(s) // ["1", "2", "10"]
