// Strategy to reverse a linked list in JS
function ll(node) { //4
    let prev = null;
    while (node) {
      let next = node.next; //3, 2
      node.next = prev;// 4 -> null, 3 -> 4
      prev = node; //4, 3
      node = next;//3, 2
    }
}