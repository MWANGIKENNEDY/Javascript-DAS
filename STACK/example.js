const s = require('./stack');
const stack = new s();

function getBase(num,base){
    const stack = new s();
    while(num > 0){
        stack.push(num % base);
        num = Math.floor(num / base);
    }
    var newNo = '';
    while(stack.length() > 0){
        newNo += stack.pop();
    }
    return newNo;
}


console.log(getBase(8,2))