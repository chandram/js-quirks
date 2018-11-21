// Priority Queue
// Pass the priority of the element along with element
// elelemt with higher priority is ahead of other element

// pq.enqueue(["elment 2", 2])
// pq.enqueue(["elment 1", 1])

function PriorityQueue() {
    this.collection  = [];
}

PriorityQueue.prototype.isEmpty = function () {
    return (this.collection.length == 0)
}

PriorityQueue.prototype.enqueue = function (elem) {
    if (this.isEmpty()) 
        this.collection.push(elem);
    else {
        let isAdded = false;
        for (var i = 0; i < this.collection.length; i++) {
            let cur = this.collection[i];
            if (elem[1] < cur[1]) {
                this.collection.splice(i, 0, elem);
                isAdded = true;
                break;
            }
        }
        if (!isAdded) {
            this.collection.push(elem)
        }
    }
}

PriorityQueue.prototype.dequeue = function () {
    this.collection.shift(); // returns element FIFO
}

PriorityQueue.prototype.print = function () {
    console.log(this.collection);
}