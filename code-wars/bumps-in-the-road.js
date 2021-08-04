// https://www.codewars.com/kata/57ed30dde7728215300005fa

function bump(x){
  let count = 0
  for(let i = 0; i < x.length; i++){
    if(x[i] === 'n'){
       count+=1;
    }
    if(count > 15){
     return 'Car Dead'; 
    }
  }
  return 'Woohoo!'

}
