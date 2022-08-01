https://www.hackerrank.com/challenges/flipping-the-matrix/problem?isFullScreen=true

function flippingMatrix(matrix) {
    // Write your code here
   let smallerMatrix = Math.floor(matrix.length / 2)
   let len = matrix.length - 1
   
   let max = 0
   
   for(let i = 0; i < smallerMatrix; i+=1){
       for(let j = 0; j < smallerMatrix; j+=1){
           max+= Math.max(
               matrix[i][j],
               matrix[len - i][j],
               matrix[i][len - j],
               matrix[len - i][len - j]
               )
       }
   }
   return max
}
