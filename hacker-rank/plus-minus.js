// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    // Write your code here
    let totalAmountOfNums = arr.length
    let zeroCount = 0;
    let positiveCount = 0;
    let negativeCount = 0;
    
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i] === 0){
            zeroCount+=1
        }
        if(arr[i] > 0){
            positiveCount+=1
        }
        if(arr[i] < 0){
            negativeCount+=1
        }
    }
    // print positive
    console.log((positiveCount/totalAmountOfNums).toFixed(6));
    // print negative
    console.log((negativeCount/totalAmountOfNums).toFixed(6));
    // print zero
    console.log((zeroCount/totalAmountOfNums).toFixed(6));

}

