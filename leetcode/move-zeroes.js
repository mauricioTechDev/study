/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
https://leetcode.com/problems/move-zeroes/
var moveZeroes = function(nums) {
 let length = nums.length
    for(let i = length; i >= 0; i--){
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
        }
    }
    return nums
};
