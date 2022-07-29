https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// o(n) solutioin
function divisibleSumPairs(n, k, ar) {
   const map = new Map();
  let noOfPair = 0;

  for (let i = 0; i < ar.length; i++) {
    const remainder = ar[i] % k;
    let diff = k - remainder;
    if (diff === k) {
            // means ar[i] is a divisible
      diff = 0;
    }

    if (map.has(diff)) {
      noOfPair += map.get(diff);
    }
    if (map.has(remainder)) {
      let count = map.get(remainder);
      map.set(remainder, count + 1);
    } else {
      map.set(remainder, 1);
    }
  }

  return noOfPair;
}

// O(n^2) Solution
function divisibleSumPairs(n, k, ar) {
    Write your code here
    let numberOfPairs = 0
    
    for(let i = 0; i < ar.length - 1; i+=1){
        for(let j = i+1; j < ar.length; j+=1){
            if((ar[i] + ar[j])%k === 0 ){
                numberOfPairs+=1
            }
        }
    }
    return numberOfPairs;

}
