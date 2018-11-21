  let arr = [255, 266, 322, 453, 648, 657, 750, 861, 878, 963];
console.log(arr);
let rand = Math.round(Math.random() * 20);
console.log("rand ", rand);
let target = arr[rand];
console.log(target);

function bsearch(arr, target, start, end) {
  let mid = Math.round((start + end)/2);
  console.log(target, start, end, mid);

  if (target == arr[mid]) return [arr[mid], mid];
  if (target < arr[mid]) return bsearch(arr, target, start, mid);
  if (target > arr[mid]) return bsearch(arr, target, mid, end);
}

let result = bsearch(arr, target, 0, (arr.length - 1));
console.log(result);
