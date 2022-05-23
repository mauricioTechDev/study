// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const numsLength = nums.length - 1;
    
    if(nums[numsLength] < target){
        return numsLength + 1
    }
    
    if(nums[numsLength] === target){
        return numsLength
    }
    
    if(nums[0] > target || nums[0] === target){
        return 0
    }
    
    for(let i=0; i<=nums.length - 1; i++){
        if(nums[i] == target){
            return i
        }
        
        if(nums[i]>target){
            nums.splice(i, 0, target)
            return i
        } else if (nums[nums.length -1]<target){
            nums.push(target)
            return nums.indexOf(target)
        }
    }
    
};
