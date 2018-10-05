let a = [100,500,1000,5000,10000];// - True
let b = [100,1000,500,5000,10000];// - False
let c = [10000,5000,1000,500,100];// - True
let d = [10000,5000,500,1000,100];// - False


function sort(params) {
    return (isAsc(params) || isDesc(params)) ? true : false
}

function isAsc (params) {
   for (let i = 1; i < params.length; i++)
       if (params[i-1] < params[i])
            return false;
   return true;
}

function isDesc (params) {
   for (let i = 1; i < params.length; i++)
       if (params[i-1] > params[i])
            return false;
   return true;
}

function isDsc (params) {
    let prev = params[0];
    let isDecending = false;
   for (let i = 1; i < params.length; i++) {
       if (prev > params[i]) {
            isDecending = true;
            prev = params[i];
        } else {
            return false;
        }
   }
   return isDecending;
}


console.log(sort(a));
console.log(sort(b));
console.log(sort(c));
console.log(sort(d));
