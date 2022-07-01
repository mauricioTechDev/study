https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// Time complexity is O(nlogK)
// n is length of list k is subbarrays.  It's log k becouse its like merge sort
var mergeKLists = function(lists) {
    if(lists.length == 0){
        return null;
    }
    if(lists.length == 1){
        return lists[0]
    }
    if(lists.length == 2){
        return mergeList(lists[0], lists[1])
    }
    
    while(lists.length > 1){
        let mergedLists = [];
        for(let i = 0; i < lists.length; i+=2){
            l1 = lists[i]
            l2 = i+1 < lists.length ? lists[i+1] : null;
            mergedLists.push(mergeList(l1, l2))
        }
        lists = mergedLists;
    }
    
    return lists[0]
};


const mergeList = (l1,l2) => {
    let newListNode = new ListNode(0)
    
    let current = newListNode;
    
    while(l1 && l2){
        current.next = new ListNode(0);
        if(l1.val < l2.val){
            current.next = l1;
            l1 = l1.next
        } else {
            current.next = l2;
            l2 = l2.next
        }
        current = current.next
    }
    
    current.next = l1 || l2
    
    return newListNode.next
}

