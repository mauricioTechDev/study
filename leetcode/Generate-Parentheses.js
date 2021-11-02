// https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function(n) {
    
    let res = []; 
    const dfs = (curstr, left, right) => {   
        if(left===n && right===n) { res.push(curstr); return; }
        if(right > left) return;
        if(left<n)  dfs(curstr+"(",left+1,right,n,res);
        if(right<n) dfs(curstr+")",left,right+1,n,res);
    }
    
    dfs("",0,0);
    return res;    
}
