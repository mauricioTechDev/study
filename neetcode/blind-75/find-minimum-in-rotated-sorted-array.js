https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 1;
    let middleIndex = Math.floor((left + right) / 2);
    let min = nums[middleIndex]
    
    while(left <= right){
        let middle = Math.floor((left + right) / 2);
        min = Math.min(min, nums[middle])
        
        if(nums[middle] > nums[right]){
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return min
};
