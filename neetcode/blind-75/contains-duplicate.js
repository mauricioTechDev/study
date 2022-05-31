https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}
    
    for(el of nums){
        if(map[el] === el){
            return true
        } else {
            map[el] = el
        }
    }
    return false
};
