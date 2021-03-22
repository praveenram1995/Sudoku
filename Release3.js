var sudoku= [
  [1, 0, 0, 4, 8, 9, 0, 0, 6],
  [7, 3, 0, 0, 0, 0, 0, 4, 0],
  [0, 0, 0, 0, 0, 1, 2, 9, 5],
  [0, 0, 7, 1, 2, 0, 6, 0, 0],
  [5, 0, 0, 7, 0, 3, 0, 0, 8],
  [0, 0, 6, 0, 9, 5, 7, 0, 0],
  [9, 1, 4, 6, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 3, 7],
  [8, 0, 0, 5, 1, 2, 0, 0, 4],
];

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

function sudoku_solver() {
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] === 0) {
        for (let z = 1; z < 10; z++) {
          if (row_check(sudoku, i, z)) {
            if (column_check(sudoku, j, z)) {
              if (block_check(sudoku, i, j, z)) {
                sudoku[i][j] = z;
                if (sudoku_solver()) {
                  return true;
                } else {
                  sudoku[i][j] = 0;
                }
              }
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function print(array) {
  array.forEach((element) => {
    console.log(...element);
  });
}

sudoku_solver();
print(sudoku);