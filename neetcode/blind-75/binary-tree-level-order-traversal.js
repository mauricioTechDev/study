https://leetcode.com/problems/binary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
//    for this BFS we need a queue and and the elment to it FIFO
    let res = []
    
    let queue = []
//     he we initializer the queue with the root
    queue.push(root)
    
    while(queue.length >= 1){
        let qlen = queue.length
        let level = []
        for(let i = 0; i < qlen; i+=1){
            let node = queue.shift();
            if(node){
                level.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        if(level.length >= 1){
         res.push(level);   
        }
    }
    return res
    
};
