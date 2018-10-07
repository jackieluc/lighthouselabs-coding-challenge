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

const countRows = () => {
	return GRID.length;
};

const countColumns = () => {
	return GRID[0].length;
};

const gridSize = () => {
	return `${countColumns()} x ${countRows()}`;
};

const totalCells = () => { 
	return countColumns() * countRows();
};

const convertColumn = (coordinate) => {

	const columnCode = coordinate.charAt(0).toUpperCase().charCodeAt(0);
	const baseColumnCode = 'A'.charCodeAt(0);
	const columnIndex = columnCode - baseColumnCode; 

	return columnIndex;
};

const lightCell = (coordinate) => {

	const rowIndex = coordinate.charAt(1) - 1;
	const columnIndex = convertColumn(coordinate);
    
	return GRID[rowIndex][columnIndex];
};