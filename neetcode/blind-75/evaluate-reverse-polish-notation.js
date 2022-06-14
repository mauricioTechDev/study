https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if(tokens.length === 1) return tokens[0];
    
    let operators = {
        '+': function(arr){
            return arr.reduce((acc, cur) => acc + cur)
        },
        '-': function(arr){
            return arr.reduce((acc, cur) => acc - cur)
        },
        '*': function(arr){
            return arr.reduce((acc, cur) => acc * cur)
        },
        '/': function(arr){
            return arr.reduce((acc, cur) => Math.trunc(acc / cur))
        }
    }
    
    let checkForOperator = new Set(['+', '-', '*', '/'])
    let tempAns = 0
    let stackOfNums = []   
    
//  add nums to stackOfNums then pop off last two and use operators obejct for work
    for(let i = 0; i < tokens.length; i+=1){
        if(checkForOperator.has(tokens[i])){
            let numOne = stackOfNums.pop();
            let numTwo = stackOfNums.pop();
            
            tempAns = operators[tokens[i]]([numTwo, numOne]);
            stackOfNums.push(tempAns)
        } else {
            stackOfNums.push(Number(tokens[i]))
        }
    }
    return tempAns
    
};
