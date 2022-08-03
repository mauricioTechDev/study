// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
    let sum = 0;
    
    for(let i = 0; i < bill.length; i++){
            sum += bill[i];
    }

    let diff = (sum - bill[k])/2;

    if(diff === b){
        console.log('Bon Appetit')      
    } else {
        console.log(b > diff ? b - diff : diff - b);
    }   
}
