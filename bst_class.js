class Node() {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BST() {
    constructor() {
        this.root = null;
    }

    add(data) {
        let node = this.root;
        if (node == null) {
            this.root = new Node(data);
            return;
        }
        else {
            // where to put the node in the tree
            // use recursive function
            let node =  this.root;
            search(node, data);  
        }    
    }

    search(node, data) {
        if (data < node.data) {
            if (node.left == null) {
                node.left = new Node(data);
                return;
            } else {
                return search(node.left, data)
            }
        } else if (data > node.data) {
            if (node.right == null) {
                node.right = new Node(data);
                return;
            } else {
                return search(node.right, data)
            }
        } else { // if equals
            return null;
        }
    }

    findMin() {
        let currentNode =  this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.node;
    }

    findMax() {
        let currentNode =  this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }

    find(data) {
        let currentNode = this.root;
        while (currentNode.data !== data) {
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return currentNode;
    }

    isExist(data) {
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data)
                return true;
            else if (data < currentNode.data)
                currentNode = currentNode.left;
            else if (data > currentNode.data)
                currentNode = currentNode.right;
        }
        return false;
    }

    remove(data) {
        
    }
}