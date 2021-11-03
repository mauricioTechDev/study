// Kadane's Algorithm
// https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let sum = 0;
    let currentMax = -Infinity;
    
    for(let i = 0; i < nums.length; i+=1){
        sum += nums[i];
        currentMax = Math.max(currentMax, sum);
        sum = sum < 0 ? 0 : sum //reset to zero
    }
    
    return currentMax;
};
