// https://www.hackerrank.com/challenges/non-divisible-subset/problem

function nonDivisibleSubset(k, s) {
    // Write your code here
    if(k===1){
        return 1;
    }
    let count = 0;
    let ans = [];
    let isDivisible = false;

    for(let i = 0; i<s.length; i++){
        ans[i] = s[i]%k;
        if(ans[i]===0){
            isDivisible = true;
        }
    }
    if(isDivisible){
        count += 1;
    }
    for(let i = 1; i <= k; i++){
        const num1 = i;
        const num2 = k-i;
        let num1C = 0;
        let num2C = 0;

        if(num1 > num2){
            break;
        }
        for(let j = 0; j < ans.length; j++){
            if(num1 === ans[j]){
                num1C+=1;
            }
            if(num2 === ans[j]){
                num2C+=1;
            }
        }
        if(num1C > 0 && num1 === num2){
            count += 1;
            break;
        }
        else{
            count += (num1C > num2C ? num1C : num2C);
        }
    }
    return count;

}
