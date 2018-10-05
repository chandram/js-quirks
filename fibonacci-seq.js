
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

var seq = feb(0,1)

seq()
