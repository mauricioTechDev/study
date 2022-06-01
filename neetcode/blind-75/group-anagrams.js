https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const sorted = strs.map((el) => {
        return el.split('').sort().join('')
    })
    
    let map = {}
    
    for(let i = 0; i < sorted.length; i+=1){
        if(map[sorted[i]] != undefined){
            map[sorted[i]].push(strs[i])
        } else {
            map[sorted[i]] = [strs[i]]
        }
    }
    
    return Object.values(map)
    
};

//BETTER
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    
    for(let i = 0; i < strs.length; i+=1){
        let key = new Array(26).fill(0)
          
        for(let j = 0; j < strs[i].length; j+=1){
            let letterIndex = strs[i].charCodeAt(j) - 97
            key[letterIndex]+= 1  
        }
        
          
        if(map[key] != undefined){
            map[key].push(strs[i])
        } else {
            map[key] = [strs[i]]
        }
    }
    
    return Object.values(map)    
};




