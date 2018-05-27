// find min value using reduce & Math.min
var arr = [20, 58, 66, 77, 14, 82, 42, 67, 4, 42];

function min(a,b) {
    return Math.min(a,b)
}
console.log("Result--> ", arr.reduce(min));

/*
var min = arr.reduce((a, b) => {
    console.log(a, b);
    return Math.min(a, b);
})
console.log("Result--> ", min)
*/

var posts = [
    {id: 1, upVotes: 2},
    {id: 2, upVotes: 89},
    {id: 3, upVotes: 1}
  ];

// find min votes received 
var minVotes = posts.reduce((a, b) => {
    return (a.upVotes < b.upVotes) ? a : b;
});
console.log("Result--> " , minVotes);

// find total votes received 
var totalUpvotes = posts.reduce((a, b) => 
    a + b.upVotes // reducer function
, 0 // initial accumulator value
);
console.log("Result--> " ,totalUpvotes);

// Find an element inside an array of objects
posts.find(post => post.id === 1);

// Delete a key value pair inside an object
var user = {name: 'John Doe', age: 23, password: 'john@doe'};
var userWithoutPassword = Object.keys(user)
  .filter(key => key !== 'password')
  .map(key => ({[key]: user[key]}))
  .reduce((accumulator, current) => 
    ({...accumulator, ...current}),
    {}
  )
;
// Approach 1
Object.keys(user)
        .filter(key => key !== "password")
        .map(key => ({[key] : user[key]}))
        .reduce((a, b) => ({...a, ...b}), {})

// approach 2
Object.keys(user).reduce((a,b) => {
    // console.log(a, b);
    if (b !== "password") {
        return {...a, [b]: user[b]}
    } else return a
 }, {});

 // approach 3
 const {password, ...others} = user;

// var arr = [20, 58, 66, 77, 14, 82, 42, 67, 4, 42];
var arr = [20, 58, 66, 77, 14, 82, 42, 67, 4, 42];

(function find(arr) {
    var res =  arr.filter((v, i) => {
        console.log(v, i);
        if (i == 0 && v < arr[i+1]) {
            return true;
        } else if (v > arr[i-1] && v < arr[i+1]) {
            return true
        } else return false
    })
    console.log(res);
})(arr)

// Array Sorting; default is String.
var arr = [20, 58, 66, 77, 14, 82, 42, 67, 4, 42];
// Ascending order
arr.sort((a,b) => a - b) 
arr.sort((a,b) => b < a)
// Decensing order
arr.sort((a,b) => b - a)
arr.sort((a,b) => b > a)
