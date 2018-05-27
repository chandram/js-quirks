/**
 * Pipelines
 * A pipeline allows for easy function composition when performing multiple operations on a variable. 
 * Since JavaScript lacks a Pipeline operator, a design pattern can be used to accomplish the task.
 */

var pipe = (...funcs) => {
    return (data) => {
        return funcs.reduce((val, fn) => {
            return fn(val)
        }, data)
    }
}
var cart = [3.12, 45.15, 11.01];
var addSalesTax = (total) => (total * 0.09) + total;
var printTotal = (val) => `Order Total = ${val.toFixed(2)}`;
//var reduce = (x) => Array.prototype.reduce.call(x, ((val, cur) => val + cur, 0));
var reduce = (x) => x.reduce((val, cur) => {
    console.log(val , cur);
    return (val + cur);
}, 0);
var tally = pipe(reduce, addSalesTax, printTotal);
tally(cart);

// const tally = orders => pipe([
// x => x.reduce((total, val) => total + val), // sum the order
// x => addSalesTax(x, 0.09),
// x => `Order Total = ${x.toFixed(2)}` // convert to text
// ])(orders); // Order Total = 64.62

