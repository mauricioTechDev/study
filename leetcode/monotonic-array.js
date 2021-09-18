https://leetcode.com/problems/monotonic-array/
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
Example 4:

Input: nums = [1,2,4,5]
Output: true
Example 5:

Input: nums = [1,1,1]
Output: true
 

Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105


var isMonotonic = function(nums) {
    let greaterThan;
    let lessThan;
    let equal;
    
    if(nums[0] >= nums[nums.length - 1]) greaterThan = true;
    if(nums[0] <= nums[nums.length - 1]) lessThan = true;
    if(nums[0] === nums[nums.length - 1]) equal = true;
    
    for(let i = 0; i < nums.length - 1; i++){
        if(equal){
            if(nums[i] !== nums[i+1]) return false 
        }
        if(greaterThan){
            if(nums[i] < nums[i+1]) return false 
        }
        if(lessThan){
            if(nums[i] > nums[i+1]) return false 
        }
    }
    
    return true
    
};
