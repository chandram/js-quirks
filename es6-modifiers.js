//Update/modify an object

let obj = { id: 1, upVotes: 100, name: "Jane Doe" };
let newObj = { ...obj, upVotes: 120 }
console.log(newObj);
// {id: 1, upVotes: 120, name: "Jane Doe"}

// Iteate Object
let obj = {id: 1, upVotes: 120, name: "Jane Doe"};
Object.entries(obj).map(([k, v]) => {
    console.log(`Key(${k}) -->(${v})`);
})
// Key(id) -->(1)
// Key(upVotes) -->(120)
// Key(name) -->(Jane Doe)

// Update array
let arr = [9,8,7,6];
// to update second index
let index = 2;
let newArr = [
    ...arr.slice(0, index),
    arr[index] + 1,
    ...arr.slice(index + 1)
];
console.log(newArr);
/* [9,8,8,6] */