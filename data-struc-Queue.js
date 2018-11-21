// queue FIFO
// Use array;
// enqueue; dequeue; isEmpty, size, front

function Queue() {
    this.collection  = [];
}

Queue.prototype.enqueue = function (elem) {
    this.collection.push(elem);
}

Queue.prototype.dequeue = function () {
    this.collection.shift(); // returns element FIFO
}