https://leetcode.com/problems/search-in-rotated-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1;
    
    
    while(left <= right){
        let middleIndex = Math.floor((left + right) / 2);
       if(target === nums[middleIndex]){
           return middleIndex
       }
        
//         left sorted portion
        if(nums[left] <= nums[middleIndex]){
            if(target > nums[middleIndex] || target < nums[left]){
                left = middleIndex + 1;
            } else {
                right = middleIndex - 1;
            }
//             right sorted portion
        } else {
            if(target < nums[middleIndex] || target > nums[right]){
                right = middleIndex - 1;
            } else {
                left = middleIndex + 1;
            }
        }
    }
    return -1
};
   
