// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word){
  let vowels ={
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
    y: "y"
  }
  return word.split('').reduce((acc, curr, index) => {
    let lowercase = curr.toLowerCase()
    if(vowels[lowercase]){
      acc.push(index+1);
    }
    return acc
  }, [])
  

