/*
  GRID

      A   B   C   D   E   F   G   H   I   J
    +---+---+---+---+---+---+---+---+---+---+
1  |   |   |   | ^ |   |   |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
2  |   |   | v |   | ~ |   |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
3  |   | v |   |   | ^ | ^ |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
4  |   |   |   |   | ^ | ^ |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
5  |   |   |   |   |   |   |   |   | v |   |
    +---+---+---+---+---+---+---+---+---+---+
6  |   |   |   |   |   |   |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
7  |   |   |   |   |   |   |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
8  |   | ^ | ~ | ~ |   |   |   | ^ |   |   |
    +---+---+---+---+---+---+---+---+---+---+
9  |   | ^ |   | ~ | ~ |   |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
10 |   | ^ |   |   | ~ | ~ |   |   |   |   |
    +---+---+---+---+---+---+---+---+---+---+
*/

const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

/**
 * Challenge #1
 * 
 * Write a function called countRows() which will tell us the number of rows in our GRID.
 * Remember that other lighthouse operators are going to be using this function,
 * so it has to be able to work on a GRID of any size.
  */
const countRows = () => {

    return GRID.length;
};

/**
 * Challenge #2
 * 
 * Write a function called countColumns() that will tell us the number of columns in our GRID.
 */
const countColumns = () => {

    return GRID[0].length;
};

/**
 * Challenge #3
 * 
 * Write a function called gridSize() that will tell you the size of your grid in the format width x height.
 * Your function should return a string, and in this example, your function should return the string '10 x 10'.
 */

const gridSize = () => {

    return `${countColumns()} x ${countRows()}`;
};

/**
 * Challenge #4
 * 
 * Write a new function called totalCells() which will return the total number of cells in your grid.
 */

const totalCells = () => { 

    return countColumns() * countRows();
};

/**
 * Challenge #5
 * 
 * Since our GRID is written in coordinates like A3 or D8, we need code that is going to be able to convert 
 * those coordinates to the numbers we need to fetch data out of the GRID array(s). All of the lighthouse 
 * operators have reported in and we know that their areas never go above Z.
 * 
 * Let's build a function called convertColumn() which, when given the coordinate as an argument, 
 * will return the number of the column.
 */

const convertColumn = (coordinate) => {
  
    const columnCode = coordinate.charAt(0).toUpperCase().charCodeAt(0);
    const baseColumnCode = 'A'.charCodeAt(0);
    const columnIndex = columnCode - baseColumnCode; 

    return columnIndex;
};