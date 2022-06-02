https://leetcode.com/problems/top-k-frequent-elements/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {}
    
    for(let i = 0; i < nums.length; i+=1){
        if(map[nums[i]] !== undefined){
            map[nums[i]] += 1
        } else {
            map[nums[i]] = 1
        }
    }
    
    let sorted = Object.entries(map).sort((a , b) => {
        if (a[1] === b[1]) {
            return 0;
        } else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    })  
    
    let ans = []
    
        for(el of sorted){
            if(k > 0){
                ans.push(el[0])
            }
            k-=1
        }
    
    return ans
};
