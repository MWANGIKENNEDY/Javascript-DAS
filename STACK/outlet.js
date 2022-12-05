const s = require('./stack');

const stack = new s();

//adding to stack
stack.push('kennedy');
stack.push('mwangi');
stack.push('kiiru');

stack.clear();




console.log(stack.peek());