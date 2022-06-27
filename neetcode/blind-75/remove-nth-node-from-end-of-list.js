https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(0);
    
    dummyNode.next = head;
    
    let slow = dummyNode;
    let fast = dummyNode;
    
//     provides the diffrence wich will give us the nth node from last
    for(let i = 0; i <= n; i+=1){
        fast = fast.next;
    }
    
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }
    
    let temp = slow.next.next;
    slow.next = temp
    
    return dummyNode.next

};
