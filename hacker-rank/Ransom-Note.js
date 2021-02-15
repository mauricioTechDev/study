// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine, note) {
    let map = {};
    
    for(let i = 0; i < magazine.length; i++){
        if(map[magazine[i]]){
            map[magazine[i]] += 1;
        } else {
            map[magazine[i]] = 1;
        }
    }
    
    for(let j = 0; j < note.length; j++){
        if(!map[note[j]]){
            console.log('No');
            return;
        }
        if(map[note[j]] === 0){
            console.log('No');
            return;
        }
        if(map[note[j]] !== 0){
            map[note[j]] -= 1;
        }
    }
    console.log('Yes');
}
