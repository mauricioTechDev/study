// https://leetcode.com/problems/integer-to-roman/submissions/

var intToRoman = function(num) {
    let map = {
        'M' : 1000,
        'CM' : 900,
        'D' : 500,
        'CD' : 400,
        'C' : 100,
        'XC' : 90,
        'L' : 50,
        'XL' : 40,
        'X' : 10,
        'IX' : 9,
        'V' : 5,
        'IV' : 4,
        'I' : 1,  
    }
    let ans = ''
    
        for(const el in map){
            while(num - map[el] >= 0){
                num = num - map[el]
                ans += el
            }
        }
    return ans;
};
