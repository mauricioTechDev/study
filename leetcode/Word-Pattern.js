// https://leetcode.com/problems/word-pattern/submissions/

var wordPattern = function(pattern, s) {
    const patternArr = pattern.split('');
    const sArr = s.split(' ');    
    
    if(patternArr.length !== sArr.length) return false;
    
    const dict = {}
    let set = new Set() 
    
    for(let index = 0; index < patternArr.length; index+=1){
        if(dict[sArr[index]]){
            if(dict[sArr[index]] !== patternArr[index]){
                return false;
            }
        }
        if(!dict[sArr[index]]){
            if(set.has(patternArr[index])) return false
            set.add(patternArr[index])
            dict[sArr[index]] = patternArr[index];
        }
    }
    return true
};
