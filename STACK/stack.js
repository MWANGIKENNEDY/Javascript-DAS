//list of elements that can only be accessed from the top - LIFO:
//to get an element that is not at the top, you have to remove all elements on top of it:
//Two main functions of a stack are adding elements to top (push) and removing elements (pop):
//peek operation is used to check the element at the top of the stack::
//length property keeps track of the number of elements in the stack
//clear operation removes all elements of the stack
//top variable keeps track of where to add a new elemet - is incremented when we add a new element - else decremented::

function Stack(){
    //array that stores the stack elements
    this.dataStore=[];
    //to keep track of where the top element is, as well as keeping track of where to add a new
    //element, we use a top variable that is incremented when we push new elements onto
    //the stack and is decremented when we pop elements off the stack
    this.top = 0;
    //add elements to stack
    this.push=push;
    //take elements from top of stack
    this.pop=pop;
    //check which element is at the top of the stack  -  when none return undefined ::
    this.peek=peek;
    //empty the stack
    this.clear=clear;
    //return number of elements in the stack ::
    this.length=length;
}

function push(element){
    this.dataStore[this.top++]=element;
}

function peek(){
    return this.dataStore[this.top-1];
}

function pop(){
    return this.dataStore[--this.top];
}

function clear(){
    this.top=0;
}

function length(){
    return this.top;
}

module.exports = Stack;