https://www.hackerrank.com/challenges/sock-merchant/problem

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    if(n === 1) return 0

    let mem = {}
    let count = 0
    for(const num of ar){
        if(mem[num]){
            mem[num]+=1
            if(mem[num] % 2 === 0){
                count+=1
            }
        } else {
            mem[num] = 1
        }     
    }

    return count
}
