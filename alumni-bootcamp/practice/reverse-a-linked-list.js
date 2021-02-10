
const ReverseLinkedList = (head) => {
  let prev = null;
  let nextNode = null;
  
  while(head !== null){
    nextNode = head.next;
    head.next = prev
    prev = head
    head = nextNode
  }
  return prev;
}

