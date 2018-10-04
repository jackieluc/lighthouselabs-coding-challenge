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
const countRows = () => { return GRID.length };

/**
 * Challenge #2
 * 
 * Write a function called countColumns() that will tell us the number of columns in our GRID.
 */
const countColumns = () => { return GRID[0].length };

/**
 * Challenge #3
 * 
 * Write a function called gridSize() that will tell you the size of your grid in the format width x height.
 * Your function should return a string, and in this example, your function should return the string '10 x 10'.
 */

const gridSize = () => { return `${countColumns()} x ${countRows()}` };

/**
 * Challenge #4
 * 
 * Write a new function called totalCells() which will return the total number of cells in your grid.
 */

const totalCells = () => { return countColumns() * countRows(); };