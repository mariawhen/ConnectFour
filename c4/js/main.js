console.log('activate framework!');
// column arrays that go vertically on the board
var col0 = [null, null, null, null, null, null];
var col1 = [null, null, null, null, null, null];
var col2 = [null, null, null, null, null, null];
var col3 = [null, null, null, null, null, null];
var col4 = [null, null, null, null, null, null];
var col5 = [null, null, null, null, null, null];
var col6 = [null, null, null, null, null, null];
var hor1 = [col0[5], col1[5], col2[5], col3[5], col4[5], col5[5], col6[5]];
//array that holds the column arrays
var board = [col0, col1, col2, col3, col4, col5, col6, hor1];
//arrays for horizontal combos
var h0 = [ col0[0], col1[0], col2[0], col3[0], col4[0], col5[0], col6[0] ];
var h1 = [ col0[1], col1[1], col2[1], col3[1], col4[1], col5[1], col6[1] ];
var h2 = [ col0[2], col1[2], col2[2], col3[2], col4[2], col5[2], col6[2] ];
var h3 = [ col0[3], col1[3], col2[3], col3[3], col4[3], col5[3], col6[3] ];
var h4 = [ col0[4], col1[4], col2[4], col3[4], col4[4], col5[4], col6[4] ];
var h5 = [ col0[5], col1[5], col2[5], col3[5], col4[5], col5[5], col6[5] ];
var h6 = [ col0[6], col1[6], col2[6], col3[6], col4[6], col5[6], col6[6] ];
var grid = [ col0, col1, col2, col3, col4, col5, col6, h0, h1, h2, h3, h4, h5, h6 ];


//If 0, red's turn. If 1, black's turn
var turn = 0;

//used in changeColor func to point event listener to the top row cells only
var squares = document.getElementsByClassName("top");

var addPiece = function(columnClicked) {
  for (var i = board[columnClicked].length - 1; i >= 0; i--) {
    if (board[columnClicked][i] === null) {
      board[columnClicked][i] = turn;
      var column = columnClicked;
      var row = i;
      // console.log(row);
      // console.log(column);
      changeColor(column, row);
      break;
    }
  }
};
//changes color of cells according to turn
var changeColor = function(column, row) {
  //takes coordinates from array and makes into string.
  var id = column.toString() + "-" + row.toString();
  console.log('id equals ' +id);
  if (turn === 1) {
    //this is player one, DARK BLUE, 1
    console.log(document.getElementById(id));
    document.getElementById(id).style.backgroundColor = '#355873';
  } else {
    //this is player two, LIGHTBlUE, 0
    document.getElementById(id).style.backgroundColor = '#7E95A6';
  }
};

//listens for clicks and assigns turns, calls get winner func after turn happens
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {
    var columnClicked = this.id;
    if (turn === 0) {
      turn = 1;
    } else {
      turn = 0;
    }
    addPiece(columnClicked);
    getVerWinner(board);
    getHorWinner(grid);
  });
}

//checks for vertical wins
var getVerWinner = function(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i].join('').indexOf('0000') > -1) {
      console.log("zero wins");
      alert("Player 2 WINS!");
      resetGame();
    } else if (board[i].join('').indexOf('1111') > -1) {
      console.log("one wins");
      alert("Player 1 WINS!");
      resetGame();
    }
  }
};

//horizonal win combinations
var getHorWinner = function(grid) {
  for (var i = 0; i < grid.length; i++) {
    if (grid[i].join('').indexOf('0000') > -1) {
      console.log("zero wins");
      alert("Player 2 WINS!");
      resetGame();
    } else if (grid[i].join('').indexOf('1111') > -1) {
      console.log("one wins");
      alert("Player 1 WINS!");
      resetGame();
    }
  }
};


// call resetGame in console and it will reset all the squares to white
// and reset every element in arrays col0 thru col6 to null
function resetGame(array) {

  // store all squares into an array
  var squares = document.getElementsByClassName('square');

  // loop through each square and set background to white
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = 'white';
  }

  // IIFE (a function that executes immediately)
  // pass all your columns as arguments and loop through each item and set it to null
  (function(){
    for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[0].length; j++) {
        arguments[i][j] = null;
      }
    }
  })(col0, col1, col2, col3, col4, col5, col6);

}

//labels the coordinates of the cells in accordance to both array and cells
function labelMyShit() { //taylor gang or die.
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        var id = i.toString() + "-" + j.toString();
        document.getElementById(id).innerHTML = id;
        document.getElementById(id).style.textAlign = 'center';
      }
    }
  }
  // labelMyShit();

////////////////   Dead Man's Land  ////////////////

// //trying to reset, working progress //clears the array and the board on screen.
// var clearTheBoard = function() {
//   //gathers the ids of every cell in the board.
//   var arr = [];
//   for (var i = 0; i < board[i].length; i++) {
//     for (var j = 0; j < 7; j++) {
//       arr.push(i.toString() + "-" + j.toString());
//     }
//   }
//   // goes through all of the cells and sets background color to white.
//   arr.map(function(x) {
//     if (document.getElementById(x) !== null) {
//       document.getElementById(x).style.backgroundColor = 'white';
//     }
//   });

//   //clears the board array
//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length ; j++) {
//       board[i][j] = null;
//     }
//   }
//   turn = 0; // reset to first player!
//   // console.log(board);
// }
