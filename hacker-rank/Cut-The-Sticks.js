// https://www.hackerrank.com/challenges/cut-the-sticks/problem

function cutTheSticks(arr) {
    arr.sort((a, b,) => a - b);
    let len = arr.length;
    let answerArr = [];
    
    while(arr[0] < arr[len - 1]){
        answerArr.push(len)
        let minNum = Math.min(...arr)
        for(let i = 0; i < len; i++){
            arr[i] = arr[i] - minNum
        }
        while(arr[0] <= 0){
                arr.shift(); 
                len = arr.length
        }
         len = arr.length
       
    }
    answerArr.push(len)
    return answerArr
}
