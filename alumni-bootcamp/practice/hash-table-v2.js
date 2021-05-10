class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = Array(this.size)

    for(let i = 0; i < this.buckets.length; i++){
      this.buckets[i] = new Map()
    }
  }

  hash(key, size){
    let hashedKey = 0;
    for(var i = 0; i < key.length; i++){
      hashedKey = key.charCodeAt(i);
    }
    return hashedKey % size;
  }

  insert(key, value){
    let index = this.hash(key, this.size);
    this.buckets[index].set(key, value);
  }

  remove(key){
    let index = this.hash(key, this.size);
    let deldeletedete = this.buckets[index].get(key);
    this.buckets[index].delete(key)
  }

  search(key){
    let index = this.hash(key, this.size);
    return this.buckets[index].get(key)
  }

}


const test = new HashTable(20);
test.insert("John", "John Value")
test.insert("Son", "Son Value")
test.insert("Marl", "Marl Value")
test.insert("Tonny", "Tonny Value")
console.log(test)
test.remove("Marl")
console.log(test)
test.search('Son')
