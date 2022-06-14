https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack = []
    
    backTrack(stack, '', 0, 0, n)
    
    return stack
};

const backTrack = (stack, currentParentheses, open, close, n) => {
    if(currentParentheses.length === n * 2){
        stack.push(currentParentheses);
        return;
    }

    if(open < n){
           backTrack(stack, currentParentheses + '(', open + 1, close, n)
    }
    if(close < open){
           backTrack(stack, currentParentheses + ')', open, close + 1, n)
    }
}
