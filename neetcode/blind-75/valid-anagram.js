// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// QUICK AND DIRTY
var isAnagram = function(s, t) {
    let arrOne = s.split('').sort().join('')
    let arrTwo = t.split('').sort().join('')
    
    if(arrOne === arrTwo){
        return true
    } else {
        return false
    }
    
    return true
};

// BETTER
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
        let map = { } 
        for(let i = 0; i< s.length; i++){
            if(map[s[i]]){
                map[s[i]]++
            }
            if(!map[s[i]]){
                map[s[i]] =  1
            }
        }
        for(let j = 0; j< t.length; j++){
            if(!map[t[j]]) return false
            map[t[j]]--
            if(map[t[j]] < 0) return false
        }        
        return true
};
