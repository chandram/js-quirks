
function spanInserter(str, markers) {
  var  prev = 0;

  var newstr = markers.reduce(function (newstr, m) {
    newstr += str.substring(prev, m[0]) + "<span>"+str.substring(m[0], m[1])+"</span>";
    prev = m[1];
    return newstr;
  }, "")
  newstr += str.substring(prev);

  return newstr;
}

describe('string insertion', function() {
  it('should insert spans into the string', function() {
    var input = 'hello world, this is first span';
    // set markers
    var markers = [
      [6, 11],
      [13, 17]
    ];

    var expected = 'hello <span>world</span>, <span>this</span> is first span';

    var result = spanInserter(input, markers);

    expect(result).toBe(expected);
  });
});

/* function spanInserter(str, markers) {
  var out_str = [],
    marker;
  str = str.split("");

  marker = markers.shift();

  for (var i = 0; i < str.length; i++) {

    if (marker) {
      if ( i == marker[0]) out_str.push("<span>");
      else if (i == marker[1]) {
        out_str.push("</span>");
        marker = markers.shift();
      }
    }
    out_str.push(str[i]);
  }

  return out_str.join("");
} */
