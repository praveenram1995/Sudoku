var sudoku = [
    [1, 0, 0, 4, 8, 9, 0, 0, 6],
    [7, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 1, 2, 9, 5],
    [0, 0, 7, 1, 2, 0, 6, 0, 0],
    [5, 0, 0, 7, 0, 3, 0, 0, 8],
    [0, 0, 6, 0, 9, 5, 7, 0, 0],
    [9, 1, 4, 6, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 3, 7],
    [8, 0, 0, 5, 1, 2, 0, 0, 4]
];
/*
let out = "";
for(var i = 0; i < soduku.length; i++) 
{
    for(var j = 0; j < soduku.length; j++) 
    {
        out += soduku[i][j] + " ";
    }
    console.log(out);
    out = "";
    
}

function print(array) {
    let printedPuzzle = array.map(item => {
        item = item.join(" ");
        console.log(item);
    })
}
*/
function print (array)
{
    array.forEach(element => {
      console.log(...element);
    });
}
print(sudoku);