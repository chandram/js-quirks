/**
 * Promise Recursive
 */
Promise.resolve().then(function () {
    console.group("---recursive---");
    return 3;
}).then(function (n) {
    return recursive(n);
}).then (function (){
    console.log("group end");
})

function recursive(n) {
    console.log("In recursive function ", n);
    if (n === 0) return 0;

    return Promise.resolve().then(function() {
        return recursive(n-1);
    })
}

//---recursive---
// In recursive function  3
// In recursive function  2
// In recursive function  1
// In recursive function  0
// group end

/**
 * Simple recursive function
 */
function print(n) {
    if (n == 0) return;
    console.log(n);
    print(n-1)
}


/**
 * Promise Chain
 */
// Example 1

//resolve cube value of input
var cube = function(value) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log(value);  
        resolve(value * value * value)
  }, 1000) })
  }
  cube(2).then(cube).then(cube)
  // Value:  2
  // value:  8
  // value:  512

// Example 2
  new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
        if (body) {
          resolve(JSON.parse(body));
        } else {
          resolve({});
        }
    })
  }).then(() => { 
      // do something
  })
  .catch((err) => console.log(err));

  // Parallelize all promis tasks
  Promise.all([
     promise1, promise2, promise3
  ]).then(() => {
     // all tasks completed
  })