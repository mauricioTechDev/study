class HashTable{
  constructor(){
    this.hashTable = {};
  }

  hashMethod(key){
    return key.length * key.length * 2;
  }

  add(key, value){
    let hash = this.hashMethod(key)
    if(!this.hashTable.hasOwnProperty(hash)){
      this.hashTable[hash] = {};
    }
    if(!this.hashTable[hash][key]){
      this.hashTable[hash][key] = value;
    }
  }

  find(key){
    let hash = this.hashMethod(key);
    return this.hashTable[hash][key]
  }

  delete(key){
    let hash = this.hashMethod(key);
    delete this.hashTable[hash][key]
  }
}
