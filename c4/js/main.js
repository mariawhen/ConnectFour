console.log('activate framework!');
//shit ton of arrays
var col0 = [null, null, null, null, null, null];
var col1 = [null, null, null, null, null, null];
var col2 = [null, null, null, null, null, null];
var col3 = [null, null, null, null, null, null];
var col4 = [null, null, null, null, null, null];
var col5 = [null, null, null, null, null, null];
var col6 = [null, null, null, null, null, null];
var hor1 = [col0[5], col1[5], col2[5], col3[5], col4[5], col5[5], col6[5]];
//array that holds the shit ton arrays
var board = [col0, col1, col2, col3, col4, col5, col6, hor1];
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
  var id = row.toString() + "-" + column.toString();
  console.log('id equals ' +id);
  if (turn === 1) {
    //this is player one, DARK BLUE, 1
    console.log(document.getElementById(id))
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
    getWinner(board);

  });
}

//checks for vertical wins of player TWO (0) only
var getWinner = function(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i].join('').indexOf('0000') > -1) {
      console.log("zero wins");
      alert("Player 2 WINS!");
      clearTheBoard();
    } else if (board[i].join('').indexOf('1111') > -1) {
      console.log("one wins");
      alert("Player 1 WINS!");
      clearTheBoard();
    }
  }
};


//trying to reset, working progress //clears the array and the board on screen.
var clearTheBoard = function() {
  //gathers the ids of every cell in the board.
  var arr = [];
  for (var i = 0; i < board[i].length; i++) {
    for (var j = 0; j < 7; j++) {
      arr.push(i.toString() + "-" + j.toString());
    }
  }
  // goes through all of the cells and sets background color to white.
  arr.map(function(x) {
    if (document.getElementById(x) !== null) {
      document.getElementById(x).style.backgroundColor = 'white';
    }
  });

  //clears the board array
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < 7; j++) {
      board[i][j] = null;
    }
  }
  turn = 0; // reset to first player!
  // console.log(board);
}

//labels the coordinates of the cells in accordance to both array and cells
function labelMyShit() { //taylor gang or die.
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < 7; j++) {
        var id = i.toString() + "-" + j.toString();
        document.getElementById(id).innerHTML = id;
        document.getElementById(id).style.textAlign = 'center';
      }
    }
  }
  //   Dead Man's Land
  // labelMyShit();
  // document.getElementById('row2').childNodes[1].style.backgroundColor = 'red';

// var maria = document.getElementsByClassName('top');

// }
