// root node (parent);
// 1 or more child node (left child, right child); 
// leaf node has no children;

// BST Rules:
// each node can have only 2 brances 
// Ordered, i.e,
// 1) left child is less than or equal to parent node
// 2) right child is greater than or queal to parent node
// operations time propotional to the log of no. of items stored in the tree
// ie, log(n) ie, log2(n) = d
/* 
log2(1) = 0
log2(2) = 1 
log2(4) = 2
log2(8) = 3
log2(16)= 4 
log2(32)= 5
log2(64)= 6  

and then I draw a little binary tree, this one goes from depth d=0 to d=3:

            d=0          O
                        / \
            d=1        R   B
                      /\   /\
            d=2      R  B R  B
                    /\ /\ /\ /\
            d=3    R B RB RB R B

// better than linear search on unsorted array of items by key
// slower than hashtable.

*/

function bsearch(arr, elem, low = 0, high = arr.length - 1) {

    // console.log(high, low);
    // if (high < low)
    //     return low;

    // let mid = low + ((high - low)/2);
    // console.log("Mid ", mid);
    // if (elem < arr[mid-1]) {
    //     high = mid - 1;
    // } else if (elem > arr[mid-1]) {
    //     low = mid - 1
    // }
    // bsearch(arr, elem, low, high);

    let mid = Math.round((low + high)/2);

    if (elem == arr[mid]) return mid;
    else if (elem < arr[mid]) bsearch(arr, elem, low, mid);
    else if (elem > arr[mid]) bsearch(arr, elem, mid, high);
}
