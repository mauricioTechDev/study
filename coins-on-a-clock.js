
// Given a string of coins return if we travesre clock 
// and land at each vlaue of the string will we land on
//  all uniqie spaces.
const  cointToClock = (str) => {
  let arr = str.split('')
  const dict = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25,
  };
  let dictVal = 0;
  const store = {};
  let count = 0;
  
  for(let i = 0; i < arr.length; i++){
    if(dict[arr[i]]){
      dictVal = dict[arr[i]];
      count+=dictVal
      if(count > 12){
        count-=12;
        if(store[count]){
          return false;
        } else {
         store[count] = count;
        }
      } else {
        if(store[count]){
          return false;
        } else {
         store[count] = count;
        }
      }  
    }
  }
  return true
}
console.log(cointToClock("ppddnnpddpn"))
