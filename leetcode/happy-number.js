https://leetcode.com/problems/happy-number/submissions/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set()
    
    while(n !== 1){
        let current = n
        let sum = 0
        while(current !== 0){
            sum += Math.pow(current%10, 2);
            current = Math.floor(current/10);
        }
        
        if(seen.has(sum)){
            return false
        }
        seen.add(sum);
        n = sum;
    }
    return true
};
