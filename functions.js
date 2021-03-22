function row_check(array, row, val) {
    for (let i = 0; i < array[row].length; i++) {
      if (array[row][i] === val) {
        return false;
      }
    }
    return true;
  }
  
  function column_check(array, col, val) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][col] === val) {
        return false;
      }
    }
    return true;
  }
  
  function block_check(array, row, col, val) {
    let R = 3 * Math.floor(row / 3);
    let C = 3 * Math.floor(col / 3);
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (array[R + r][C + c] === val) {
          return false;
        }
      }
    }
    return true;
  }
 
  function print (array) 
{
    array.forEach((element) => {
        console.log(...element);
    });
}
 module["exports"]= {row_check, column_check, block_check,print};