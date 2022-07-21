// Essential operations:
// Enqueue -> insert element into the queue
// Dequeue -> remove element from the the queue in the same order they where inserted(FIFO)  

class Heap {
    constructor(comparator = (a, b) => a - b) {
      this.array = [];
      this.comparator = (i1, i2) => comparator(this.array[i1], this.array[i2]);
    }

        /**
     * Returns the number of elements in this collection.
     * @runtime O(1)
     */
    get size() {
        return this.array.length;
    }

        /**
     * Retrieves, but does not remove, the head of this heap
     * @runtime O(1)
     */
    peek() {
        return this.array[0];
    }
  
    /**
     * Insert element
     * @runtime O(log n)
     * @param {any} value
     */
    add(value) {
      this.array.push(value);
      this.bubbleUp();
    }

    /**
     * Retrieves and removes the head of this heap, or returns null if this heap is empty.
     * @runtime O(log n)
     */
    remove(index = 0){
        if(this.size === 0) return null;
        
    }


  
    /**
     * Move new element upwards on the Heap, if it's out of order
     * @runtime O(log n)
     */
    bubbleUp() {
      let index = this.size - 1;
      const parent = (i) => Math.ceil(i / 2 - 1);
      while (
        parent(index) >= 0 && 
        this.comparator(parent(index), index)/**check if the parent is greater than the child */ > 0
        ) {
        this.swap(parent(index), index);
        index = parent(index);
      }
    }

        /**
     * Swap elements on the heap
     * @runtime O(1)
     * @param {number} i1 index 1
     * @param {number} i2 index 2
     */
    swap(i1, i2) {
        [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
    }

  }

  let test = new Heap()

  test.add(55)
  test.add(56)
  test.add(30)
  test.add(10)
  test.add(100)
  console.log(test)
