# Lighthouse Labs 21-Day Coding Challenge 2018

https://coding-challenge.lighthouselabs.ca/start

### GRID
```
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
```
  
## Challenge 1
As a lighthouse operator, your job is to both watch out for dangers in your area, such as rocks and strong currents, but also to be the knowledge expert for your area of the ocean. With this in mind, let's start using our coding skills to get some information about our GRID area. For starters, let's find out how many rows there are in our GRID.
  
Write a function called countRows() which will tell us the number of rows in our GRID. Remember that other lighthouse operators are going to be using this function, so it has to be able to work on a GRID of any size. It would be easy to write a function that just did return 10; but that wouldn't help operators with bigger or smaller areas!

## Challenge 2
Write a function called countColumns() that will tell us the number of columns in our GRID. Again, remember that this has to work for all the lighthouse operators out there, no matter what size their area is.

## Challenge 3
Write a function called gridSize() that will tell you the size of your grid in the format width x height. Your function should return a string, and in this example, your function should return the string '10 x 10'. But you have to make sure that you figure that string out by actually measuring your grid! Your code should make sure that it uses your countRows() and countColumns() functions that you've already finished.

## Challenge 4
Write a new function called totalCells() which will return the total number of cells in your grid. For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return. 

## Challenge 5
Since our GRID is written in coordinates like A3 or D8, we need code that is going to be able to convert those coordinates to the numbers we need to fetch data out of the GRID array(s). All of the lighthouse operators have reported in and we know that their areas never go above Z.
  
Let's build a function called convertColumn() which, when given the coordinate as an argument, will return the number of the column.
  
For example, calling convertColumn('C4') should return 2 as the 'C' column is the third column, and since JavaScript arrays start at 0, that would make 2 the third column.

## Challenge 6
Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")

## Challenge 7
In the area where the lighthouse is watching, the grid, there are many rocks which ships would need to avoid. Rocks are indicated with the ^ symbol on the grid.
  
Write a function called isRock() which will take in a coordinate in the form of 'C7' and return a true or a false boolean value depending on whether there is a rock in that cell or not. (Example: isRock('D1'); would return true)

## Challenge 8
There are also areas where the currents are too strong for boats to be effective, and boats run the risk of being smashed up against the rocks if they get caught here. Strong currents are indicated with the ~ symbol.
  
Write a function called isCurrent() which will take in a coordinate in the form of 'A4' and return a true or a false boolean value depending on whether there is a strong current in that cell or not. (Example: isCurrent('E2'); would return true)

## Challenge 9
And last, but certainly not least, there are cells with ships in them! We need to be able to query any cell in our GRID area and find out if it is occupied by a ship.
  
Write a function called isShip() which will take in a coordinate in the form of 'I9' and return a true or a false boolean value depending on whether there is a ship in that cell or not. (Example: isShip('B3') would return true)

## Challenge 10
Your next job is to write a function so that your lighthouse can sweep a whole row of cells.
  
Write a function named lightRow() that takes in the number of the row and returns its contents. (Example: lightRow(2); would return ["", "", "v", "", "~", "", "", "", "", ""])

## Challenge 11
Now that you can return the contents of the cells of a row, we also need to be able to return the cells of a column.
  
Write a function called lightColumn() that takes in the letter of the column from the grid, and returns an array that is the contents of that grid column. (Ex: lightColumn('C'); would return ["", "", "", "", "", "", "", "~", "", ""])

## Challenge 12
The weekend lighthouse operator isn't as smart as you are, and sometimes tells the Lighthouse9000™ system to do invalid things, causing the repairman to have to come out and fix the lighthouse. Upgrade the lightCell() method so that if an invalid cell is passed in, it returns false. (Example: lightCell('Z3'); would return false as would lightCell('A11');)

## Challenge 13
Environment Canada has called and wants a report sent to them of all the rocks and currents in your grid, for use in their latest map.
  
Write a function called allRocks() which when called will return an array of the coordinates of all the rocks in your grid. (Example: allRocks() should return ['D1', 'E3', 'F3', 'E4', 'F4', 'B8', 'H8', 'B9', 'B10'])
  
Write a function called allCurrents() which, when called, will return an array of the coordinates of all the strong currents in your grid. (Example: allCurrents() should return ['E2', 'C8', 'D8', 'D9', 'E9', 'E10', 'F10'])