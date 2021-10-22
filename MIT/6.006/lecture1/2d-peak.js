//https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/MIT6_006F11_lec01.pdf

const arr = [1,2,3,4,5,7,8,9,10,12,13,18]

const twoDi = [
    [10,12,13,14,16,18,20],
    [21,23,24,25,26,28,29],
    [30,32,33,34,38,100,39],
    [41,42,43,44,46,48,49],
]

const check = (t) => {
  const len = t.length - 1;
  return t.find((el, index) => {
    if(len === index){
      return el;
    }
    
    if(index === 0 && el >= arr[index+1]){
      return el;
    }
    
    if(el >= t[index-1] && el >= t[index+1]){
      return el
    }
  })
}


const twoCheck = (d) => {
  const len = d.length - 1;
  for(let index = 0; index < d.length; index+=1){
     let search = d[index].find((num, yIndex) => around(d, index, yIndex, num, len))
     if(search){
       return search
     }
  }
}

const around = (twoarr, x, y, num, len) => {
  return(num >= (x+1 <= len && twoarr[x+1][y]) &&
     num >= (x-1 >= 0 && twoarr[x-1][y]) &&
     num >= twoarr[x][y-1] &&
     num >= twoarr[x][y+1]
    )
}


console.log(twoCheck(twoDi))
