https://leetcode.com/problems/copy-list-with-random-pointer/
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let hashMap = new Map()
    hashMap.set(null, null)
    
    let curr = head;
//     first loop to make a DEEP COPY of each node and add to the hashmap
    while(curr){
        hashMap.set(curr, new Node(curr.val))
        curr = curr.next
    }
    
    curr = head
//     second pass to add the next and random pointer to the respective node
    while(curr){
        let res = hashMap.get(curr);
        res.next = hashMap.get(curr.next);
        res.random = hashMap.get(curr.random);
        // hashMap.set(curr, new Node(curr.val))
        curr = curr.next
    }
    return hashMap.get(head);
};
