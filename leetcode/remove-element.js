// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0
    nums.forEach((el, index) => {
        if(el !== val){
            nums[count] = el
            count++
        }
    })
    return count
    
};
