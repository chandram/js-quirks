## Sort Array

search a sorted array by repeatedly splitting the array in half using Binary Search

run the sort.js and binary-search.js togather

## HTML String Highlighter
string_highlighter.js
One way to make some HTML text appear highlighted is to wrap a segment of text with a styled `<span>` tag.

function that takes a string and a list of pairs of string indices representing segments of text that are to be highlighted. Returns an html string with each segment wrapped in `<span>` tag.

Assume: index pairs are in a valid order and within the string bounds

index = [[]]

## Map, Reduce, Filter
### Iterate Left to Right

array.map((element, index, original_array) => {
      // do something
});

array.filter((element, index, original_array) => {
      // do something
});

array.reduce((previous_val, element, index, original_array) => {
      // do something
});

// Get unique items in an array.

a.filter((element, idx, array) => array.indexOf(element) === idx)

## JavaScript Declarations are Hoisted and not the assignments.

### Function declarations are hoisted but Function expressions, however are not hoisted.
hoisted(); // Output: "This function has been hoisted."
function hoisted() {
  console.log('This function has been hoisted.');
};

expression(); //Output: "TypeError: expression is not a function
var expression = function() {
  console.log('Will this work?');
};

# Much like their function counterparts, class expressions are not hoisted.

## Order of precedence
# Function declarations are hoisted over variable declarations but not over variable assignments.
# Variable assignment over function declaration

var double = 22;
function double(num) {
  return (num*2);
}
console.log(typeof double); // Output: number #OK

# Function declarations over variable declarations
var double;
function double(num) {
  return (num*2);
}
console.log(typeof double); // Output: function  #OK since variable is not assinged.


