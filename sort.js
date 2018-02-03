let arr = [];
for (let i = 0; i < 10; i++)
  arr.push(parseInt(Math.random() * 1000));

console.log(arr);
//  [861, 750, 963, 266, 878, 255, 322, 657, 453, 648]

function sort() {
  let i = 0, j = 0, tmpIdx, temp;
  for (i = 0; i < arr.length - 1; i++) {
    tmpIdx = i;
    for (j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[tmpIdx]) {
        temp = arr[tmpIdx];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

sort();
//[255, 266, 322, 453, 648, 657, 750, 861, 878, 963]
