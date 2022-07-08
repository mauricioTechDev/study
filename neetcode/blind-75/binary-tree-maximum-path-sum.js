https://leetcode.com/problems/binary-tree-maximum-path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let ans = [root.val]
    
    const dfs = (root) => {
        if(!root) return 0; // base case
        
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        leftMax = Math.max(leftMax, 0);
        rightMax = Math.max(rightMax, 0);
        
//         get the max if node is used as edge
        ans[0] = Math.max(ans[0], root.val + leftMax + rightMax);
//         function returns the max val at the current node. 
        return root.val + Math.max(leftMax, rightMax);
    }
    dfs(root)
    
    return ans[0];
};
