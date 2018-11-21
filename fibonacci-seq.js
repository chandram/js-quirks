
function feb(...params) {
  var febn = [...params];
  //var febn = [].concat(params);
  //febn.push(...params);
  return function() {
    let idx = febn.length - 1 ;
    febn.push(febn[idx] + febn[idx-1]);
    console.log(febn);
    //febn.push(cur);
  }
}

// // O(n) complexity
// // f(n) = f(n-1)+f(n-2)
// function fibo(n) {
//   if (num <= 1) return n;
//   return fibo(n-1) + fibi(n-2);
// }


// memoization
// increases space complexity of new alogrithm to O(n)

// pure & impure functions

// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

// The slice() method returns a shallow copy of a portion of an array into a new array
// object selected from begin to end (end not included). The original array will not be modified.

// Object.assing({}, )
