console.log('activate framework!');

// diag1 = [board[0][0], board[1][1], board[2][2], board[3][3], board[1][1]]


var createBoard = function(){
  board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ]

  var squares = document.getElementsByClassName('square');

  // loop through each square and set background to white
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = 'white';
  }
}


createBoard();

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
  console.log('id equals ' + id);
  if (turn === 1) {
    //this is player one, DARK BLUE, 1
    // console.log(document.getElementById(id));
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
    getHorWinner(board);
  });
}

///////////////////////////////////////////////////
///            Win Checks
///////////////////////////////////////////////////

random_row = [1,1,-1,1,1,1,1];
random_row2 = [-1,1,-1,-1,-1,1];

var check = function (array){
  if (array.length >= 4 ) {
    if (array[0]+array[1]+array[2]+array[3] === 4){
      window.alert('player 1 wins');
      createBoard();
    } else if (array[0]+array[1]+array[2]+array[3] === -4){
      window.alert('player 2 wins');
      createBoard();
    } else {
      array.shift();
      check(array);

    }
  }
}

check(random_row2);

//checks for vertical wins
var getVerWinner = function(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i].join('').indexOf('0000') > -1) {
      console.log("zero wins");
      window.alert("Player 2 WINS!");
      createBoard();
    } else if (board[i].join('').indexOf('1111') > -1) {
      console.log("one wins");
      window.alert("Player 1 WINS!");
      createBoard();
    }
  }
};

// horizonal win combinations
var getHorWinner = function(board) {
  var cells = [];
  for (var i = 0; i < board.length; i++) {
    cells.push(board[i][5]);
    // if (hgrid[i].join('').indexOf('0000') > -1) {
    //   // console.log("zero wins");
    //   // alert("Player 2 WINS!");
    //   // resetGame();
    // } else if (hgrid[i].join('').indexOf('1111') > -1) {
    //   console.log("one wins");
    //   alert("Player 1 WINS!");
    //   resetGame();
    // }

  }
  console.log(cells);
  if (cells.join('').indexOf('0000') > -1) {
      console.log("zero wins");
      window.alert("Player 2 WINS!");
      resetGame(board);
    } else if (cells.join('').indexOf('1111') > -1) {
      console.log("one wins");
      window.alert("Player 1 WINS!");
      resetGame(board);
    }
};


///////////////////////////
///     End Win Checks
///////////////////////////


// call resetGame in console and it will reset all the squares to white
// and reset every element in arrays col0 thru col6 to null
// function resetGame(array) {

//   // store all squares into an array


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
labelMyShit();

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

// document.getElementById(diag1).style.backgroundColor = 'red';

//   //clears the board array
//   for (var i = 0; i < board.length; i++) {
//     for (var j = 0; j < board[i].length ; j++) {
//       board[i][j] = null;
//     }
//   }
//   turn = 0; // reset to first player!
//   // console.log(board);
// }



  // // IIFE (a function that executes immediately)
  // // pass all your columns as arguments and loop through each item and set it to null
  // (function() {
  //   for (var i = 0; i < array.length; i++) {
  //     for (var j = 0; j < array[i].length; j++) {
  //       array[i][j] = null;
  //     }
  //   }
  // })();
