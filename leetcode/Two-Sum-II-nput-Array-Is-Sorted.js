// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while(left<right){
        const currentSum = numbers[left] + numbers[right];
        
        if(currentSum === target){
            return [left+1, right+1]
        } else if(currentSum > target){
            right-=1
        } else if(currentSum < target){
            left+=1
        }
    }
};
