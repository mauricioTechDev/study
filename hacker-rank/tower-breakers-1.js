https://www.hackerrank.com/challenges/tower-breakers-1/forum

function towerBreakers(n, m) {
    // Write your code here
    if(m==1){
        return 2;
    }
    if(n%2==0){
        return 2;
    }else{
        return 1;
    }
}
