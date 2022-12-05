const s = require('./stack');


function isPalindrome(string){
    var stack = new s();
    for(var i=0;i<string.length;i++){
        stack.push(string[i])
    }
    var k = "";
    while(stack.length()>0){
        k+=stack.pop();
    }
    if(string === k){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome('racecar'));