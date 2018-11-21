// set is just like an array but no duplicate items
// add, remove, has, addAll, retainAll, removeAll
function Set() {
    this.collection = [];
}

Set.prototype.has = function (elem) {
    return this.collection.indexOf(elem) !== -1;
}

Set.prototype.values = function () {
    return this.collection;
}

Set.prototype.add = function (elem) {
    if (!this.has(elem)) {
        this.collection.push(elem);
        return true;
    }
    return false;
}

Set.prototype.remove = function (elem) {
    if (this.has(elem)) {
        let idx = this.collection.indexOf(elem);
        this.collection.splice(idx, 1);
        return true;
    } return false;
}

// return union of 2 sets
Set.prototype.union = function (otherSet) {
    // combine sets but leave out any duplicate
    var unionSet = new Set();
    var thisSet = this.values();
    var secondSet = otherSet.values();
    thisSet.forEach(element => {
        unionSet.add(element);
    });
    secondSet.forEach(element => {
        unionSet.add(element);
    });
    return unionSet;
}

// intersection: return common elements from both set.

// difference: all the items in one set but not in other set

// subset; if the set is a subset of other set.
//ie, use every method , all the lements in the first set are in the second set
