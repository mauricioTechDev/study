https://leetcode.com/problems/reorder-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */


// Refactor memory O(1)
// Doing in on time O(N)
var reorderList = function(head) {
  if(head == null || head.next == null){
      return
  } 
// This slow pointer will bring me to the mid point in the linked list
    let slow = head;
    let fast = head.next;
    
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next
    }
//     create here the second liked list with the seconds half of the orinial
    let second = slow.next
//     At the mid point I break the pointer to poitn to null
    slow.next = null
    
    let l2 = reverse(second);
    // console.log({l2, head})
    
    merge(head, l2)
};

const reverse = (head) => {
    let prev = null;
    let current_node = head;
    let nxt = null;
    while (current_node !== null){
        nxt = current_node.next
        current_node.next = prev
        prev = current_node
        current_node = nxt
    }
    return prev
}

const merge = (l1, l2) => {
    let l1_next = null;
    let l2_next = null;
    while(l2 !== null){
//         stroing the next values
        l1_next = l1.next;
        l2_next = l2.next;
//         Merge operation
        l1.next = l2;
        l2.next = l1_next
//       Shift pointer  
        l1 = l1_next;
        l2 = l2_next;
    }
    
}



function reorderList(head) {
  const arr = [];
  let index = head;
  
  while (index) {
    arr.push(index);
    index = index.next;
  }

  for (let l = 0; l < arr.length; l++) {
    let r = arr.length - 1 - l;
    if (l >= r) { arr[l].next = null; break; }
    arr[l].next = arr[r];
    arr[r].next = arr[l + 1];
  }
}
