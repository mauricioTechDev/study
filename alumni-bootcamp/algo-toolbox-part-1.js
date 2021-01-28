
// What would be the most efffiecient way to find the book.
hashTable (map)

Advantatages
- Fast for look up via keys.
- Infinit number of keys to a finite number of [index]values
- Hash tables provide access to elements in constant time, 
so they are highly recommended for algorithms that prioritize search and data retrieval operations. 

Disadvantages
-  You can have two keys that map to the same value(colision)
-  No gotwhen there are many collisions

When to Use
A hash table (hash map) is a data structure used to implement an associative array, 
a structure that can map keys to values. A hash table uses a hash function to 
compute an index into an array of buckets or slots, from which the desired value can be found. In JavaScript we don’t have any built-in hash table.

Example
- object with key of names and value of phone example
- Object to represent our hash table

class HashTable {
 constructor() {
   this.values = {};
   this.length =  0;
   this.size =  0;
 }
}
// Hashing Function
calculateHash(key) {
 return key.toString().length % this.size;
}
//Finally, we need a method to insert key/value pairs.

add(key, value) {
  const hash = this.calculateHash(key);
  if (!this.values.hasOwnProperty(hash)) {
     this.values[hash] = {};
  }
  if (!this.values[hash].hasOwnProperty(key)) {
     this.length++;
  }
  this.values[hash][key] = value;
}




class HashTable {
  constructor() {
    this.values = {};
    this.length =  0;
    this.size =  0;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    If (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
       this.length++;
    }
    this.values[hash][key] = value;
  }

  search(key) {
     const hash = this.calculateHash(key);
     if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
       return this.values[hash][key];
     } else {
       return null;
     }
  }
}

//create object of type hash table
const ht = new HashTable();
//add data to the hash table ht
ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");

//search
console.log(ht.search("Italy"));

//https://www.educative.io/blog/data-strucutres-hash-table-javascript

