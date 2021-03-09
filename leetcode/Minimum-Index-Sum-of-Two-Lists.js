// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let dict = {}
    let ans = [];
    let leastNum = Number.POSITIVE_INFINITY;
    
  for(let i = 0; i < list1.length; i++){
        dict[list1[i]] = [i, 1]
    }
    
  for(let j = 0; j < list2.length; j++){
      if(dict[list2[j]]){
        dict[list2[j]][0]+= j
        dict[list2[j]][1]+= 1
      }
    }
  let arrayDict = Object.entries(dict).sort((a, b) => a[1][0] - b[1][0]);

  for(let k = 0; k < arrayDict.length; k++){
    if(arrayDict[k][1][0] <= leastNum && arrayDict[k][1][1] === 2){
      leastNum = arrayDict[k][1][0];
      ans.push(arrayDict[k][0]);
    }
  }
    return ans
};
