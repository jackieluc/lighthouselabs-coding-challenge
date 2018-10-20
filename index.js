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
const SHIP = 'v';

/**
 * Helper functions
 */
const letterToIndex = (letter) => {
	return letter.toUpperCase().charCodeAt(0) - COLUMN_CHAR_START;
};

const indexToLetter = (columnIndex) => {
  const letterCode = columnIndex + COLUMN_CHAR_START;
  
  return String.fromCharCode(letterCode);
};

const getIndices = (coordinate) => {
	const columnLetter = coordinate.slice(0,1);
	const rowNumber = coordinate.slice(1);

	return {
		columnIndex: letterToIndex(columnLetter),
		rowIndex: rowNumber - 1
	};
};

const getCoordinate = (columnIndex, rowIndex) => {
  const columnLetter = indexToLetter(columnIndex);
  const rowNumber = rowIndex + 1;
  
  return `${columnLetter}${rowNumber}`;
};

const environmentGrid = (row, rowIndex, isEnvironment) => {
  return row.map((column, columnIndex) => {
    const coordinate = getCoordinate(columnIndex, rowIndex);
    
    return isEnvironment(coordinate) ? coordinate : null;
  });
};

const getCoordinatesList = (grid) => {
  return []
    .concat(...grid)
    .filter(coordinate => typeof(coordinate) === 'string');
};

const getPercentageReport = (numberOfItems) => {
  return parseFloat((numberOfItems / totalCells()) * 100).toFixed(2);
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

	if (rowIndex < 0 || rowIndex >= countRows()) return false;
	if (columnIndex < 0 || columnIndex >= countColumns()) return false;
    
	return GRID[rowIndex][columnIndex];
};

const isRock = (coordinate) => {
  return lightCell(coordinate) === ROCK;
};

const isCurrent = (coordinate) => {
  return lightCell(coordinate) === CURRENT;
};

const isShip = (coordinate) => {
  return lightCell(coordinate) === SHIP;
};

const lightRow = (rowNumber) => {
	const row = GRID[rowNumber - 1];

  return row;
};

const lightColumn = (columnLetter) => {
  const columnIndex = convertColumn(columnLetter + '1');
  const column = GRID.map(row => row[columnIndex]);
  
	return column;
};

/**
  return GRID
  .map((row, rowIndex) => environmentGrid(row, rowIndex, environmentFunction))
  .flat()
  .filter(coordinate => typeof(coordinate) === 'string');
*/

const allRocks = () => {
  const rocksGrid = GRID.map((row, rowIndex) =>
    environmentGrid(row, rowIndex, isRock)
  );
  
  return getCoordinatesList(rocksGrid);
};
  
const allCurrents = () => {
  const currentsGrid = GRID.map((row, rowIndex) =>
    environmentGrid(row, rowIndex, isCurrent)
  );
  
  return getCoordinatesList(currentsGrid);
};

const allShips = () => {
  const shipsGrid = GRID.map((row, rowIndex) => 
    environmentGrid(row, rowIndex, isShip)
  );
  
  return getCoordinatesList(shipsGrid);
};

const firstRock = () => {
  const [ firstCoordinate ] = allRocks();
  
  return firstCoordinate;
};

const firstCurrent = () => {
  const [ firstCoordinate ] = allCurrents();
  
  return firstCoordinate;
};

const shipReport = () => {
  const [ firstShip, ...ships ] = allShips().sort( (a,b) =>
    convertColumn(a) - convertColumn(b)
  );
  const lastShip = ships.pop();
  
  return [ firstShip, lastShip ];
};

const howDangerous = (coordinate) => {
  if (isRock(coordinate)) 
    return 100;
    
  if (isCurrent(coordinate))
    return 50;
};

const percentageReport = () => {
  const numberOfRocks = allRocks().length;
  const numberOfCurrents = allCurrents().length;
  
  const rocksPercentage = getPercentageReport(numberOfRocks);
  const currentsPercentage = getPercentageReport(numberOfCurrents);
  
  return [ rocksPercentage, currentsPercentage ];
};

const safetyReport = () => {
  return GRID.map((row, rowIndex) => {
    return row.map((column, columnIndex) => {
      return howDangerous(getCoordinate(columnIndex, rowIndex));
    });
  });
};