https://leetcode.com/problems/daily-temperatures/
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let forwardFinder = 0
    let counter = 0
    let ans = [];
    if(temperatures.length === 1) return [0]
    
    for(let i = 0; i < temperatures.length; i+=1){
        forwardFinder = i + 1
        counter = 0
        
        if(temperatures[i] < temperatures[forwardFinder]){
            counter+=1
            ans.push(counter)
        } else {
            while(temperatures[i] >= temperatures[forwardFinder]){
                forwardFinder+=1
                counter+=1
            }
            if(temperatures[i] < temperatures[forwardFinder]){
                    counter+=1
                    ans.push(counter)
            } else {
                ans.push(0)
            }
        }
    }
    
    return ans
};
