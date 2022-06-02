https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length
    let prefix = new Array(len-1).fill(1)
    let postfix = new Array(len-1).fill(1)
    
    for(let i = 0; i < len; i+=1){
        // get all the prefix vals
        if(i === 0){
            prefix[i] = nums[i]
        } else {
            prefix[i] = prefix[i-1] * nums[i]
        }
    }
    
    for(let j = len - 1; j >= 0; j-=1){
        // get all the postfix vals
        if(j === len - 1){
            console.log(nums[j])
            postfix[j] = (nums[j])
        } else {
            postfix[j] = postfix[j+1] * nums[j]
        }
    }
    
    let ans = []
    
    for(let k = 0; k < len; k+=1){
        if(k === 0){
            ans.push(1 * postfix[k+1])
        } else if (k === len - 1) {
            ans.push(1 * prefix[k-1])
        } else {
            ans.push(postfix[k+1] * prefix[k-1])
        }
    }
    return ans;
};
