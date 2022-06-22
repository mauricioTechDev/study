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
