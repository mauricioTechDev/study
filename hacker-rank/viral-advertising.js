// https://www.hackerrank.com/challenges/strange-advertising/problem

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    let currentViewersOnCurrentDate = 5;
    let likes = 0;
    let tempLikes = 0;
    
    while(n >= 1){
        tempLikes = Math.floor(currentViewersOnCurrentDate/2)
        likes += tempLikes;
        currentViewersOnCurrentDate = tempLikes * 3;
        n--
    }
    
    return likes;
}
