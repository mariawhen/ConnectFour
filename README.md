#Connect 4 Game

####Supposed to be a web game based on the real Connect 4.

##Files:
Root: game_project
- css
  - output.css
  - style.scss
- img
  - arrow.png
- index.html
- js
  - dead.js
  - main.js

##Game description:

Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping colored discs from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to connect four of one's own discs of the same color next to each other vertically, horizontally, or diagonally before your opponent. Connect Four is a strongly solved game. The first player can always win by playing the right moves.

## Technologies Used:
- HTML
  - The game board is a 6X7 HTML table
  - The id tags of each cell are corresponding to the array (void)
- CSS
  - output.css for sass
  - style.css is the main stylesheet
- Javascript
  - dead.js
    - Not connected to the index, full of voided code that worked but is outdated by better code. Used for checking working progress
  - main.js
    - Main javascript code. Has working win for vertical and horizontal. Working on diagonals and cleaning up code. Working progress.
- SASS
  - hasn't been implement. Ready to be used

## User stories:

* As a user, I want to know whose turn it is.
* As a user, I want a run down of the rules.
* As a user, I want to be able to rage quit (icebox).
* As a user, I want to know how long I took to make a turn. Timer. (icebox).
* As a user, I want to clearly see where my piece has landed.
* As a user, I want to clearly see where my piece is going to go.
* As a user, I want to know how many turns have taken place.
* As a user, I want to know how many times I've won? Scoreboard.(icebox)
* As a user, I want a clear reset button.

##MVP User stories:
1. As a user, I want to know whose turn it is.
2. As a user, I want to clearly see where my piece has landed.
3. As a user, I want to clearly see where my piece is going to go.

##Design Approach in Steps
- Set up folders, HTML table, css and sass stylesheets, javascript.
- Connected the all the js, css, sass to index.html
- Made a 2-dimensional array for the board
- Attached the array to the HTML table using id tags
- Began working on MVP user stories
- For showing whose turn it is, made a turn function in js and used the dom to access it's ID to change the color depending on the turn.
- For seeing where each piece has landed, created addPiece function that listens for a click and changes the color of the cell in chosen column in the array.
- For seeing where the piece is going to go, the HTML cells are connected to the values in the array, letting the pieces fall in the right place

##Unsolved Problems
- I changed the structure of my board array!!!!
- Is now a single array. Shortened a lot of code that is now in the dead.js file. In process of cleaning up.
- The win logic for checking diagonal wins does NOT currently work and is not fully written.
