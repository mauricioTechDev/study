// https://leetcode.com/problems/binary-tree-level-order-traversal/

function levelOrder(root) {
    if(root === null) return [];
    let queue = [root];
    let res = [];
    while(queue.length > 0) {
        let len = queue.length;
        let cur = [];
        let newQueue = [];
        for(let i = 0 ; i < len; i++){
            cur.push(queue[i].val);
            if(queue[i].left) newQueue.push(queue[i].left);
            if(queue[i].right) newQueue.push(queue[i].right);
        }
        res.push(cur);
        queue = newQueue;
    }
    return res;
}
