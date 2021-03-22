var sudoku_block = [
    [9, 1, 4],
    [0, 2, 0],
    [8, 0, 0]
];

function validSudoku(array, val) {
    for(var i=0 ; i<array.length ; i++)
	{
		for(var j=0 ; j<array[i].length;j++)
		{
			if(array[i][j] === val)
				return false
		}
	}
	return true
}

function print (array)
{
    array.forEach(element => {
      console.log(...element);
    });
}

function sudokuSolver() {
    for(var i=0 ; i<sudoku_block.length; i++)
	{
		for(var j=0;j<sudoku_block[i].length;j++)
		{
			if(sudoku_block[i][j] === 0)
			{
				for (var z=1 ; z<=9; z++ )
				{
					if(validSudoku(sudoku_block ,z))
					{
						sudoku_block[i][j] = z;
						sudokuSolver();
					}
				}
			}
		}
	}
}

sudokuSolver();
print(sudoku_block);