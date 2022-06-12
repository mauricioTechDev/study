https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBrackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const closedBrackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
//     LIFO
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
            if(openBrackets[s[i]] !== undefined){
                stack.push(s[i])
            } else {
                if(closedBrackets[s[i]] !== stack.pop()){
                    return false
                }
            }            
    }
    return stack.length === 0 ? true : false
    
};


