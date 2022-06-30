https://leetcode.com/problems/find-the-duplicate-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
//Floyd's Tortoise and Hare Algorithm
var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        if(slow == fast){
            break;
        }
    }
    
    let slowTwo = 0
    while(true){
        slow = nums[slow]
        slowTwo = nums[slowTwo]
        if(slow == slowTwo){
            return slowTwo
        }
    }
    
};
