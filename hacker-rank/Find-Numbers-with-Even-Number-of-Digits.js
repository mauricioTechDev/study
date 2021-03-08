// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenCount = 0;
    let string = ''
    
    for(let i = 0; i < nums.length; i++){
        string = nums[i].toString()
        if(string.length%2 == 0){
           evenCount++ 
        }
    }
    return evenCount;
    
};
