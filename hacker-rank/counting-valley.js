/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    
    let count = 0
    let inValley = false;
    let valleyCount = 0;
    
    for(const letter of path){
        if(count < 0){
            inValley = true;
        } else if(count >= 0){
            inValley = false;
        }
        
        if(letter === 'U'){
            count+=1
            if(inValley === true && count === 0){
                valleyCount+=1
            }
        } else if (letter === 'D'){
            count-=1
        }
    }
    return valleyCount;

}
