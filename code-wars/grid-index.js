// https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript

function gridIndex(grid, indices) {
  let word = ''
  
  let t = grid.flat()
  let map = {...t}
  
  for(let i = 0; i < indices.length; i++){
    if(map[indices[i]-1]){
      word += map[indices[i]-1]
    }
  }
  
  return word
}

