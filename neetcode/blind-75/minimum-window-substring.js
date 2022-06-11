https://leetcode.com/problems/minimum-window-substring/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return '';
    
    const map = new Map();
    for (let i = 0; i < t.length; i++) {
        map.set(t[i], map.get(t[i]) + 1 || 1);
    }
    
    let left = 0;
    let right = 0;
    let sub = '';
    let valid = 0;
    let l = Number.MAX_VALUE;
    
    while (right < s.length) {
        const addChar = s[right];
        right++;
        if (map.has(addChar)) {
            map.set(addChar, map.get(addChar) - 1);
            if (map.get(addChar) === 0) {
                valid++;
            }
        }
        
        while (valid === map.size) {
            if (right - left < l) {
                l = right - left;
                sub = s.substring(left, right);
            }
            
            const removeChar = s[left];
            left++;
            if (map.has(removeChar)) {
                map.set(removeChar, map.get(removeChar) + 1);
                if (map.get(removeChar) > 0) {
                    valid--;
                }
            }
        }
    }
    
    return sub;
    
};
