https://leetcode.com/problems/longest-consecutive-sequence/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let lookUpSet = new Set(nums)
    let len = nums.length
    let maxLength = 0
    
    for(let i = 0; i < len; i+=1){   
//         check if the start of a new sequence 
        if(!lookUpSet.has(nums[i] - 1)){
            let tempResult = checkPassedValues(lookUpSet, nums[i]);
            if(tempResult >= maxLength){
                maxLength = tempResult
            }
        }        
    }
    
    return maxLength
};


const checkPassedValues = (aSet, num) => {
    let count = 1
    let nextValue = num + 1; 
    while(aSet.has(nextValue)){
        count+=1
        nextValue+=1
    }
    return count
}
