// https://www.codewars.com/kata/590818ddffa0da26ad00009b/train/javascript

function constructSubmatrix(matrix, rowsToDelete, columnsToDelete) {
  let rows = rowsToDelete.reverse();
  let columns =columnsToDelete.reverse();
  
  rows.map(el => matrix.splice(el, 1));
  matrix.map(elem => {columns.map(el => elem.splice(el, 1));})
  return matrix
  
  
}
