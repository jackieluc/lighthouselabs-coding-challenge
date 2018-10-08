/*
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
 * Constants
 */
const COLUMN_CHAR_START = 'A'.charCodeAt(0);
const ROCK = '^';
const CURRENT = '~';

/**
 * Helper functions
 */
const charToIndex = (char) => {
	return char.toUpperCase().charCodeAt(0) - COLUMN_CHAR_START;
};

const getIndices = (coordinate) => {
	const column = coordinate.charAt(0);
	const row = coordinate.charAt(1);

	return {
		columnIndex: charToIndex(column),
		rowIndex: row - 1
	};
};

/**
 * Challenge functions
 */

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
	const { columnIndex } = getIndices(coordinate);

	return columnIndex;
};

const lightCell = (coordinate) => {
	const { rowIndex, columnIndex } = getIndices(coordinate);
    
	return GRID[rowIndex][columnIndex];
};

const isRock = (coordinate) => {
  return lightCell(coordinate) === ROCK;
};

const isCurrent = (coordinate) => {
  return lightCell(coordinate) === CURRENT;
};