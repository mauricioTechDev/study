// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roman = ['I','IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let sum = 0;
    let arr = s.split('');
    let special = ''
    
    for(let i = 0; i < arr.length; i++){
        special = arr[i]+arr[i+1];
        
      if(roman.includes(special)){
          sum += nums[roman.indexOf(special)];
          i += 1
          if(i == arr.length-1){
              return sum;
          }
      } else {
          sum += nums[roman.indexOf(arr[i])];
      }
    }
    return sum;
    
};
