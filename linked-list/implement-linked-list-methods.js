class Node {
    constructor(val){
        this.val = val,
        this.next = null
    };
};

class LinkedList {
    #length;
    #head;

    constructor(head){
        this.#head = head,
        this.#length = 0
    };

    get length(){
        return this.#length;
    }
    
    get head(){
        return this.#head;
    }
    
    get getFirst(){
        return this.#head;
    }

    get getLast(){
        if(this.#head){
            let currentNode = this.#head;

            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            return currentNode;
        }
    }

    add(node){
        const newNode = new Node(node);
        if(!this.#head){
            this.#head = newNode;
        } else {
            let currentNode = this.#head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        };
        this.#length += 1
    };

    addArr(array){
        array.forEach(element => {
            this.add(element);
        });
    };

    clear(){
        this.#head = null;
        this.#length = 0;
    }

    addNodeAtPoint(index, node){
        if(index < 1) return this.unshift(node);
        let counter = 1
        let newNode = new Node(node);
        let current = this.#head;
        let nextNode = null;
        while(counter < index){
            current = current.next;
            counter+=1;
        }
        nextNode = current.next;
        current.next = newNode;
        current.next.next = nextNode;
    }

    unshift(node){
        const newNode = new Node(node);
        const holder = this.#head;
        this.#head = newNode;
        this.#head.next = holder;
    }

    push(node){
        let current = this.#head;
        while(current.next !== null){
            current = current.next;
        }
        current.next = new Node(node);
    }

    reverse(){
        let prev = null;
        let curr = this.#head;
        let nxt = null

        while(curr !== null ){
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt
        }
        this.#head = prev;

        return this.#head;
    }
    
     merge(l1, l2){
        let sentinel = new Node(0);
        let head = sentinel;
    
        while (l1 && l2) {
            head.next = new Node(0);
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
    }
    
     deleteLast(){
        let curr = this.#head;

        while(curr.next.next !== null){
            curr = curr.next;
        }

        curr.next = null
    }
}

const newLinkedList = new LinkedList()

newLinkedList.add([1,2,3]);
// newLinkedList.add({name: 'Mauricio'});
// newLinkedList.addArr(['Kevin', 'Sean', 'sam']);
newLinkedList.push(444)
newLinkedList.push(66666)
newLinkedList.addNodeAtPoint(1, 777)
newLinkedList.addNodeAtPoint(2, 33333)

console.log(newLinkedList.head);
