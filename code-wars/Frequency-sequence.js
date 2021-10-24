//7Kyu code war
//https://www.codewars.com/kata/585a033e3a36cdc50a00011c/train/javascript

function freqSeq(str, sep) {
  let map = {};
  let arr = str.split('');
  arr.forEach((el) => {
    if(map[el]){
      map[el] += 1
    } else {
      map[el] = 1
    }
  })
  
  return arr.reduce((acc, curr, index) => {
    if(index < arr.length - 1){
     acc += `${(map[curr])}${sep}` 
    } else {
      acc += map[curr]
    }
    return acc
  }, '')
}
