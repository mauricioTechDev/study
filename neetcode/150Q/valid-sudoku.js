https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let checkSet = new Set()
    
//     check rows
    for(let i = 0; i < 9; i+=1){
        checkSet.add(board[i][0])
        for(let j = 1; j < 9; j+=1){
            if(board[i][j] !== '.'){
                if(checkSet.has(board[i][j])){
                    return false
                } else {
                    checkSet.add(board[i][j])
                }
            }
        }
        checkSet.clear()
    }
//     check column
    for(let i = 0; i < 9; i+=1){
        checkSet.add(board[0][i])
        for(let j = 1; j < 9; j+=1){
            if(board[j][i] !== '.'){
                if(checkSet.has(board[j][i])){
                    return false
                } else {
                    checkSet.add(board[j][i])
                }   
            }
        }
        checkSet.clear()
    }
//     check mini-box
    for(let i = 1; i < 9; i+=3){
        for(let j = 1; j < 9; j+=3){
            let middle = board[i][j]
            let topLeft = board[i-1][j-1]
            let top = board[i-1][j]
            let topRight = board[i-1][j+1]
            let left = board[i][j-1]
            let right = board[i][j+1]
            let bottomLeft = board[i+1][j-1]
            let bottom = board[i+1][j]
            let bottomRight = board[i+1][j+1]
            let box = [middle, topLeft, top, topRight, left, right, bottomLeft, bottom, bottomRight]
            for(const el of box){
                if(el !== '.'){
                    if(checkSet.has(el)){
                        return false
                    } else {
                        checkSet.add(el)
                    }
                }
            }
            checkSet.clear();
        }
        checkSet.clear();
    }
    return true
};
