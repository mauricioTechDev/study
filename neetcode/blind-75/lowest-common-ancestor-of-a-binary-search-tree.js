https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let curr = root
    
    while(curr){
//         to the right are values that are greater can equal to the current node
        if(p.val > curr.val && q.val > curr.val){
            curr = curr.right
//         to the left are values that are less than the current node
        } else if (p.val < curr.val && q.val < curr.val){
            curr = curr.left
// Else we have found a node equal to p or q 
// Or a place where there is a split where q is on one side and q on the other           
        } else {
            return curr
        }
    } 
};

