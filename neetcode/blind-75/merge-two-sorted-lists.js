https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let sentinel = new ListNode(0);
    let head = sentinel;
    
    while (l1 && l2) {
        head.next = new ListNode(0);
        if (l1.val < l2.val){
            head.next.val = l1.val
            l1 = l1.next;   
        } else {
            head.next.val = l2.val
            l2 = l2.next;
        }
        head = head.next;
    }
    
    head.next = l1 || l2;
    
    return sentinel.next;
};
