https://leetcode.com/problems/binary-search/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let startIndex = 0
    let endIndex = nums.length - 1;
    
    while(startIndex <= endIndex){
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if(target > nums[middleIndex]){
            startIndex = middleIndex + 1;
        } else if (target < nums[middleIndex]){
            endIndex = middleIndex - 1;
        } else if (target === nums[middleIndex]){
            return middleIndex
        }
    }
    
    return -1
};
