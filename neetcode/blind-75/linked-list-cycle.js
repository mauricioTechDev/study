https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
Time: O(N)
Space: O(1)
var hasCycle = function(head) {
//     Floyd's Tortoise and Hare Algorithm
  let slow = head
  let fast = head;
    
    while(fast){
        fast = fast.next;
        if(fast !== null){
            fast = fast.next;
        } else {
            return false
        }
        slow = slow.next;
        if(fast === slow){
            return true
        }
    }
    return false
};
Time: O(N)
Space: O(N)
var hasCycle = function(head) {
  let hashSet = new WeakSet();

  let curr = head;
    
  while(curr){
    if(hashSet.has(curr)){
        return true;
    } else {
        hashSet.add(curr);
        curr = curr.next;
    }
  }
  return false
};
