var {
    row_check,
    column_check,
    block_check,
    print
} = require('./functions');

var sudoku = [
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

console.log("The Puzzle board is as follows ⤵") + print(sudoku)+ console.log("\n");

function check_all_rows(sudoku, row, col, val) {
    if(row_check(sudoku, row, val) && column_check(sudoku, col, val) && block_check(sudoku, row, col, val)) 
    {
        return true
    }
    return false
}
          

function optz_solver() {
    for (let i = 0; i < sudoku.length; i++) {
        for (let j = 0; j < sudoku[i].length; j++) {
            if (sudoku[i][j] === 0) {
                for (let z = 1; z < 10; z++) {
                    if (check_all_rows(sudoku, i, j, z)) {
                        sudoku[i][j] = z;
                        if (optz_solver()) {
                            return true;
                        } else {
                            sudoku[i][j] = 0;
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}

optz_solver();
console.log("The solution to the puzzle is ⤵") + print(sudoku);