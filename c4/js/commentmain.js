////////////////////////////////////
//    NOT CONNECTED TO INDEX.
//    SAME JS CODE WITH COMMENTS
////////////////////////////////////


console.log('activate framework!');
//shit ton of arrays
var col0 = [null, null, null, null, null, null];
var col1 = [null, null, null, null, null, null];
var col2 = [null, null, null, null, null, null];
var col3 = [null, null, null, null, null, null];
var col4 = [null, null, null, null, null, null];
var col5 = [null, null, null, null, null, null];
var col6 = [null, null, null, null, null, null];
//array that holds the shit ton arrays
var board = [col0, col1, col2, col3, col4, col5, col6];

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
      changeColor(column, row);
      console.log(row);
      console.log(column);
      break;
    }
  }
};

//changes color of cells according to turn
var changeColor = function(column, row) {
  //takes coordinates from array and makes into string.
  var id = row.toString() + "-" + column.toString();
  // console.log(id);
  console.log(document.getElementById(id));
  if (turn === 1) {
                                          //this is player one, DARK BLUE, 1
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

  })
}
//checks for vertical wins of player TWO (0) only
var getWinner = function(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i].join('').indexOf('0000') > -1) {
      console.log("zero wins");
    alert("Player 2 WINS!")
    clearTheBoard();
    }
  }
};

var clearTheBoard = function() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < ; j++) {
      board[i][j] = null;
    }
  }
  turn = 0; // reset to first player!
  return true;
};

//labels some of the coordinates of the cells in accordance to both array and cells
function labelMyShit() {
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        var id = i.toString() + "-" + j.toString();
        document.getElementById(id).innerHTML = id;
        document.getElementById(id).style.textAlign = 'center';
      }
    }
  }
  //   Dead Man's Land
  // labelMyShit();
  // document.getElementById('row2').childNodes[1].style.backgroundColor = 'red'
