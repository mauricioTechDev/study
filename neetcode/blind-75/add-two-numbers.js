https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let currOne = l1
    let currTwo = l2
    
    let newListNode = new ListNode(0, null)
    let currThree = newListNode;
    
    let carry = 0
    
    while(currOne || currTwo){
        let sum;
        if(currOne && currTwo){
            sum = currOne.val + currTwo.val
            if(carry > 0){
                sum = sum + 1;
                carry = 0;
            }
            if(sum >= 10){
                carry = 1;
                sum = sum - 10;
            }
            currThree.next = new ListNode(sum, null)
            currThree = currThree.next
        } else if (currOne){
            if(carry){
                sum = currOne.val + carry
                carry = 0
                if(sum >= 10){
                    carry = 1;
                    sum = sum - 10;
                }
                currThree.next = new ListNode(sum, null);
                currThree = currThree.next
            } else {
                currThree.next = new ListNode(currOne.val, null);
                currThree = currThree.next
            }
        } else if (currTwo){
            if(carry){
                sum = currTwo.val + carry
                carry = 0
                if(sum >= 10){
                    carry = 1;
                    sum = sum - 10;
                }
                currThree.next = new ListNode(sum, null);
                currThree = currThree.next
            } else {
                currThree.next = new ListNode(currTwo.val, null);
                currThree = currThree.next
            }
        }
        
        
        if(currOne){
            currOne = currOne.next
        }
        if(currTwo){
            currTwo = currTwo.next
        }
    }
    if(carry > 0){
        currThree.next = new ListNode(carry, null);
    }
    
    return newListNode.next  
};
