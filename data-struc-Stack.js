// functions push, pop, peek, length

//palindrome

function palindrome(word) {
    let result = [];
    for (var i = 0; i < word.length; i++) {
        result.push(word[i]);
    }
    let response = "";
    for (var i = 0; i < word.length; i++) {
        response += result.pop();
    }
    return response;
}


function Stack() {
    this.count  = 0;
    this.storage = {};
}
Stack.prototype.push = function (val) {
    this.storage[this.count] = val;
    this.count++;
}
Stack.prototype.pop = function () {
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}
// returns the value at the end of stack
Stack.prototype.peek = function () {
    return this.storage[this.count-1];
}

