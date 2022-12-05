function List() {
    //property
    //number of elements in list
    this.listSize = 0;
    //current position in the list
    //number of element in the list
    this.length = length;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    //methods
    //clear all elements from list
    this.clear = clear;
    //find element in a list
    this.find = find;
    this.toString = toString;
    //insert new element after existing element
    this.insert = insert;
    //add new element to end of the list
    this.append = append;
    //remove element from list
    this.remove = remove;
    //set current position to first element of list
    this.front = front;
    //set current position to last element of list
    this.end = end;
    //move current position back one element
    this.prev = prev;
    //move current position forward one element
    this.next = next;
    //returns the current position in the list
    this.currPos = currPos;
    //moves current position to specified position
    this.moveTo = moveTo;
    //return element at current position
    this.getElement = getElement;

    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
    }

function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;}}
                return -1;
        }

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
        --this.listSize;
        return true;
        }
        return false;
    }

function length() {
    return this.listSize;
    }

function toString() {
    return this.dataStore;
    }

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
        }
        return false;
        }

function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
        }

function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] === element) {
                return true;
                }
            }
console.log('not found')
            return false;
            }


function front() {
        this.pos = 0;
        }

function end() {
        this.pos = this.listSize-1;
        }

function prev() {
        if (this.pos > 0) {
            --this.pos;
            }
            }

function next() {
        if (this.pos <= this.listSize-1) {
            ++this.pos;
            }
            }


function currPos() {
        return this.pos;
    }

function moveTo(position) {
        this.pos = position;
        }

function getElement() {
        return this.dataStore[this.pos];
        }


module.exports = List;







