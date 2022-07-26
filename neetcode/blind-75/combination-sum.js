https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const combos = [];
    const combo = [];
    const set = new Set(candidates);
    buildCombos(target);
    return combos
    
    
    function buildCombos(target, start = 0){
        if(set.has(target)){
            combo.push(target);
            combos.push(combo.slice());
            combo.pop();
        }
        
        const mid = Math.floor(target / 2);
        for(
            let i = start;
            i < candidates.length && candidates[i] <= mid;
            ++i
        ) {
            const candidate = candidates[i];
            combo.push(candidate);
            buildCombos(target - candidate, i);
            combo.pop();
        }
    }
    
};
