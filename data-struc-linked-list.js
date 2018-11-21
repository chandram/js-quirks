//https://www.youtube.com/watch?v=9YddVVsdG5A
function LinkedList () {
    this.head = null;
    this.length = 0;
    this.Node = function (element) {
        this.element = element;
        this.next = null
    }
}

LinkedList.prototype.add = function(elem) {
    let node = new this.Node(elem); // create new node
    if (this.head == null) { // if head is null, then new node is head
        this.head = node;
    } else {
        var currentNode = head; // save current pointer
        while (currentNode.next) { // iterate next node till you reach end of node.
            currentNode = currentNode.next;
        }
        currentNode.next = node; // point new node to last node's next
    }
    this.length++;
}

LinkedList.prototype.remove = function(elem) {
    var currentNode = this.head;
    var prevNode = null
    if (currentNode.element === elem) {
        this.head = currentNode.next;
    } else {
        while (currentNode.element !== elem) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        prevNode.next = currentNode.next;
    }
    this.length--
}

