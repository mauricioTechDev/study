class Node{
    constructor(val){
        this.val = val,
        this.next = null
    }
}

class LinkedList{
    #length;

    constructor(head){
        this.head = head,
        this.#length = 0
    }
    get getLength(){
        return this.#length;
    }
    clear(){
        this.head = null
    }
    getLast(){
        let node = this.head
        while(node !== null){
            if(node.next == null){
                return node.val;
            }
            node = node.next;
        } 
    }
    getFirst(){
        return this.head.val;
    }

    add(data){
        let newNode = new Node(data);
        let current = null

        if(!this.head){
            this.head = newNode;
        } else {
            current = this.head;

            while(current.next !== null){
                current = current.next;
            }
            current.next = newNode;
        }
        this.#length+=1
    }
    addArr(arr){
        arr.forEach(element => {
           this.add(element) 
        });
    }
}



function printLinkedList(head){
    let current = head;
    let printStr = '';
    while(current !== null){
        printStr += `[${current.val}] -> `;
        current = current.next;
    }
    console.log(printStr + 'null');
}

let newLinkedList = new LinkedList();
newLinkedList.addArr(['fish', [1,2,3]])
newLinkedList.add({test: 'testing'})

console.log(newLinkedList.head)
// console.log(newLinkedList.length)
console.log(newLinkedList.getLength)
