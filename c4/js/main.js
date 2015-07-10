console.log('activate framework!');

var lightBlueWins = 0;
var darkBlueWins = 0;

var createBoard = function(){
  board = [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
  ];

  var squares = document.getElementsByClassName('square');

  // loop through each square and set background to white
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = 'white';
  }
};


createBoard();
  var diag1 = [board[0][2], board[1][3], board[2][4], board[3][5]];
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

// random_row = [1,1,-1,1,1,1,1];
// random_row2 = [-1,1,-1,-1,-1,1];

var check = function (array){

  if (array.length >= 4 ) {
    if (array[0]+array[1]+array[2]+array[3] === 4){
      window.alert('player 1 wins');
      darkBlueWins += 1;
      createBoard();
    } else if (array[0]+array[1]+array[2]+array[3] === -4){
      window.alert('player 2 wins');
      lightBlueWins += 1;
      createBoard();
    } else {
      array.shift();
      check(array);

    }
  }
};

check(diag1);

//checks for vertical wins
var getVerWinner = function(board) {
  for (var i = 0; i < board.length; i++) {
    if (board[i].join('').indexOf('0000') > -1) {
      console.log("zero wins");
      window.alert("Player 2 WINS!");
      lightBlueWins += 1;
      createBoard();
    } else if (board[i].join('').indexOf('1111') > -1) {
      console.log("one wins");
      window.alert("Player 1 WINS!");
      darkBlueWins += 1;
      createBoard();
    }
  }
};

// horizonal win combinations
var getHorWinner = function(board) {
  var cells = [];
  for (var i = 0; i < board.length; i++) {
    cells.push(board[i][5]);
  }
  console.log(cells);
  if (cells.join('').indexOf('0000') > -1) {
      console.log("zero wins");
      window.alert("Player 2 WINS!");
      createBoard();
    } else if (cells.join('').indexOf('1111') > -1) {
      console.log("one wins");
      window.alert("Player 1 WINS!");
      createBoard();
   }
};
// diag1 win combinations
var getd1Winner = function(board) {
  var cells = [];
  for (var i = 0; i < board.length; i++) {
    cells.push(board[i][5]);
  }
  console.log(cells);
  if (cells.join('').indexOf('0000') > -1) {
      console.log("zero wins");
      window.alert("Player 2 WINS!");
      createBoard();
    } else if (cells.join('').indexOf('1111') > -1) {
      console.log("one wins");
      window.alert("Player 1 WINS!");
      createBoard();
    }
};


//labels the coordinates of the cells in accordance to both array and cells
function labelMyBoard() { //taylor gang or die.
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      var id = i.toString() + "-" + j.toString();
      document.getElementById(id).innerHTML = id;
      document.getElementById(id).style.textAlign = 'center';
    }
  }
}
labelMyBoard();

function updateScore() {
  document.getElementById(elementName).innerHTML = "Dark Blue: " + darkBlueWins;
  document.getElementById(elementName).innerHTML = "Light Blue: " + lightBlueWins;

}


