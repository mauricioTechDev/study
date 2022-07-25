//https://leetcode.com/problems/coin-change/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// time O(coins.lenght * amount)
// memory O(amount + 1)
var coinChange = function(coins, amount) {
//     create an array which is filled with the max value this is our dp array
    let dp = new Array(amount + 1).fill(amount + 1)
//     bas case is zero becouse for an amount of zero we need zero coins
    dp[0] = 0;
    
    for(let a = 1; a <= amount; a+=1){
        for(const c of coins){
            if(a - c >= 0){
                dp[a] = Math.min(dp[a], 1 + dp[a - c])
            }
        }
    }
//     
    if(dp[amount] !== amount + 1){
       return dp[amount]
    } else {
         return -1
    }
    
};
