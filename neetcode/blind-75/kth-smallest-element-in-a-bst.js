https://leetcode.com/problems/kth-smallest-element-in-a-bst/
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
 * @param {number} k
 * @return {number}
 */
 // My first attempt O(N + (arr log(arr))
var kthSmallest = function(root, k) {
    let arr = [];
    
    let q = [];
    q.push(root)
    
    while(q.length >=1){
        let qlen = q.length
        let level = []
        for(let i = 0; i < qlen; i+=1){
            let node = q.shift();
            if(node){
                level.push(node.val);
                q.push(node.left)
                q.push(node.right)
            }
        }
        arr.push(...level)
    }
    arr.sort((a,b) => a - b)
    return arr[k-1]
}
 
//  The second attempt O(N) where n in the hegith on the tree
var kthSmallest = function(root, k) {
    let curr = root;
    let stack = [];
    let n = 0;
    
    while(stack || curr){
        while(curr){
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop();
        n+=1
        if(n===k){
            return curr.val
        }
        curr = curr.right
    }
};
