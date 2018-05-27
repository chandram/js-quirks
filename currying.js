/**
 * Currying 
 * Currying allows a function with multiple arguments to be translated into a 
 * sequence of functions. 
 * Curried functions can be tailored to match the signature of another function.
 */

function convertTo (toUnit, factor, offset = 0) {
    return function (val) {
       return ((offset + val) * factor).toFixed(2).concat(toUnit);
    }
}
var milesToKm = convertTo('km', 1.60936, 0);

// Using Currying
var inputMiles = [5,15.4,9.8, 110];
var result = inputMiles.map(milesToKm);
console.log(result) // ["8.05km", "24.78km", "15.77km", "177.03km"]

 