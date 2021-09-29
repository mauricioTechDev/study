// https://www.codewars.com/kata/59de469cfc3c492da80000c5

/*
Your task is to make a program takes in a sentence (without puncuation), adds all words to a list and returns the sentence as a string which is the positions of the word in the list. Casing should not matter too.

Example
"Ask not what your COUNTRY can do for you ASK WHAT YOU CAN DO FOR YOUR country"

becomes

"01234567802856734"

Another example
"the one bumble bee one bumble the bee"

becomes

"01231203"

*/

// KEY is that the index is only updated in the cleanMap when a unique word is found
function compress(sentence) {
  let ansString = ''
  const sentenceArr = sentence.toLowerCase().split(' ')
  let cleanMap = new Map()
  let indexcount = 0
  
  sentenceArr.forEach((el, index) => {
    let lowerCase = el.toLowerCase()
    let checkIfInMAp = cleanMap.get(lowerCase)
    if(checkIfInMAp === undefined){
      cleanMap.set(lowerCase, indexcount)
      indexcount+=1
    }
    
    let checkMap = cleanMap.get(lowerCase)
    if(checkMap || checkMap === 0){
      let stringNum = checkMap.toString()
      ansString+=stringNum;
    }
    
    
  })
  
  return ansString;
}
