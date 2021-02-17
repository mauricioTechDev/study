https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let ans = [];
    const sortedCandies = Math.max(...candies)
    let candiesLen = candies.length;
    
    for(let i = 0; i < candiesLen; i++){
        let addedExtraCandies = extraCandies + candies[i];
    
        if(addedExtraCandies >= sortedCandies){
            ans.push(true);
        } else {
            ans.push(false);
        }
    }
    
    return ans
};
