// Composite Functions execute from right-to-left
// https://www.gideonpyzer.com/blog/javascript-function-composition-and-pipelines/
/**
 * function takes more than one function, 
 * Two function ex: f and g, and returns a new function that will execute the two functions on an argument x passed in.
 */

function composite(f, g) {
    return function(x) {
        return f(g(x));
    }
}

// Let's take an example where f and g are defined as multiplyBy5 and add10 respectfully.

let multiplyBy5Add10 = compose(multiplyBy5, add10);

//We have now composed a new function that will multiply an argument by 5 and add 10. Let's try this out and log it to the console.
let multiplyBy5 = val => val * 5;
let add10 = val => val + 10;

let result = multiplyBy5Add10(4);
console.log(result); // 70
// x = 4 
// g(x) = 14 ---> add10
// f(g(x) = 70 ----> multiplyBy5

const compose = (...fns) => {
    return (initialVal) => {
        return fns.reduceRight((val, fn) => { 
            return fn(val);
        }, initialVal);
    }
}

