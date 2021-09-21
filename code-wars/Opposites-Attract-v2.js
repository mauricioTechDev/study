///https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript


function lovefunc(flower1, flower2){
  let flower1Status = false
  let flower2Status = false
​
  
  if(flower1%2 === 0){
    flower1Status = 'even'
  }
  if(flower1%2 !== 0){
    flower1Status = 'odd'
  }
  
  if(flower2%2 !== 0){
    flower2Status = 'odd'
  }
  if(flower2%2 === 0){
    flower2Status = 'even'
  }
  
  return flower2Status !== flower1Status ? true : false
}
